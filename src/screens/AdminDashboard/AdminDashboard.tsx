import React from "react";
import DashboardHeader from "./DashboardElements/DashboardHeader/DashboardHeader";
import DashboardTopCards from "./DashboardElements/DashboardCharts/DashboardTopCards";
import DashboardVerticalChart from "./DashboardElements/DashboardCharts/DashboardVerticalChart";
import DashboardPieChart from "./DashboardElements/DashboardCharts/DashboardPieChart";

function AdminDashboard() {
  return (
    <div className="flex flex-col">
      <div className="header_space "></div>
      <div className="flex flex-col lg:flex-row">
        <DashboardHeader />
        <div className="flex justify-center flex-1 bg-slate-300">
          <div className="mobile_wrapper lg:my-8">
            <div className="hidden lg:flex justify-between w-full my-2">
              <h1 className="font-bold text-4xl">Dashboard</h1>
              <select className="select select-bordered">
                <option disabled>
                    აირჩიეთ დროის მონაკვეთი
                </option>
                <option selected>24 საათი</option>
                <option>48 საათი</option>
                <option>7 დღე</option>
                <option>30 დღე</option>
                <option>3 თვე</option>
                <option>6 თვე</option>
                <option>12 თვე</option>
                </select>
            </div>
            <select className="select select-bordered w-full mt-4 lg:hidden">
              <option disabled>
                აირჩიეთ დროის მონაკვეთი
              </option>
              <option selected>24 საათი</option>
              <option>48 საათი</option>
              <option>7 დღე</option>
              <option>30 დღე</option>
              <option>3 თვე</option>
              <option>6 თვე</option>
              <option>12 თვე</option>
            </select>
            <DashboardTopCards />
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <div className="lg:h-[60%]">
                <DashboardVerticalChart />
              </div>
              <div className="lg:h-[60%]">
                <DashboardPieChart />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
