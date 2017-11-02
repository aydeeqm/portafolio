import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Headerpath = () => {
    return (

        <div className="bienvenida text-center">
            <header>
                <h1 className='logo'>
                    <a href='#/'> </a>
                </h1>
                <div className="main-menu main-menu-pgactive" id="main-menu">
                    <ul className="main-menu-list">
                        <li><NavLink className="link-home" to={"/home"} exact path="/">Home</NavLink></li>
                        <li><NavLink className="link-page" to={"/about"}>About me</NavLink></li>
                        <li><NavLink className="link-page" to={"/skill"}>Skills</NavLink></li>
                        <li><NavLink className="link-page" to={"/project"}>Project</NavLink></li>
                        <li><NavLink className="link-page" to={"/contact"}>Contact me</NavLink></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Headerpath;