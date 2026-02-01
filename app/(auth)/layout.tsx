import { verifyUser } from "@/lib/utils/lucia";
import { redirect } from "next/navigation";
import { Fragment } from "react/jsx-runtime";

const AuthLayout =async ({ children }: { children: React.ReactNode }) => {
  const { user } = await verifyUser();

  console.log(user);

  if (!user) {
    redirect('/signup');
  }

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default AuthLayout;