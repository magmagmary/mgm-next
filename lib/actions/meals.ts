'use server';

import { redirect } from "next/navigation";
import { createMeal } from "../service/meals";
import { NewMeal } from "../types/shared-types";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const MealSchema = z.object({
    name: z.string().min(1 , { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    title: z.string().min(1 , { message: "Title is required" }),
    summary: z.string().min(1 , { message: "Summary is required" }),
    instructions: z.string().min(1 , { message: "Instructions are required" }),
    image: z.instanceof(File , { message: "Image is required" }),
})

export type ShareMealState = {
    message: string | null;
}

export const shareMeal = async ( _previousState: { message: string | null }, formData: FormData) => {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const title = formData.get("title") as string;
        const summary = formData.get("summary") as string;
        const instructions = formData.get("instructions") as string;
        const image = formData.get("image") as File;
    
        const meal: NewMeal = { title, summary, instructions, image, name, email };
        
        const {data , error} = MealSchema.safeParse(meal);
        
        if(error) {
            // throw new Error(error.message); // This will put the entire app in the error state
            return {
                message: error.issues.map(issue => issue.message).join(', '),
            }
        }

        await createMeal(data);
    
        revalidatePath('/meals' , 'layout'); // This will revalidate the meals page and all its child pages

        redirect('/meals');

        return {
            message: 'Meal shared successfully',
        }
};