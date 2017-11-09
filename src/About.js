import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Homepath from './Homepath'
import {mydata} from './Data';
import top from './img/top_5.png'
import best from './img/best_squad.png';
import rock from './img/ROCKING.png';
import { connect } from 'redux-zero/react';
import './css/body.css';


const Second_page = ({bio}) => {
    return (
        <div id="page" class="en">
            <div class="container about" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div class="text-zone">
                    <h1 aria-label=" About me" class="blast-root">
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>A</span>
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>b</span>
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>o</span>
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>u</span>
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>t&nbsp;</span>
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>m</span>
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>e</span>
                    </h1>
                    <p aria-label="Everything started with passion to web technologies (Flash, HTML).&nbsp; In 2008 I got my first commercial work as a junior front-end developer in MUSO agency located in PL, Szczecin." class="blast-root">
                        <span class="blast" aria-hidden="true" style={{ opacity: "1" }}>{bio}</span>
                    </p>
                </div>
                <div className="text-zone">
                    <h2 className="section-title">{'<DISTINCIÓN DE LABORATORIA>'}</h2>
                    <div>
                        <span>
                            <img src={top} />
                        </span>
                        <span>
                            <img src={rock} />
                        </span>
                        <span>
                            <img src={best} />
                        </span>
                    </div>
                </div>
                <div class="solar-system">
                    <div class="sol"></div>
                    <div class="neptune"></div>
                    <div class="uranus"></div>
                    <div class="saturn"></div>
                    <div class="jupiter"></div>
                    <div class="mars"></div>
                    <div class="earth"></div>
                    <div class="venus"></div>
                    <div class="mercury"></div>
                </div>
                <span class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt;</span>
            </div>
        </div>
/*         <div className="section-vcardbody section-page ps-container ps-active-y section-page-active" id="page-resume" >
            <div className="section-education">
                <div className="section-education">
                    <h2 className="section-title">{'<DISTINCIÓN DE LABORATORIA>'}</h2>
                        <div>
                            <div>
                                <img src={top} />
                            </div>
                            <div>
                                <img src={rock} />
                            </div>
                            <div>
                                <img src={best} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> */
    )
}

const About = ({ mydata }) => {  
      const aboutComponent = mydata.map((item, index) => {
        return <Second_page
          key={index}
          bio={item.bio}
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