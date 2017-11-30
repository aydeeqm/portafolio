import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'redux-zero/react';
import photo from './img/logo.png';
import { isHidden, clickit } from './actions';
import './css/body.css'; 

const Header = ({showing, isHide}) => {
   return (   
       <div id="nav_bar">
           <NavLink className="logo" to={"/home"}>
                <img src={photo} alt="Front-end Developer Logo, Web Developer Logo , Front End Developer Logo"/>
            </NavLink>
           <nav className="en">
               <NavLink rel="index" className="link-home" to={"/home"} exact path="/"><i className="icon-home"></i></NavLink>
               <NavLink rel="about" className="link-page" to={"/about"}><i className="icon-prof"></i></NavLink>
               <NavLink rel="skills" className="link-page" to={"/skill"}><i className="icon-gear"></i></NavLink>
               <NavLink rel="gallery" className="link-page" to={"/project"}><i className="icon-eye"></i></NavLink>
               <NavLink rel="contact" className="link-page" to={"/contact"}><i className="icon-mail"></i></NavLink>
           </nav>
           <ul>
               <li><a href="https://www.linkedin.com/in/aydeequispe" target="_blank"><i className="fa fa-linkedin"></i></a></li>    
               <li><a href="https://github.com/AydeeQM" target="_blank"><i className="fa fa-github"></i></a></li>
               <li><a href="https://www.facebook.com/QM.AyDee" target="_blank"><i className="fa fa-facebook"></i></a></li>
               <li><a href="https://twitter.com/AyDee_QM" target="_blank"><i className="fa fa-twitter"></i></a></li>
           </ul>
           <a id="mobile-link" onClick={() => isHidden()}><i className="fa fa-bars"></i></a>
           {!showing
               ? <nav className="en show">
                   <NavLink rel="index" onClick={() => clickit()} className={"link-home " + isHide ? "show":"hide"} exact path="/" to={"/home"}><i className="icon-home"></i></NavLink>
                   <NavLink rel="about" onClick={() => clickit()} className={"link-page " + isHide ? "show" : "hide"}  to={"/about"}><i className="icon-prof"></i></NavLink>
                   <NavLink rel="skills" onClick={() => clickit()} className={"link-page " + isHide ? "show" : "hide"}  to={"/skill"}><i className="icon-gear"></i></NavLink>
                   <NavLink rel="gallery" onClick={() => clickit()} className={"link-page " + isHide ? "show" : "hide"}  to={"/project"}><i className="icon-eye"></i></NavLink>
                   <NavLink rel="contact" onClick={() => clickit()} className={"link-page " + isHide ? "show" : "hide"}  to={"/contact"}><i className="icon-mail"></i></NavLink>
           </nav>: null}
       </div>
   );
}

const mapToProps = ({ showing, isHide}) => ({ showing, isHide });
export default connect(mapToProps)(Header);
//export default Header;