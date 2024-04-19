import React from "react";
import DashboardHeader from "../DashboardElements/DashboardHeader/DashboardHeader";
import DashboardCRUDS from "../DashboardElements/DashboardCRUDS/DashboardCRUDS";

import LecturersTable from './LecturersTable/LecturersTable';

function LecturersDashboard() {
  return (
    <div className="flex flex-col">
      <div className="header_space bg-main-purple"></div>
      <div className="flex flex-col lg:flex-row">
        <DashboardHeader />
        <div className="flex justify-center flex-1 bg-slate-300">
          <div className="mobile_wrapper lg:my-8">
            <DashboardCRUDS Title="ლექტორები" />
            <LecturersTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LecturersDashboard;
