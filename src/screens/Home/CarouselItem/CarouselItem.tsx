import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface CarouselItemProps {
  Icon: IconType;
  MainText: string;
  SubText: string;
  BackgroundColor: string;
}

const CarouselItem = ({ Icon, MainText, SubText, BackgroundColor }: CarouselItemProps) => {
  return (
    <div className='flex justify-center shadow-xl w-full h-[28rem] cursor-pointer hover:shadow-2xl transition-shadow 
    duration-150 ease-in rounded-lg'>
      <div className="wrapper flex flex-col justify-center">
        <div className='w-full flex justify-center'>
            <Icon size={72} className={`${BackgroundColor} rounded-full m-4 p-3 text-main-purple`}/> {/* Assuming Icon is a React component */}
        </div>
        <h1 className='text-lg font-bold w-full text-center mb-0 text-main-purple'>{MainText}</h1>
        <h4 className='text-sm w-full text-center mb-6 my-4'>{SubText}</h4>
        <div className='w-full text-center'>
            <button className='btn btn-block bg-main-purple text-white hover:bg-main-red'>სრულად</button>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
