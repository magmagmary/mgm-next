'use server';

import { redirect } from "next/navigation";
import { createMeal } from "../service/meals";
import { NewMeal } from "../types/shared-types";
import { z } from "zod";

const MealSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    title: z.string().min(1),
    summary: z.string().min(1),
    instructions: z.string().min(1),
    image: z.instanceof(File),
})

export const shareMeal = async (formData: FormData) => {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const title = formData.get("title") as string;
        const summary = formData.get("summary") as string;
        const instructions = formData.get("instructions") as string;
        const image = formData.get("image") as File;
    
        const meal: NewMeal = { title, summary, instructions, image, name, email };
        
        
        const {data , error} = MealSchema.safeParse(meal);
        
        if(error) {
            console.error(error.message);
           throw new Error(error.message);
        }
        await createMeal(data);
    
        redirect('/meals');
};