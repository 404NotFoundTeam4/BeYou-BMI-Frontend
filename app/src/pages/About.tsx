import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input"
import { useState } from "react";
import BMICard from "../components/BMICard";
import { useState } from "react";
import BMICard from "../components/BMICard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input"

function About() {
  const [weight, setWeight] = useState<string>(""); // ✅ เริ่มต้นเป็นค่าว่าง
  const [height, setHeight] = useState<string>(""); // ✅ เริ่มต้นเป็นค่าว่าง
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const w = Number(weight);
    const h = Number(height);

    if (w > 0 && h > 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
      alert("กรุณากรอกน้ำหนักและส่วนสูงให้ครบ");
    }
  };

  return (
    <div>
      <h2 className="text-center mt-5 text-lg font-semibold">คำนวณค่า BMI</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-5 gap-4"
      >
        <div className="flex gap-4">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="น้ำหนัก (กก.)"
            className="border border-gray-300 rounded-lg p-2 w-40"
          />
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="ส่วนสูง (ซม.)"
            className="border border-gray-300 rounded-lg p-2 w-40"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          คำนวณ BMI
        </button>
      </form>

      {submitted && (
        <div className="flex justify-center mt-10">
          <BMICard weight={Number(weight)} height={Number(height)} />
        </div>
      )}
    </div>
  );
}

export default About;
