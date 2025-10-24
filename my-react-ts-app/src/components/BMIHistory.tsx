import React from "react";
import { Trash2 } from "lucide-react";

export type BMIRecord = {
  id: number;
  date: string;
  weight: number;
  height: number;
  bmi: number;
  status: string;
  gender?: string;
  age?: number;
};

type BMIHistoryProps = {
  history: BMIRecord[];
  onDelete?: (id: number) => void;
};

function BMIHistory({ history, onDelete }: BMIHistoryProps) {
  if (history.length === 0) {
    return <p className="text-center text-gray-500">ยังไม่มีข้อมูลการคำนวณ</p>;
  }

  return (
    <div className="space-y-4">
      {history.map((record) => (
        <div
          key={record.id}
          className={`flex items-center justify-between p-4 rounded-lg border shadow-sm transition ${
            record.status.includes("ปกติ")
              ? "bg-green-50 border-green-200"
              : record.status.includes("ต่ำ")
              ? "bg-yellow-50 border-yellow-200"
              : record.status.includes("อ้วน")
              ? "bg-red-50 border-red-200"
              : "bg-orange-50 border-orange-200"
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                {record.bmi.toFixed(1)}
              </span>
              <span className="text-sm bg-white/70 text-gray-700 px-2 py-0.5 rounded-full shadow-sm">
                {record.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              น้ำหนัก: {record.weight} กก. | ส่วนสูง: {record.height} ซม. |
              อายุ: {record.age ?? "-"} ปี | เพศ:{" "}
              {record.gender === "male" ? "ชาย" : "หญิง"}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {new Date(record.date).toLocaleString("th-TH", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </div>

          {onDelete && (
            <button
              onClick={() => onDelete(record.id)}
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
