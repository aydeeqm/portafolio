import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { mydata } from './Data';
import { connect } from 'redux-zero/react';
import mirada from './img/mirada.jpg';
import './css/body.css';


const Last_page = () => {
    return (
        <div id="page" className="en">
            <div className="container contact" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                    <div className="text-zone">
                        <h1 aria-label=" Contact me" className="blast-root">
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>C</span>
                            <span className="blast" aria-hidden="true" style={{ opacity: 1}}>o</span>
                            <span className="blast" aria-hidden="true" style={{ opacity: 1}}>n</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>t</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>á</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>c</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>t</span>
                            <span className="blast" aria-hidden="true" style={{ opacity: 1 }}>a</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>m</span>
                            <span className="blast" aria-hidden="true" style={{opacity: 1}}>e</span>
                        </h1>
                        <p>Si tiene alguna pregunta, no dude en ponerse en contacto...</p>
                        <div className="contact-form">
                            <form id="contact" autocomplete="off">
                                <ul>
                                <li className="half animated fadeInUp">
                                    <input className="input__field input__field--hoshi" placeholder="Name" type="text" name="name"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                                <li className="half animated fadeInUp"> 
                                <input className="input__field input__field--hoshi" placeholder="Email" type="email" name="email"/> 
                                <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                                <li className="animated fadeInUp"> 
                                <input className="input__field input__field--hoshi" placeholder="Subject" type="text" name="subject" /> 
                                <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                                <li className="animated fadeInUp">
                                <textarea className="input__field input__field--hoshi" placeholder="Message" name="msg"></textarea>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                                <li className="submit animated fadeInUp"> 
                                <input id="submit" type="submit" className="flat-button" value="SEND" /></li>
                                </ul>
                            </form>
                        </div>
                    <div class="uk-text-center">
                        <a target="_blank" href="https://github.com/AydeeQM" class="uk-icon-button uk-margin-small-right" uk-icon="icon: github"></a>
                        <a target="_blank" href="https://www.linkedin.com/in/aydeequispe" class="uk-icon-button  uk-margin-small-right" uk-icon="icon:  linkedin"></a>
                        <a title="aydee.qm@gmail.com" uk-tooltip="pos: bottom" href="mailto:aydee.qm@gmail.com" class="uk-icon-button uk-margin-small-right" uk-icon="icon: mail"></a>
                        <a target="_blank" title="(51) 979039472" uk-tooltip="pos: bottom" href="https://api.whatsapp.com/send?phone=51979039472&" class="uk-icon-button uk-margin-small-right" uk-icon="icon:  whatsapp"></a>
                        <a target="_blank" href="#" title="Resume" uk-tooltip="pos: bottom" class="uk-icon-button uk-margin-small-right" uk-icon="icon: download"></a>
                    </div>
                    {/* <a href="#" className="button_download"><i className="fa fa-download" aria-hidden="true"></i>Resume</a> */}
                    </div>
                    <div className="map-wrap">
                        <div id="map">
                            <div className="frase">
                                <p>“Vivo cada día de mi vida </p><p>
                                </p><p>como si fuera el último, </p>
                                <p> y aprendo </p><p>
                                </p><p>como si fuese a vivir</p>
                                <p>para siempre”.</p><p>
                                </p>
                            </div>
                            {/* <img src={mirada} style={{width:"61%"}} className="img-responsive"/> */}
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
            <section>
                {lastComponent}
            </section>
        </div>
    )
}


const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(Contact);