import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { LuPencilRuler } from "react-icons/lu";
import { RiTakeawayFill } from "react-icons/ri";

import Hamburger from "hamburger-react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal/LoginModal";
import OrderModal from "./OrderModal/OrderModal";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { FaChevronDown } from "react-icons/fa";
import { resetUser } from "../../redux/slices/tokenSlice";
import Cookies from "universal-cookie";
import NewOrderModal from "../Orders/NewOrderModal/NewOrderModal";

import { RiAdminFill } from "react-icons/ri";
import SuccessfulOrderModal from "../Orders/SuccessfulOrderModal/SuccessfulOrderModal";
import UserRoles from "../../types/UserRoles";
import { getRole } from "../../services/HelpersFunctions/GetPrimaryRole";

function Header() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = useAppSelector((state) => state.token);

  const dispatch = useAppDispatch();

  const cookies = new Cookies();

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "სერვისები" },
    { id: 2, text: "ბლოგი" },
    { id: 3, text: "ჩვენს შესახებ" },
  ];

  console.log(user);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    dispatch(resetUser());
    cookies.remove("jwt_token");
    cookies.remove("relation_id");
    cookies.remove("university_id");
    navigate(0);
  };

  const __textcolors = ["text-black", "text-white"];
  const __backcolors = ["bg-black", "bg-transparent", "bg-white"];
  return (
    <>
      <div
        className={`bg-${
          !scrolled ? "transparent" : "white"
        } w-full flex flex-row justify-center items-center transition-all duration-150 ease-in h-20 px-4 text-white fixed z-50`}
      >
        <div className="w-11/12  flex flex-row justify-between items-center transition-all duration-300 ease-in">
          {/* Logo */}
          <Link to={"/"}>
            {!scrolled ? (
              <img
                src={process.env.PUBLIC_URL + "/images/Logo-black-Text.png"}
                alt="Ghost Logo"
                className="h-16 transition-all duration-300 ease-in"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/images/Logo-Black-Text.png"}
                alt="Ghost Logo"
                className="h-16 transition-all duration-300 ease-in"
              />
            )}
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`relative p-4 rounded-xl m-2 cursor-pointer duration-300 
                 sm:text-sm font-bold
                ${scrolled ? "text-main-purple" : "text-main-purple"}
                group`}
              >
                <span>{item.text}</span>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-${
                    !scrolled ? "main-purple" : "main-purple"
                  } scale-x-0 
                    origin-left transition-transform duration-300 transform group-hover:scale-x-100`}
                ></div>
              </li>
            ))}
          </ul>
          {user.email == "" ? (
            <div className="hidden lg:flex flex-row justify-center align-middle text-center items-center">
              <button
                className={`btn btn-outline my-4 w-8/12 text-xs mr-4 p-2
            text-main-purple
             hover:bg-main-red hover:text-white`}
                onClick={() => {
                  if (document) {
                    (
                      document.getElementById("order_modal") as HTMLFormElement
                    ).showModal();
                  }
                }}
              >
                <RiTakeawayFill></RiTakeawayFill>
                შეუკვეთე ახლავე
              </button>
              <button
                className={`btn btn-outline w-5/12 text-xs p-2 
               text-white
               bg-main-purple
               hover:bg-main-red
              `}
                onClick={() => {
                  if (document) {
                    (
                      document.getElementById("login_modal") as HTMLFormElement
                    ).showModal();
                  }
                }}
              >
                <LuPencilRuler></LuPencilRuler>
                შესვლა
              </button>
            </div>
          ) : user.roles &&
            getRole(user.roles as string) === UserRoles.Student ? (
            <div className="hidden lg:join">
              <div>
                <button
                  className="btn btn-outline rounded-r-none text-xs text-main-purple
                hover:bg-main-red hover:text-white
                "
                  onClick={() => {
                    if (document) {
                      (
                        document.getElementById(
                          "newOrder_modal"
                        ) as HTMLFormElement
                      ).showModal();
                    }
                  }}
                >
                  <RiTakeawayFill></RiTakeawayFill>
                  შეკვეთა
                </button>
              </div>
              <div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-outline rounded-l-none
                  hover:bg-main-red
                  bg-main-purple text-white text-xs"
                  >
                    <FaChevronDown />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
                  >
                    <li className="my-1">
                      <Link to={"/my-orders"}>
                        <button className="text-main-purple">
                          ჩემი შეკვეთები
                        </button>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="bg-main-purple hover:bg-main-red text-center"
                        onClick={handleLogout}
                      >
                        გამოსვლა
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : user.roles &&
            getRole(user.roles as string) === UserRoles.Writer ? (
              <div className="hidden lg:join">
              <div>
                <button
                  className="btn btn-outline rounded-r-none text-xs text-main-purple
              hover:bg-main-red hover:text-white
              "
                  onClick={() => {
                    navigate("/incoming-orders");
                  }}
                >
                  <RiAdminFill />
                  შემოსული შეკვეთები
                </button>
              </div>
              <div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-outline rounded-l-none
                hover:bg-main-red
                bg-main-purple text-white text-xs"
                  >
                    <FaChevronDown />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
                  >
                    <li className="my-1">
                      <button className="text-main-purple">
                        ჩემი შეკვეთები
                      </button>
                    </li>
                    <li>
                      <button
                        className="bg-main-purple hover:bg-main-red text-center"
                        onClick={handleLogout}
                      >
                        გამოსვლა
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : user.roles &&
            getRole(user.roles as string) === UserRoles.SuperAdmin ? (
            <div className="hidden lg:join">
              <div>
                <button
                  className="btn btn-outline rounded-r-none text-xs text-main-purple
              hover:bg-main-red hover:text-white
              "
                  onClick={() => {
                    navigate("/admin-dashboard/home");
                  }}
                >
                  <RiAdminFill />
                  ადმინის პანელი
                </button>
              </div>
              <div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-outline rounded-l-none
                hover:bg-main-red
                bg-main-purple text-white text-xs"
                  >
                    <FaChevronDown />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
                  >
                    <li className="my-1">
                      <button className="text-main-purple">
                        ჩემი შეკვეთები
                      </button>
                    </li>
                    <li>
                      <button
                        className="bg-main-purple hover:bg-main-red text-center"
                        onClick={handleLogout}
                      >
                        გამოსვლა
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <LoginModal />
        <OrderModal />
        <NewOrderModal />
        <SuccessfulOrderModal />

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block lg:hidden z-50">
          {/* {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />} */}
          <Hamburger
            toggled={nav}
            color={!scrolled || nav ? "#4a154b" : "black"}
            toggle={setNav}
            duration={0.5}
            size={30}
          />
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed lg:hidden left-0 flex flex-col top-0 w-screen h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] flex flex-col"
          }
        >
          {/* Mobile Logo */}
          <img
            src={process.env.PUBLIC_URL + "/images/Logo-Black-Text.png"}
            alt="Ghostwriter"
            className="h-16 w-fit m-2"
          />

          {/* Mobile Navigation Items */}
          <div className="flex-1 flex flex-col">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-6 border-b rounded-xl
                text-main-purple font-bold 
                            duration-300 hover:bg-main-purple hover:text-white cursor-pointer border-main-purple
                            text-center"
              >
                {item.text}
              </li>
            ))}
          </div>
          <div className="flex flex-col justify-center align-middle text-center items-center">
            <button
              className="btn btn-outline w-11/12
              hover:bg-main-red
              hover:text-white
              "
              onClick={() => {
                setNav(!nav);
                if (document) {
                  (
                    document.getElementById("order_modal") as HTMLFormElement
                  ).showModal();
                }
              }}
            >
              <RiTakeawayFill></RiTakeawayFill>
              შეუკვეთე ახლავე
            </button>
            <button
              className="btn btn-outline mb-4 mt-2 w-11/12
              bg-main-purple
              text-white
              hover:bg-main-red
              hover:text-white
              "
              onClick={() => {
                setNav(!nav);
                if (document) {
                  (
                    document.getElementById("login_modal") as HTMLFormElement
                  ).showModal();
                }
              }}
            >
              <LuPencilRuler></LuPencilRuler>
              შესვლა
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Header;
