import NewsList from '@/app/components/shared/news-list';
import { getNewsForYear } from '@/lib/utils/news';
import { redirect } from 'next/navigation';
import React from 'react'

const SpecificYearArchivePage = async ({ params }: { params: Promise<{ year: string }> }) => {
  const { year } = await params;

  if (!year) {
    return redirect('/archive');
  }

  const news = getNewsForYear(+year);

  if (!news) {
    return redirect('/archive');
  }

  return <NewsList news={news} />
}

export default SpecificYearArchivePage
