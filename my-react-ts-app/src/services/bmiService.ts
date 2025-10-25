import api from "@/api/axios";

const MOCK = import.meta.env.VITE_USE_MOCK === "1";

const mockData = {
  summary: {
    latest_bmi: { value: 15.8, date: "2025-10-10", category: "underweight" },
    trend_change: { delta: -7.9, direction: "down", since: "prev_record" },
    avg_bmi: { value: 19.8, from_records: 2, range: "last-12m" },
    records_count: { total: 2 },
  },
  trend: {
    points: [
      { index: 1, label: "ครั้งที่ 1", date: "2025-06-01", bmi: 26.0 },
      { index: 2, label: "ครั้งที่ 2", date: "2025-06-15", bmi: 24.5 },
      { index: 3, label: "ครั้งที่ 3", date: "2025-07-01", bmi: 23.3 },
      { index: 4, label: "ครั้งที่ 4", date: "2025-07-15", bmi: 22.4 },
      { index: 5, label: "ครั้งที่ 5", date: "2025-08-01", bmi: 22.1 },
      { index: 6, label: "ครั้งที่ 6", date: "2025-08-15", bmi: 20.9 },
      { index: 7, label: "ครั้งที่ 7", date: "2025-09-01", bmi: 20.1 },
      { index: 8, label: "ครั้งที่ 8", date: "2025-09-15", bmi: 19.0 },
      { index: 9, label: "ครั้งที่ 9", date: "2025-10-01", bmi: 17.8 },
      { index: 10, label: "ครั้งที่ 10", date: "2025-10-10", bmi: 15.8 },
    ],
  },
  distribution: {
    unit: "percent",
    range: "last-12m",
    buckets: [
      { name: "ต่ำกว่าเกณฑ์", value: 20 },
      { name: "ปกติ", value: 50 },
      { name: "สูงกว่าเกณฑ์", value: 30 },
    ],
  },
};

export async function fetchBmiStatistics(userId?: string) {
  if (MOCK) {
    // หน่วงเวลาให้เหมือนเรียก API จริง
    await new Promise((r) => setTimeout(r, 400));
    return mockData;
  }
  const url = userId
    ? `/bmi/statistics?userId=${encodeURIComponent(userId)}`
    : "/bmi/statistics";
  const { data } = await api.get(url);
  return data;
}