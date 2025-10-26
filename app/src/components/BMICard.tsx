// import React from "react";

// interface BMICardProps {
//   weight: number;
//   height: number;
// }

// const BMICard: React.FC<BMICardProps> = ({ weight, height }) => {
//   const h = height / 100;
//   const bmi = parseFloat((weight / (h * h)).toFixed(1));

//   let status = "";
//   let color = "";

//   if (bmi < 18.5) {
//     status = "น้ำหนักต่ำกว่าเกณฑ์ — ควรเพิ่มน้ำหนักให้อยู่ในระดับมาตรฐาน";
//     color = "text-yellow-700";
//   } else if (bmi < 24.9) {
//     status = "น้ำหนักปกติ — เยี่ยม! รักษาน้ำหนักให้คงที่นะ";
//     color = "text-green-700";
//   } else if (bmi < 29.9) {
//     status = "น้ำหนักเกิน — ควรเริ่มควบคุมอาหารและออกกำลังกาย";
//     color = "text-orange-700";
//   } else {
//     status = "โรคอ้วน — ควรปรึกษาแพทย์และควบคุมอาหารอย่างจริงจัง";
//     color = "text-red-700";
//   }

//   return (
//     <div className="p-6 w-full max-w-lg bg-yellow-50 border border-yellow-300 rounded-2xl shadow-lg">
//       <h2 className="text-xl font-semibold text-yellow-700 mb-2">
//         ค่า BMI ของคุณคือ{" "}
//         <span className="text-yellow-600 text-2xl">{bmi}</span>
//       </h2>
//       <p className={`${color} mb-4`}>{status}</p>

//       <div className="grid md:grid-cols-2 gap-6">
//         {/* คำแนะนำด้านอาหาร */}
//         <div>
//           <h3 className="font-semibold text-gray-800 mb-2">🍽️ ด้านอาหาร</h3>
//           <ul className="list-disc list-inside text-gray-700 space-y-1">
//             <li>เลือกรับประทานอาหารครบ 5 หมู่</li>
//             <li>ลดของมัน ของทอด และน้ำตาล</li>
//             <li>ดื่มน้ำอย่างน้อยวันละ 6–8 แก้ว</li>
//             <li>เน้นผักผลไม้สดเป็นหลัก</li>
//           </ul>
//         </div>

//         {/* คำแนะนำด้านการออกกำลังกาย */}
//         <div>
//           <h3 className="font-semibold text-gray-800 mb-2">
//             💪 ด้านการออกกำลังกาย
//           </h3>
//           <ul className="list-disc list-inside text-gray-700 space-y-1">
//             <li>ออกกำลังกายอย่างน้อย 3–5 วัน/สัปดาห์</li>
//             <li>ทำคาร์ดิโอ เช่น เดิน วิ่ง ว่ายน้ำ</li>
//             <li>เพิ่มการออกกำลังกายแบบ Strength Training</li>
//             <li>พักผ่อนให้เพียงพอ</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BMICard;

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
    status = "น้ำหนักน้อยกว่ามาตรฐาน";
    color = "text-yellow-500";
    adviceFood = [
      "รับประทานอาหารที่มีแคลอรีสูง เช่น ข้าว อาหารโปรตีน",
      "เพิ่มมื้ออาหารระหว่างวัน 2-3 มื้อ",
      "ดื่มนมและผลิตภัณฑ์นม",
      "รับประทานไขมันที่ดี เช่น ปลา น้ำมันมะกอก",
    ];
    adviceExercise = [
      "ออกกำลังกายแบบ Strength Training",
      "เล่นเวทเพื่อเสริมกล้ามเนื้อ",
      "หลีกเลี่ยงการออกกำลังกายแบบคาร์ดิโอหนักๆ",
    ];
  } else if (bmi < 23) {
    status = "น้ำหนักปกติ";
    color = "text-green-500";
    adviceFood = [
      "รับประทานอาหารครบ 5 หมู่",
      "เน้นผักผลไม้และโปรตีนไขมันต่ำ",
      "ดื่มน้ำให้เพียงพอวันละ 6-8 แก้ว",
    ];
    adviceExercise = [
      "ออกกำลังกายสม่ำเสมอ 3-5 วัน/สัปดาห์",
      "สลับระหว่างคาร์ดิโอกับเวทเทรนนิ่ง",
    ];
  } else if (bmi < 25) {
    status = "น้ำหนักเกิน";
    color = "text-orange-500";
    adviceFood = [
      "ลดอาหารไขมันและน้ำตาล",
      "หลีกเลี่ยงอาหารทอดและฟาสต์ฟู้ด",
      "เพิ่มผักและผลไม้ในแต่ละมื้อ",
    ];
    adviceExercise = [
      "ออกกำลังกายแบบคาร์ดิโอ เช่น วิ่งเร็ว ปั่นจักรยาน",
      "เสริมเวทเทรนนิ่งเพื่อเพิ่มกล้ามเนื้อ",
    ];
  } else {
    status = "โรคอ้วน";
    color = "text-red-500";
    adviceFood = [
      "ลดปริมาณอาหารต่อมื้อ",
      "หลีกเลี่ยงของมัน ของหวาน น้ำอัดลม",
      "รับประทานโปรตีนไขมันต่ำและผักเยอะขึ้น",
    ];
    adviceExercise = [
      "ออกกำลังกายแบบคาร์ดิโอหนักสลับเบา",
      "เดินเร็ว ว่ายน้ำ ปั่นจักรยาน 30 นาที/วัน",
    ];
  }

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-6 w-[500px] bg-white">
      <h3 className="text-center text-lg font-semibold">
        ค่า BMI ของคุณคือ <span className={color}>{bmiFixed}</span>
      </h3>
      <p className="text-center mt-2 text-gray-700">{status}</p>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-2">🍽️ คำแนะนำด้านอาหาร</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {adviceFood.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">💪 คำแนะนำการออกกำลังกาย</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
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
