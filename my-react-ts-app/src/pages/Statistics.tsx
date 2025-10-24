import StatCard from "../components/StatCard"
import { BmiTrendLineChart, BmiCategoryPieChart } from "../components/BmiCharts";
import { User2 } from "lucide-react"
import "../styles/css/App.css";


const trendData = [
  { label: "ครั้งที่ 1", bmi: 26 },
  { label: "ครั้งที่ 2", bmi: 24.5 },
  { label: "ครั้งที่ 3", bmi: 23.2 },
  { label: "ครั้งที่ 4", bmi: 22.1 },
  { label: "ครั้งที่ 5", bmi: 21.8 },
  { label: "ครั้งที่ 6", bmi: 20.6 },
  { label: "ครั้งที่ 7", bmi: 19.9 },
  { label: "ครั้งที่ 8", bmi: 18.7 },
  { label: "ครั้งที่ 9", bmi: 17.2 },
  { label: "ครั้งที่ 10", bmi: 15.8 },
];

const categoryData = [
  { name: "น้ำหนักเกิน", value: 50, color: "#f5360bff" }, // amber
  { name: "ปกติ", value: 50, color: "#10b981" },
  { name: "น้ำหนักต่ำกว่าเกณฑ์", value: 50, color: "#ffb05cff" },               // emerald
  // เพิ่มหมวดอื่น ๆ ได้ เช่น ผอมเกินไป/อ้วน ฯลฯ
];


export default function Statistics() {
  return (
    
    <section className="">
        <div>
            <p className="text-3xl font-bold">สถิติและวิเคราะห์</p>
            <p className="text-base ">วิเคราะห์แนวโน้มและสถิติ BMI</p>
        </div>

        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 mb-6">
            <StatCard title="BMI ล่าสุด" value="15.8" subtitle="สภาพผอมเกินไป" trend="up" />
            <StatCard title="แนวโน้ม" value="-7.9" subtitle="ลดลงจากครั้งก่อน" trend="down" />
            <StatCard title="BMI เฉลี่ย" value="19.8" subtitle="จาก 2 ครั้ง" trend="up" />
            <StatCard title="จำนวนบันทึก" value="2" subtitle="" icon={<User2 className="h-4 w-4 text-muted-foreground" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <BmiTrendLineChart data={trendData} />
            <BmiCategoryPieChart data={categoryData} />
        </div>
    </section>
  )
}