import { Link, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import { Icon } from "@iconify/react";
import "../styles/css/icon.css";
import "../styles/css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faClipboardList,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logoname from "../assets/images/BeYouBMI-name.png";
import logo from "../assets/images/BeYouBMI-logo.png";
import profilemale from "../assets/images/gender/male.png";
import profilefemale from "../assets/images/gender/female.png";
export const Navbar = () => {
  const [isopen, setopen] = useState(true);
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
   const [showHeart, setShowHeart] = useState(false);
    useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isopen) {
      // ✅ รอ sidebar เปิดเต็มก่อนค่อยแสดง heart-rate (300ms ตรงกับ duration ของ sidebar)
      timer = setTimeout(() => setShowHeart(true), 300);
    } else {
      // ✅ ปิดทันทีเมื่อ sidebar ปิด
      setShowHeart(false);
    }

    return () => clearTimeout(timer);
  }, [isopen]);
  const logout =() =>{
    localStorage.clear();
  }
  return (
    <div className="flex w-full  bg-[#FAFAFA]">
      {/* Sidebar */}
     
        <div
          className={`${
            isopen ? "w-60" : "w-23"
          }   text-white min-h-screen relative  shadow-xl  z-40 flex flex-col transition-all duration-300 bg-[#147e65]`}
        >
          <button
            onClick={() => setopen(!isopen)}
            className="absolute mt-8 -right-4  h-10 w-10 z-11   bg-[#099c7a] flex items-center justify-center rounded-full shadow-md hover:bg-[#0d6551] transition-all"
          >
            <Icon
              icon="weui:arrow-filled"
              width="20"
              height="40"
              className={` transition-transform duration-300 ${
                isopen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div className="flex items-center justify-between h-25 w-full px-4 border-b-2 gap-2 relative z-10 ">
            <img src={logo} alt="" className="h-13 w-13 z-10 " />
            <section>
              <div className="container">
                <div className="content">
                  {showHeart && (
                  <div className="heart-rate">
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 150 73"
                      height="73px"
                      width="150px"
                      y="0px"
                      x="0px"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                    >
                      <polyline
                        points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,
    63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        stroke="#1ADBB1"
                        fill="none"
                      ></polyline>
                    </svg>

                    <div className="fade-in"></div>

                    <div className="fade-out"></div>
                  </div>
                  )}
                </div>
              </div>
            </section>

            {/* {isopen && <p className="font-bold text-3xl">Logo</p>} */}
          </div>

          <div className="flex flex-col gap-4 mt-4 px-2">
            <Link
              to="/bmi/form"
              className="py-3 flex items-center justify-start gap-4 rounded-2xl hover:bg-[#0d6551] px-4  transition-all"
            >
              <FontAwesomeIcon
                icon={faHome}
                className="text-[30px] min-w-[30px] text-center"
              />
              {isopen && (
                <span
                  className={`text-[18px] transition-all duration-300 whitespace-nowrap `}
                >
                  คำนวน
                </span>
              )}
            </Link>

            <Link
              to="/bmi/history"
              className="py-3 flex items-center justify-start gap-4 rounded-2xl hover:bg-[#0d6551] px-4  transition-all"
            >
              <FontAwesomeIcon
                icon={faClipboardList}
                className="text-[30px] min-w-[30px] "
              />
              {isopen && (
                <span
                  className={`text-[18px] transition-all duration-300 whitespace-nowrap `}
                >
                  ประวัติ
                </span>
              )}
            </Link>

            <Link
              to="/bmi/statistics"
              className="py-3 flex items-center justify-start gap-4 rounded-2xl hover:bg-[#0d6551] px-4  transition-all"
            >
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-[30px] min-w-[30px] "
              />
              {isopen && (
                <span
                  className={`text-[18px] transition-all duration-300 whitespace-nowrap `}
                >
                  สถิติและวิเคราะห์
                </span>
              )}
            </Link>
               <Link
              to="/"
              onClick={logout}
              className="py-3 flex items-center justify-start gap-4 rounded-2xl hover:bg-[#0d6551] px-4  transition-all"
            >

              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-[30px] min-w-[30px] "
              />
             
              {isopen && (
                <span
                  className={`text-[18px] transition-all duration-300 whitespace-nowrap `}
                >
                  ออกจากระบบ
                </span>
              )}
            </Link>
          </div>
        </div>
     

      {/*  ส่วนขวา (Navbar + Main) */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* Navbar */}
        <div className="w-full bg-[linear-gradient(145deg,#EFF9F8_0%,#EAF6F4_100%)] border-2 border-y-[#1be2c1] text-[#147e65] px-4 py-2 h-25 flex justify-between items-center top-0 left-0">
          <div className="flex  ml-5   w-[200px] h-full rounded-full  items-center justify-center">
            <img src={logoname} alt="" />
          </div>
          <div className="flex items-center justify-center gap-3 mr-15">
            <img
              src={userData.us_gender == "MALE" ? profilemale : profilefemale}
              alt=""
              className="w-15 h-15 rounded-full"
            />
            <span className="text-[18px] font-normal flex flex-col ">
              <p>สวัสดี</p>
              <p className="text-[18px] font-semibold">{userData.us_username}</p>
            </span>
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
