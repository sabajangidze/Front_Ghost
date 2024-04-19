import React, { useState } from "react";
import { AddLecturer as AddLecturerFunction } from "../../../../../api/PostInformation";

function AddLecturer() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        AddLecturerFunction(firstName,lastName,phoneNumber,email);
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            <h1 className="font-bold">დაამატე ლექტორი</h1>
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

export default AddLecturer;
