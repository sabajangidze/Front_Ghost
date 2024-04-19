import React from "react";
import Post from "../../../../types/Post";
import formatDate from "../../../../services/HelpersFunctions/FormatISODate";
import PostStatus from "../../../../types/PostStatus";
import FilePreviewCard from "../FilePreviewCard/FilePreviewCard";
import { useAppSelector } from "../../../../hooks/hooks";
import { getRole } from "../../../../services/HelpersFunctions/GetPrimaryRole";
import UserRoles from "../../../../types/UserRoles";
import { FaRegCircleQuestion } from "react-icons/fa6";
import {
  ENDPOINTS,
  createAPIEndpoint,
  createStandartAPIEndpoint,
} from "../../../../api/api";
import { useNavigate } from "react-router";

interface ConfirmOrderPickupModalProps {
  id: string;
  post: Post;
}

function ConfirmOrderPickupModal({ id, post }: ConfirmOrderPickupModalProps) {
  const writerId = useAppSelector((state) => state.user.relationId);

    const navigate = useNavigate();

  const handleConfirmButton = async () => {
    try {
      const response = await createAPIEndpoint(ENDPOINTS.posts, ENDPOINTS.status).patch({
        id: post.id,
        writerId: writerId,
        status: PostStatus.Assigned,
      });

      if(response.status === 200){
        navigate(0);
      }
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <dialog
      id={`confirmOrderPickup_modal-${id}`}
      className="modal modal-bottom sm:modal-middle z-54"
    >
      <div className="modal-box flex flex-col items-center lg:min-w-[90vw] lg:w-full xl:min-w-[80vw]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-300">
            ✕
          </button>
        </form>
        <div className="flex flex-col justify-center items-center py-4 lg:justify-between lg:w-full lg:p-4">
          <div className="flex flex-col w-full items-center">
            <FaRegCircleQuestion
              size={"100%"}
              className="w-32 h-32 text-main-purple
                lg:w-64 lg:h-64 my-8
                "
            />
            <h2 className="text-main-purple font-bold text-2xl mb-4">
              დარწმუნებული ხართ, რომ შეკვეთის აღება გინდათ?
            </h2>
            <button
              className="btn w-full bg-main-purple text-white
                hover:bg-main-red
                transition-all duration-100 ease-in
                "
                onClick={handleConfirmButton}
            >
              დადასტურება
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ConfirmOrderPickupModal;
