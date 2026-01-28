'use client';
import { likePost } from '@/lib/actions/like-post';
import { cn } from '@/lib/utils/utils';
import { Heart } from 'lucide-react';
import { useTransition } from 'react';

const likeClassName = 'fill-red-500 text-red-500';

const HeartIcon = ({ postId , isLiked}: { postId: number, isLiked: boolean }) => {
    const[isPending, startTransition] = useTransition();

    const handleLike = async () => {
        startTransition(async () => {
            await likePost(postId);
        });
    }

  return (
    <Heart className={cn(isLiked ? likeClassName : 'hover:fill-red-500 cursor-pointer hover:text-red-500' , isPending && 'animate-pulse animate-infinite')} onClick={handleLike} />
  )
}

export default HeartIcon    