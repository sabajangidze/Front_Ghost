import React, { useState } from "react";
import { AddUniversity as AddUniversityFunction } from "../../../../../api/PostInformation";

function AddUniversity() {
    const [name, setName] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        AddUniversityFunction(name);
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            <h1 className="font-bold">დაამატე უნივერსიტეტი</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <input
                    type="text"
                    placeholder="უნივერსიტეტის სახელი"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="btn" type="submit">დადასტურება</button>
            </form>
        </div>
    );
}

export default AddUniversity;
