import { Skeleton } from "@/components/ui/Skeleton"

export default function TeamMemberSkeleton() {
  return (
    <div
      className="
        bg-card
        rounded-2xl
        p-6
        text-center
        elev-sm
      "
    >
      {/* Avatar */}
      <div className="mb-4 flex justify-center">
        <Skeleton className="h-24 w-24 rounded-full" />
      </div>

      {/* Name */}
      <Skeleton className="mx-auto mb-3 h-6 w-40" />

      {/* Role pill */}
      <Skeleton className="mx-auto mb-5 h-6 w-24 rounded-full" />

      {/* Bio lines */}
      <div className="mb-6 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[85%] mx-auto" />
        <Skeleton className="h-4 w-[65%] mx-auto" />
      </div>

      {/* Meta */}
      <Skeleton className="mx-auto h-4 w-36" />
    </div>
  )
}
