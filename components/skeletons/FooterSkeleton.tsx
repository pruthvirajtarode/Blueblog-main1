import { Skeleton } from "@/components/ui/Skeleton"

export default function FooterSkeleton() {
  return (
    <footer className="relative mt-32 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <Skeleton className="h-10 w-10 rounded-lg bg-white/10" />

              {/* Site name */}
              <Skeleton className="h-6 w-40 bg-white/10" />
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-72 bg-white/5" />
              <Skeleton className="h-4 w-60 bg-white/5" />
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-24 bg-white/10" />
            <Skeleton className="h-3 w-32 bg-white/5" />
            <Skeleton className="h-3 w-28 bg-white/5" />
            <Skeleton className="h-3 w-36 bg-white/5" />
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-10 w-10 rounded-full bg-white/10"
              />
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-20 border-t border-white/5 pt-10">
          <Skeleton className="mx-auto h-4 w-64 bg-white/5" />
        </div>
      </div>
    </footer>
  )
}
