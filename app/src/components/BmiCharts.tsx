import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./ui/card"
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, Legend
} from "recharts";


export function BmiTrendLineChart({ data }: { data: { label: string; bmi: number }[] }) {
  return (
    <Card className="flex flex-col rounded-2xl border shadow-sm
                     h-[600px]"> 
      <CardHeader className="pb-2">
        <CardTitle className="text-[15px]">แนวโน้ม BMI ล่าสุด</CardTitle>
        <CardDescription className="text-[12px]">แสดงข้อมูล 10 ครั้งล่าสุด</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 p-0 min-h-0"> 
        <div className="h-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 0, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="bmi" stroke="#14b8a6" strokeWidth={3} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function BmiCategoryPieChart({
  data,
}: { data: { name: string; value: number; color: string }[] }) {
  return (
    <Card className="rounded-2xl border border-gray-200 shadow-sm h-[600px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-[15px]">สัดส่วนตามหมวดหมู่</CardTitle>
        <CardDescription className="text-[12px]">การกระจายของระดับ BMI</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 p-0">
        <div className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Pie 
                data={data} 
                dataKey="value" 
                nameKey="label" 
                innerRadius={70} 
                outerRadius={200} 
                paddingAngle={2}>
                {data.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Legend verticalAlign="bottom" height={24} wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
