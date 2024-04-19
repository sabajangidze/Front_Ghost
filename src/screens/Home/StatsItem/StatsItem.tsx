import React from 'react'

interface StatsItemProps {
    MainText: string;
    SubText: string;
}

function StatsItem({MainText, SubText}:StatsItemProps) {
  return (
    <div className='flex justify-center items-center shadow-lg h-40 rounded-xl'>
        <div className="wrapper flex flex-col justify-around h-[60%]">
            <h1 className='text-5xl font-bold text-center text-main-purple'>{MainText}</h1>
            <h4 className='text-md text-center text-main-purple'>{SubText}</h4>
        </div>
    </div>
  )
}

export default StatsItem