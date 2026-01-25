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

initDb();

app.listen(8080);
