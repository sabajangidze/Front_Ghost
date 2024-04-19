import React, { useEffect, useState } from "react";
import PostStatus from "../../../../../types/PostStatus";
import University from "../../../../../types/University";
import Post from "../../../../../types/Post";
import { FetchUniversities } from "../../../../../api/FetchInformation";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

import { AddUser as AddUserFunction } from "../../../../../api/PostInformation";

function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registrationDateUtc, setRegistrationDateUtc] = useState(new Date().toISOString());
  const [university, setUniversity] = useState("");

  const [allUniversities, setAllUniversities] = useState<University[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      AddUserFunction(userName, email, firstName, lastName, phoneNumber, registrationDateUtc, university );
  };

  console.log(registrationDateUtc);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uniData = await FetchUniversities();
        setAllUniversities(uniData);
      } catch (error) {
        console.error("Error fetching universities Or Lecturers:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(status);

  const handleValueChange = (newValue: typeof registrationDateUtc) => {
    console.log("newValue:", newValue); 
    setRegistrationDateUtc(newValue); 
    }

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="font-bold">დაამატე მომხმარებელი</h1>
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

export default AddUser;
