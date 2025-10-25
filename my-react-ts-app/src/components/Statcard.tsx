// src/components/StatCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import { cn } from "../lib/utils"              // ถ้ามี util นี้จาก shadcn
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

type Trend = "up" | "down" | "none"

export default function StatCard({
  title,
  value,
  subtitle,
  trend = "none",
  icon,                 // ใส่ไอคอนมุมขวาบน (optional)
  className,
}: {
  title: string
  value: string | number
  subtitle?: string
  trend?: Trend
  icon?: React.ReactNode
  className?: string
}) {
  const TrendIcon =
    trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : null
  const trendColor =
    trend === "up" ? "text-emerald-600" : trend === "down" ? "text-cyan-500" : "text-muted-foreground"

  return (
    <Card className={cn("rounded-2xl border border-gray-200 shadow-sm", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-[13px] font-semibold text-muted-foreground">
              {title}
            </CardTitle>
          </div>
          <div className="flex items-center gap-1">
            {TrendIcon ? <TrendIcon className={cn("h-4 w-4", trendColor)} /> : null}
            {icon ?? null}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="text-3xl font-semibold tracking-tight">{value}</div>
        {subtitle ? (
          <CardDescription className="mt-1 text-[12px]">{subtitle}</CardDescription>
        ) : null}
      </CardContent>
    </Card>
  )
}
