import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="flex flex-col min-h-full items-center justify-center py-16 px-4 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.35_0.08_35/0.15),transparent)]">
      <form
        id="auth-form"
        className="auth-form-card w-full max-w-[360px] rounded-2xl p-8"
      >
        <h1 className="text-xl font-semibold tracking-tight text-foreground mb-1">
          Create account
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          Join with your email
        </p>

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
              required
              placeholder="you@example.com"
              className="auth-input w-full rounded-xl border px-4 py-3 text-foreground text-[15px] focus:outline-none"
            />
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
              required
              placeholder="••••••••"
              className="auth-input w-full rounded-xl border px-4 py-3 text-foreground text-[15px] focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="auth-submit mt-6 w-full rounded-xl py-3 text-sm font-semibold text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[oklch(0.19_0_0)]"
        >
          Create Account
        </button>

        <p className="mt-5 pt-5 text-center text-sm text-muted-foreground border-t border-white/10">
          <Link
            href="/"
            className="text-primary font-medium hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-transparent rounded"
          >
            Login with existing account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
