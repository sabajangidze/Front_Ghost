import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import User from "../../../../types/User";
import { FetchUsers } from "../../../../api/FetchInformation";

function UsersTable() {
  const [users, setUsers] = useState<User[]>([]); // Use [] instead of null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <TableHead />
        <tbody>
          {users && 
          users.map((user,index) => (
            <TableRow
            id={user.id}
            userName={user.userName}
            email={user.email}
            firstName={user.firstName}
            lastName={user.lastName}
            phoneNumber={user.phoneNumber}
            registrationDateUtc={user.registrationDateUtc}
            university={user.university}
            posts={user.posts}
          />
          ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
