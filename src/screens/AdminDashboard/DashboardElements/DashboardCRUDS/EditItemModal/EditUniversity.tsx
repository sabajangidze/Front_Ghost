import React, { useEffect, useState } from "react";
import { UpdateUniversity } from "../../../../../api/PutInformation";
import { GetUniversityById } from "../../../../../api/FetchInformation";

interface EditUniversityProps {
  Id: string;
}

function EditUniversity({ Id }: EditUniversityProps) {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await UpdateUniversity(Id, name);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetUniversityById(Id);
        console.log(data);
        setName(data.name);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="font-bold">შეცვალე უნივერსიტეტი</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="უნივერსიტეტის სახელი"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn" type="submit">
          შეცვლა
        </button>
      </form>
    </div>
  );
}

export default EditUniversity;
