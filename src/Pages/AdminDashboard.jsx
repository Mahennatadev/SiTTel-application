import React from "react";
import ANavbar from "../Components/ANavbar";
import ADashboardAbout from "../Components/ADashboardAbout";
import ADashboardMainBox from "../Components/ADashboardMainBox";
import ADashboardNotification from "../Components/ADashboardNotification";

const AdminDashboard = () => {
  return (
    <div>
      <ANavbar />
      <ADashboardAbout />
      <ADashboardMainBox />
      <ADashboardNotification />
    </div>
  );
};

export default AdminDashboard;
