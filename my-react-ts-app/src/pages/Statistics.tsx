import { useEffect, useState } from "react";
import { fetchBmiStatistics } from "../services/bmiService";   
import StatCard from "../components/Statcard";                  
import { BmiTrendLineChart, BmiCategoryPieChart } from "../components/BmiCharts";


export default function Statistics() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<any>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetchBmiStatistics();
        if (!alive) return;
        setData(res);
      } catch (e: any) {
        setErr(e?.response?.data?.message || e?.message || "Fetch failed");
      } finally {
        setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  if (loading) return <div className="p-6">กำลังโหลด...</div>;
  if (err) return <div className="p-6 text-red-600">เกิดข้อผิดพลาด: {err}</div>;
  if (!data) return <div className="p-6">ไม่พบข้อมูล</div>;

  const { summary, trend, distribution } = data;

  const catTH = (cat: string) => {
    if (cat === "underweight") return "สภาพผอมเกินไป";
    if (cat === "normal") return "ปกติ";
    if (cat === "overweight") return "น้ำหนักเกิน";
    if (cat === "obese") return "โรคอ้วน";
    return cat || "-";
  };

  const donut = (distribution?.buckets || []).map((b: any) => ({
    name: b.name,
    value: b.value,
    color:
      b.name === "ปกติ"      ? "#10b981" :
      b.name === "ต่ำกว่าเกณฑ์"  ? "#f59e0b" :
      b.name === "สูงกว่าเกณฑ์"       ? "#ef4444" :
      "#94a3b8",
  }));

  return (
    <section >
      <div>
        <header className="mb-1">
        <h2 className="text-2xl font-bold">สถิติและวิเคราะห์</h2>
        <p className="text-sm text-muted-foreground">
          วิเคราะห์แนวโน้มและสถิติ BMI ของคุณจากข้อมูล {summary?.records_count?.total ?? 0} รายการ
        </p>
      </header>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 mb-4">
        <StatCard
          title="BMI ล่าสุด"
          value={summary?.latest_bmi?.value ?? "-"}
          subtitle={catTH(summary?.latest_bmi?.category)}
          trend={summary?.trend_change?.direction || "none"}
        />
        <StatCard
          title="แนวโน้ม"
          value={summary?.trend_change?.delta ?? "-"}
          subtitle={
            summary?.trend_change?.direction === "down"
              ? "ลดลงจากครั้งก่อน"
              : summary?.trend_change?.direction === "up"
              ? "เพิ่มขึ้นจากครั้งก่อน"
              : "-"
          }
          trend={summary?.trend_change?.direction || "none"}
        />
        <StatCard
          title="BMI เฉลี่ย"
          value={summary?.avg_bmi?.value ?? "-"}
          subtitle={`จาก ${summary?.avg_bmi?.from_records ?? 0} ครั้ง`}
          trend="none"
        />
        <StatCard
          title="จำนวนบันทึก"
          value={summary?.records_count?.total ?? 0}
          /* ไม่ใส่ subtitle/icon เพื่อให้โชว์ตัวเลขล้วน */
          trend="none"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <BmiTrendLineChart data={(trend && trend.points) || []} />
        <BmiCategoryPieChart data={donut} />
      </div>
    </section>
  );
}