import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <h1 className="text-4xl font-bold ">Not Found</h1>
      <p className="text-2xl font-bold ">The meal you are looking for does not exist.</p>

      <Link href="/meals" className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Go back to the meals page</Link>
    </div>
  );
};

export default NotFound;
