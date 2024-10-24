import React from 'react';
import { Outlet } from "react-router-dom";
import HomeDashbord from '../Pages/homeDashbord';
import NaveDashBord from '../Pages/NaveDashLink';



const DashbordLayout = () => {
    return ( 
        <>
            <Outlet/>
            <NaveDashBord/>
        </>
     );
}
 
export default DashbordLayout;