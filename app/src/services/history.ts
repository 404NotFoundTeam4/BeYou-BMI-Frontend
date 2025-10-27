import api from "@/api/axios";

export async function fetchBmiHistory(usEmail: string): Promise<any> {
  const res = await api.get("/bmi/history", {
    params: { email: usEmail }, // ✅ ส่ง email เป็น query parameter
    headers: { "Content-Type": "application/json" },
  });

  return res.data.data;
}
