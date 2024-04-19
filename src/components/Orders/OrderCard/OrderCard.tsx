import React, { useEffect, useState } from "react";
import Post from "../../../types/Post";
import ViewOrderDetailsModal from "./ViewOrderDetailsModal/ViewOrderDetailsModal";
import formatDate from "../../../services/HelpersFunctions/FormatISODate";

const { v4: uuidv4 } = require("uuid");


interface OrderCardProps {
  post: Post;
  index: number;
}


function OrderCard({ post, index }: OrderCardProps) {

  const [customId, setCustomId] = useState("");

  useEffect(() => {
    setCustomId(uuidv4());
  },[])

  return (
    <>
      <div
        className="flex flex-col items-center rounded-xl my-2 h-72 lg:h-64
    border-main-purple border-2 border-solid
    relative group
    hover:cursor-pointer hover:bg-main-red
    transition-all duration-100 ease-in
    "
    onClick={() => {
      if(document){
        (
        document.getElementById('viewOrderDetails_modal-'+customId) as HTMLFormElement
        ).showModal()
      }
    }}
      >
        <div
          className="absolute p-6 rounded-full bg-main-red w-4 h-4
        items-center flex flex-col justify-center
        font-bold text-white left-[-20px] top-[-20px]
        group-hover:border-2 border-solid border-white
    transition-all duration-100 ease-in
        "
        >
          #{index + 1}
        </div>
        <div className="wrapper flex flex-col justify-between h-full my-6">
          <div>
            <h2 className="text-xl font-bold mb-2
            group-hover:text-white
            transition-all duration-100 ease-in
            ">{post.title}</h2>
            <h3 className="max-h-24 text-pretty line-clamp-4 text-sm
             group-hover:text-white
             transition-all duration-100 ease-in
            ">
              {post.description}
            </h3>
          </div>
          <div className="flex flex-col my-2 lg:flex-row lg:justify-between">
            <h4 className="font-bold text-sm
             group-hover:text-white
             transition-all duration-100 ease-in
            ">{post.subject.name}</h4>
            <h4 className="font-bold text-sm
             group-hover:text-white
             transition-all duration-100 ease-in
            ">{formatDate(post.created)}</h4>
          </div>
        </div>
      </div>

      <ViewOrderDetailsModal id={customId} post={post} key={customId} />
    </>
  );
}

export default OrderCard;
