import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GrUser, GrUserWorker } from "react-icons/gr";
import { FaUniversity } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbMathFunction } from "react-icons/tb";
import { MdLocalPostOffice } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdPayment } from "react-icons/md";


function DashboardHeader() {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const __textcolors = ["text-black", "text-main-purple"];
  const __backcolors = ["bg-black", "bg-transparent", "bg-main-purple"];
  return (
    <>
      <div
        className={`bg-main-purple w-full flex flex-row justify-center items-center 
        transition-all duration-150 ease-in h-16 px-4 text-main-purple lg:h-[calc(100vh_-_5rem)] lg:w-64 lg:px-0 wrapper
        ${nav ? "z-[51]" : ""}`}
      >
        <h1 className="lg:hidden">Admin Dashboard</h1>
        <div className="w-full h-full flex flex-col justify-between items-center transition-all duration-300 ease-in">
          {/* Desktop Navigation */}
          <ul
            className="hidden lg:flex flex-col justify-between left-0 top-0 w-full h-full 
          border-r border-r-gray-900 bg-white ease-in-out duration-500"
          >
            <div>
              <div className="flex-1 flex justify-center">
                <div className="wrapper flex flex-col">
                  <div className="flex flex-col my-2">
                    <h4 className="font-bold text-xs my-4">მთავარი</h4>
                    <NavLink
                      to={"/admin-dashboard/home"}
                      className={({ isActive }) =>
                        isActive ? "admin-dashboard-active" : ""
                      }
                    >
                      <div className="flex items-center p-3 rounded-lg">
                        <FaHome size={'100%'} className="w-4 h-4" />
                        <h3 className="text-sm ml-2">Dashboard</h3>
                      </div>
                    </NavLink>
                  </div>
                  <div className="flex flex-col my-2">
                    <h4 className="font-bold text-xs my-4">Ghostwriter</h4>
                    <NavLink
                      to={"/admin-dashboard/users"}
                      className={({ isActive }) =>
                        isActive ? "admin-dashboard-active" : ""
                      }
                    >
                      <div className="flex items-center p-3 rounded-lg">
                        <FaRegUser size={'100%'} className="w-4 h-4" />
                        <h3 className="text-sm ml-2">მომხმარებლები</h3>
                      </div>
                    </NavLink>
                    <NavLink
                      to={"/admin-dashboard/writers"}
                      className={({ isActive }) =>
                        isActive ? "admin-dashboard-active" : ""
                      }
                    >
                      <div className="flex items-center p-3 rounded-lg">
                        <GrUserWorker size={'100%'} className="w-4 h-4" />
                        <h3 className="text-sm ml-2">მწერლები</h3>
                      </div>
                    </NavLink>
                    <NavLink
                      to={"/admin-dashboard/posts"}
                      className={({ isActive }) =>
                        isActive ? "admin-dashboard-active" : ""
                      }
                    >
                      <div className="flex items-center p-3 rounded-lg">
                        <MdLocalPostOffice size={'100%'} className="w-4 h-4" />
                        <h3 className="text-sm ml-2">პოსტები</h3>
                      </div>
                    </NavLink>
                    <NavLink
                      to={"/admin-dashboard/subjects"}
                      className={({ isActive }) =>
                        isActive ? "admin-dashboard-active" : ""
                      }
                    >
                      <div className="flex items-center p-3 rounded-lg">
                        <TbMathFunction size={'100%'} className="w-4 h-4" />
                        <h3 className="text-sm ml-2">საგნები</h3>
                      </div>
                    </NavLink>
                    <NavLink
                      to={"/admin-dashboard/universities"}
                      className={({ isActive }) =>
                        isActive ? "admin-dashboard-active" : ""
                      }
                    >
                      <div className="flex items-center p-3 rounded-lg">
                        <FaUniversity size={'100%'} className="w-4 h-4" />
                        <h3 className="text-sm ml-2">უნივერსიტეტები</h3>
                      </div>
                    </NavLink>
                    <NavLink
                      to={"/admin-dashboard/lecturers"}
                      className={({ isActive }) =>
                        isActive ? "admin-dashboard-active" : ""
                      }
                    >
                      <div className="flex items-center p-3 rounded-lg">
                        <FaChalkboardTeacher size={'100%'} className="w-4 h-4" />
                        <h3 className="text-sm ml-2">ლექტორები</h3>
                      </div>
                    </NavLink>
                  </div>
                  <div className="flex flex-col my-2">
                    <h4 className="font-bold text-xs my-4">სხვა</h4>
                    <NavLink
                      to={"/admin-dashboard/payments"}
                      className={({ isActive }) =>
                        isActive ? "admin-dashboard-active" : ""
                      }
                    >
                      <div className="flex items-center p-3 rounded-lg">
                        <MdPayment size={'100%'} className="w-4 h-4" />
                        <h3 className="text-sm ml-2">გადახდები</h3>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-start h-20">
              <div className="wrapper p-2 bg-main-purple rounded-2xl items-center flex justify-between">
                <div className="flex">
                  <div className="avatar align-middle ml-1">
                    <div className="w-10 h-10 rounded-full">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/Logo-Square-Black.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="ml-2 flex flex-col justify-center">
                    <h5 className="my-0 text-sm text-white">Username</h5>
                    <h6 className="text-xs my-0 text-white">SuperAdmin</h6>
                  </div>
                </div>
                <div className="mr-2 text-white">
                  <HiDotsHorizontal />
                </div>
              </div>
            </div>
          </ul>
        </div>

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          className={`block lg:hidden ${nav ? "z-[51]" : ""}`}
        >
          {/* {nav ? <AiOutlineClose size={'100%'} className="w-4 h-4" /> : <AiOutlineMenu size={'100%'} className="w-4 h-4" />} */}
          <Hamburger
            toggled={nav}
            color={"main-purple"}
            toggle={setNav}
            duration={0.5}
            size={64}
          />
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed lg:hidden left-0 flex flex-col justify-between top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] flex flex-col justify-between"
          }
        >
          <div>
            {/* Mobile Logo */}
            <div className="w-full">
              <h1 className="w-full text-lg font-bold text-main-purple m-4 wrapper_short">
                Admin დეშბორდი
              </h1>
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex-1 flex justify-center">
              <div className="wrapper_short flex flex-col">
                <div className="flex flex-col my-2">
                  <h4 className="font-bold text-sm my-4">მთავარი</h4>
                  <NavLink
                    to={"/admin-dashboard/home"}
                    className={({ isActive }) =>
                      isActive ? "admin-dashboard-active" : ""
                    }
                  >
                    <div className="flex items-center p-3 rounded-lg">
                      <FaHome size={'100%'} className="w-4 h-4" />
                      <h3 className="text-lg ml-2">Dashboard</h3>
                    </div>
                  </NavLink>
                </div>
                <div className="flex flex-col my-2">
                  <h4 className="font-bold text-sm my-4">Ghostwriter</h4>
                  <NavLink
                    to={"/admin-dashboard/users"}
                    className={({ isActive }) =>
                      isActive ? "admin-dashboard-active" : ""
                    }
                  >
                    <div className="flex items-center p-3 rounded-lg">
                      <FaRegUser size={'100%'} className="w-4 h-4" />
                      <h3 className="text-lg ml-2">მომხმარებლები</h3>
                    </div>
                  </NavLink>
                  <NavLink
                    to={"/admin-dashboard/writers"}
                    className={({ isActive }) =>
                      isActive ? "admin-dashboard-active" : ""
                    }
                  >
                    <div className="flex items-center p-3 rounded-lg">
                      <GrUserWorker size={'100%'} className="w-4 h-4" />
                      <h3 className="text-lg ml-2">მწერლები</h3>
                    </div>
                  </NavLink>
                  <NavLink
                    to={"/admin-dashboard/posts"}
                    className={({ isActive }) =>
                      isActive ? "admin-dashboard-active" : ""
                    }
                  >
                    <div className="flex items-center p-3 rounded-lg">
                      <MdLocalPostOffice size={'100%'} className="w-4 h-4" />
                      <h3 className="text-lg ml-2">პოსტები</h3>
                    </div>
                  </NavLink>
                  <NavLink
                    to={"/admin-dashboard/subjects"}
                    className={({ isActive }) =>
                      isActive ? "admin-dashboard-active" : ""
                    }
                  >
                    <div className="flex items-center p-3 rounded-lg">
                      <TbMathFunction size={'100%'} className="w-4 h-4" />
                      <h3 className="text-lg ml-2">საგნები</h3>
                    </div>
                  </NavLink>
                  <NavLink
                    to={"/admin-dashboard/universities"}
                    className={({ isActive }) =>
                      isActive ? "admin-dashboard-active" : ""
                    }
                  >
                    <div className="flex items-center p-3 rounded-lg">
                      <FaUniversity size={'100%'} className="w-4 h-4" />
                      <h3 className="text-lg ml-2">უნივერსიტეტები</h3>
                    </div>
                  </NavLink>
                  <NavLink
                    to={"/admin-dashboard/lecturers"}
                    className={({ isActive }) =>
                      isActive ? "admin-dashboard-active" : ""
                    }
                  >
                    <div className="flex items-center p-3 rounded-lg">
                      <FaChalkboardTeacher size={'100%'} className="w-4 h-4" />
                      <h3 className="text-lg ml-2">ლექტორები</h3>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-start h-20">
            <div className="wrapper p-2 bg-slate-500 rounded-2xl items-center flex justify-between">
              <div className="flex">
                <div className="avatar align-middle ml-1">
                  <div className="w-12 rounded-full">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/Logo-Square-Black.png"
                      }
                    />
                  </div>
                </div>
                <div className="ml-2 flex flex-col justify-center">
                  <h5 className="my-0">Username</h5>
                  <h5 className="text-xs my-0">SuperAdmin</h5>
                </div>
              </div>
              <div className="mr-2">
                <HiDotsHorizontal />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default DashboardHeader;
