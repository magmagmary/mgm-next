'use client';

import { AuthFormState, login } from "@/lib/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

const isValidField = (key:string, formState:AuthFormState) =>{
  return !Object.keys(formState.errors || {}).includes(key)
}

const Home = () =>   {
    const [formState , formAction] = useActionState<AuthFormState , FormData>(login, {
      errors: null
    });
  
    return (
      <div className="flex flex-col min-h-full items-center justify-center py-16 px-4 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.35_0.08_35/0.15),transparent)]">
        <form
          className="auth-form-card w-full max-w-[360px] rounded-2xl p-8"
          action={formAction}
        >
          <h1 className="text-xl font-semibold tracking-tight text-foreground mb-6">
            Login with your email
          </h1>
          
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                className="auth-input w-full rounded-xl border px-4 py-3 text-foreground text-[15px] focus:outline-none"
              />
              {!isValidField('email', formState) && (
                <p className="text-red-500 text-xs mt-1">
                  {formState.errors?.email}
                </p>
              )}
            </div>
  
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="auth-input w-full rounded-xl border px-4 py-3 text-foreground text-[15px] focus:outline-none"
              />
              {!isValidField('password', formState) && (
                <p className="text-red-500 text-xs mt-1">
                  {formState.errors?.password}
                </p>
              )}
            </div>
          </div>
  
          <button
            type="submit"
            className="auth-submit mt-6 w-full rounded-xl py-3 text-sm font-semibold text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[oklch(0.19_0_0)]"
          >
            Login
          </button>
  
          <p className="mt-5 pt-5 text-center text-sm text-muted-foreground border-t border-white/10">
            <Link
              href="/signup"
              className="text-primary font-medium hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            >
              Signup with your email
            </Link>
          </p>
        </form>
      </div>
    );
};

export default Home;
