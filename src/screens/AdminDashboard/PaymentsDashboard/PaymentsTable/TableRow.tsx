import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import {
  add,
  remove,
} from "../../../../redux/slices/selectedDashboardItemsSlice";
import Order from "../../../../types/Order";
import { OrderStatus } from "../../../../types/OrderStatus";
import { FaEye } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import EditItemModal from "../../DashboardElements/DashboardCRUDS/EditItemModal/EditItemModal";
import ViewPostsModal from "../../GlobalModals/ViewPostsModal/ViewPostsModal";

const { v4: uuidv4 } = require("uuid");

function TableRow({ id, amount, paymentDate, iBan, status, post }: Order) {
  const [value, setValue] = useState(false);
  const [customId, setCustomId] = useState("");
  const dispatch = useAppDispatch();

  const handleCheckboxTick = () => {
    if (value) {
      dispatch(remove(id)); // Dispatch remove action
    } else {
      dispatch(add(id));
    }
    setValue(!value);
  };

  useEffect(() => {
    setCustomId(uuidv4());
  }, []);

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
          <div className="font-bold">{id}</div>
        </td>
        <td className="text-center">{amount}₾</td>
        <td className="text-center">{paymentDate}</td>
        <td className="text-center">{iBan}</td>
        <td className="text-center">
          {status === OrderStatus.Cancelled
            ? "გაუქმებული"
            : status === OrderStatus.Paid
            ? "გადახდილია"
            : ""}
        </td>

        <td className="text-center">
          <button
            className="btn btn-circle"
            onClick={() => {
              if (document) {
                (
                  document.getElementById(
                    "ViewPostsModal" + customId
                  ) as HTMLFormElement
                ).showModal();
              }
            }}
          >
            <FaEye size={20} />
          </button>
        </td>

        <th className="text-center">
          <button
            className="btn btn-circle"
            onClick={() => {
              if (document) {
                (
                  document.getElementById("EditModal" + id) as HTMLFormElement
                ).showModal();
              }
            }}
          >
            <FaEdit />
          </button>
        </th>
      </tr>
      <EditItemModal Title={"გადახდები"} Id={id} />

      <ViewPostsModal posts={[post]} modalId={customId} />
    </>
  );
}

export default TableRow;
