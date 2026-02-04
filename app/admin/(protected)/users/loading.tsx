import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>

        <Skeleton className="h-11 w-40 rounded-xl" />
      </div>

      {/* Search */}
      <div className="bg-card rounded-xl p-4 elev-sm">
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>

      {/* Table-like list */}
      <div className="bg-card rounded-2xl elev-sm overflow-hidden">
        <div className="divide-y divide-border">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-5"
            >
              {/* User */}
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-40" />
                </div>
              </div>

              {/* Role */}
              <Skeleton className="h-6 w-20 rounded-full" />

              {/* Posts */}
              <Skeleton className="h-4 w-10" />

              {/* Date */}
              <Skeleton className="h-4 w-20" />

              {/* Actions */}
              <div className="flex gap-2">
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
