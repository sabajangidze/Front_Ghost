import React, { useEffect, useState } from "react";
import {
  add,
  remove,
} from "../../../../redux/slices/selectedDashboardItemsSlice";
import { useAppDispatch } from "../../../../hooks/hooks";
import Post from "../../../../types/Post";
import { FaEye } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import EditItemModal from "../../DashboardElements/DashboardCRUDS/EditItemModal/EditItemModal";
import PostStatus from "../../../../types/PostStatus";
import ViewSubjectsModal from "../../GlobalModals/ViewSubjectsModal/ViewSubjectsModal";
import ViewUsersModal from "../../GlobalModals/ViewUsersModal/ViewUsersModal";
import ViewWritersModal from "../../GlobalModals/ViewWritersModal/ViewWritersModal";

const { v4: uuidv4 } = require("uuid");

function TableRow({
  id,
  title,
  description,
  status,
  subject,
  student,
  writer,
  created,
  isUrgent
}: Post) {
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
        <td className="text-center">{created}</td>
        <td className="text-center">{title}</td>
        <td className="text-center">{description}</td>
        <td className="text-center">{status === PostStatus.Open ? 'თავისუფალია' : 
        status === PostStatus.Assigned ? 'აღებულია' : status === PostStatus.Completed ? 'დამთავრებულია' : ''}</td>
        <td className="text-center">{isUrgent}</td>
        <td className="text-center">
          <button
            className="btn btn-ghost"
            onClick={() => {
              if (document) {
                (
                  document.getElementById(
                    "ViewSubjectsModal" + customId
                  ) as HTMLFormElement
                ).showModal();
              }
            }}
          >
            <FaEye size={20} />
            {subject.name}
          </button>
        </td>
        <td className="text-center">
          <button
            className="btn btn-ghost"
            onClick={() => {
              if (document) {
                (
                  document.getElementById(
                    "ViewUsersModal" + customId
                  ) as HTMLFormElement
                ).showModal();
              }
            }}
          >
            <FaEye size={20} />
            {student?.userName}
          </button>
        </td>
        <td className="text-center">
          <button
            className="btn btn-ghost"
            onClick={() => {
              if (document && writer) {
                (
                  document.getElementById(
                    "ViewWritersModal" + customId
                  ) as HTMLFormElement
                ).showModal();
              }
            }}
          >
            {writer && <FaEye size={20} />}{" "}
            {writer && writer.firstName + " " + writer.lastName}{" "}
            {!writer ? 'არ არის არჩეული' : ''}
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
      <EditItemModal Title={"პოსტები"} Id={id} />

      
        <ViewSubjectsModal subjects={[subject]} modalId={customId} />
        <ViewUsersModal users={[student]} modalId={customId} />
        { writer && <ViewWritersModal writers={[writer]} modalId={customId} /> }
    </>
  );
}

export default TableRow;
