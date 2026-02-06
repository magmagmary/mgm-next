'use client';

import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { useFormStatus } from 'react-dom';

const NewPostSubmitButton = () => {
    const { pending } = useFormStatus();
  return (
    <Button type="submit">
      {pending ? <LoaderCircle className="animate-spin" /> : 'Create Post'}
    </Button>
  )
}

export default NewPostSubmitButton