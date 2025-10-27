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
    const date = new Date(datetimeString.replace(" ", "T"));
    date.setHours(date.getHours() - 7);
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
            record.bmi_category === "NORMAL"
              ? "bg-green-100 border-green-300 text-green-900"
              : record.bmi_category === "UNDERWEIGHT"
              ? "bg-yellow-100 border-yellow-300 text-yellow-900"
              : record.bmi_category === "OVERWEIGHT"
              ? "bg-orange-100 border-orange-300 text-orange-900"
              : record.bmi_category === "OBESE"
              ? "bg-gradient-to-r from-red-600 to-red-700 border-red-800 text-white"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                {record.bmi_value.toFixed(1)}
              </span>
              <span
                className={`text-sm px-2 py-0.5 rounded-full shadow-sm ${
                  record.bmi_category === "OBESE"
                    ? "bg-red-900 text-white"
                    : "bg-white/70 text-gray-700"
                }`}
              >
                {record.bmi_category === "UNDERWEIGHT"
                  ? "ผอม"
                  : record.bmi_category === "NORMAL"
                  ? "ปกติ"
                  : record.bmi_category === "OVERWEIGHT"
                  ? "ท้วม"
                  : record.bmi_category === "OBESE"
                  ? "อ้วน"
                  : ""}
              </span>
            </div>

            <p className="text-sm mt-1">
              น้ำหนัก: {record.bmi_weight} กก. | ส่วนสูง: {record.bmi_height}{" "}
              ซม. | อายุ: {record.bmi_age ?? "-"} ปี | เพศ:{" "}
              {record.bmi_gender === "MALE" ? "ชาย" : "หญิง"}
            </p>
                  {/* {console.log(record)} */}
            <p
              className={`text-xs mt-0.5 ${
                record.bmi_category === "OBESE"
                  ? "text-red-100"
                  : "text-gray-500"
              }`}
            >
              {formatLocalDateTime(record.bmi_created_at)}
            </p>
          </div>

          {onDelete && (
            <button
              onClick={() => onDelete(record.bmi_id)}
              className={`transition ${
                record.bmi_category === "OBESE"
                  ? "text-red-200 hover:text-white"
                  : "text-red-500 hover:text-red-700"
              }`}
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
