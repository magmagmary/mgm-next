import { getTrainings } from '@/lib/db/training';
import { Training } from '@/lib/types/shared-type';
import Image from 'next/image';

export default async function TrainingPage() {
  const trainingSessions = getTrainings();

  console.log(trainingSessions);

  return (
    <main className="flex flex-col items-center justify-center p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Find your favorite activity</h1>
      <ul id="training-sessions" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainingSessions.map((training: Training) => (
          <li key={training.id} className="flex flex-col items-center justify-center border border-gray-900 rounded-md overflow-hidden">
            <div className="relative w-full h-40">
            <Image src={`/trainings${training.image}`} fill alt={training.title} className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold">{training.title}</h2>
              <p className="text-sm text-gray-500">{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
