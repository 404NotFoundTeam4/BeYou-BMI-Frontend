import api from "@/api/axios";

export async function fetchBmiHistory(usEmail: string): Promise<any> {
  const res = await api.get("http://localhost:4004/api/bmi/history", {
    params: { email: usEmail }, // ✅ ส่ง email เป็น query parameter
    headers: { "Content-Type": "application/json" },
  });

  return res.data.data;
}
