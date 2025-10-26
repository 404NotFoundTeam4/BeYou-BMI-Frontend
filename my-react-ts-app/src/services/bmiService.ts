// src/services/bmiService.ts
import api from "@/api/axios";

const COLOR_MAP: Record<string, string> = {
  underweight: "#e8d41eff",
  normal: "#10b981",
  overweight: "#f52a0bff",
  obese: "#ef4444",
};

const TH_LABEL: Record<string, string> = {
  underweight: "น้ำหนักต่ำกว่าเกณฑ์",
  normal: "ปกติ",
  overweight: "น้ำหนักเกิน",
  obese: "โรคอ้วน",
};

function normalizeResponse(raw: any) {
  const d = raw?.data || {};

  // summary_cards
  const latestVal = d?.summary_cards?.latest_bmi?.value ?? null;
  const latestCat = d?.summary_cards?.latest_bmi?.category ?? null;
  const trendDelta = d?.summary_cards?.trend ?? 0;
  const avg = d?.summary_cards?.bmi_average ?? null;
  const total = d?.summary_cards?.total_records ?? 0;
  const direction = trendDelta > 0 ? "up" : trendDelta < 0 ? "down" : "none";

  // line_graph -> points
  const labels: any[] = d?.line_graph?.labels ?? [];
  const values: any[] = d?.line_graph?.data ?? [];
  const points = labels.map((label, i) => ({
    label,
    date: null,
    bmi: Number(values[i] ?? null),
  }));

  // pie_chart -> buckets
  const pie = d?.pie_chart || {};
  const buckets = Object.keys(pie).map((name) => ({
    name,
    label: TH_LABEL[name] ?? name,      // ภาษาไทย
    value: Number(pie[name] ?? 0),      // count
    color: COLOR_MAP[name] || "#94a3b8",
  }));

  return {
    summary: {
      latest_bmi: { value: latestVal, date: null, category: latestCat },
      trend_change: { delta: trendDelta, direction, since: "prev_record" },
      avg_bmi: { value: avg, from_records: total, range: "last-12m" },
      records_count: { total },
    },
    trend: { points },
    distribution: { unit: "count", range: "last-12m", buckets },
  };
}

export async function fetchBmiStatistics(usId?: number): Promise<any> {
  const body = { us_id: usId ?? 1 };
  const res = await api.post("http://localhost:4004/api/bmi/statistics", body, {
    headers: { "Content-Type": "application/json" },
  });

  
  if (res.data?.status === "success") {
    return normalizeResponse(res.data);
  }
  // กรณี BE ส่ง error format อื่น ๆ
  throw new Error(res.data?.message || "API error");
}
