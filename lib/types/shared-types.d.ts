export type Meal = {
    id?: number;
    title: string;
    slug: string;
    image: string;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
 }

 export type NewMeal = {
    id?: number;
    title: string;
    summary: string;
    instructions: string;
    image: File;
    name: string;
    email: string;
 }