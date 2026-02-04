import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* ================= GENERAL SETTINGS ================= */}
        <div className="bg-card rounded-2xl p-6 space-y-6 elev-sm">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>

          {/* logo */}
          <div className="space-y-3 pt-4">
            <Skeleton className="h-4 w-24" />
            <div className="flex gap-6">
              <Skeleton className="h-40 w-40 rounded-2xl" />
              <div className="space-y-3">
                <Skeleton className="h-10 w-32 rounded-lg" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
          </div>

          {/* inputs */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>
          ))}
        </div>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="bg-card rounded-2xl p-6 space-y-6 elev-sm">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>

          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>
          ))}
        </div>

        {/* ================= FOOTER ================= */}
        <div className="bg-card rounded-2xl p-6 space-y-6 elev-sm lg:col-span-2">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>

          <div className="space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-32 w-full rounded-xl" />
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="flex justify-end">
        <Skeleton className="h-11 w-40 rounded-xl" />
      </div>
    </div>
  )
}
