'use server';

import { redirect } from "next/navigation";
import { createMeal } from "../service/meals";
import { NewMeal } from "../types/shared-types";

export const shareMeal = async (formData: FormData) => {

    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const title = formData.get("title") as string;
        const summary = formData.get("summary") as string;
        const instructions = formData.get("instructions") as string;
        const image = formData.get("image") as File;
    
        const meal: NewMeal = { title, summary, instructions, image, name, email };

        await createMeal(meal);
    }
    catch (error) {
        console.error(error);
    } 
    finally {
        redirect('/meals');
    }
};