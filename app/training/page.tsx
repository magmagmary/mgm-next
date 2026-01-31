import { getTrainings } from '@/lib/db/training';
import { Training } from '@/lib/types/shared-type';
import Image from 'next/image';

export default async function TrainingPage() {
  const trainingSessions = getTrainings();

  return (
    <main>
      <h1>Find your favorite activity</h1>
      <ul id="training-sessions">
        {trainingSessions.map((training: Training) => (
          <li key={training.id}>
            <Image src={`/trainings/${training.image}`} alt={training.title} />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
