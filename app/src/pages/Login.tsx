import { useState, useEffect } from "react";
import BeYouLogo from "../assets/images/BeYouBMI.webp"; // path relative จาก Login.tsx
import { useNavigate } from "react-router-dom";
import { login } from "../services/login.js";
const Index = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(""); // เก็บวันเดือนปีเกิด


  const navigate = useNavigate();
  useEffect(() => {
    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      console.log("Found existing user:", JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = async () => {
    if (!username.trim() || !email.trim() || !gender || !dob) {
      return;
    }
    
  
    
    const res = await login(email, username, dob, gender);
    // const birthYear = new Date(dob).getFullYear();
    // const currentYear = new Date().getFullYear();
    // const age = currentYear - birthYear;
    
    // // const mockUser = {
    // //   us_id: Math.floor(Math.random() * 10000),
    // //   us_name: username,
    // //   us_email: email,
    // //   us_gender: gender,
    // //   us_dob: dob,
    // //   us_age: age,
    // //   created_at: new Date().toISOString(),
    // //   last_access: new Date().toISOString(),
    // // };

    localStorage.setItem("userData", JSON.stringify(res));
    navigate("/bmi/form");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#BFFFE0] via-[#80DFFF] to-[#FFFFFF] animate-gradient-shift">
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#BFFFE0]/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#80DFFF]/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl animate-fade-in">
          {/* Login Card */}
          <div className="justify-center bg-white rounded-3xl pt-12 px-20 pb-20 shadow-2xl flex flex-col overflow-hidden">
            {/* Top Logo */}
            <div className="w-full flex justify-center items-center pb-6 border-b border-gray-200 mb-6">
              <img
                src={BeYouLogo}
                alt="BeYou BMI Logo"
                className="h-16 md:h-20 object-contain"
              />
            </div>

            {/* Form */}
            <div className="flex flex-col space-y-6">
              {/* Username */}
              <div className="flex flex-col">
                <label htmlFor="username" className="text-gray-700 font-medium">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="กรอกชื่อผู้ใช้งาน"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#80DFFF] rounded-lg"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="กรอกอีเมลของคุณ"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80DFFF]"
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label htmlFor="gender" className="text-gray-700 font-medium">
                  เพศ
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80DFFF]"
                >
                  <option value="">เลือกเพศ</option>
                  <option value="ชาย">ชาย</option>
                  <option value="หญิง">หญิง</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label htmlFor="dob" className="text-gray-700 font-medium">
                  วันเกิด
                </label>
                <input
                  id="dob"
                  type="date"
                  value={dob }
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80DFFF]"
                />
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="w-full h-12 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-95 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
