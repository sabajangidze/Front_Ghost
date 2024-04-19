import React from "react";
import { useAppSelector } from "../../../../../hooks/hooks";
import { DeleteLecturer, DeleteOrder, DeletePost, DeleteSubject, DeleteUniversity, DeleteUser, DeleteWriter } from "../../../../../api/DeleteInformation";

interface DeleteItemModal {
  Title: string;
}

enum Titles {
  universities = 'უნივერსიტეტები',
  lecturers = 'ლექტორები',
  subjects = 'საგნები',
  writers = 'მწერლები',
  posts = 'პოსტები',
  users = 'მომხმარებლები',
  orders = 'გადახდები'
}


function DeleteItemModal({Title}:DeleteItemModal) {
  const selectedItems = useAppSelector((state) => state.dashboardItems.items);

  const handleDeleteItems = () => {
    selectedItems.forEach(async (selectedItem) => {
      try {
        let response = null;
        if(Title === Titles.universities)response = await DeleteUniversity(selectedItem);
        if(Title === Titles.lecturers)response = await DeleteLecturer(selectedItem);
        if(Title === Titles.subjects)response = await DeleteSubject(selectedItem);
        if(Title === Titles.writers)response = await DeleteWriter(selectedItem);
        if(Title === Titles.posts)response = await DeletePost(selectedItem);
        if(Title === Titles.users)response = await DeleteUser(selectedItem);
        if(Title === Titles.orders)response = await DeleteOrder(selectedItem);



        return response;
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <dialog id="DeleteModal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">გსურს ამ ნივთების წაშლა?</h3>
        <p className="py-4">
          ქვემოთ აღნიშნული ნივთები სამუდამოდ იქნება წაშლილი:
        </p>
        <ul>
          <ul>
            {selectedItems.map((selectedItem, index) => (
              <li key={index}>{selectedItem}</li>
            ))}
          </ul>
        </ul>
        <div className="modal-action">
          <form method="dialog" onSubmit={handleDeleteItems}>
            <button className="btn">დადასტურება</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default DeleteItemModal;
