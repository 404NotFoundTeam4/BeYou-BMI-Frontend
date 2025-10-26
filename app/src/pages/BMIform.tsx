import React, { useState } from "react";
import { inputbmi } from "../services/calbmi.js";
export default function BMIForm(): React.JSX.Element {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [error, setError] = useState<string>("");
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  

 
  

  const categoryTH: Record<string, string> = {
    UNDERWEIGHT: "ผอม",
    NORMAL: "ปกติ",
    OVERWEIGHT: "ท้วม",
    OBESE: "อ้วน",
  };

  async function calculateBMI() {
    setError("");
    setBmi(null);
    setCategory("");

    const w = Number(weight);
    const h = Number(height);

    if (!w || w <= 0) return setError("กรุณากรอกน้ำหนัก (กก.) ให้ถูกต้อง");
    if (!h || h <= 0) return setError("กรุณากรอกส่วนสูง (ซม.) ให้ถูกต้อง");

    try {
      const response = await inputbmi(userData.us_email, h, w);
  
      setBmi(response.data.data.bmi_value);
      setCategory(response.data.data.bmi_category);
    } catch (err) {
      console.error("Server Error:", err);
      setError("เกิดข้อผิดพลาดจากเซิร์ฟเวอร์");
    }
  }

  function resetForm() {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
    setError("");
  }

  return (
    <div className="min-h-screen px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-9xl mx-auto justify-center py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            คำนวณค่า BMI
          </h2>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                น้ำหนัก (กก.)
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full border-2 border-cyan-400 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ส่วนสูง (ซม.)
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 mb-4">
            <button
              onClick={calculateBMI}
              className="py-4 px-20 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-95 text-white font-semibold text-lg"
            >
              คำนวณ BMI
            </button>
            <button
              onClick={resetForm}
              className="py-4 px-10 rounded-xl border border-cyan-400 text-teal-600 bg-white font-semibold text-lg hover:bg-cyan-100"
            >
              รีเซ็ต
            </button>
          </div>

          {error && (
            <div className="text-red-600 text-sm mb-4 bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          {bmi !== null && (
            <div className="bg-white rounded-2xl shadow-sm p-8 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">ผลลัพธ์</h3>
              <div className="flex items-center gap-6 mb-2">
                <div className="text-5xl font-bold text-cyan-400">{bmi}</div>
                <div className="text-lg text-gray-700 bg-cyan-100 px-4 py-2 rounded-full">
                  {categoryTH[category] || category}
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                น้ำหนัก: {weight} กก. | ส่วนสูง: {height} ซม.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
