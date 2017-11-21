import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { mydata } from './Data';
import { connect } from 'redux-zero/react';
import './css/body.css';


const Last_page = () => {
    return (
        <div id="page" className="en">
            <div className="container about" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div>
                    <div>Mi nombre es Aydee me encanta programar y soy uana super desarrolladora web
                        quiero en mi futuro llegar a ganar premios y ser reconicda anivelmudial llegaremos almmudial
                        sere muy grande fullstack.
                    </div>
                </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt;</span>
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