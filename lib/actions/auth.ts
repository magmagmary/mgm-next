'use server';

import { redirect } from "next/navigation";
import { createUser, getUserByEmail } from "../db/user";
import { AuthFormSchema } from "../types/shared-type";
import { hashUserPassword, verifyUserPassword } from "../utils/hash";
import { createAuthSession } from "../utils/lucia";

export type AuthFormState = {
  errors: Record<string, string> | null;
}

export async function signup(_prevState: AuthFormState, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { success, error } = AuthFormSchema.safeParse({ email, password });

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

export async function login(_prevState: AuthFormState, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user = await getUserByEmail(email);


  if (!user) {
    return {
      errors: {
        email: 'Email not found, please signup',
      },
    }
  }
 
  const isPasswordValid = verifyUserPassword(user.password, password);

  if (!isPasswordValid) {
    return {
      errors: {
        password: 'Invalid password',
      },
    }
  }

  console.log(">>>>>>" , user);

  await createAuthSession(user.id.toString());
  redirect('/training');

}

