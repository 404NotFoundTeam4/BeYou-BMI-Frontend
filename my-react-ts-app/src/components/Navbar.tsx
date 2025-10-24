import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "../styles/css/icon.css";
import "../styles/css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isopen, setopen] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-[#FAFAFA]">
      {/* ✅ Sidebar */}
      <div className="relative">
        <div
          className={`${
            isopen ? "w-60" : "w-18"
          }  text-white shadow-xl min-h-screen z-40 flex flex-col transition-all duration-300 bg-[#255F38]`}
        >
           <button
          onClick={() => setopen(!isopen)}
          className="absolute mt-10  right-[-20px]  h-10 w-10 bg-amber-300 flex items-center justify-center rounded-full shadow-md hover:bg-amber-400 transition-all"
        >
          <Icon
            icon="weui:arrow-filled"
            width="20"
            height="40"
            className={`transition-transform duration-300 ${
              isopen ? "rotate-180" : ""
            }`}
          />
        </button>
          {/* Header */}
          <div className="flex items-center justify-between h-20 px-4">
            <p className="font-bold text-3xl">Logo</p>
          </div>

          {/* เมนูตัวอย่าง */}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              to="/home"
              className="px-6 py-2 flex items-center gap-2 hover:bg-[#f0f0f0] rounded-lg"
            >
              <FontAwesomeIcon icon={faHome} />
              {isopen && <span>หน้าหลัก</span>}
            </Link>
          </div>
        </div>

        
       
      </div>

      {/* ✅ ส่วนขวา (Navbar + Main) */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* Navbar */}
        <div className="w-full bg-[#1F7D53] text-white px-4 py-2 h-[110px] flex justify-between items-center top-0 left-0">
          <div className="flex text-white ml-3 w-[149px] h-11 rounded-full  items-center justify-center">
            <span className="font-bold text-2xl">Orbis Track</span>
          </div>

          <div className="flex items-center gap-5">
           

           
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-[#FAFAFA]">
          <div className="w-full min-h-[calc(100vh-150px)]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
