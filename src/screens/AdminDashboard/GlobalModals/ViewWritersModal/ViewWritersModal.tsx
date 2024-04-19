import React from "react";
import Writer from "../../../../types/Writer";

interface ViewWritersModalProps {
  writers: Writer[];
  modalId: string;
}

function ViewWritersModal({ writers, modalId }: ViewWritersModalProps) {
  return (
    <dialog id={"ViewWritersModal"+modalId} className="modal">
      <div className="modal-box lg:min-w-[60vw]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="font-bold text-2xl text-center">მწერლები</h1>
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
                <th>ტელ. ნომერი</th>
              </tr>
            </thead>
            <tbody>
              {writers.map((writer, index) => (
                  <tr key={writer.id+'/'+index}>
                    <th>{index+1}</th>
                    <td>{writer.id}</td>
                    <td>{writer.firstName}</td>
                    <td>{writer.lastName}</td>
                    <td>{writer.email}</td>
                    <td>{writer.phoneNumber}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </dialog>
  );
}

export default ViewWritersModal;
