import React, { useEffect, useState } from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router";
import EditItemModal from "../../DashboardElements/DashboardCRUDS/EditItemModal/EditItemModal";
import { useAppDispatch } from "../../../../hooks/hooks";
import {
  add,
  remove,
} from "../../../../redux/slices/selectedDashboardItemsSlice";
import { GetUniversitySubjects, GetUniversityUsers } from "../../../../api/FetchInformation";
import University from "../../../../types/University";
import ViewSubjectsModal from "../../GlobalModals/ViewSubjectsModal/ViewSubjectsModal";
import Subject from "../../../../types/Subject";
import User from "../../../../types/User";
import ViewUsersModal from "../../GlobalModals/ViewUsersModal/ViewUsersModal";


const { v4: uuidv4 } = require("uuid");


function TableRow({ id, name }: University) {
  const [value, setValue] = useState(false);
  const dispatch = useAppDispatch(); // Access dispatch function
  const [customId, setCustomId] = useState("");

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [users, setUsers] = useState<User[]>([]);



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

    const fetchData = async () => {
      
      try {
        const uniSubjects = await GetUniversitySubjects(id);
        setSubjects(uniSubjects); 
        
        const uniUsers = await GetUniversityUsers(id);
        setUsers(uniUsers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData()
  }, []);


  console.log(subjects);

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
        <td className="text-center">
          <button className="btn btn-circle"
          onClick={() => {
            if (document) {
              (
                document.getElementById(
                  "ViewSubjectsModal" + customId
                ) as HTMLFormElement
              ).showModal();
            }
          }}>
            <FaEye size={20} />
          </button>
        </td>
        <td className="text-center">
          <button className="btn btn-circle"
          onClick={() => {
            if (document) {
              (
                document.getElementById(
                  "ViewUsersModal" + customId
                ) as HTMLFormElement
              ).showModal();
            }
          }}>
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
      <EditItemModal Title={"უნივერსიტეტები"} Id={id} />

      <ViewSubjectsModal subjects={subjects} modalId={customId} />
      <ViewUsersModal users={users} modalId={customId} />

    </>
  );
}

export default TableRow;
