import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { DB_NAME } from '../constants/db';
import type { Meal, NewMeal } from '@/lib/types/shared-types';
import fs from 'node:fs';

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

export const createMeal = async (meal: NewMeal): Promise<void> => {
   // await new Promise(resolve => setTimeout(resolve, PROMISE_DELAY));
   const slug = slugify(meal.title, { lower: true, strict: true });
   const sanitizedInstructions = xss(meal.instructions);
   const imageExtension = meal.image.name.split('.').pop();
   const imageFileName = `${slug}.${imageExtension}`;

   const imageStream = fs.createWriteStream(`public/images/${imageFileName}`);
   const buggeredImage =await meal.image.arrayBuffer();

   imageStream.write(Buffer.from(buggeredImage), (error)=>{
     if(error){
      throw new Error('Failed to save image');
     }
   });
   imageStream.end();

   const newMeal:Meal = {
      ...meal,
      id: undefined,
      slug,
      instructions: sanitizedInstructions,
      image: `/images/${imageFileName}`,
      creator: meal.name,
      creator_email: meal.email,
   }

   db.prepare(`
      INSERT INTO meals
      VALUES (@id,@title, @slug, @image, @summary, @instructions, @creator, @creator_email)
   `).run(newMeal);

}