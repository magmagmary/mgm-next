import sql from 'better-sqlite3';
import { DB_NAME } from '../constants/db';
import type { Meal } from '@/lib/types/shared-types';

const PROMISE_DELAY = 2000;

const db = sql(DB_NAME);

export const getMeals = async (): Promise<Meal[]> => {
   await new Promise(resolve => setTimeout(resolve, PROMISE_DELAY)); // Simulate a delay for the API call

   return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export const getMealBySlug = async (slug: string): Promise<Meal | undefined> => {
   await new Promise(resolve => setTimeout(resolve, PROMISE_DELAY));
   return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal | undefined;
}

