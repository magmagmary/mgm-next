import { News } from "@/lib/types/shared-types";
import { DUMMY_NEWS } from "@/lib/mockData/mockNews";

export async function getAllNews(): Promise<News[]> {
  const response = await fetch(`http://localhost:8080/news`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const news = await response.json();
  return news;
}

export async function getNewsBySlug(slug: string): Promise<News> {
  const response = await fetch(`http://localhost:8080/news/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const news = await response.json();
  return news;
}

export async function getLatestNews(): Promise<News[]> {
  const response = await fetch(`http://localhost:8080/latest-news`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const news = await response.json();
  return news;
}

export async function getAvailableNewsYears(): Promise<number[]> {
  const response = await fetch(`http://localhost:8080/available-news-years`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const years = await response.json();
  return years;
}

export async function getAvailableNewsMonths(year: number): Promise<number[]> {
  const response = await fetch(`http://localhost:8080/available-news-months/${year}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const months = await response.json();
  return months.map((month: string) => parseInt(month));
}

export async function getNewsForYear(year: number): Promise<News[]> {
  const response = await fetch(`http://localhost:8080/news-for-year/${year}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const news = await response.json();
  return news;
}

export async function getNewsForYearAndMonth(year: number, month: number): Promise<News[]> {
  const response = await fetch(`http://localhost:8080/news-for-year-and-month/${year}/${month}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const news = await response.json();
  return news;
}