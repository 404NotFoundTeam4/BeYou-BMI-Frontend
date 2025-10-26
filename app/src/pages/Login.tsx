import { useState, useEffect } from "react";
import BeYouLogo from "../assets/images/BeYouBMI.webp"; // path relative จาก Login.tsx
import { useNavigate } from "react-router-dom";
import { login } from "../services/login.js";

import BeYouLogo from "../assets/images/BeYouBMI.webp";

const Index = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(""); 
  const [loading, setLoading] = useState(false);


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
    
  
    
    // const res = await login(email, username, dob, gender);
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

    setLoading(true);
    try {
      const response = await fetch("http://localhost:4004/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, gender, dob }),
      });

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg || "เข้าสู่ระบบไม่สำเร็จ");
      }

      const user = await response.json();

      // บันทึกข้อมูลจาก backend ลง localStorage
      localStorage.setItem("userData", JSON.stringify(user));

      alert(`เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ ${user.us_username}`);
      console.log("✅ User from backend:", user);

      // เคลียร์ form
      setUsername("");
      setEmail("");
      setGender("");
      setDob("");
    } catch (error) {
      console.error(error);
      alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
    } finally {
      setLoading(false);
    }
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
              <img src={BeYouLogo} alt="BeYou BMI Logo" className="h-16 md:h-20 object-contain" />
            </div>

            {/* Form */}
            <div className="flex flex-col space-y-6">
              <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} onKeyPress={handleKeyPress} className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80DFFF]" />
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} onKeyPress={handleKeyPress} className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80DFFF]" />
              <select value={gender} onChange={e => setGender(e.target.value)} className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80DFFF]">
                <option value="">เลือกเพศ</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select>
              <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80DFFF]" />

              <button onClick={handleLogin} disabled={loading} className="w-full h-12 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all duration-300">
                {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
