import { Skeleton } from "@/components/ui/Skeleton"
import { TableSkeleton } from '@/components/skeletons'

export default function Loading() {
  return (
    <section className="w-full max-w-full min-w-0 overflow-x-hidden space-y-8">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>

        <Skeleton className="h-11 w-40 rounded-xl" />
      </div>

      {/* ================= FILTERS ================= */}
      <div className="rounded-2xl bg-card p-6 space-y-4 elev-sm">
        {/* search input */}
        <Skeleton className="h-11 w-full rounded-xl" />

        {/* tabs stack */}
        <div className="flex gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-9 w-28 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <TableSkeleton />

      {/* ================= PAGINATION ================= */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Skeleton className="h-5 w-56" />

        <div className="flex gap-3">
          <Skeleton className="h-10 w-28 rounded-xl" />
          <Skeleton className="h-10 w-28 rounded-xl" />
        </div>
      </div>

    </section>
  )
}
