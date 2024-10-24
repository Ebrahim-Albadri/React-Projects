import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Componant/navbar';


const RootLayout = () => {
    return ( 
        <>
    <Navbar/>
    <Outlet/>
    </>
     );
}
 
export default RootLayout;