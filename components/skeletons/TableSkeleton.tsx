import { Skeleton } from "@/components/ui/Skeleton"

export default function TableSkeleton() {
  return (
    <div className="rounded-2xl bg-card elev-md overflow-x-auto">
      <div className="min-w-[900px] p-6 space-y-6">
        {/* table header */}
        <div className="grid grid-cols-6 gap-4 border-b border-border pb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-24" />
          ))}
        </div>

        {/* table rows */}
        <div className="space-y-4">
          {Array.from({ length: 8 }).map((_, row) => (
            <div key={row} className="grid grid-cols-6 gap-4 py-3 border-b border-border last:border-0 items-center">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-16 rounded-full" />
              <div className="flex justify-end gap-2">
                <Skeleton className="h-8 w-8 rounded-lg" />
                <Skeleton className="h-8 w-8 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
