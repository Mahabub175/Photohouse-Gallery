import React from 'react';
import DashboardGallery from '../../components/dashComps/gallery';
import Sidebar from '../../components/dashComps/sidebar';

const index = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="container mx-auto p-12">
                <DashboardGallery />
            </div>
        </div>
    );
};

export default index;