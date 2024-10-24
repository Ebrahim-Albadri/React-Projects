import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {  } 
  render() { 
    return (
      <nav className="navbar navbar-expand-sm bg-light">

      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink className={({isActive}) => `nav-link ${isActive && "active"}`} to="/About us">Link 1</NavLink> 
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => `nav-link ${isActive && "active"}`} to="/home">Link 2</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => `nav-link ${isActive && "active"}`} to="/about us">Link 3</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => `nav-link ${isActive && "active"}`} to="/dashbord">dashbord</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => `nav-link ${isActive && "active"}`} to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => `nav-link ${isActive && "active"}`} to="/sign">Sign</NavLink>
          </li>
        </ul>
        <span className="btn btn-primary">{this.props.ProductsCount}</span>
      </div>
      
    
    </nav>
    );
  }
}
 
export default Navbar;