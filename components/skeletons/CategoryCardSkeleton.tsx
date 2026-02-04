import { Skeleton } from "@/components/ui/Skeleton"

export default function CategoryCardSkeleton() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card elev-sm">
      {/* top accent */}
      <Skeleton className="absolute inset-x-0 top-0 h-[3px]" />

      {/* Media */}
      <Skeleton className="h-48 w-full rounded-none" />

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta pill */}
        <Skeleton className="mb-4 h-6 w-24 rounded-full" />

        {/* Title */}
        <Skeleton className="mb-2 h-5 w-2/3" />

        {/* Count */}
        <Skeleton className="mb-6 h-4 w-1/3" />

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>
      </div>
    </div>
  )
}
