import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>

        <Skeleton className="h-11 w-40 rounded-xl" />
      </div>

      {/* ================= SEARCH ================= */}
      <div className="max-w-md bg-card p-1 rounded-xl">
        <Skeleton className="h-11 w-full rounded-lg" />
      </div>

      {/* ================= LIST ================= */}
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-card px-6 py-5 elev-sm transition-all"
          >
            {/* left */}
            <div className="flex items-center gap-4 min-w-0">
              <Skeleton className="h-12 w-12 rounded-xl" />

              <div className="space-y-2">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-3 w-56" />
              </div>
            </div>

            {/* right */}
            <div className="flex items-center gap-6">
              <Skeleton className="h-4 w-20" />

              <div className="flex gap-2">
                <Skeleton className="h-9 w-9 rounded-lg" />
                <Skeleton className="h-9 w-9 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
