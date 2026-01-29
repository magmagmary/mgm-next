import { getMessages } from "@/lib/actions/messages";

const MessagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const messages = await getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}

export default MessagesLayout;
