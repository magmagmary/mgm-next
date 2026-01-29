import { Message } from "@/lib/types/shared-types";

export default function Messages({ messages }: { messages: Message[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {messages.map((message) => (
        <li key={message.id} className="text-gray-500 border border-gray-200 rounded-md p-4">{message.text}</li>
      ))}
    </ul>
  );
}
