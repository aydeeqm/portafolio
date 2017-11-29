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
                        <div>
                            <h2 className="section-title">{title}</h2>
                            <h3 className="section-item-title-2"><i className="fa fa-code"></i>&nbsp;&nbsp; Code Skills</h3>
                        </div>
                        <div class="container-fluid wrap">
                            <div className="col-lg-12 col-md-12 col-ms-12">
                                <div class="progress-radial progress-85 col-lg-3 col-sm-3 col-md-3 col-xs-3">
                                    <div class="overlay"><i class="devicon-html5-plain-wordmark colored"></i></div>
                                </div>

                                <div class="progress-radial progress-70 col-lg-3 col-sm-3 col-md-3 col-xs-3">
                                    <div class="overlay"><i class="devicon-javascript-plain colored"></i></div>
                                </div>

                                <div class="progress-radial progress-80 col-lg-3 col-sm-3 col-md-3 col-xs-3">
                                    <div class="overlay"><i class="devicon-css3-plain-wordmark colored"></i></div>
                                </div>

                                <div class="progress-radial progress-65 col-lg-3 col-sm-3 col-md-3 col-xs-3">
                                    <div class="overlay"><i class="devicon-react-original-wordmark colored"></i></div>
                                </div>

                                <div class="progress-radial progress-75 col-lg-3 col-sm-3 col-md-3 col-xs-3">
                                    <div class="overlay"><i class="devicon-jquery-plain-wordmark colored"></i></div>
                                </div>

                                <div class="progress-radial progress-85 col-lg-3 col-sm-3 col-md-3 col-xs-3">
                                    <div class="overlay"><i class="devicon-bootstrap-plain-wordmark colored"></i></div>
                                </div>

                                <div class="progress-radial progress-70 col-lg-3 col-sm-3 col-md-3 col-xs-3">
                                    <div class="overlay"><i class="devicon-sass-original colored"></i></div>
                                </div>

                                <div class="progress-radial progress-70 col-lg-3 col-sm-6 col-md-4 col-xs-6">
                                    <div class="overlay"><i class="devicon-git-plain-wordmark colored"></i></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="section-item-title-2"><i class="fa fa-delicious" aria-hidden="true"></i>&nbsp;&nbsp; Desing Skills</h3>
                        </div>
                        <ul className="skills-list">
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

