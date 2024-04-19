import React from "react";
import User from "../../../../types/User";

interface ViewUniversitiesModalProps {
  users: User[];
  modalId: string;
}

function ViewUsersModal({ users, modalId }: ViewUniversitiesModalProps) {
  return (
    <dialog id={"ViewUsersModal"+modalId} className="modal">
      <div className="modal-box lg:min-w-[60vw]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="font-bold text-2xl text-center">მომხმარებლები</h1>
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
                <th>უნივერსიტეტი</th>
                {/* <th>რეგ. დრო</th> */}
                <th>პოსტების რაოდენობა</th>

              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                  <tr key={user.id+'/'+index}>
                    <th>{index+1}</th>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.university?.name}</td>
                    {/* <td>{user.registrationTimeUtc.toString()}</td> */}
                    <td>{user.posts ? user.posts?.length : 0}</td>

                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </dialog>
  );
}

export default ViewUsersModal;
