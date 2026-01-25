import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';
import { DUMMY_NEWS } from '@/lib/mockData/mockNews';

const db = new Database('data.db');

function initDb(): void {
  db.prepare(
    'CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)'
  ).run();

  const row = db.prepare('SELECT COUNT(*) as count FROM news').get() as {
    count: number;
  };

  if (row.count === 0) {
    const insert = db.prepare(
      'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
    );

    for (const news of DUMMY_NEWS) {
      insert.run(news.slug, news.title, news.content, news.date, news.image);
    }
  }
}

const app = express();

app.use(cors());

app.get('/news', (_req, res) => {
  const news = db.prepare('SELECT * FROM news').all();
  res.json(news);
});

app.get('/news/:slug', (req, res) => {
  const { slug } = req.params;

  console.log('slug', slug);
  const news = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);
  res.json(news);
});

app.get('/available-news-years', (_req, res) => {
  const years = db.prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news").all();
  const yearsArray = (years as { year: string }[]).map((year) => +year.year);
  res.json(yearsArray);
});

app.get('/available-news-months/:year', (req, res) => {
  const { year } = req.params;
  const months = db.prepare("SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?").all(year);
  const monthsArray = (months as { month: string }[]).map((month) => +month.month);
  res.json(monthsArray);
});

app.get('/news-for-year/:year', (req, res) => {
  const { year } = req.params;
  const news = db.prepare("SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC").all(year);
  res.json(news);
});

app.get('/news-for-year-and-month/:year/:month', (req, res) => {
  const { year, month } = req.params;
  const monthPadded = month.padStart(2, '0');

  const news = db.prepare("SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC").all(year, monthPadded);
  res.json(news);
});

app.get('/latest-news', (_req, res) => {
  const news = db.prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3").all();
  res.json(news);
});

initDb();

app.listen(8080);
