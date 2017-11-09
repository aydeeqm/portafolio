import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Headerpath from './Headerpath';
import Homepath from './Homepath';
import {mydata} from './Data'
import { connect } from 'redux-zero/react';
/* import './App.css'; */

const Third_page = ({title, html, jquery, javascript, git, css, bootstrap, react }) => {
    return (
        <div className="section-vcardbody section-page ps-container ps-active-y section-page-active" id="page-skills">
            <div className="section-skills">
            <h2 className="section-title">{title}</h2>
            
            <h3 className="section-item-title-2"><i className="fa fa-code"></i>&nbsp;&nbsp; Code Skills</h3>
            <ul className="skills-list">
                <li>
                    <div className="progress">
                        <div className="progress-bar" data-percent="80%" role="progressbar" style={{width: "80%"}}>
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
    )
}

const Skills = () => {  
      return (
          <div>
              <Headerpath />
              <Homepath mydata={mydata}/>
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