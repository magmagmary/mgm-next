import { getAvailableNewsYears } from "@/lib/utils/news";
import Link from "next/link";

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
    const years = getAvailableNewsYears();

    return (
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex gap-4">    
              {years.map((year) => (
                  <Link key={year} href={`/archive/${year}`} className="text-lg font-bold text-gray-300">{year}</Link>
              ))}
            </div>
              {children}
          </div>
    )
}