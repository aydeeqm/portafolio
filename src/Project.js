import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import photo from './img/Desert.jpg';
import trello from './img/trellophoenix.png';
import register from './img/registroapp.png';
import score from './img/scoreboard.png';
import { mydata } from './Data';
import { connect } from 'redux-zero/react';
import { Redirect, Switch, Route } from 'react-router-dom'
import './css/body.css';

const Mypro = () => {
    return (
     <div className=" row items_portfolio">
        <div className="col-lg-12 col-md-12 col-ms-12">
                <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                <div className="project">
                    <a className="work-popup" href="#">
                        <div className="ovrly"></div>
                        <img src={trello} alt="" className="img-responsive"/>
                        <div className="effect_bubba">
                            <h2>Trello Phoenix</h2>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/Trello-redux" target="_blank"><span className="fa fa-link"></span></a></div>
                                    <a className="icon venobox vbox-item" href="https://aydeeqm.github.io/Trello-redux/" target="_blank"><span className="fa fa-search"></span></a>
                                </div>
                            </figcaption>
                        </div>
                    </a>
                </div>
            </div>
                <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                <div className="project ">
                    <div className="work-popup">
                        <div className="ovrly"></div>
                            <img src={register} alt="" className="img-responsive"/>
                            <div className="effect_bubba">
                                <h2>Register App</h2>
                                <figcaption >
                                    <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/MVC-REGISTER" target="_blank"><span className="fa fa-link"></span></a></div>
                                    <a className="icon venobox vbox-item" href="https://aydeeqm.github.io/MVC-REGISTER/" target="_blank"><span className="fa fa-search"></span></a>
                                    </div>
                                </figcaption>
                            </div>
                    </div>
                </div>
            </div>
                <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                <div className="project ">
                    <a className="work-popup" href="#">
                        <div className="ovrly"></div>
                        <img src={score} alt="" className="img-responsive"/>
                        <div className="effect_bubba">
                            <h2>Score Board</h2>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/TIMER-SCORED" target="_blank"><span className="fa fa-link"></span></a></div>
                                    <a className="icon venobox vbox-item" href="https://aydeeqm.github.io/TIMER-SCORED/" target="_blank"><span className="fa fa-search"></span></a>
                                </div>
                            </figcaption>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                <div className="project ">
                    <a className="work-popup" href="#">
                        <div className="ovrly"></div>
                        <img src={photo} alt="" className="img-responsive"/>
                        <div className="effect_bubba">
                            <h2>Graphic Design</h2>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="#" target="_blank"><span className="fa fa-link"></span></a></div>
                                    <a className="icon venobox vbox-item" href="#" target="_blank"><span className="fa fa-search"></span></a>
                                </div>
                            </figcaption>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                <div className="project ">
                    <a className="work-popup" href="#">
                        <div className="ovrly"></div>
                        <img src={photo} alt="" className="img-responsive" />
                        <div className="effect_bubba">
                            <h2>Graphic Design</h2>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="#" target="_blank"><span className="fa fa-link"></span></a></div>
                                    <a className="icon venobox vbox-item" href="#" target="_blank"><span className="fa fa-search"></span></a>
                                </div>
                            </figcaption>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                <div className="project ">
                    <a className="work-popup" href="#">
                        <div className="ovrly"></div>
                        <img src={photo} alt="" className="img-responsive" />
                        <div className="effect_bubba">
                            <h2>Graphic Design</h2>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="#" target="_blank"><span className="fa fa-link"></span></a></div>
                                    <a className="icon venobox vbox-item" href="#" target="_blank"><span className="fa fa-search"></span></a>
                                </div>
                            </figcaption>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                <div className="project ">
                    <a className="work-popup" href="#">
                        <div className="ovrly"></div>
                        <img src={photo} alt="" className="img-responsive" />
                        <div className="effect_bubba">
                            <h2>Graphic Design</h2>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="#" target="_blank"><span className="fa fa-link"></span></a></div>
                                    <a className="icon venobox vbox-item" href="#" target="_blank"><span className="fa fa-search"></span></a>
                                </div>
                            </figcaption>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                <div className="project ">
                    <a className="work-popup" href="#">
                        <div className="ovrly"></div>
                        <img src={photo} alt="" className="img-responsive" />
                        <div className="effect_bubba">
                            <h2>Graphic Design</h2>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="#" target="_blank"><span className="fa fa-link"></span></a></div>
                                    <a className="icon venobox vbox-item" href="#" target="_blank"><span className="fa fa-search"></span></a>
                                </div>
                            </figcaption>
                        </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
}

const Colaborativos = () => {
            return (
                <div className=" row items_portfolio">
                    <div className="col-lg-12 col-md-12 col-ms-12">
                        <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                            <div className="project ">
                                <a className="work-popup" href="#">
                                    <div className="ovrly"></div>
                                    <img src={photo} alt="" className="img-responsive" />
                                    <div className="effect_bubba">
                                        <h2>Graphic Design</h2>
                                        <figcaption >
                                            <div className="classless">
                                                <div className="icon"><a href="#" target="_blank"><span className="fa fa-link"></span></a></div>
                                                <a className="icon venobox vbox-item" href="#" target="_blank"><span className="fa fa-search"></span></a>
                                            </div>
                                        </figcaption>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                            <div className="project ">
                                <a className="work-popup" href="#">
                                    <div className="ovrly"></div>
                                    <img src={photo} alt="" className="img-responsive" />
                                    <div className="effect_bubba">
                                        <h2>Graphic Design</h2>
                                        <figcaption >
                                            <div className="classless">
                                                <div className="icon"><a href="#" target="_blank"><span className="fa fa-link"></span></a></div>
                                                <a className="icon venobox vbox-item" href="#" target="_blank"><span className="fa fa-search"></span></a>
                                            </div>
                                        </figcaption>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                            <div className="project ">
                                <a className="work-popup" href="#">
                                    <div className="ovrly"></div>
                                    <img src={photo} alt="" className="img-responsive" />
                                    <div className="effect_bubba">
                                        <h2>Graphic Design</h2>
                                        <figcaption >
                                            <div className="classless">
                                                <div className="icon"><a href="#" target="_blank"><span className="fa fa-link"></span></a></div>
                                                <a className="icon venobox vbox-item" href="#" target="_blank"><span className="fa fa-search"></span></a>
                                            </div>
                                        </figcaption>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mix graph_des col-lg-3 col-sm-6 col-md-4 col-xs-6" data-bound="">
                            <div className="project ">
                                <a className="work-popup" href="#">
                                    <div className="ovrly"></div>
                                    <img src={photo} alt="" className="img-responsive" />
                                    <div className="effect_bubba">
                                        <h2>Graphic Design</h2>
                                        <figcaption >
                                            <div className="classless">
                                                <div className="icon"><a href="#" target="_blank"><span className="fa fa-link"></span></a></div>
                                                <a className="icon venobox vbox-item" href="#" target="_blank"><span className="fa fa-search"></span></a>
                                            </div>
                                        </figcaption>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

const FourthPage = () => {
    return (
        <div id="page" className="en">
            <div className="gallery" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="portafolio">
                    <div className="portafolio-title">
                        <div className="section_title">
                            <h2>PORTAFOLIO</h2>
                        </div>
                    </div>
                    <div className="portafolio-content">
                        <div className="project_container">
                            <div className="project_controls">
                                <NavLink type="button" to="/project/mypro" className="filter" >Mis Proyectos</NavLink>
                                <NavLink type="button" to="/project/procolab" className="filter" >Proyectos Colaborativos</NavLink>
                            </div>
                            <div className="container-fluid">
                                <Switch>
                                    <Route exact path="/project"
                                        render={() => <Redirect to="/project/mypro" />} />
                                    <Route path="/project/mypro" component={Mypro} />
                                    <Route path="/project/procolab" component={Colaborativos} />
                                </Switch>
                            </div>
                        </div>
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
            <Header/>
            <section>
                {workComponent}
            </section>
        </div>
    )
}


const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(Works);