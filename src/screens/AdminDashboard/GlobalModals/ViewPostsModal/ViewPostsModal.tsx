import React from "react";
import Post from "../../../../types/Post";
import PostStatus from "../../../../types/PostStatus";

interface ViewPostsModalProps {
  posts: Post[];
  modalId: string;
}

function ViewPostsModal({ posts, modalId }: ViewPostsModalProps) {
  return (
    <dialog id={"ViewPostsModal" + modalId} className="modal">
      <div className="modal-box lg:min-w-[60vw]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="font-bold text-2xl text-center">პოსტები</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>სათაური</th>
                <th>აღწერა</th>
                <th>სტატუსი</th>
                <th>საგნის სახელი</th>
                <th>მომხმარებლის ელ. ფოსტა</th>
                <th>მწერლის ელ. ფოსტა</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post.id + "/" + index}>
                  <th>{index + 1}</th>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>
                    {post.status === PostStatus.Open
                      ? "თავისუფალია"
                      : post.status === PostStatus.Assigned
                      ? "აღებულია"
                      : post.status === PostStatus.Completed
                      ? "დამთავრებულია"
                      : ""}
                  </td>
                  <td>{post.subject.name}</td>
                  <td>{post.student.email}</td>
                  <td>{post.writer ? post.writer?.email : 'არ არის არჩეული'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </dialog>
  );
}

export default ViewPostsModal;
