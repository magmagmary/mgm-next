import NewsList from '@/app/components/shared/news-list';
import { News } from '@/lib/types/shared-types';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/utils/news';
import Link from 'next/link';

const SpecificYearArchivePage = async ({ params }: { params: Promise<{ filter?: string[] }> }) => {
  const { filter } = await params;
  const [year, month] = filter || [];
  const years = await getAvailableNewsYears();

  let news: News[] = [];
  const months: number[] = await getAvailableNewsMonths(+year!);
  
  if(year && !month) {
    if(!years.includes(+year)) {
      throw new Error('Invalid year');
    }
    news = await getNewsForYear(+year);
  }

  if(year && month) {
    if(!months.includes(+month) || !years.includes(+year)) {
      throw new Error('Invalid year or month');
    }

    news = await getNewsForYearAndMonth(+year, +month);
    console.log('news', news);
  }

  return <div className="flex flex-col gap-4">
  <div className="flex gap-4 mt-5">
    <span className='text-md  text-gray-300'>Years:</span>
    {years.map((year) => (
      <Link key={year} href={`/archive/${year}`} className="text-lg font-bold text-gray-300">{year}</Link>
    ))}
  </div>
  {months.length > 0 && (
    <div className="flex gap-4">
      <span className='text-md text-gray-300'>Months:</span>
      {months.map((month) => (
        <Link key={month} href={`/archive/${year}/${month}`} className="text-lg font-bold text-gray-300">{month}</Link>
      ))}
    </div>
  )}

  {news.length > 0 ?  <NewsList news={news} /> 
  : year  ? <p className='text-gray-500'>No news found for this year</p> 
  : <p className='text-gray-500'>You need to select a year to view the archive</p>
  }
   
  </div>
}

export default SpecificYearArchivePage
