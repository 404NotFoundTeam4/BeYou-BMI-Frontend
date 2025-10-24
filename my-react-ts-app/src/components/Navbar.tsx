import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "../styles/css/icon.css";
import "../styles/css/Navbar.css";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBell,
  
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);
  const [isopen,setopen] = useState(false)
  return (
    <div className="flex background w-full min-h-scree  ">
      {/* ✅ Sidebar (คงเดิม) */}
      <div className={`${isopen ? "w-60":"w-18"}  bg-white text-black  shadow-xl min-h-screen z-40`}>
        {/* ... sidebar menu ทั้งหมดของคุณคงเดิม ... */}
        <div className="flex justify-end">
        <Icon icon="weui:arrow-filled" width="20" height="40"  />
        </div>
      </div>

      {/* ✅ ส่วนขวา: Navbar + Main */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* ✅ Navbar (อยู่บนสุด) */}
        <div className="w-full bg-black text-white px-4 py-2 h-[110px] flex justify-between items-center top-0 left-0 z-50">
          <div className="flex text-white ml-3 w-[149px] h-11 rounded-full bg-[#40A9FF] items-center justify-center">
            <span className="font-bold text-2xl">Orbis Track</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-[174px] h-[46px] bg-black flex  items-center rounded-full border-2 border-black">
              <div className="w-[46px] h-[46px] bg-[#2E2E2E] rounded-full"></div>
              <div className="font-semibold p-3.5">คุยกับ GiGa</div>
            </div>
            <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full mr-1 border-2 border-black">
              <FontAwesomeIcon icon={faBell} className="text-[22px] text-black" />
            </div>
            <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full border-2 border-black">
             e
            </div>

            <div className="flex gap-1 items-center bg-white rounded-full border-2 border-black w-auto h-[46px] p-4">
              <div className="text-left text-black pr-8">
                <div className="text-[16px] font-semibold">นายอภิทัชชา</div>
                <div className="text-[13px] font-normal">พนักงานทั่วไป</div>
              </div>
              <img src="" alt="" className="w-9 h-9 rounded-full" />
            </div>
          </div>
        </div>

        {/*  Main content (อยู่ใต้ Navbar) */}
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
