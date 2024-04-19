import React from 'react'

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
        <th className="text-center">რაოდენობა</th>
        <th className="text-center">დადასტურების დრო</th>
        <th className="text-center">ანგარიშის ნომერი</th>
        <th className="text-center">სტატუსი</th>
        <th className="text-center">დაკავშირებული პოსტი</th>
        <th className="text-center">შეცვლა</th>
      </tr>
    </thead>
  )
}

export default TableHead