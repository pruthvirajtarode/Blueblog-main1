import { Skeleton } from "@/components/ui/Skeleton"

export default function PostCardSkeleton() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card elev-sm">
      {/* top accent */}
      <Skeleton className="absolute inset-x-0 top-0 h-[3px]" />

      {/* Image */}
      <Skeleton className="h-48 w-full" />

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Categories */}
        <div className="mb-4 flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>

        {/* Title */}
        <Skeleton className="mb-2 h-5 w-3/4" />
        <Skeleton className="mb-4 h-5 w-1/2" />

        {/* Excerpt */}
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-6 h-4 w-2/3" />

        {/* Meta */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-4">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>

          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  )
}
