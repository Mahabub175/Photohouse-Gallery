import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AddMagazine from "../../components/dashComps/AddMagazine";
import DashboardGallery from "../../components/dashComps/gallery";
import Sidebar from "../../components/dashComps/sidebar";
import AddInterview from "../../components/dashComps/AddInterview";
import AllInterviews from "../../components/dashComps/AllInterviews";

const Index = () => {
  const router = useRouter();
  const [activePage, setActive] = useState("M");
  useEffect(() => {
    const isLoggedIn: any = localStorage.getItem("isAshrafPagel");
    if (!JSON.parse(isLoggedIn)) {
      router.push("/login");
    }
  }, [router]);
  return (
    <div className="flex overflow-hidden">
      <Sidebar setActive={setActive} />
      <div className="container mx-auto p-12">
        {activePage === "G" && <DashboardGallery />}
        {activePage === "M" && <AddMagazine />}
        {activePage === "I" && <AddInterview />}
        {activePage === "AI" && <AllInterviews />}
      </div>
    </div>
  );
};

export default Index;
