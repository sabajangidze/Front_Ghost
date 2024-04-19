import React from "react";
import AddUniversity from "./AddUniversity";
import AddLecturer from "./AddLecturer";
import AddSubject from "./AddSubject";
import AddWriter from "./AddWriter";
import AddPost from "./AddPost";
import AddUser from "./AddUser";
import AddOrder from "./AddOrder";

interface AddItemModalProps {
    Title: string;
}

function AddItemModal({Title}:AddItemModalProps) {
  return (
    <dialog id="AddModal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {Title === 'უნივერსიტეტები' && <AddUniversity />}
        {Title === 'ლექტორები' && <AddLecturer />}
        {Title === 'საგნები' && <AddSubject />}
        {Title === 'მწერლები' && <AddWriter />}
        {Title === 'პოსტები' && <AddPost />}
        {Title === 'მომხმარებლები' && <AddUser />}
        {Title === 'გადახდები' && <AddOrder />}

        
      </div>
    </dialog>
  );
}

export default AddItemModal;
