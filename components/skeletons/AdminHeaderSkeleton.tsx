import { Skeleton } from "@/components/ui/Skeleton"

export default function AdminHeaderSkeleton() {
  return (
    <header className="hidden lg:flex h-16 items-center justify-between bg-card px-8 elev-sm border-b border-border">
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-6 w-40" />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-16 ml-auto" />
        </div>
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </header>
  )
}
