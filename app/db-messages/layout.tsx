import { getMessages } from "@/lib/db/messages";

const MessagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const messages = await getMessages();
  const totalMessages = messages.length;

  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-2xl font-bold text-amber-600">Important Messages</h1>
      <p className="text-gray-500">{totalMessages} messages found</p>
      <hr />
      {children}
    </div>
  );
}

export default MessagesLayout;
