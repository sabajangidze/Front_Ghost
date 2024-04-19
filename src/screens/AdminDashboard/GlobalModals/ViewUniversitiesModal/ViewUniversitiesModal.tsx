import React from "react";
import University from "../../../../types/University";

interface ViewUniversitiesModalProps {
  universities: University[];
  modalId: string;
}

function ViewUniversitiesModal({ universities, modalId }: ViewUniversitiesModalProps) {
  return (
    <dialog id={"ViewUniversitiesModal"+modalId} className="modal">
      <div className="modal-box lg:min-w-[60vw]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="font-bold text-2xl text-center">უნივერსიტეტები</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>სახელი</th>
              </tr>
            </thead>
            <tbody>
              {universities.map((university, index) => (
                  <tr key={university.id+'/'+index}>
                    <th>{index+1}</th>
                    <td>{university.id}</td>
                    <td>{university.name}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </dialog>
  );
}

export default ViewUniversitiesModal;
