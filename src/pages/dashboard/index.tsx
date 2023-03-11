import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AddMagazine from '../../components/dashComps/AddMagazine';
import DashboardGallery from '../../components/dashComps/gallery';
import Sidebar from '../../components/dashComps/sidebar';

const Index = () => {
    const router = useRouter()
    const [activePage, setActive] = useState("M")
    useEffect(() => {
        const isLoggedIn: any = localStorage.getItem("isAshrafPagel")
        if (!JSON.parse(isLoggedIn)) {
            router.push("/login")
        }
    }, [])
    return (
        <div className="flex">
            <Sidebar setActive={setActive} />
            <div className="container mx-auto p-12">
                {activePage === "G" && <DashboardGallery />}
                {activePage === "M" && <AddMagazine />}
            </div>
        </div>
    );
};

export default Index;