import React from "react";
import IncomingOrdersTable from "./IncomingOrdersTable/IncomingOrdersTable";

function IncomingOrders() {
  return (
    <div>
      <div className="header_space " />
      <div className="flex flex-col justify-center items-center">
        <div className="mobile_wrapper items-center flex flex-col justify-center">
          <label className="input input-bordered flex justify-between w-full pr-0 max-w-2xl">
            <input type="text" className="grow" placeholder="მოძებნე" />
            <button className="btn m-0 w-1/12 bg-main-purple text-white
            hover:bg-main-red
            ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
          <h1 className="text-main-purple font-bold text-center my-4 text-lg lg:text-2xl lg:my-6">
            ყველა არსებული შეკვეთა
          </h1>
          <IncomingOrdersTable />
        </div>
      </div>
    </div>
  );
}

export default IncomingOrders;
