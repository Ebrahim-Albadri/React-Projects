import React from 'react';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Navbar from './navbar';
import Home from '../Pages/home';
import AboutUs from './../Pages/about us';
import RootLayout from '../RootLayout/mainRoot';
import HomeDashbord from './../Pages/homeDashbord';
import Users from '../Pages/users';
import Posts from '../Pages/posts';
import Sign from './form';
import Test from './test';



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element ={<RootLayout/>}>
                <Route index element ={<Home />} />
                <Route path='home' element ={<Home />} />
                <Route path='About us' element={<AboutUs />} />
                <Route path='sign' element={<Sign/>} />
                <Route path='test' element={<Test/>} />
                <Route path='dashbord' element={<HomeDashbord/>} />
                        <Route path='users' element={<Users/>}/>
                        <Route path='posts' element={<Posts/>}/>
                <Route/>
                <Route path='*' element={<Error/>}/>
        </Route>
    )
);


const App = () => {
    return ( 
        <RouterProvider router={router} />
     );
}
 
export default App;