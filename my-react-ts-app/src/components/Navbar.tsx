import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "../styles/css/icon.css";
import "../styles/css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell } from "@fortawesome/free-solid-svg-icons";
import logoname from "../assets/images/BeYouBMI-name.png"
import logo from "../assets/images/BeYouBMI-logo.png"
export const Navbar = () => {
  const [isopen, setopen] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-[#FAFAFA]">
      {/* Sidebar */}
      <div className="relative">
        <div
          className={`${isopen ? "w-60" : "w-22"
            }  text-white shadow-xl min-h-screen z-40 flex flex-col transition-all duration-300 bg-[#147e65]`}
        >
          
          <button
            onClick={() => setopen(!isopen)}
            className="absolute mt-8 right-[-20px]  h-10 w-10   bg-[#099c7a] flex items-center justify-center rounded-full shadow-md hover:bg-[#0d6551] transition-all"
          >
            <Icon
              icon="weui:arrow-filled"
              width="20"
              height="40"
              className={` transition-transform duration-300 ${isopen ? "rotate-180" : ""
                }`}
            />
          </button>

          <div className="flex items-center justify-between h-25 w-full px-4 border-b-2 ">
         
              <img src={logo} alt="" className="h-12 w-12"  />
         
           {/* {isopen && <p className="font-bold text-3xl">Logo</p>} */}
          </div>

          {/* เมนูตัวอย่าง */}
          <div className="flex flex-col gap-3 mt-4  justify-center">
            <Link
              to="/home"
              className="px-6 py-2 flex items-center gap-2 hover:bg-[#f0f0f0] rounded-lg"
            >
              <FontAwesomeIcon icon={faHome} className="text-[25px]" />
              {isopen && <span>หน้าหลัก</span>}
            </Link>
          </div>
        </div>



      </div>

      {/* ✅ ส่วนขวา (Navbar + Main) */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* Navbar */}
        <div className="w-full bg-[linear-gradient(145deg,#EFF9F8_0%,#EAF6F4_100%)] border-2 border-y-[#1be2c1] text-white px-4 py-2 h-25 flex justify-between items-center top-0 left-0">
          <div className="flex text-white ml-5   w-[200px] h-full rounded-full  items-center justify-center">
            <img src={logoname} alt="" />
          </div>

          <div className="flex items-center gap-5">



          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 bg-[#FAFAFA]">
          <div className="w-full min-h-[calc(100vh-150px)] p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
