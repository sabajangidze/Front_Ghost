import React, { useEffect, useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Writer from "../../../../types/Writer";
import EditItemModal from "../../DashboardElements/DashboardCRUDS/EditItemModal/EditItemModal";
import { useAppDispatch } from "../../../../hooks/hooks";
import { add, remove } from "../../../../redux/slices/selectedDashboardItemsSlice";
import { GetWriterPosts } from "../../../../api/FetchInformation";
import Post from "../../../../types/Post";
import ViewPostsModal from "../../GlobalModals/ViewPostsModal/ViewPostsModal";

const { v4: uuidv4 } = require("uuid");


function TableRow({
  id,
  email,
  firstName,
  lastName,
  phoneNumber,
}: Writer) {

  const [value, setValue] = useState(false);
  const dispatch = useAppDispatch(); // Access dispatch function
  const [customId, setCustomId] = useState("");

  const [posts, setPosts] = useState<Post[]>([]);


  const handleCheckboxTick = () => {
    if (value) {
      dispatch(remove(id)); // Dispatch remove action
    }else{
      dispatch(add(id));
    }
    setValue(!value);
  };

  useEffect(() => {
    setCustomId(uuidv4());

    const fetchData = async () => {
      
      try {
        const writerPosts = await GetWriterPosts(id);
        setPosts(writerPosts); 
        
        
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
          <div className="font-bold">{id}</div>
        </td>
        <td className="text-center">{firstName}</td>
        <td className="text-center">{lastName}</td>
        <td className="text-center">{email}</td>
        <td className="text-center">{phoneNumber}</td>

        <td className="text-center">
          <button className="btn btn-circle"
          onClick={() => {
            if (document) {
              (
                document.getElementById(
                  "ViewPostsModal" + customId
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
      <EditItemModal Title={"მწერლები"} Id={id} />

      <ViewPostsModal posts={posts} modalId={customId} />

    </>
  );
}

export default TableRow;
