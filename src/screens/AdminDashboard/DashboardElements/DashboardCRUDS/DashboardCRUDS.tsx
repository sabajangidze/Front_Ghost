import { Title } from "chart.js";
import React, { useEffect } from "react";

import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import AddItemModal from "./AddItemModal/AddItemModal";
import EditItemModal from "./EditItemModal/EditItemModal";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { reset } from "../../../../redux/slices/selectedDashboardItemsSlice";
import { RootState } from "../../../../redux/store";
import DeleteItemModal from "./DeleteItemModal/DeleteItemModal";

type Title = 'მომხმარებლები' | 'მწერლები' | 'პოსტები' | 'საგნები' | 'უნივერსიტეტები' | 'ლექტორები' | 'გადახდები';

interface DashboardCRUDSProps {
  Title: Title;
}

function DashboardCRUDS({ Title }: DashboardCRUDSProps) {

  const dispatch = useAppDispatch(); 

  const selectedItems = useAppSelector((state: RootState) => state.dashboardItems.items);

  useEffect(() => {
    dispatch(reset());
  },[])


  return (
    <>
      <div className="flex flex-col justify-between w-full my-2">
        <div className="flex flex-col w-full sm:flex-row sm:justify-between">
          <h1 className="font-bold text-xl flex flex-col justify-center my-2 lg:text-3xl">
            {Title}
          </h1>
          <label className="input input-bordered flex items-center gap-2 my-2">
            <input type="text" className="grow" placeholder="ძებნა" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-2">
          <button className="btn btn-block"
          onClick={() => {
            if (document) {
              (
                document.getElementById("AddModal") as HTMLFormElement
              ).showModal();
            }
          }}
          >
            <IoMdAddCircle size={24} />
            დამატება
          </button>
          <button className="btn btn-block my-2 md:my-0" disabled={selectedItems.length === 0}
          onClick={() => {
            if (document) {
              (
                document.getElementById("DeleteModal") as HTMLFormElement
              ).showModal();
            }
          }}>
            <MdDelete size={24} />
            წაშლა
          </button>
        </div>
      </div>
      <AddItemModal Title={Title} />
      <DeleteItemModal Title={Title} />
    </>
  );
}

export default DashboardCRUDS;
