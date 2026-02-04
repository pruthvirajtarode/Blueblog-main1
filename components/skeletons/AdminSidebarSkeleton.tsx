import { Skeleton } from "@/components/ui/Skeleton"

export default function AdminSidebarSkeleton() {
  return (
    <aside className="flex h-full w-64 flex-col bg-white border-r border-border shadow-2xl">
      <div className="h-16 px-6 flex items-center gap-4">
        <Skeleton className="h-9 w-9 rounded-lg" />
        <Skeleton className="h-5 w-32" />
      </div>

      <div className="flex-1 px-4 py-6 space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-11 rounded-xl" />
        ))}
      </div>

      <div className="p-6 flex items-center gap-4 border-t border-border">
        <Skeleton className="h-11 w-11 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-36" />
        </div>
      </div>
    </aside>
  )
}
