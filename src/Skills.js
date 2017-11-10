import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import {mydata} from './Data'
import { connect } from 'redux-zero/react';
import './css/body.css'; 

const Third_page = ({title, html, jquery, javascript, git, css, bootstrap, react }) => {
    return (
        <div id="page" class="en">
            <div class="container skills" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div class="text-zone">
                    <h1 aria-label=" Skills &amp; Experience" class="blast-root">
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>Habilidades&nbsp;</span>
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>&amp; </span>
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>&nbsp;Experiencia</span>
                    </h1>
                    <p aria-label="Main area of my expertise is front end development and everything related with this side of web.&nbsp; &nbsp;HTML,CSS, JS (ES5,ES6), building small &amp; medium Web Apps, React , Vue.js, building custom plugins, features, animations and just coding layouts." class="blast-root">
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>El área principal de mi experiencia es el desarrollo de front-end y todo lo relacionado con este lado de la web. HTML, CSS, JS (ES5, ES6), creación de aplicaciones Web pequeñas y medianas, Angular, Vue.js, creación de complementos personalizados, características, animaciones y diseños de codificación simple.</span>
                    </p>
{/*                     <p aria-label="Often I work as a full-stack develeoper&nbsp; – mainly in Lamp environment, PHP and open source CMS’s like (WordPress, Drupal, Magento, Typo 3 etc..) ." class="blast-root">
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>Often I work as a full-stack develeoper&nbsp; – mainly in Lamp environment, PHP and open source CMS’s like (WordPress, Drupal, Magento, Typo 3 etc..) .</span>
                    </p> */}
{/*                     <p aria-label="I have also some experience with Node.js,&nbsp; Mongo DB (Keystone.JS)." class="blast-root">
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>I have also some experience with Node.js,&nbsp; Mongo DB (Keystone.JS).</span>
                    </p> */}
{/*                     <p aria-label="Would like to know more? Please check my LinkedIn profile or just&nbsp;contact me." class="blast-root">
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>Would like to know more? Please check my
                        <a href="https://www.linkedin.com/in/jacek-jeznach-0a99b640" target="_blank">LinkedIn</a> profile or just&nbsp;<a href="/contact">contact</a> me.</span>
                    </p> */}
                </div>
                <div class="skills-charts">
                    <div id="myCanvasContainer">
                        <div className="section-skills" id="myCanvas">
                                <h2 className="section-title">{title}</h2>

                                <h3 className="section-item-title-2"><i className="fa fa-code"></i>&nbsp;&nbsp; Code Skills</h3>
                                <ul className="skills-list">
                                    <li>
                                        <div className="progress">
                                            <div className="progress-bar" data-percent="80%" role="progressbar" style={{ width: "80%" }}>
                                                <span className="sr-only">80% Complete</span>
                                            </div>
                                            <span className="progress-type">HTML5 / CSS3</span>
                                            <span className="progress-completed">80%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-2" data-percent="60%" role="progressbar" style={{ width: "60%" }}>
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                            <span className="progress-type">Javascript</span>
                                            <span className="progress-completed">70%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style={{ width: "40%" }}>
                                                <span className="sr-only">40% Complete</span>
                                            </div>
                                            <span className="progress-type">Jquery</span>
                                            <span className="progress-completed">40%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-3" data-percent="70%" role="progressbar" style={{ width: "70%" }}>
                                                <span className="sr-only">70% Complete</span>
                                            </div>
                                            <span className="progress-type">Bootstrap</span>
                                            <span className="progress-completed">70%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-3" data-percent="70%" role="progressbar" style={{ width: "70%" }}>
                                                <span className="sr-only">70% Complete</span>
                                            </div>
                                            <span className="progress-type">Git</span>
                                            <span className="progress-completed">70%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-3" data-percent="60%" role="progressbar" style={{ width: "60%" }}>
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                            <span className="progress-type">React / Redux</span>
                                            <span className="progress-completed">60%</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                <span class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt; </span>
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

