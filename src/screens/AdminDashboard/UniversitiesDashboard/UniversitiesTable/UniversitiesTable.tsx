import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { FetchUniversities } from "../../../../api/FetchInformation";
import Post from "../../../../types/Post";

interface University {
  id: string;
  name: string;
}

function UniversitiesTable() {
  const [universities, setUniversities] = useState<University[]>([]); // Use [] instead of null
  const [universityPosts, setUnivesityPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchUniversities();
        setUniversities(data);

      } catch (error) {
        console.error("Error fetching universities or university subjects or university students:", error);
      }
    };

    fetchData();
  }, []);

  console.log(universities);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <TableHead />
        <tbody>
          {universities &&
            universities.map((university, index) => (
              <TableRow
                key={university.id}
                id={university.id}
                name={university.name}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UniversitiesTable;
