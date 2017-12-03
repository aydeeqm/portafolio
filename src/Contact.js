import React from 'react';
import Header from './Header';
import { connect } from 'redux-zero/react';
import { readAllComments, addComments} from './actions';
import './css/body.css';

readAllComments();
const LastPage = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        if (this.name.value && this.email.value && this.subject.value && this.msm.value) {
            addComments(this.name.value, this.email.value, this.subject.value, this.msm.value);
            this.name.value = '';
            this.email.value = '';
            this.subject.value = '';
            this.msm.value = '';
        }
    }
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
                            <form id="contact" onSubmit={onSubmit}>
                                <ul>
                                    <li className="half animated fadeInUp">
                                    <input className="input__field input__field--hoshi" placeholder="Nombre" type="text" name="name" ref={e => { this.name = e }} required/>
                                        <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                                    <li className="half animated fadeInUp"> 
                                    <input className="input__field input__field--hoshi" placeholder="Correo" type="email" name="email" ref={e => { this.email = e }} required/> 
                                        <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                                    <li className="animated fadeInUp"> 
                                    <input className="input__field input__field--hoshi" placeholder="Asunto" type="text" name="subject" ref={e => { this.subject = e }}  required/> 
                                        <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                                    <li className="animated fadeInUp">
                                    <textarea className="input__field input__field--hoshi" placeholder="Message" name="msg" ref={e => { this.msm = e }}  required></textarea>
                                        <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                                    <li className="submit animated fadeInUp"> 
                                        <input id="submit" type="submit" className="flat-button" value="ENVIAR" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    <div className="uk-text-center contactos">
                        <a target="_blank" href="https://github.com/AydeeQM" className="uk-icon-button uk-margin-small-right" uk-icon="icon: github" rel='noopener noreferrer' ></a>
                        <a target="_blank" href="https://www.linkedin.com/in/aydeequispe" className="uk-icon-button  uk-margin-small-right" uk-icon="icon:  linkedin" rel='noopener noreferrer' ></a>
                        <a title="aydee.qm@gmail.com" uk-tooltip="pos: bottom" href="mailto:aydee.qm@gmail.com" className="uk-icon-button uk-margin-small-right" uk-icon="icon: mail" rel='noopener noreferrer' ></a>
                        <a target="_blank" title="(51) 979039472" uk-tooltip="pos: bottom" href="https://api.whatsapp.com/send?phone=51979039472&" className="uk-icon-button uk-margin-small-right" uk-icon="icon:  whatsapp" rel='noopener noreferrer' ></a>
                        <a target="_blank" href="cv-aydee.pdf" title="Resume" download="cv-aydee.pdf" uk-tooltip="pos: bottom" className="uk-icon-button uk-margin-small-right" uk-icon="icon: download" rel='noopener noreferrer' ></a>
                    </div>
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
                        </div>
                    </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt;</span>
            </div>
        </div>
    )
}

const Contact = ({ mydata }) => {
    const lastComponent = mydata.map((item, index) => {
        return <LastPage
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