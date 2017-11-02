import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import photo from './img/aydee.png';
import profileo from './img/profile.jpg';
import profileto from './img/profile2.jpg';
import './App.css';

const Init_page = ({ name, education, bio }) => {
    return (
            
      <div className="section-vcardbody section-home" id="section-home">
                <div className="vcard-profile-pic">
                  <img src={profileo} id="profile2" alt="" />
                  <img src={photo} id="profile1" className="profileActive" alt="" />
                </div>
                <div className="vcard-profile-description">
                  <h1 className="profile-title">Hi, I'm <span className="color1">{name}</span></h1>
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

const Home = ({ mydata }) => {  
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
{/*         <div class="loader-container" id="page-loader"> 
        <div class="loading-wrapper">
          <div class="loader-animation" id="loader-animation">
            <span class="loader"><span class="loader-inner"></span></span>
          </div>    
          <div class="loader-name" id="loader-name">
            Aydee <strong>Quispe</strong>
          </div>
          <p class="loader-job" id="loader-job">Web Designer & Web Developer</p>
        </div>   
      </div> */}
        {listComponent}
      </section>)
    }
    
    export default Home;