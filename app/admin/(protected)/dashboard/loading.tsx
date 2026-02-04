import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
  return (
    <div className="space-y-10">

      {/* ===== HERO / WELCOME ===== */}
      <section className="relative overflow-hidden rounded-2xl bg-muted p-8 h-[160px] elev-md">
        <div className="relative z-10 space-y-3">
          <Skeleton className="h-8 w-64 bg-white/20" />
          <Skeleton className="h-4 w-96 bg-white/20" />
        </div>
        {/* decorative blobs (to match real page) */}
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-0 left-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
      </section>

      {/* ===== STATS ===== */}
      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl bg-card p-6 elev-sm flex items-start justify-between"
            >
              <div className="space-y-3">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-8 w-12" />
              </div>
              <Skeleton className="h-12 w-12 rounded-xl" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== RECENT ACTIVITY ===== */}
      <section className="grid gap-8 lg:grid-cols-2">

        {/* Recent Posts */}
        <div className="rounded-2xl bg-card p-6 space-y-6 elev-sm">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>

          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-white p-4 flex justify-between items-start"
              >
                <div className="space-y-3 w-full">
                  <Skeleton className="h-5 w-[70%]" />
                  <div className="flex gap-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="rounded-2xl bg-card p-6 space-y-6 elev-sm">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>

          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-border p-4 space-y-3"
              >
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-24 mt-2" />
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}
