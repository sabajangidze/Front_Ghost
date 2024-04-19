import React from "react";

interface ReviewItemProps {
  Name: string;
  Major: string;
  ImageUrl: string;
  Body: string;
}

function ReviewItem({Name,Major,ImageUrl,Body}:ReviewItemProps) {
  return (
    <div className="flex justify-center items-center h-72 shadow-lg rounded-lg hover:shadow-2xl
    transition-shadow 
    duration-150 ease-in">
      <div className="wrapper h-[70%] flex flex-col justify-between">
        <div className="flex justify-between items-center sm:justify-center">
            <div className="avatar">
                <div className="w-22 max-w-24 rounded-full">
                    <img src={ImageUrl} alt="Avatar" />
                </div>
            </div>
            <div className="flex flex-col justify-center ml-2 h-[90%]">
                <h4 className="font-bold text-lg text-main-purple">{Name}</h4>
                <div>
                  <h4 className="text-sm text-main-purple">{Major}</h4>
                  <div className="rating rating-sm">
                      <input type="radio" name="rating-1" className="mask mask-star bg-main-yellow" disabled/>
                      <input type="radio" name="rating-1" className="mask mask-star bg-main-yellow" disabled/>
                      <input type="radio" name="rating-1" className="mask mask-star bg-main-yellow" disabled/>
                      <input type="radio" name="rating-1" className="mask mask-star bg-main-yellow" disabled/>
                      <input type="radio" name="rating-1" className="mask mask-star bg-main-yellow" defaultChecked disabled/>
                  </div>
                </div>
            </div>
        </div>
        <div>
            <h5 className="text-base w-full text-main-purple sm:text-center">{Body}</h5>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
