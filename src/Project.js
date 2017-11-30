import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { mydata } from './Data';
import { connect } from 'redux-zero/react';
import { Redirect, Switch, Route } from 'react-router-dom'
import './css/body.css';

const Mypro = () => {
    return (
        <section class="main">
            <ul class="ch-grid">
                <li>
                    <div class="ch-item onlyimg ch-img-1">
                        <div class="ch-info">
                            <h3>Trello</h3>
                            <p>Plataforma para gestión de proyectos</p>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/Trello-redux" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                    <a className="icon venobox vbox-item" href="https://aydeeqm.github.io/Trello-redux/" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="ch-item onlyimg ch-img-2">
                        <div class="ch-info">
                            <h3>Timer Score</h3>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/TIMER-SCORED" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                    <a className="icon venobox vbox-item" href="https://https://aydeeqm.github.io/TIMER-SCORED/" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="ch-item onlyimg ch-img-3">
                        <div class="ch-info">
                            <h3>Register</h3>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/MVC-REGISTER" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                    <a className="icon venobox vbox-item" href="https://https://aydeeqm.github.io/MVC-REGISTER/" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="ch-item onlyimg ch-img-4">
                        <div class="ch-info">
                            <h3>Memory Game</h3>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/QUIZ-ABC/tree/master/assets" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                    <a className="icon venobox vbox-item" href="https://aydeeqm.github.io/QUIZ-ABC/" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="ch-item onlyimg ch-img-5">
                        <div class="ch-info">
                            <h3>Start Studio</h3>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/juego-laberinto/tree/master/asset" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                    <a className="icon venobox vbox-item" href="https://aydeeqm.github.io/start-studio/" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="ch-item onlyimg ch-img-6">
                        <div class="ch-info">
                            <h3>Laberinto</h3>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/juego-laberinto" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                    <a className="icon venobox vbox-item" href="https://aydeeqm.github.io/juego-laberinto/" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="ch-item onlyimg ch-img-7">
                        <div class="ch-info">
                            <h3>Routing</h3>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="https://github.com/AydeeQM/Routing-V2" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                    <a className="icon venobox vbox-item" href="#" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="ch-item onlyimg ch-img-8">
                        <div class="ch-info">
                            <h3>Foro</h3>
                            <figcaption >
                                <div className="classless">
                                    <div className="icon"><a href="#" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                    <a className="icon venobox vbox-item" href="#" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
     
    );
}

const Colaborativos = () => {
            return (
                    <section class="main">
                        <ul class="ch-grid">
                            <li>
                            <div class="ch-item onlyimg ch-img-9">
                                    <div class="ch-info">
                                        <h3>Sushi</h3>
                                        <p>Tienda <a href="#"> online</a> para ordenar sushi</p>
                                        <figcaption >
                                            <div className="classless">
                                            <div className="icon"><a href="#" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                            <a className="icon venobox vbox-item" href="#" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </li>
                        <li>
                            <div class="ch-item onlyimg ch-img-10">
                                <div class="ch-info">
                                    <h3>YANAPA</h3>
                                    <p>Mapeo de los indices de anemia en el Perú</p>
                                    <figcaption >
                                        <div className="classless">
                                            <div className="icon"><a href="#" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                            <a className="icon venobox vbox-item" href="#" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ch-item onlyimg ch-img-11">
                                <div class="ch-info">
                                    <h3>Game Planet</h3>
                                    <p>Página para consolas y la linea de video juegos</p>
                                    <figcaption >
                                        <div className="classless">
                                            <div className="icon"><a href="#" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                            <a className="icon venobox vbox-item" href="#" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ch-item onlyimg ch-img-12">
                                <div class="ch-info">
                                    <h3>Lyft</h3>
                                    <p>Plataforma de pedir servicio de taxi con geolocalización</p>
                                    <figcaption >
                                        <div className="classless">
                                            <div className="icon"><a href="#" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                                            <a className="icon venobox vbox-item" href="#" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i></a>
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        </li>
                        </ul>
                    </section>
    );
}

const FourthPage = () => {
    return (
        <div id="page" className="en">
            <div className="gallery" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="portafolio">
                    <div className="portafolio-content">
                        <div className="project_container">
                            <div id="mySidenav" class="sidenav">
                                <NavLink id="projects" to="/project/mypro" className="filter" >Mis Proyectos</NavLink>
                                <NavLink id="blog" to="/project/procolab" className="filter" >Proyectos Colaborativos</NavLink>
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