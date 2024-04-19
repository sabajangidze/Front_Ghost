import React from 'react'

import { IoIosHappy } from "react-icons/io";


function SuccessfulRegistrationModal() {
  return (
    <dialog
      id="successfulRegistration_modal"
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
          <div className='flex flex-col items-center'>
                <IoIosHappy size={'100%'} className='h-64 w-64 text-main-purple text-center' />
                <h1 className='text-main-purple font-bold text-center text-xl'>თქვენი ანგარიში შექმნილი და დადასტურებულია!</h1>
                <h2 className='text-main-purple text-center my-4'>შესასვლელად, დააჭირეთ შესვლას და ჩაწერეთ თქვენი მონაცემები</h2>            
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default SuccessfulRegistrationModal