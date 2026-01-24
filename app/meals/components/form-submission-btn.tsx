'use client';
import { Button } from "@/app/components/ui/button"
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const FormSubmissionBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" className="mt-4 w-40">
        {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Share Meal"}
    </Button>
  )
}

export default FormSubmissionBtn
