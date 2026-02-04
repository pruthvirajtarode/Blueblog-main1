import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* ================= MESSAGE CARDS ================= */}
      <div className="space-y-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="relative rounded-2xl bg-card p-6 elev-sm overflow-hidden"
          >
            {/* unread bar skeleton */}
            <Skeleton className="absolute left-0 top-0 h-full w-1 rounded-none opacity-20" />

            {/* header row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-4 w-64" />
              </div>

              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-9 w-9 rounded-lg" />
              </div>
            </div>

            {/* message body */}
            <div className="mt-5 space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[95%]" />
              <Skeleton className="h-4 w-[85%]" />
            </div>

            {/* badge */}
            <div className="mt-6">
              <Skeleton className="h-7 w-24 rounded-full" />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
