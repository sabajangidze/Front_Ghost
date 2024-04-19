import React from 'react'
import EditUniversity from './EditUniversity';
import EditLecturer from './EditLecturer';
import EditSubject from './EditSubject';
import EditWriter from './EditWriter';
import EditPost from './EditPost';
import EditUser from './EditUser';


interface EditItemModalProps {
    Title: string;
    Id: string;
}

function EditItemModal({Title, Id} : EditItemModalProps) {
  return (
    <dialog id={"EditModal"+Id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {Title === 'უნივერსიტეტები' && <EditUniversity Id={Id} />}
        {Title === 'ლექტორები' && <EditLecturer Id={Id} />}
        {Title === 'საგნები' && <EditSubject id={Id} />}
        {Title === 'მწერლები' && <EditWriter id={Id} />}
        {Title === 'პოსტები' && <EditPost id={Id} />}
        {Title === 'მომხმარებლები' && <EditUser id={Id} />}



      </div>
    </dialog>
  )
}

export default EditItemModal