import { useEffect, useState } from "react";
import { fetchBmiStatistics } from "../services/bmiService";
import StatCard from "../components/Statcard"; // S และ C ตัวใหญ่
import { BmiTrendLineChart, BmiCategoryPieChart } from "../components/BmiCharts";

export default function Statistics() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<any>(null);
  const user = JSON.parse(localStorage.getItem("userData") || "{}");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchBmiStatistics(user.us_id);
      
        setData(res);
      } catch (e: any) {                 
        setErr(e?.response?.data?.message || e?.message || "Fetch failed");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="p-6">กำลังโหลด...</div>;
  if (err) return <div className="p-6 text-red-600">เกิดข้อผิดพลาด: {String(err)}</div>;
  if (!data) return <div className="p-6">ไม่พบข้อมูล</div>;

  // ✅ หลังจากเช็ก !data ไปแล้ว ค่อยดึงค่า
  const { summary, trend, distribution } = data;

  return (
    <section>
      <header className="mb-1">
        <h2 className="text-2xl font-bold">สถิติและวิเคราะห์</h2>
        <p className="text-sm text-muted-foreground">
          วิเคราะห์แนวโน้มและสถิติ BMI ของคุณจากข้อมูล {summary?.records_count?.total ?? 0} รายการ
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 mb-4">
        <StatCard
          title="BMI ล่าสุด"
          value={summary?.latest_bmi?.value ?? "-"}
          subtitle={summary?.latest_bmi?.category ?? "-"}
          trend={summary?.trend_change?.direction ?? "none"}
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
          trend={summary?.trend_change?.direction ?? "none"}
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
          trend="none"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <BmiTrendLineChart data={trend?.points ?? []} />
        <BmiCategoryPieChart data={distribution?.buckets ?? []} />
      </div>
    </section>
  );
}
