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

export function getLatestNews(): News[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, [] as number []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number): number[] {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      } 
    }
    return months;
  }, [] as number []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number): News[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: number, month: number): News[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}