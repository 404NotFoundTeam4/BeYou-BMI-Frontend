// --- สร้างไฟล์ใหม่ไว้เก็บตัวช่วย ---

export function getThaiCategory(category: string): string {
  switch (category) {
    case "UNDERWEIGHT":
      return "ผอม";
    case "NORMAL":
      return "ปกติ";
    case "OVERWEIGHT":
      return "ท้วม";
    case "OBESE":
      return "อ้วน";
    default:
      return category; // คืนค่าเดิมถ้าไม่ตรง
  }
}

export function getThaiGender(gender: string): string {
  switch (gender) {
    case "MALE":
      return "ชาย";
    case "FEMALE":
      return "หญิง";
    default:
      return gender;
  }
}

export function formatLocalDateTime(datetimeString: string): string {
  // สร้าง Date object จาก string ที่ (น่าจะ) เป็น Local time
  const date = new Date(datetimeString); 
  
  // (โค้ดเดิมของคุณที่ -7 ชั่วโมง อาจจะไม่จำเป็นแล้วถ้า server คืนค่าเวลาถูกต้อง)
  // date.setHours(date.getHours() - 7); 

  return date.toLocaleString("th-TH", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
