import React, { useEffect, useState } from "react";
import { AddSubject as AddSubjectFunction } from "../../../../../api/PostInformation";
import University from "../../../../../types/University";
import { FetchLecturers, FetchUniversities } from "../../../../../api/FetchInformation";
import Lecturer from "../../../../../types/Lecturer";

function AddSubject() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [university, setUniversity] = useState("");
  const [lecturer, setLecturer] = useState("");

  const [allUniversities, setAllUniversities] = useState<University[]>([]);
  const [allLecturers, setAllLecturers] = useState<Lecturer[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddSubjectFunction(name, code, university, lecturer);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uniData = await FetchUniversities();
        setAllUniversities(uniData);
        const LectData = await FetchLecturers();
        setAllLecturers(LectData);
      } catch (error) {
        console.error("Error fetching universities Or Lecturers:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(lecturer);
  // console.log(university)

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="font-bold">დაამატე საგანი</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="დასახელება"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="კოდი"
          className="input input-bordered w-full"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <select
          className="select select-bordered w-full"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        >
          <option disabled value="">
            აირჩიე უნივერსიტეტი
          </option>
          {allUniversities &&
            allUniversities.map((uni) => (
              <option
                key={uni.id}
                value={uni.id}
                onClick={() => setUniversity(uni.id)}
              >
                {uni.name}
              </option>
            ))}
        </select>

        <select
          className="select select-bordered w-full"
          value={lecturer}
          onChange={(e) => setLecturer(e.target.value)}
        >
          <option disabled value="">
            აირჩიე ლექტორი
          </option>
          {allLecturers &&
            allLecturers.map((lecturer) => (
              <option
                key={lecturer.id}
                value={lecturer.id}
                onClick={() => setUniversity(lecturer.id)}
              >
                {lecturer.firstName+' '+lecturer.lastName}
              </option>
            ))}
        </select>

        <button className="btn" type="submit">
          დადასტურება
        </button>
      </form>
    </div>
  );
}

export default AddSubject;
