import { Skeleton } from "@/components/ui/Skeleton"

export default function HeaderSkeleton() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border shadow-header">
      <div className="container h-20 flex items-center justify-between">
        <Skeleton className="h-10 w-40" />
        <div className="hidden md:flex items-center gap-8">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-11 w-36 rounded-full" />
        </div>
        <Skeleton className="h-10 w-10 rounded-full md:hidden" />
      </div>
    </header>
  )
}
