import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import photo from './img/aydee.png';
/* import './App.css'; */

const Init_page = ({ name, education, bio }) => {
    return (

        <div className="section-vcardbody section-home ps-container section-vcardbody-pgactive" id="section-home">
            <div className="vcard-profile-pic">
                {/* <img src={photo} id="profile1" className="profileActive" alt="" /> */}
            </div>
            <div className="vcard-profile-description">
                <h1 className="profile-title">Hola soy <span className="color1">{name}</span></h1>
                <h2 className="profile-subtitle">{education}</h2>
                <hr className="hr1"></hr>
                <div className="vcard-profile-description-text">
                    <p>{bio}</p>
                </div>
                <div className="vcard-profile-description-feature">
                    <div className="vcard-profile-description-ft-item">
                        <p>email:  aydee.qm@gmail.com / phone +051 979 039 472</p>
                    </div>
                </div>
            </div>
            <div className="vcard-footer">
                <div className="footer-social-icons">
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                </div>
            </div>
        </div>
    )
}

const Homepath = ({ mydata }) => {
    const listComponent = mydata.map((item, index) => {
        return <Init_page
            key={index}
            name={item.name}
            education={item.education}
            bio={item.bio}
            index={index}
        />
    })
    return (
        <section>
            {listComponent}
        </section>)
}

export default Homepath;