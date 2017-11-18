import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import photo from './img/aydee.png';
import logo from './img/title.png';
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
        <span className="blast" aria-hidden="true" style={{opacity: "1"}}>A</span>
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
      <NavLink className="flat-button" to={"/contact"}>CONTACT ME</NavLink>
      </div>
      <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt; </span>
      <div id="bulb" className="bulb">
        <a className="animated" href=""></a>
      </div>
      </div>
      {/* <div class="wrapper">
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
      </div> */}
      {/* <div className="bg" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
        <img className="jb" src={photo} alt="Front-end Developer Logo part" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }} />   
      </div> */}
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
        {listComponent}
      </section>)
    }
    
    export default Home;