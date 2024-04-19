import React from "react";
import DashboardHeader from "../DashboardElements/DashboardHeader/DashboardHeader";
import UsersTable from "./UsersTable/UsersTable";
import DashboardCRUDS from "../DashboardElements/DashboardCRUDS/DashboardCRUDS";



function UsersDashboard() {
  return (
    <div className="flex flex-col">
      <div className="header_space"></div>
      <div className="flex flex-col lg:flex-row">
        <DashboardHeader />
        <div className="flex justify-center flex-1 bg-slate-300 overflow-x-scroll">
          <div className="mobile_wrapper lg:my-8">
            <DashboardCRUDS Title="მომხმარებლები" />
            <UsersTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersDashboard;
