import React, { useState } from "react";
import BMIHistory from "../components/BMIHistory";
import type { BMIRecord } from "../components/BMIHistory";
import { Trash } from "lucide-react";

function History() {
  const [history, setHistory] = useState<BMIRecord[]>([
    {
      id: 1,
      date: "2025-10-11T20:23:00",
      weight: 50,
      height: 178,
      bmi: 15.8,
      status: "น้ำหนักต่ำกว่ามาตรฐาน",
      gender: "male",
      age: 20,
    },
    {
      id: 2,
      date: "2025-10-11T20:19:00",
      weight: 66,
      height: 167,
      bmi: 23.7,
      status: "น้ำหนักปกติ",
      gender: "female",
      age: 20,
    },
  ]);

  const [search, setSearch] = useState("");

  // ✅ ลบเฉพาะรายการ
  const handleDelete = (id: number) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ ล้างทั้งหมด
  const handleClearAll = () => {
    if (confirm("ต้องการลบประวัติทั้งหมดหรือไม่?")) {
      setHistory([]);
    }
  };

  // ✅ ฟิลเตอร์ผลการค้นหา
  const filteredHistory = history.filter((record) => {
    const keyword = search.toLowerCase();
    return (
      record.status.toLowerCase().includes(keyword) ||
      record.weight.toString().includes(keyword) ||
      record.height.toString().includes(keyword) ||
      record.bmi.toFixed(1).includes(keyword)
    );
  });

  return (
    <div className="mx-auto p-[24px]">
      {/* ส่วนหัว */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800">
            ประวัติการคำนวณทั้งหมด
        </h1>

        {history.length > 0 && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-lg transition"
          >
            <Trash size={14} /> ล้างทั้งหมด
          </button>
        )}
      </div>

      {/* ช่องค้นหา */}
      <input
        type="text"
        placeholder="ค้นหาคำ เช่น น้ำหนัก, ส่วนสูง, สถานะ, หรือค่า BMI..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />

      {/* เรียกใช้ BMIHistory */}
      <BMIHistory history={filteredHistory} onDelete={handleDelete} />
    </div>
  );
}

export default History;
