import React, { useEffect, useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import User from "../../../../types/User";
import { useAppDispatch } from "../../../../hooks/hooks";
import {
  add,
  remove,
} from "../../../../redux/slices/selectedDashboardItemsSlice";
import EditItemModal from "../../DashboardElements/DashboardCRUDS/EditItemModal/EditItemModal";
import ViewUniversitiesModal from "../../GlobalModals/ViewUniversitiesModal/ViewUniversitiesModal";
import Post from "../../../../types/Post";
import { GetUserPosts } from "../../../../api/FetchInformation";
import ViewPostsModal from "../../GlobalModals/ViewPostsModal/ViewPostsModal";

const { v4: uuidv4 } = require("uuid");

function TableRow({
  id,
  userName,
  email,
  firstName,
  lastName,
  phoneNumber,
  registrationDateUtc,
  university,
}: User) {
  const [value, setValue] = useState(false);
  const [customId, setCustomId] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);




  const dispatch = useAppDispatch(); // Access dispatch function

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
        const userPosts = await GetUserPosts(id);
        setPosts(userPosts); 
        
        
      } catch (err) {
        console.error(err);
      }
    };

    fetchData()
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
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{id}</div>
            </div>
          </div>
        </td>
        <td className="text-center">{userName}</td>
        <td className="text-center">{email}</td>
        <td className="text-center">{firstName}</td>
        <td className="text-center">{lastName}</td>
        <td className="text-center">{phoneNumber}</td>
        <td className="text-center">{registrationDateUtc}</td>
        <td className="text-center">
          <button
            className="btn btn-ghost"
            onClick={() => {
              if (document && university) {
                (
                  document.getElementById(
                    "ViewUniversitiesModal" + customId
                  ) as HTMLFormElement
                ).showModal();
              }
            }}
          >
           {university && <FaEye size={20} />}
           {university && university.name}
           {!university ? 'არ არის არჩეული' : ''}
          </button>
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
      <EditItemModal Title={"მომხმარებლები"} Id={id} />

      {university && <ViewUniversitiesModal universities={[university]} modalId={customId} />}
      <ViewPostsModal posts={posts} modalId={customId} />
    </>
  );
}

export default TableRow;
