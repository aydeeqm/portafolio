import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Headerpath from './Headerpath';
import Homepath from './Homepath'
import {mydata} from './Data';
import top from './img/top_5.png'
import best from './img/best_squad.png';
import rock from './img/ROCKING.png';
import { connect } from 'redux-zero/react';
/* import './App.css'; */
/* import './css/body.css';  */
const Second_page = ({photo}) => {
    return (
        <div className="section-vcardbody section-page ps-container ps-active-y section-page-active" id="page-resume" >
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
                
            </div>
    )
}

const About = ({ mydata }) => {  
      const aboutComponent = mydata.map((item, index) => {
        return <Second_page
          key={index}
          bio={item.bio}
          image={item.photo}
          index={index}
        />
      })
      return (
        <div>
              <Headerpath />
            <section >
                <Homepath mydata={mydata}/>
                {aboutComponent}
            </section>
        </div>
      )
    }
    
    const mapToProps = ({ mydata }) => ({ mydata });
    export default connect(mapToProps)(About);