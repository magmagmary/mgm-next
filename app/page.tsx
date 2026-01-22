import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const images = [
  {
    src: "/images/burger.jpg",
    alt: "burger"
  },
  {
    src: "/images/pizza.jpg",
    alt: "pizza"
  },
  {
    src: "/images/curry.jpg",
    alt: "curry"
  }
]

export default function Home() {
  console.log("Home Page");

  return (
    <div className="flex flex-col h-full items-center justify-center py-16">
    <header className="w-full max-w-2xl flex items-center gap-18 mt-16">
    <Carousel >
          <CarouselContent>
             {images.map((image) => (
              <CarouselItem key={image.alt}>
                <Image src={image.src} alt={image.alt} width={500} height={500} className="rounded-sm" />
              </CarouselItem>
             ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-amber-600">NextLevel Food for NextLevel Foodies</h1>
            <p className="text-lg font-medium text-amber-500">Taste & share food from all over the world.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="secondary" className="grow w-40"> <Link href="/community">Join the community</Link> </Button>
            <Button variant="secondary" className="grow w-40"> <Link href="/meals">Explore meals</Link> </Button>
          </div>
        </div>
    </header>
      <main className="flex items-center justify-center h-full">
       
      </main>
      </div>
  );
}
