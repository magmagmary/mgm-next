import { verifyUser } from "@/lib/utils/lucia";
import { redirect } from "next/navigation";

const AuthLayout =async ({ children }: { children: React.ReactNode }) => {
  const { user } = await verifyUser();

  console.log(user);

  if (!user) {
    redirect('/');
  }

  return (
    <div className="flex flex-col min-h-full items-center justify-center py-16 px-4 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.35_0.08_35/0.15),transparent)]">
      {children}
    </div>
  )
}

export default AuthLayout;