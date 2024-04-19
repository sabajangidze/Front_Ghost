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
        <th className="text-center">საგნები</th>
        <th className="text-center">სტუდენტები</th>
        <th className="font-bold text-center">შეცვლა</th>
      </tr>
    </thead>
  );
}

export default TableHead;
