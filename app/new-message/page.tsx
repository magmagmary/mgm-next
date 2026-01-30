import { addMessage } from '@/lib/db/messages';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';


export default function NewMessagePage() {
  async function createMessage(formData: FormData) {
    'use server';

    const message = formData.get('message');
    addMessage(message?.toString() ?? '');

    // revalidatePath('/messages');
    // revalidateTag('messages' , 'max');
    // redirect('/messages');

    // revalidatePath('/db-messages');
    revalidateTag('db-messages',{
      expire: 10
    } );
    redirect('/db-messages');
  }

  return (
    <div className="flex flex-col gap-4 p-10">
      <h2 className="text-2xl font-bold text-amber-600">New Message</h2>
      <form action={createMessage} className="flex flex-col gap-4">
        <p className="text-gray-500 flex flex-col gap-2">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows={5} className="w-full p-2 border border-gray-200 rounded-md" />
        </p>

        <button type="submit" className='bg-amber-600 text-white px-4 py-2 rounded-md w-fit'>Send</button>
      </form>
    </div>
  );
}
