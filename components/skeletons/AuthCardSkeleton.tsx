import { Skeleton } from "@/components/ui/Skeleton"

export default function AuthCardSkeleton() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-card p-10 space-y-8 elev-lg">
      <div className="text-center space-y-3">
        <Skeleton className="mx-auto h-8 w-48" />
        <Skeleton className="mx-auto h-4 w-64" />
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
        <Skeleton className="h-12 w-full rounded-xl mt-8" />
      </div>

      <Skeleton className="mx-auto h-4 w-40" />
    </div>
  )
}
