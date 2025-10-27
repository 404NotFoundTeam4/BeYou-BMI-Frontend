type BMICardProps = {
  weight: number;
  height: number;
};

function BMICard({ weight, height }: BMICardProps) {
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  const bmiFixed = bmi.toFixed(1);

  let status = "";
  let color = "";
  let adviceFood: string[] = [];
  let adviceExercise: string[] = [];

  if (bmi < 18.5) {
    status = "น้ำหนักต่ำกว่าเกณฑ์ — ควรเพิ่มน้ำหนักให้อยู่ในระดับมาตรฐาน";
    color = "text-yellow-700";
    adviceFood = [
      "เพิ่มมื้ออาหารระหว่างวัน 2-3 มื้อ",
      "รับประทานอาหารที่มีแคลอรีสูง เช่น ข้าว มันฝรั่ง เนื้อสัตว์",
      "ดื่มนมและผลิตภัณฑ์นมเป็นประจำ",
      "เพิ่มอาหารที่มีโปรตีน เช่น ไข่ ถั่ว เนื้อสัตว์ไม่ติดมัน",
    ];
    adviceExercise = [
      "ออกกำลังกายแบบ Strength Training เพื่อเพิ่มกล้ามเนื้อ",
      "หลีกเลี่ยงคาร์ดิโอหนักๆ",
      "พักผ่อนให้เพียงพอเพื่อช่วยเพิ่มมวลร่างกาย",
    ];
  } else if (bmi < 24.9) {
    status = "น้ำหนักปกติ — เยี่ยม! รักษาน้ำหนักให้คงที่นะ";
    color = "text-green-700";
    adviceFood = [
      "รับประทานอาหารครบ 5 หมู่",
      "เน้นผัก ผลไม้ และโปรตีนไขมันต่ำ",
      "ดื่มน้ำวันละ 6–8 แก้ว",
    ];
    adviceExercise = [
      "ออกกำลังกายสม่ำเสมอ 3–5 วันต่อสัปดาห์",
      "สลับระหว่างคาร์ดิโอและเวทเทรนนิ่ง",
    ];
  } else if (bmi < 29.9) {
    status = "น้ำหนักเกิน — ควรเริ่มควบคุมอาหารและออกกำลังกาย";
    color = "text-orange-700";
    adviceFood = [
      "ลดอาหารไขมันและน้ำตาล",
      "หลีกเลี่ยงของทอดและอาหารฟาสต์ฟู้ด",
      "เพิ่มผักและผลไม้ในมื้ออาหาร",
    ];
    adviceExercise = [
      "ออกกำลังกายแบบคาร์ดิโอ เช่น วิ่ง ปั่นจักรยาน ว่ายน้ำ",
      "เสริมเวทเทรนนิ่งเพื่อเพิ่มการเผาผลาญ",
    ];
  } else {
    status = "โรคอ้วน — ควรปรึกษาแพทย์และควบคุมอาหารอย่างจริงจัง";
    color = "text-red-700";
    adviceFood = [
      "ลดปริมาณอาหารและควบคุมแคลอรี",
      "หลีกเลี่ยงของหวาน ของมัน และน้ำอัดลม",
      "รับประทานโปรตีนไขมันต่ำและผักเยอะขึ้น",
    ];
    adviceExercise = [
      "ออกกำลังกายแบบคาร์ดิโอหนักสลับเบา",
      "เดินเร็วหรือว่ายน้ำวันละ 30 นาทีขึ้นไป",
      "ปรึกษาผู้เชี่ยวชาญด้านสุขภาพหากต้องการลดน้ำหนักอย่างปลอดภัย",
    ];
  }

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-6 border border-gray-100">
      {/* Header */}
      <div className="text-center mb-4 border-b pb-3">
        <h3 className="text-xl font-semibold text-gray-800">
          ค่า BMI ของคุณคือ{" "}
          <span className={`${color} font-bold text-2xl`}>{bmiFixed}</span>
        </h3>
        <p className="text-gray-600 mt-1">{status}</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h4 className="font-semibold mb-2 text-gray-800">
            คำแนะนำด้านอาหาร
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {adviceFood.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h4 className="font-semibold mb-2 text-gray-800">
            คำแนะนำการออกกำลังกาย
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {adviceExercise.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BMICard;
