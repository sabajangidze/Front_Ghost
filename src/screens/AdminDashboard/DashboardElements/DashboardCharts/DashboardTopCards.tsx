import React from "react";

import { FaShoppingBag } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";

function DashboardTopCards() {
  return (
    <div className="grid grid-cols-1 gap-3 my-4 lg:grid-cols-2 xl:grid-cols-4">
      <div className="h-40  rounded-lg bg-purple-600">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="wrapper flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">28</h1>
              <h3 className="font-bold text-lg leading-5">შემოსული შეკვეთა</h3>
              <h5 className="text-xs">
                <span className="mr-1 font-bold">3%</span> მეტი ვიდრე წინა 24
                საათში
              </h5>
            </div>
            <div className="">
              <FaShoppingBag
                size={48}
                className="rounded-full bg-purple-300 p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-40  rounded-lg bg-purple-600">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="wrapper flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">13</h1>
              <h3 className="font-bold text-lg leading-5">შესრულებული შეკვეთა</h3>
              <h5 className="text-xs">
                <span className="mr-1 font-bold">4%</span> მეტი ვიდრე წინა 24
                საათში
              </h5>
            </div>
            <div className="">
              <FaCheckCircle
                size={48}
                className="rounded-full bg-purple-300 p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-40  rounded-lg bg-purple-600">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="wrapper flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">4</h1>
              <h3 className="font-bold text-lg leading-5">აქტიური შეკვეთა</h3>
              <h5 className="text-xs">
                <span className="mr-1 font-bold">-1%</span> მეტი ვიდრე წინა 24
                საათში
              </h5>
            </div>
            <div className="">
              <FaBell size={48} className="rounded-full bg-purple-300 p-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-40  rounded-lg bg-purple-600">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="wrapper flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">632 ₾</h1>
              <h3 className="font-bold text-lg leading-5">ბრუნვა</h3>
              <h5 className="text-xs">
                <span className="mr-1 font-bold">14%</span> მეტი ვიდრე წინა 24
                საათში
              </h5>
            </div>
            <div className="">
              <MdMonetizationOn
                size={48}
                className="rounded-full bg-purple-300 p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTopCards;
