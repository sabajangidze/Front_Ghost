import React, { useEffect, useState } from "react";
import University from "../../../../../types/University";
import {
  FetchUniversities,
  GetUserById,
} from "../../../../../api/FetchInformation";
import { UpdateUser } from "../../../../../api/PutInformation";

interface EditUserProps {
  id: string;
}

function EditUser({ id }: EditUserProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registrationDateUtc, setRegistrationDateUtc] = useState(
    new Date().toISOString()
  );
  const [university, setUniversity] = useState("");

  const [allUniversities, setAllUniversities] = useState<University[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await UpdateUser(id, userName, email, firstName, lastName, phoneNumber, registrationDateUtc, university);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetUserById(id);
        setUserName(data.userName);
        setEmail(data.email);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhoneNumber(data.phoneNumber);
        setRegistrationDateUtc(data.registrationDateUtc);
        setUniversity(data.university.id);

        const uniData = await FetchUniversities();
        setAllUniversities(uniData);
      } catch (error) {
        console.error("Error fetching Lecturers:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="font-bold">შეცვალე მომხმარებელი</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="ელ. ფოსტა"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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

        <select
          className="select select-bordered w-full"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        >
          <option disabled value="">
            აირჩიე უნივერსიტეტი
          </option>
          {allUniversities &&
            allUniversities.map((university) => (
              <option
                key={university.id}
                value={university.id}
                onClick={() => setUniversity(university.id)}
              >
                {university.name}
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

export default EditUser;
