import api from "@/api/axios";

export const inputbmi = async (us_email, bmi_height, bmi_weight) => {
  const user = { us_email, bmi_height, bmi_weight };
  const res = await api.post("/bmi/calculate", user);
  return res.data;
};
