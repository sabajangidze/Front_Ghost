import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { FetchSubjects, FetchUniversities } from "../../../../api/FetchInformation";
import Subject from "../../../../types/Subject";


function SubjectsTable() {
  const [subjects, setSubjects] = useState<Subject[]>([]); // Use [] instead of null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchSubjects();
        setSubjects(data);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchData();
  }, []);

  console.log(subjects);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <TableHead />
        <tbody>
          {subjects &&
            subjects.map((subject, index) => (
              <TableRow
                key={subject.id}
                id={subject.id}
                name={subject.name}
                code={subject.code}
                lecturer={subject.lecturer}
                university={subject.university}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectsTable;
