import React, { useEffect, useState } from "react";
import BMIHistory from "../components/BMIHistory";
import type { BMIRecord } from "../components/BMIHistory";
import { Trash } from "lucide-react";
import { fetchBmiHistory } from "../services/history";

function History() {
  const [history, setHistory] = useState<BMIRecord[]>([]);
  const [search, setSearch] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchBmiHistory(userData.us_email);
        setHistory(res); // ✅ ไม่ต้อง map แล้ว เพราะ type ตรงกับ backend
    
      } catch (error) {
        console.error("โหลดข้อมูลไม่สำเร็จ:", error);
      }
    })();
  }, []);

  const handleDelete = (bmi_id: number) => {
    setHistory((prev) => prev.filter((item) => item.bmi_id !== bmi_id));
  };

  const filteredHistory = history.filter((record) => {
    const keyword = search.toLowerCase();
    return (
      record.bmi_category.toLowerCase().includes(keyword) ||
      record.bmi_weight.toString().includes(keyword) ||
      record.bmi_height.toString().includes(keyword) ||
      record.bmi_value.toFixed(1).includes(keyword)
    );
  });

  return (
    <div className="mx-auto p-[24px]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          ประวัติการคำนวณทั้งหมด
        </h1>

       
      </div>

      <input
        type="text"
        placeholder="ค้นหา เช่น น้ำหนัก, ส่วนสูง, สถานะ หรือค่า BMI..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />

      <BMIHistory history={filteredHistory} onDelete={handleDelete} />
    </div>
  );
}

export default History;

