'use server';

import { SignupFormSchema } from "../types/shared-type";

export type SignupFormState = {
  errors: Record<string, string> | null;
}

export async function signup(_prevState: SignupFormState, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { success, error } = SignupFormSchema.safeParse({ email, password });

  if (!success) {
    return {
      errors: error.issues.reduce((acc, issue) => {
        acc[issue.path[0] as string] = issue.message;
        return acc;
      }, {} as Record<string, string>),
    }
  }

  console.log(email, password);
  return {
    errors: null,
  }
}