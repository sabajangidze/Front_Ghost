import React from 'react'
import Subject from '../../../../types/Subject';

interface ViewSubjectsModalProps {
    subjects: Subject[];
    modalId: string;
  }

function ViewSubjectsModal({subjects, modalId} : ViewSubjectsModalProps) {
    return (
        <dialog id={"ViewSubjectsModal"+modalId} className="modal">
          <div className="modal-box lg:min-w-[60vw]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h1 className="font-bold text-2xl text-center">საგნები</h1>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>სახელი</th>
                    <th>კოდი</th>
                    {/* <th>ლექტორი</th> */}
                    <th>უნივერსიტეტი</th>

                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                      <tr key={subject.id+'/'+index}>
                        <th>{index+1}</th>
                        <td>{subject.id}</td>
                        <td>{subject.name}</td>
                        <td>{subject.code}</td>
                        {/* <td>{subject.lecturer.firstName+' '+subject.lecturer.lastName}</td> */}
                        <td>{subject.university.name}</td>

                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </dialog>
      );
}

export default ViewSubjectsModal