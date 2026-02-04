import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">

      {/* ================= MAIN ================= */}
      <div className="lg:col-span-2 space-y-6">

        {/* title */}
        <div className="space-y-3">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-11 w-full rounded-xl" />
        </div>

        {/* slug */}
        <div className="space-y-3">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-11 w-full rounded-xl" />
        </div>

        {/* excerpt */}
        <div className="space-y-3">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-28 w-full rounded-xl" />
        </div>

        {/* editor */}
        <div className="space-y-3">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-[400px] w-full rounded-2xl" />
        </div>

        {/* back button */}
        <Skeleton className="h-10 w-40 rounded-xl" />
      </div>

      {/* ================= SIDEBAR ================= */}
      <div className="space-y-8">

        {/* image */}
        <div className="rounded-2xl bg-card p-6 elev-sm space-y-4">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-10 w-40 rounded-lg" />
          <Skeleton className="h-48 w-full rounded-xl" />
          <Skeleton className="h-11 w-full rounded-xl" />
          <Skeleton className="h-11 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
        </div>

        {/* categories */}
        <div className="rounded-2xl bg-card p-6 elev-sm space-y-4">
          <Skeleton className="h-5 w-24" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-3 items-center">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-5 w-32" />
              </div>
            ))}
          </div>
        </div>

        {/* seo */}
        <div className="rounded-2xl bg-card p-6 elev-sm space-y-4">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-11 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
        </div>

        {/* actions */}
        <div className="flex gap-3">
          <Skeleton className="h-11 flex-1 rounded-xl" />
          <Skeleton className="h-11 flex-1 rounded-xl" />
        </div>

      </div>
    </div>
  )
}
