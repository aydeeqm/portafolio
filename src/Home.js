import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import photo from './img/aydee.png';
import logo from './img/mark.png';
import './css/body.css'; 

const Init_page = ({ name, education, bio }) => {
    return (
<div id="page" className="en">
  <div className="container home-page" style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
    <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
    <div className="text-zone">
      <h1 aria-label=" Hola, Soy  ydee,web developer." className="blast-root"> 
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>H</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>o</span>
        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>l</span>
        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>a</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>,</span><br></br>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>S</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>o</span>
        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>y&nbsp;</span>
        <img src={logo} alt="Front-end Developer Name, Web Developer Name" className="animation-logo"/>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>y</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>d</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>e</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>e</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>,</span><br></br>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>W</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>e</span>
        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>b&nbsp;</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>D</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>e</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>v</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>e</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>l</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>o</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>p</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>e</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>r</span>
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>.</span>
      </h1>
      <h2>Front End Developer / Javascript / React / Redux</h2> 
      <a rel="contact" href="#" className="flat-button">CONTACT ME</a>
      </div>
      <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt; </span>
      <div id="bulb" className="bulb">
        <a className="animated" href=""></a>
      </div>
      </div>
      <div class="wrapper">
        <ul class="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="bg" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
        <img className="jb" src={photo} alt="Front-end Developer Logo part" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }} />   
      </div>
</div>
            
/*       <div className="section-vcardbody section-home" id="section-home">
                <div className="vcard-profile-pic">
                  <img src={photo} id="profile1" className="profileActive" alt="" />
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
      </div> */
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
        {listComponent}
      </section>)
    }
    
    export default Home;