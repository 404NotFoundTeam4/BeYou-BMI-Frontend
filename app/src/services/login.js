import api from "@/api/axios";

export const login = async (email, username, birthdate, us_gender) => {
  const user = { email, username, birthdate, us_gender };
  const res = await api.post("/user/login", user);

  return res.data.data;
};
