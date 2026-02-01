'use server';

import { redirect } from "next/navigation";
import { createUser } from "../db/user";
import { SignupFormSchema } from "../types/shared-type";
import { hashUserPassword } from "../utils/hash";
import { createAuthSession } from "../utils/lucia";

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

  try {
  const userId = await createUser(email, hashUserPassword(password));

  await createAuthSession(userId.toString());
  redirect('/training');
  } catch (error: unknown) {

    if("code" in error && error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        errors: {
          email: 'Email already exists',
        },
      }
    }

    throw error;
  }

}

