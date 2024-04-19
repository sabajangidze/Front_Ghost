import React from "react";
import University from "../../../../types/University";
import Lecturer from "../../../../types/Lecturer";

interface ViewLecturersModalProps {
  lecturers: Lecturer[];
  modalId: string;
}

function ViewLecturersModal({ lecturers, modalId }: ViewLecturersModalProps) {
  return (
    <dialog id={"ViewLecturersModal"+modalId} className="modal">
      <div className="modal-box lg:min-w-[60vw]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="font-bold text-2xl text-center">ლექტორები</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>სახელი</th>
                <th>გვარი</th>
                <th>ელ. ფოსტა</th>
                <th>მობ. ტელეფონი</th>
              </tr>
            </thead>
            <tbody>
              {lecturers.map((lecturer, index) => (
                <tr key={lecturer.id + "/" + index}>
                  <th>{index + 1}</th>
                  <td>{lecturer.id}</td>
                  <td>{lecturer.firstName}</td>
                  <td>{lecturer.lastName}</td>
                  <td>{lecturer.email}</td>
                  <td>{lecturer.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </dialog>
  );
}

export default ViewLecturersModal;
