import React from 'react'

function TableHead() {
  return (
    <thead className='w-full'>
      <tr className='w-full'>
        <th className="text-center">დასახელება</th>
        <th className="text-center">საგანი</th>
        <th className="text-center">უნივერსიტეტი</th>
        <th className="text-center">კლიენტი</th>
        <th className="font-bold text-center">შემოსვლის დრო</th>
        <th className="font-bold text-center">საჩქაროა</th>
        <th className="font-bold text-center">მიბმული ფაილები</th>
      </tr>
    </thead>
  )
}

export default TableHead