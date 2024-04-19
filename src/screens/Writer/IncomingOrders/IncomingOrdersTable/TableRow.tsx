import React, { useEffect, useState } from "react";
import Post from "../../../../types/Post";
import formatDate from "../../../../services/HelpersFunctions/FormatISODate";
import ViewOrderDetailsModal from "../../../../components/Orders/OrderCard/ViewOrderDetailsModal/ViewOrderDetailsModal";

const { v4: uuidv4 } = require("uuid");

interface IncomingOrdersTableRowProps {
  post: Post;
}

function TableRow({ post }: IncomingOrdersTableRowProps) {
  const [customId, setCustomId] = useState("");

  useEffect(() => {
    setCustomId(uuidv4()); // Generate a unique ID for each TableRow when the component mounts
  }, []); // Empty dependency array ensures this only runs once

  return (
    <>
      <tr
        className="table-sm group rounded-xl hover:bg-main-red hover:text-white hover:cursor-pointer transition-all duration-[50ms] ease-in"
        onClick={() => {
          if (document) {
            (
              document.getElementById(
                "viewOrderDetails_modal-" + customId
              ) as HTMLFormElement
            ).showModal();
          }
        }}
      >
        <td className="text-center">
          <div className="font-bold">{post.title}</div>
        </td>
        <td className="text-center">{`${post.subject.name} (${post.subject.code})`}</td>
        <td className="text-center">{post.subject.university.name}</td>
        <td className="text-center">{`${post.student.firstName} ${post.student.lastName}`}</td>
        <td className="text-center">{formatDate(post.created)}</td>
        <td className="text-center">{post.isUrgent ? "კი" : "არა"}</td>
        <td className="text-center">{`${
          post.fileDtoModels ? post.fileDtoModels.length : 0
        } ფაილ(ი)ები`}</td>
      </tr>

      {/* Pass the customId and post to the ViewOrderDetailsModal component */}
      <ViewOrderDetailsModal id={customId} post={post} />
    </>
  );
}

export default TableRow;
