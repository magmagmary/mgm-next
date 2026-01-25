import { Separator } from "@/components/ui/separator";

const ArchiveLayout = ({ archive , latest }: { archive: React.ReactNode, latest: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 py-8 h-full max-w-5xl mx-auto">
     <section id="archive">
        <h2 className="text-2xl font-bold">Archive</h2>
      {archive}
     </section>

     <Separator className="w-full my-4 bg-gray-200 h-0.5" orientation="horizontal" />
     
     <section id="latest">
        <h2 className="text-2xl font-bold">Latest</h2>
      {latest}
     </section>
    </div>
  )
}

export default ArchiveLayout