import React from "react";
import { Trash2 } from "lucide-react";

export type BMIRecord = {
  bmi_id: number;
  bmi_created_at: string;
  bmi_weight: number;
  bmi_height: number;
  bmi_value: number;
  bmi_category: string;
  bmi_gender?: string;
  bmi_age?: number;
};

type BMIHistoryProps = {
  history: BMIRecord[];
  onDelete?: (bmi_id: number) => void;
};

function BMIHistory({ history, onDelete }: BMIHistoryProps) {
  if (history.length === 0) {
    return <p className="text-center text-gray-500">ยังไม่มีข้อมูลการคำนวณ</p>;
  }

  function formatLocalDateTime(datetimeString: string) {
    // แปลงจาก "2025-10-26 14:41:48.326" → "2025-10-26T14:41:48.326"
    const date = new Date(datetimeString.replace(" ", "T"));

    date.setHours(date.getHours() - 7);
    // ใช้ toLocaleString แบบไทย
    return date.toLocaleString("th-TH", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }

  return (
    <div className="space-y-4">
      {history.map((record) => (
        <div
          key={record.bmi_id}
          className={`flex items-center justify-between p-4 rounded-lg border shadow-sm transition ${
            record.bmi_category.includes("NORMAL")
              ? "bg-green-50 border-green-200"
              : record.bmi_category.includes("ต่ำ")
              ? "bg-yellow-50 border-yellow-200"
              : record.bmi_category.includes("OBESE")
              ? "bg-red-50 border-red-200"
              : "bg-orange-50 border-orange-200"
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                {record.bmi_value.toFixed(1)}
              </span>
              <span className="text-sm bg-white/70 text-gray-700 px-2 py-0.5 rounded-full shadow-sm">
                {record.bmi_category}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              น้ำหนัก: {record.bmi_weight} กก. | ส่วนสูง: {record.bmi_height}{" "}
              ซม. | อายุ: {record.bmi_age ?? "-"} ปี | เพศ:{" "}
              {record.bmi_gender === "" ? "ชาย" : "หญิง"}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {formatLocalDateTime(record.bmi_created_at)}
            </p>
          </div>

          {onDelete && (
            <button
              onClick={() => onDelete(record.bmi_id)}
              className="text-red-500 hover:text-red-700 transition"
              title="ลบรายการนี้"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default BMIHistory;
