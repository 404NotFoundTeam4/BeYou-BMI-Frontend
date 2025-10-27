import { useEffect, useState } from "react";
import BMIHistory from "../components/BMIHistory";
import type { BMIRecord } from "../components/BMIHistory";
import { fetchBmiHistory } from "../services/history";
import {
  formatLocalDateTime,
  getThaiCategory,
  getThaiGender,
} from "../lib/formatters";

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
  }, [userData.us_email]);

  const handleDelete = (bmi_id: number) => {
    setHistory((prev) => prev.filter((item) => item.bmi_id !== bmi_id));
  };

  const filteredHistory = history.filter((record) => {
    const keyword = search.toLowerCase();
    if (!keyword) return true; // ถ้าช่องค้นหาว่าง ก็แสดงทั้งหมด

    // (เพิ่ม) แปลงข้อมูลดิบ (เช่น 'NORMAL') ให้เป็นข้อมูลที่แสดงผลจริง (เช่น 'ปกติ') ก่อน
    // เพื่อให้สามารถค้นหาด้วย "คำไทย" ได้
    const categoryTH = getThaiCategory(record.bmi_category).toLowerCase();
    const genderTH = getThaiGender(record.bmi_gender || "").toLowerCase();
    const dateTH = formatLocalDateTime(record.bmi_created_at).toLowerCase();

    return (
      // (แก้) เพิ่ม field ที่ค้นหาให้ครบทุกอย่างที่แสดงบนจอ
      categoryTH.includes(keyword) ||
      record.bmi_weight.toString().includes(keyword) ||
      record.bmi_height.toString().includes(keyword) ||
      record.bmi_value.toFixed(1).includes(keyword) ||
      (record.bmi_age || "").toString().includes(keyword) || // (เพิ่ม) ค้นหาอายุ
      genderTH.includes(keyword) || // (เพิ่ม) ค้นหาเพศ (คำไทย)
      dateTH.includes(keyword) // (เพิ่ม) ค้นหาวันที่ (format ไทย)
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
        placeholder="ค้นหา เช่น ปกติ, 70, 175, 22.5, ชาย, 28 ต.ค. ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />

      <BMIHistory history={filteredHistory} onDelete={handleDelete} />
    </div>
  );
}

export default History;
