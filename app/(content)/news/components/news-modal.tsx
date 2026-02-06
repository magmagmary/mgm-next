'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { News } from '../types';
import Image from 'next/image';

const NewsModal = ({news}: {news: News}) => {
  const router = useRouter();
  
  return (
    <Dialog open onOpenChange={(open) => { if (!open) router.back(); }}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{news.title}</DialogTitle>
        <DialogDescription>
        <Image src={`/images/${news.image}`} alt={news.title} width={500} height={500} className="object-cover my-5" />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default NewsModal
