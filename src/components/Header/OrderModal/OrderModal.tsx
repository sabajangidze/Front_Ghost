import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

function OrderModal() {
  return (
    <dialog
      id="order_modal"
      className="modal modal-bottom sm:modal-middle z-54"
    >
      <div className="modal-box flex flex-col items-center lg:min-w-[90vw] lg:w-full xl:min-w-[70vw]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-300">
            ✕
          </button>
        </form>
        <div className="flex flex-col justify-center items-center py-4 lg:justify-between lg:w-full lg:p-4">
          <h1 className="font-bold text-2xl text-center py-4 lg:text-3xl lg:mb-2  text-main-purple">
            როგორ უკვეთავთ?
          </h1>
          <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between">
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl
            border-main-purple border-2 border-solid 
            lg:h-96 lg:w-[45%] lg:justify-center
            hover:bg-facebook-blue hover:cursor-pointer
            transition-all duration-100 ease-in
            group
            ">
              <FaFacebook size={'100%'} height={'100%'} className=" text-main-purple mb-4 h-32 lg:h-40
              transition-all duration-100 ease-in
              group-hover:text-white
              " />
              <h2 className=" text-main-purple font-bold text-lg text-center lg:text-xl
              transition-all duration-100 ease-in
              group-hover:text-white
              ">
                მოგვწერეთ Facebook-ზე
              </h2>
              <h4 className=" text-main-purple text-sm text-center
              transition-all duration-100 ease-in
              group-hover:text-white
              ">10-12% ძვირი, მოგვწერეთ ნებისმიერი რამ და 
              ჩვენ გიპასუხებთ უმოკლესს დროში</h4>
            </div>
            <div className="divider lg:divider-horizontal text-main-purple">ან</div>
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl
            border-main-purple border-2 border-solid 
            lg:h-96 lg:w-[45%] lg:justify-center
            hover:bg-main-red hover:cursor-pointer
            transition-all duration-100 ease-in
            group
            ">
              <FaSignInAlt size={'100%'} height={'100%'} className="text-main-purple mb-4 h-32 lg:h-40
              transition-all duration-100 ease-in
              group-hover:text-white
              " />
              <h2 className="text-main-purple font-bold text-lg text-center lg:text-xl
              transition-all duration-100 ease-in
              group-hover:text-white
              ">
                სისტემაში შესვლით შეკვეთა
              </h2>
              <h4 className="text-main-purple text-sm text-center
              transition-all duration-100 ease-in
              group-hover:text-white
              ">10-12% ძვირი</h4>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default OrderModal;
