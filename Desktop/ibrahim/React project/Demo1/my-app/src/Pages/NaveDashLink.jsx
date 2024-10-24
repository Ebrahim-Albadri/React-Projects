import React from 'react';
import { NavLink } from 'react-router-dom';


const NaveDashBord = () => {
    return ( 
        <>
          <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className ="nav-link" style={({isActive}) => ({color: isActive ? "red" : "blue" })} to="users" >Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={({isActive}) => ({color: isActive ? "red" : "blue" })} to="posts">Posts</NavLink>
        </li>
      </ul>   
        </>
     );
}
 
export default NaveDashBord;