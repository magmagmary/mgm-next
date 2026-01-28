import { LoaderCircle } from "lucide-react";

const FeedLoading = () => {
  return <div className="flex flex-col items-center justify-center h-screen" max-w-2xl mx-auto>
    <LoaderCircle className="animate-spin" />
  </div>;
}

export default FeedLoading;