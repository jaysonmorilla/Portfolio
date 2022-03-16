import React, { useContext } from 'react'
import { Navbar } from './navbar'
import { ThemeContext } from '../context/ThemeContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fab, faFacebookSquare, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons"
import AOS from 'aos';
import 'aos/dist/aos.css';

library.add(fab, faFacebookSquare, faLinkedinIn, faGithub);

const onClickHandler = ({ currentTarget }) => {
    switch(currentTarget.id) {
        case "github": window.open("https://github.com/jaysonmorilla"); break;
        case "fb": window.open("https://facebook.com/jayson.morilla.39"); break;
        case "linkedin": window.open("https://www.linkedin.com/in/jayson-morilla-615080201/"); break;
        default: return;
    }
}

AOS.init({
    duration : 2000
})

const App = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const animate = window.matchMedia("(max-width: 550px)").matches ? true : false;
        const elem = document.getElementsByClassName('animation');
        if(!animate){
            return;
        }
        //Remove AOS on mobile devices.
        for(var data of elem) {
            data.removeAttribute("data-aos");
        }
    });
    const { state } = useContext(ThemeContext);
    return (
        <div className='home-page'>
            <div className='home-page-bg'>
                <div className='home-page-img'></div>
                <div className='home-page-gradient'></div>
            </div>
            {/* <Navbar status="Home" /> --- still need some modification. */}
            <div className='home-bg'>
                <div className='home-header'>
                    <div className='home-header-content'>
                        <section className='text'>
                            <h2>Hi, My name is <span style={{color: state.primary}}>Mark Jayson Morilla</span></h2>
                            <h3>I am an aspiring Web Developer.</h3>
                            <button style={{border: `1px solid ${state.primary}`}} type='button'>Show Project</button>
                        </section>
                    </div>
                    <div id='content' className='content-container'>
                        <div className='graphics-content'>
                            <div className='graphics-content-flex'>
                                <section className='grph-text animation' data-aos='zoom-in-right'>
                                    <div className='grph-content'>
                                        <div className='profile-img'></div>
                                    </div>
                                    <div className='contact-infos'>
                                        <article style={{fontStyle: 'italic', fontWeight: 'lighter', textAlign: 'center'}}>
                                            I am a college graduate with a Bachelor's Degree in Computer Engineer.
                                        </article><br />
                                        <hr /><br />
                                        <div className='content-info'>
                                            <article>
                                                Email: jaysonmorilla2828@gmail.com
                                            </article>
                                            <article>
                                                Phone: 09773765570
                                            </article>
                                        </div>
                                    </div>
                                </section>
                                <section className='art-text animation' data-aos='zoom-in-left'>
                                    <div className='art-content'>
                                        <h2 style={{color: state.primary}}>I'm a Web Developer without job experience, But had some knowledge to develop a website.</h2>
                                        <h3>
                                         I do web development using <p style={{color: state.primary, fontWeight: 'bold', display: 'inline'}}>HTML, CSS, Javascript</p> as my front end development.
                                         For my backend, I'm using <p style={{color: state.primary, fontWeight: 'bold', display: 'inline'}}>PHP</p> as well as <p style={{color: state.primary, fontWeight: 'bold', display: 'inline'}}>Mysql</p> for my database. I'm using CRUD methodology
                                         in Object Oriented Programming structure and I have some knowledge about JSON.
                                        </h3>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='social-links'>
                    <div data-aos="zoom-out-right" className='fb animation'>
                        <FontAwesomeIcon onClick={ onClickHandler } id='fb' style={{borderRadius: '50%' }} icon={['fab', 'facebook']} />
                    </div>
                    <div data-aos="zoom-out-center" className='github animation'>
                        <FontAwesomeIcon onClick={ onClickHandler } id='github' style={{borderRadius: '50%' }} icon={['fab', 'github']} />
                    </div>
                    <div data-aos="zoom-out-left" className='linkedin animation'>
                        <FontAwesomeIcon onClick={ onClickHandler } id='linkedin' style={{borderRadius: '5%' }} icon={['fab', 'linkedin']} size="lg" />
                    </div>
                </div>
            </div>
            <div className='languages'>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >html</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >css</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >javascript</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >git</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >node</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >mysql</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >PHP</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >react</h4>
            </div>
            <div className='footer'>
                <h3>&copy; Jayson Morilla</h3> 
            </div>
        </div>
    )
}

export default App;