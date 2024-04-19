import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import Writer from "../../../../types/Writer";
import { FetchWriters } from "../../../../api/FetchInformation";

function WritersTable() {
  const [writers, setWriters] = useState<Writer[]>([]); // Use [] instead of null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchWriters();
        setWriters(data);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <TableHead />
        <tbody>
          {writers &&
            writers.map((writer, index) => (
              <TableRow
                key={writer.id}
                id={writer.id}
                firstName={writer.firstName}
                lastName={writer.lastName}
                email={writer.email}
                phoneNumber={writer.phoneNumber}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default WritersTable;
