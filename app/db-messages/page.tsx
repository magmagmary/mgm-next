import Messages from '@/components/shared/messages';
import { getMessages } from '@/lib/db/messages';

const MessagesPage =async  () => {
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}

export default MessagesPage;