import React, { useEffect, useState } from "react";
import { GetWriterById } from "../../../../../api/FetchInformation";
import { UpdateWriter } from "../../../../../api/PutInformation";

interface EditWriterProps {
    id: string;
}

function EditWriter({id}:EditWriterProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await UpdateWriter(id, firstName, lastName, email, phoneNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetWriterById(id);
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
      <h1 className="font-bold">შეცვალე მწერალი</h1>
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
        <button className="btn" type="submit">
          დადასტურება
        </button>
      </form>
    </div>
  );
}

export default EditWriter;
