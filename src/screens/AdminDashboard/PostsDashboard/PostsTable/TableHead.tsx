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
        <th className="text-center">შემოსვლის დრო</th>
        <th className="text-center">დასახელება</th>
        <th className="text-center">აღწერა</th>
        <th className="text-center">სტატუსი</th>
        <th className="text-center">საჩქაროა?</th>
        <th className="text-center">საგანი</th>
        <th className="text-center">მომხმარებელი</th>
        <th className="text-center">მწერალი</th>
        <th className="font-bold text-center">შეცვლა</th>
      </tr>
    </thead>
  );
}

export default TableHead;
