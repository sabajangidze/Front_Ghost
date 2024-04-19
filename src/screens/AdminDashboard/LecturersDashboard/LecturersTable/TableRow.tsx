import React, { useState } from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router";
import EditItemModal from "../../DashboardElements/DashboardCRUDS/EditItemModal/EditItemModal";
import { useAppDispatch } from "../../../../hooks/hooks";
import { add, remove } from "../../../../redux/slices/selectedDashboardItemsSlice";

interface TableRowProps {
    Id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    Subjects?: string[];
}

function TableRow({ Id, FirstName, LastName, Email, PhoneNumber, Subjects }: TableRowProps) {
  const [value, setValue] = useState(false);
  const dispatch = useAppDispatch(); // Access dispatch function

  const handleCheckboxTick = () => {
    if (value) {
      dispatch(remove(Id)); // Dispatch remove action
    }else{
      dispatch(add(Id));
    }
    setValue(!value);
  };

  return (
    <>
      <tr>
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={value}
              onClick={handleCheckboxTick}
            />
          </label>
        </th>
        <td className="text-center">
          <div className="font-bold">{Id}</div>
        </td>
        <td className="text-center">{FirstName}</td>
        <td className="text-center">{LastName}</td>
        <td className="text-center">{PhoneNumber}</td>
        <td className="text-center">
          <button className="btn btn-circle">
            <FaEye size={20} />
          </button>
        </td>
        <th className="text-center">
          <button
            className="btn btn-circle"
            onClick={() => {
              if (document) {
                (
                  document.getElementById("EditModal" + Id) as HTMLFormElement
                ).showModal();
              }
            }}
          >
            <FaEdit />
          </button>
        </th>
      </tr>
      <EditItemModal Title={"ლექტორები"} Id={Id} />
    </>
  );
}

export default TableRow;
