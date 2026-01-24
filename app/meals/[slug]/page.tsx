import { redirect, notFound } from 'next/navigation';
import Image from 'next/image';
import { getMealBySlug } from '@/lib/service/meals';


const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) {
    return { title: 'Meal not found' };
  }

  return { title: `${slug} meal details` };
}

const MealsDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) {
    return redirect('/meals');
  }

  const meal = await getMealBySlug(slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className="flex py-8 px-4 gap-12 mx-auto max-w-7xl mt-25">
        <div className="relative w-120 h-80">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="pt-2 px-4 max-w-160 text-foreground">
          <h1 className="m-0 text-[3.5rem] uppercase">
            {meal.title}
          </h1>
          <p className="text-2xl text-secondary-foreground italic">
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-md bg-primary text-secondary-foreground rounded-lg p-8 max-w-240 my-8 mx-auto"
          dangerouslySetInnerHTML={{ __html: meal.instructions.replace(/\n/g, '<br />') }}
        />
      </main>
    </>
  );
};

export { generateMetadata }

export default MealsDetailPage;