import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import {mydata} from './Data'
import { connect } from 'redux-zero/react';
import './css/body.css'; 

const Third_page = ({title, html, jquery, javascript, git, css, bootstrap, react }) => {
    return (
        <div id="page" className="en">
            <div className="container skills" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="text-zone">
                    <h1 aria-label=" Skills &amp; Experience" className="blast-root">
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>Habilidades&nbsp;</span>
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>&amp; </span>
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>&nbsp;Experiencia</span>
                    </h1>
                    <p aria-label="Main area of my expertise is front end development and everything related with this side of web.&nbsp; &nbsp;HTML,CSS, JS (ES5,ES6), building small &amp; medium Web Apps, React , Vue.js, building custom plugins, features, animations and just coding layouts." className="blast-root">
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>El área principal de mi experiencia es el desarrollo de front-end y todo lo relacionado con este lado de la web. HTML, CSS, JS (ES5, ES6), creación de aplicaciones Web pequeñas y medianas, Angular, Vue.js, creación de complementos personalizados, características, animaciones y diseños de codificación simple.</span>
                    </p>
                </div>
                <div className="skills-charts">
                    <div className="section-skills">
                        <h2 className="section-title">{title}</h2>
                        <h3 className="section-item-title-2"><i className="fa fa-code"></i>&nbsp;&nbsp; Code Skills</h3>
                        <ul className="skills-list">
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-1" data-percent="80%" role="progressbar" style={{ width: "80%" }}>
                                        <span className="sr-only">80% Complete</span>
                                    </div>
                                    <span className="progress-type"><i className="devicon-html5-plain"></i> HTML5</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-2" data-percent="60%" role="progressbar" style={{ width: "60%" }}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                    <span className="progress-type"><i className="devicon-css3-plain"></i> CSS3</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-3" data-percent="60%" role="progressbar" style={{ width: "60%" }}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                    <span className="progress-type"><i className="devicon-javascript-plain"></i> Javascript</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-4" data-percent="40%" role="progressbar" style={{ width: "40%" }}>
                                        <span className="sr-only">40% Complete</span>
                                    </div>
                                    <span className="progress-type"><i className="devicon-jquery-plain"></i> Jquery</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-5" data-percent="70%" role="progressbar" style={{ width: "70%" }}>
                                        <span className="sr-only">70% Complete</span>
                                    </div>
                                    <span className="progress-type"><i className="devicon-bootstrap-plain"></i> Bootstrap</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-6" data-percent="70%" role="progressbar" style={{ width: "70%" }}>
                                        <span className="sr-only">70% Complete</span>
                                    </div>
                                    <span className="progress-type"><i className="devicon-git-plain"></i> Git</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-7" data-percent="60%" role="progressbar" style={{ width: "60%" }}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                    <span className="progress-type"> <i className="devicon-react-original"></i> React / Redux</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-8" data-percent="60%" role="progressbar" style={{ width: "60%" }}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                    <span className="progress-type"><i className="devicon-sass-original"></i> Sass</span>
                                    {/* <span className="progress-completed">60%</span> */}
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-9" data-percent="60%" role="progressbar" style={{ width: "60%" }}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                    <span className="progress-type"><i className="devicon-illustrator-plain"></i> Illustrator</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar-10" data-percent="60%" role="progressbar" style={{ width: "60%" }}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                    <span className="progress-type"><i className="devicon-photoshop-plain"></i> Photoshop</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt; </span>
            </div>
        </div>
        
    )
}

const Skills = () => {  
      return (
          <div>
              <Header />
            <section>
                <Third_page title={'Mis Habilidades'}
                html={'HTML5'}
                jquery={'JQUERY'}
                javascript={'JAVASCRIPT'}
                git={'GIT'}
                css={'CSS'}
                bootstrap={'BOOTSTRAP'}
                react={'REACT / REDUX'}
                />
            </section>
        </div>
      )
    }

const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(Skills);

