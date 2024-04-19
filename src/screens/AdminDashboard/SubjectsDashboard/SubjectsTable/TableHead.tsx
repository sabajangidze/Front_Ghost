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
        <th className="text-center">დასახელება</th>
        <th className="text-center">კოდი</th>
        <th className="text-center">უნივერსიტეტი</th>
        <th className="text-center">ლექტორი</th>
        <th className="font-bold text-center">შეცვლა</th>
      </tr>
    </thead>
  );
}

export default TableHead;
