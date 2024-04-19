import React from "react";

function TableHead() {
  return (
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" disabled />
          </label>
        </th>
        <th className="text-center">Id</th>
        <th className="text-center">სახელი</th>
        <th className="text-center">გვარი</th>
        <th className="text-center">მობ. ტელეფონი</th>
        <th className="text-center">საგნები</th>
        <th className="font-bold text-center">შეცვლა</th>
      </tr>
    </thead>
  );
}

export default TableHead;
