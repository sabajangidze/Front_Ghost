import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { FetchLecturers, FetchUniversities } from "../../../../api/FetchInformation";

interface Lecturer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subjects?: string[];
}

function UniversitiesTable() {
  const [lecturers, setLecturers] = useState<Lecturer[]>([]); // Use [] instead of null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchLecturers();
        setLecturers(data);
      } catch (error) {
        console.error("Error fetching Lecturers:", error);
      }
    };

    fetchData();
  }, []);

  console.log(lecturers);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <TableHead />
        <tbody>
          {lecturers &&
            lecturers.map((lecturer, index) => (
              <TableRow
                key={lecturer.id}
                Id={lecturer.id}
                FirstName={lecturer.firstName}
                LastName={lecturer.lastName}
                Email={lecturer.email}
                PhoneNumber={lecturer.phoneNumber}
                Subjects={lecturer.subjects}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UniversitiesTable;
