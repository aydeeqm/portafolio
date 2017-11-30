import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import {mydata} from './Data';
import top from './img/5mejores.png'
import best from './img/best_squada.png';
import rock from './img/ROCKING.png';
import fondo from './img/fondoabout.jpg';
import { connect } from 'redux-zero/react';
import './css/body.css';

const Second_page = ({bio1, bio2, bio3}) => {
    return (
        <div id="page" className="en">
            <div className="container about" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="text-zone">
                    <h1 aria-label=" About me" className="blast-root">
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>Acerca&nbsp;</span>
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>de&nbsp;</span>
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>mí</span>
                    </h1>
                    <p aria-label="Hola." className="blast-root">
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>{bio1}</span>
                    </p>
                    <p aria-label="Hola." className="blast-root">
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>{bio2}</span>
                    </p>
                    <p aria-label="Hola." className="blast-root">
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>{bio3}</span>
                    </p>
                </div>
                <div className="sound-cloud">
                    <h2 className="section-title">{'_Disitinción de Laboratoria.'}</h2>
                    <div className="distinciones">
                        <div className="top">
                            <img src={top} style={{ width: "80px", height: "75px" }} />&nbsp;
                        </div>
                        <div className="rock">
                            <img src={rock} />&nbsp;
                        </div>
                        <div className="best">
                            <img src={best} />&nbsp;
                        </div>
                    </div>
                </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt;</span>
            </div>
            <div className="photoportada"></div>
        </div>
    )
}

const About = ({ mydata }) => {  
      const aboutComponent = mydata.map((item, index) => {
        return <Second_page
            key={index}
            bio1={item.bio[0]}
            bio2={item.bio[1]}
            bio3={item.bio[2]}
            index={index}
        />
      })
      return (
        <div>
            <Header/>
            <section >
                {aboutComponent}
            </section>
        </div>
      )
    }


    const mapToProps = ({ mydata }) => ({ mydata });
    export default connect(mapToProps)(About);