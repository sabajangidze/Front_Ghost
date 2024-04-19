import React, { useEffect, useState } from "react";
import { UpdateLecturer, UpdateUniversity } from "../../../../../api/PutInformation";
import { GetLecturerById, GetUniversityById } from "../../../../../api/FetchInformation";

interface EditLecturerProps {
  Id: string;
}

function EditLecturer({ Id }: EditLecturerProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await UpdateLecturer(Id, firstName, lastName, phoneNumber, email);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetLecturerById(Id);
        console.log(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhoneNumber(data.phoneNumber);
        setEmail(data.email);


      } catch (error) {
        console.error("Error fetching Lecturers:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="font-bold">შეცვალე ლექტორი</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <input
                    type="text"
                    placeholder="სახელი"
                    className="input input-bordered w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="გვარი"
                    className="input input-bordered w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="ტელეფონის ნომერი"
                    className="input input-bordered w-full"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="ელ. ფოსტა"
                    className="input input-bordered w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn" type="submit">დადასტურება</button>
            </form>
    </div>
  );
}

export default EditLecturer;
