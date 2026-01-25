'use client';

import { Separator } from "@radix-ui/react-separator";
import NewsList from "@/components/shared/news-list";
import { useEffect, useState } from "react";
import { News } from "@/lib/types/shared-types";

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setError('Failed to fetch news');
        setIsLoading(false);
        return;
      }

      const data = await response.json();

      setNews(data);
      setIsLoading(false);
    }

    fetchNews();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">News page</h1>

      <Separator className="w-full my-4 bg-gray-200 h-0.5" orientation="horizontal" />

      {isLoading ? <p>Loading...</p> : <NewsList news={news} />}
   
    </div>
  );
};

export default NewsPage;