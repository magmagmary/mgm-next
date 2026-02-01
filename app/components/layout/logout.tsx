import { destroyAuthSession } from "@/lib/utils/lucia";

const Logout = async () => {
  return (
    <form action={async () => {
      'use server';
      await destroyAuthSession();
    }}
    className="ms-auto"
    >
        <button className='text-amber-600' type="submit">Logout</button>
    </form>
  )
}

export default Logout;