import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import photo from './img/mark.png';
import './css/body.css'; 

const Header = () => {
   return (   
       <div id="nav_bar">
           <a className="logo" rel="index" href="#">
               <img src={photo} alt="Front-end Developer Logo, Web Developer Logo , Front End Developer Logo" style={{width: "50%"}} />
           </a>
           <nav className="en">
               <NavLink rel="index" className="link-home" to={"/home"} exact path="/"><i className="icon-home"></i></NavLink>
               <NavLink rel="about" className="link-page" to={"/about"}><i className="icon-prof"></i></NavLink>
               <NavLink rel="skills" className="link-page" to={"/skill"}><i className="icon-gear"></i></NavLink>
               <NavLink rel="gallery" className="link-page" to={"/project"}><i className="icon-eye"></i></NavLink>
               <NavLink rel="contact" className="link-page" to={"/contact"}><i className="icon-mail"></i></NavLink>
           </nav>
           <ul>
               <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
               <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
               <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
               <li><a href="#" target="_blank"><i className="fa fa-github"></i></a></li>
           </ul>
           <a id="mobile-link" href=""><i className="fa fa-bars"></i></a>
       </div>
   );
}


export default Header;