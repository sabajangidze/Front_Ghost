import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="relative flex justify-center items-center h-72 w-full lg:h-60">
        <div
          className="h-full w-[150vw] bg-main-purple 
            rounded-bl-[80px] rounded-br-[80px]
            lg:rounded-bl-[120px] lg:rounded-br-[120px]
            flex flex-col justify-center
            "
        >
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <h1 className="text-center text-white text-lg items-center lg:text-3xl">
              Ghostwriter - გახადე ცხოვრება მარტივი
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-background-gray py-8">
        <div className="wrapper grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-bold text-2xl lg:text-xl mb-2 text-main-purple">
              ვებსაიტი
            </h2>
            <div className="flex flex-col">
              <ul className="flex flex-col">
                <li>
                  <Link to={"/"} className="w-1">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/Logo-Black-Text.png"
                      }
                      className="h-16 text-center"
                      alt="White Logo"
                    />
                  </Link>
                </li>
                <li className="flex-1">
                  <h5 className="text-sm text-notSoDark-purple">
                    2024© Ghostwriter.ge
                    <br />
                    ყველა უფლება დაცულია.
                  </h5>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl lg:text-xl mb-2 text-main-purple">
              ჩვენ შესახებ
            </h2>
            <div>
              <ul className="grid grid-cols-1 gap-1">
                <li>
                  <h4>
                    <Link
                      to={"/"}
                      className="text-notSoDark-purple hover:text-main-red"
                    >
                      ჩვენ შესახებ
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link
                      to={"/"}
                      className="text-notSoDark-purple hover:text-main-red"
                    >
                      ჩვენ შესახებ
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link
                      to={"/"}
                      className="text-notSoDark-purple hover:text-main-red"
                    >
                      ჩვენ შესახებ
                    </Link>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl lg:text-xl mb-2 text-main-purple">
              სხვა
            </h2>
            <div>
              <ul className="grid grid-cols-1 gap-1">
                <li>
                  <h4>
                    <Link
                      to={"/"}
                      className="text-notSoDark-purple hover:text-main-red"
                    >
                      ჩვენ შესახებ
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link
                      to={"/"}
                      className="text-notSoDark-purple hover:text-main-red"
                    >
                      ჩვენ შესახებ
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link
                      to={"/"}
                      className="text-notSoDark-purple hover:text-main-red"
                    >
                      ჩვენ შესახებ
                    </Link>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl lg:text-xl mb-2 text-main-purple">
              კონტაქტი
            </h2>
            <div>
              <ul className="grid grid-cols-1 gap-1">
                <li>
                  <h4>
                    <Link
                      to={"/"}
                      className="text-notSoDark-purple hover:text-main-red"
                    >
                      ჩვენ შესახებ
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link
                      to={"/"}
                      className="text-notSoDark-purple hover:text-main-red"
                    >
                      ჩვენ შესახებ
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    ელ. ფოსტა: <span>matkageyt@gmail.com</span>
                  </h4>
                </li>
                <li>
                  <ul className="flex">
                    <li className="mr-1">
                      <FaFacebook
                        size={24}
                        className="text-notSoDark-purple hover:text-main-red text-notSoDark-purple hover:text-main-red"
                      />
                    </li>
                    <li className="mr-1">
                      <FaInstagram
                        size={24}
                        className="text-notSoDark-purple hover:text-main-red text-notSoDark-purple hover:text-main-red"
                      />
                    </li>
                    <li className="mr-1">
                      <FaTiktok
                        size={24}
                        className="text-notSoDark-purple hover:text-main-red text-notSoDark-purple hover:text-main-red"
                      />
                    </li>
                    <li className="mr-1">
                      <FaYoutube
                        size={24}
                        className="text-notSoDark-purple hover:text-main-red text-notSoDark-purple hover:text-main-red"
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
