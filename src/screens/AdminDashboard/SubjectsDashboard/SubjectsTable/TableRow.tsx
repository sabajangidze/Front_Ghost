import React, { useEffect, useState } from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router";
import EditItemModal from "../../DashboardElements/DashboardCRUDS/EditItemModal/EditItemModal";
import { useAppDispatch } from "../../../../hooks/hooks";
import {
  add,
  remove,
} from "../../../../redux/slices/selectedDashboardItemsSlice";
import Subject from "../../../../types/Subject";
import ViewUniversitiesModal from "../../GlobalModals/ViewUniversitiesModal/ViewUniversitiesModal";
import ViewLecturersModal from "../../GlobalModals/ViewLecturersModal/ViewLecturersModal";

const { v4: uuidv4 } = require("uuid");

function TableRow({ id, name, code, university, lecturer }: Subject) {
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

  console.log(university, " ", lecturer);

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
        <td className="text-center">{name}</td>
        <td className="text-center">{code}</td>

        <td className="text-center">
          <button
            className="btn btn-ghost"
            onClick={() => {
              if (document) {
                (
                  document.getElementById(
                    "ViewUniversitiesModal" + customId
                  ) as HTMLFormElement
                ).showModal();
              }
            }}
          >
            <FaEye size={20} />
            {university.name}
          </button>
        </td>
        <td className="text-center">
          <button
            className="btn btn-ghost"
            onClick={() => {
              if (document) {
                (
                  document.getElementById(
                    "ViewLecturersModal" + customId
                  ) as HTMLFormElement
                ).showModal();
              }
            }}
          >
            <FaEye size={20} />
            {lecturer.firstName + " " + lecturer.lastName}
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
      <EditItemModal Title={"საგნები"} Id={id} />

      <ViewUniversitiesModal universities={[university]} modalId={customId} />
      <ViewLecturersModal lecturers={[lecturer]} modalId={customId} />
    </>
  );
}

export default TableRow;
