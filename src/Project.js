import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { mydata } from './Data';
import { connect } from 'redux-zero/react';
import { Redirect, Switch, Route } from 'react-router-dom'
import './css/body.css';

const HTML = () => {
            return (
                <div class="mix graph_des" data-bound="" style={{display: "inline-block"}}>
                    <div class="project ">
                        <a class="work-popup" href="#">
                            <div class="ovrly"></div>
                            {/* <img src="img/portfolio/thumbs/image_1.jpg" alt=""/> */}
                                <div class="effect_bubba">
                                    <h2>Trello</h2>
                                </div>
                        </a>
                    </div>
                </div>
    );
}

const CSS = () => {
    return (
        <li className="course media group">
            <div>
                <h3>holii</h3>
            </div>
        </li>
    );
}

const JavaScript = () => {
            return (
                <li  className="course media group">
                    <div>
                        <h3>hola</h3>
                    </div>
                </li>
    );
}

const FourthPage = () => {
    return (
        <div id="page" className="en">
            <div className="container gallery" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="project_container">
                    <div className="project_controls">
                        <NavLink type="button" to="/project/html" className="filter" >All</NavLink>
                        <NavLink type="button" to="/project/css" className="filter" >Mis Proyectos</NavLink>
                        <NavLink type="button" to="/project/javascript" className="filter" >Proyectos Colaborativos</NavLink>
                    </div>
                    <div>
                        <ul>
                            <Switch>
                                <Route exact path="/project"
                                    render={() => <Redirect to="/project/html" />} />
                                <Route path="/project/html" component={HTML} />
                                <Route path="/project/css" component={CSS} />
                                <Route path="/project/javascript" component={JavaScript} />
                            </Switch>
                        </ul>
                    </div>
                </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt;</span>
            </div>
        </div>
    )
}

const Works = ({ mydata }) => {
    const workComponent = mydata.map((item, index) => {
        return <FourthPage
            key={index}
            index={index}
        />
    })
    return (
        <div>
            <Header />
            <section >
                {workComponent}
            </section>
        </div>
    )
}


const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(Works);