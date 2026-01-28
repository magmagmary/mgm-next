import { Separator } from "@radix-ui/react-separator";
import Posts from "./components/shared/posts";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold">Home</h1>
      <Separator className="my-4 w-full h-[1px] bg-foreground" />
      <Posts posts={[]} />
    </div>
  );
}
