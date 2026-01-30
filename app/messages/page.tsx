import { unstable_noStore as noStore } from 'next/cache';

import Messages from '@/components/shared/messages';
import { getMessages } from '@/lib/actions/messages';

// export const revalidate = 5; // revalidate all the page requests every 5 seconds
// export const   = 'auto'; // force the page to be dynamic

const MessagesPage = async () => {
  // noStore(); // disable caching for this page
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}

export default MessagesPage;