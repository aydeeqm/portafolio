import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { mydata } from './Data';
import { connect } from 'redux-zero/react';
import mirada from './img/mirada.jpg';
import './css/body.css';


const Last_page = () => {
    return (
        <div id="page" className="en">
            <div className="container contact" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                    <div className="text-zone">
                        <h1 aria-label=" Contact me" className="blast-root">
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>C</span>
                            <span className="blast" aria-hidden="true" style={{ opacity: 1}}>o</span>
                            <span className="blast" aria-hidden="true" style={{ opacity: 1}}>n</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>t</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>a</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>c</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>t</span>
                            <span className="blast" aria-hidden="true" style={{ opacity: 1 }}>a</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>m</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>e</span>
                        </h1>
                        <p>Si tiene alguna pregunta, no dude en ponerse en contacto...</p>
                        <h2>Aydee Quispe</h2>
                        <h2>aydee.qm@gmail.com</h2>
                        <h2>979039472</h2>
                        <a href="#" className="button_download"><i className="fa fa-download" aria-hidden="true"></i> Download Resume</a>
                    </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt;</span>
            </div>
            <div className="map-wrap">
                <div id="map">
                {/* <img src={mirada} style={{width:"61%"}} className="img-responsive"/> */}
                </div>
            </div>
        </div>
    )
}

const Contact = ({ mydata }) => {
    const lastComponent = mydata.map((item, index) => {
        return <Last_page
            key={index}
            index={index}
        />
    })
    return (
        <div>
            <Header />
            <section >
                {lastComponent}
            </section>
        </div>
    )
}


const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(Contact);