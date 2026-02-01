import { z } from "zod";

export type User = {
  id: number;
  email: string;
  password: string;
}

export type Training = {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const AuthFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Email is required' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});