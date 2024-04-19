import React from "react";
import Post from "../../../../types/Post";
import formatDate from "../../../../services/HelpersFunctions/FormatISODate";
import PostStatus from "../../../../types/PostStatus";
import FilePreviewCard from "../FilePreviewCard/FilePreviewCard";
import { useAppSelector } from "../../../../hooks/hooks";
import { getRole } from "../../../../services/HelpersFunctions/GetPrimaryRole";
import UserRoles from "../../../../types/UserRoles";
import ConfirmOrderPickupModal from "../ConfirmOrderPickupModal/ConfirmOrderPickupModal";

interface ViewOrderDetailsModalProps {
  id: string;
  post: Post;
}

function ViewOrderDetailsModal({ id, post }: ViewOrderDetailsModalProps) {
  const role = useAppSelector((state) => state.token.roles);

  return (
    <>
      <dialog
        id={`viewOrderDetails_modal-${id}`}
        className="modal modal-bottom sm:modal-middle z-54"
      >
        <div className="modal-box flex flex-col items-center lg:min-w-[90vw] lg:w-full xl:min-w-[80vw]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-300"
              id={`viewOrderDetails_button-${id}`}
            >
              ✕
            </button>
          </form>
          <div className="flex flex-col justify-center items-center py-4 lg:justify-between lg:w-full lg:p-4">
            <div className="flex flex-col w-full">
              <h1 className="font-bold text-xl text-center text-main-purple my-4">
                {post.title}
              </h1>
              <h2 className="text-sm text-center text-main-purple">
                {formatDate(post.created)}
              </h2>
              <div className="my-2">
                <h3 className="text-main-purple font-bold">აღწერა:</h3>
                <h3 className="text-justify text-main-purple">
                  {post.description}
                </h3>
              </div>
              <div className="my-2">
                <h3 className="text-main-purple font-bold">საგანი:</h3>
                <h3 className="text-justify text-main-purple">
                  {post.subject.name} ({post.subject.university.name})
                </h3>
              </div>
              <div className="my-2">
                <h3 className="text-main-purple font-bold">სტატუსი:</h3>
                <h3 className="text-justify text-main-purple">
                  {post.status === PostStatus.Open
                    ? "თავისუფალია"
                    : post.status === PostStatus.Assigned
                    ? "მუშაობს მწერალი შეკვეთაზე"
                    : post.status === PostStatus.Completed
                    ? "შეკვეთა შესრულებულია"
                    : ""}
                </h3>
              </div>
              <div className="my-2">
                <h3 className="text-main-purple font-bold">
                  დამატებითი ინფორმაცია:
                </h3>
                <h3 className="text-justify text-main-purple">
                  საჩქაროა? - {post.isUrgent ? "კი" : "არა"}
                </h3>
              </div>
              <div className="my-2">
                <h3 className="text-main-purple font-bold">
                  შეკვეთაზე მუშაობს:
                </h3>
                <h3 className="text-justify text-main-purple">
                  {post.writer
                    ? post.writer.id
                    : "ჯერ არავის არ აუღია ეს დავალება!"}
                </h3>
              </div>
              <div className="my-2">
                <h3 className="text-main-purple font-bold">
                  მიმაგრებული ფაილები:
                </h3>
                <div className="grid grid-cols-3 lg:grid-cols-8 gap-4">
                  {post.fileDtoModels?.map((file, index) => {
                    return (<FilePreviewCard file={file} key={index} />);
                  })}
                </div>
              </div>
              <div className="my-2">
                <h3 className="text-main-purple font-bold">
                  შემკვეთის საკონტაქტო ინფორმაცია:
                </h3>
                <div>
                  <h3 className="text-justify text-main-purple">
                    {`ელ. ფოსტა: ${post.student.email}`}
                  </h3>
                  <h3 className="text-justify text-main-purple">
                    {`ტელ. ნომერი: ${post.student.phoneNumber}`}
                  </h3>
                </div>
              </div>
              {getRole(role as string) === UserRoles.Writer && (
                <div className="mt-4">
                  <button
                    className="btn w-full
              bg-main-purple text-white
              hover:bg-main-red
              transition-all duration-75 ease-in
              "
                    onClick={() => {
                      if (document) {
                        (
                          document.getElementById(
                            `confirmOrderPickup_modal-${id}`
                          ) as HTMLFormElement
                        ).showModal();
                      }
                    }}
                  >
                    შეკვეთის აღება
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </dialog>

      <ConfirmOrderPickupModal id={id} post={post} />
    </>
  );
}

export default ViewOrderDetailsModal;
