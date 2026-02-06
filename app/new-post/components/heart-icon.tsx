'use client';
import { likePost } from '@/lib/actions/like-post';
import { cn } from '@/lib/utils/utils';
import { Heart } from 'lucide-react';
import { useOptimistic, useTransition } from 'react';

const likeClassName = 'fill-red-500 text-red-500';

const HeartIcon = ({ postId , isLiked}: { postId: number, isLiked: boolean }) => {
    const [optimisticLikesStatus, setOptimisticLikesStatus] = useOptimistic(isLiked, (prevIsLiked) => !prevIsLiked);

    const[isPending, startTransition] = useTransition(); // with optimistic updates, we don't need to use useTransition but kept this for future reference

    const handleLike = async () => {
        startTransition(async () => {
            setOptimisticLikesStatus(optimisticLikesStatus); // Pass any value, reducer will toggle it
            await likePost(postId);
        });
    }

  return (
    <Heart className={cn(optimisticLikesStatus ? likeClassName : 'hover:fill-red-500 cursor-pointer hover:text-red-500' , 
        isPending && 'animate-pulse animate-infinite')} onClick={handleLike} />
  )
}

export default HeartIcon    