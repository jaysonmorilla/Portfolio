import React, { useContext } from 'react'
import { Navbar } from './navbar'
import { ThemeContext } from '../context/ThemeContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fab, faFacebookSquare, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons"
import AOS from 'aos';
import 'aos/dist/aos.css';


library.add(fab, faFacebookSquare, faLinkedinIn, faGithub);

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
            <Navbar status="Home" />
            <div className='home-bg'>
                <div className='home-header'>
                    <div className='home-header-content'>
                        <section className='text'>
                            <h2>Hi, My name is <span style={{color: state.primary}}>Mark Jayson Morilla</span></h2>
                            <h3>I'm a Front-End Web Developer.</h3>
                            <button style={{border: `1px solid ${state.primary}`}} type='button'>Show Project</button>
                        </section>
                    </div>
                    <div id='content' className='content-container'>
                        <div className='graphics-content'>
                            <section className='grph-text animation' data-aos='zoom-in-right'>
                                <div className='grph-content'>
                                    <h2 style={{color: state.primary}}>About</h2>
                                    <h3>
                                        I'm obsessed to do things especially when it comes to 
                                        web development. I created a simple "System Project" in
                                        school during my thesis in Software Development. It was
                                        a Reservation System for renting a pool for an events. 
                                        I love to work in the UI/UX of a website and especially,
                                        I love to show my finish project to my fellow developer. 
                                    </h3>
                                </div>
                            </section>
                            <section className='log-text animation' data-aos='zoom-out-up'>
                                <div className='log-content'>
                                    <h2 style={{color: state.primary}}>Focus</h2>
                                    <h3>
                                        My specialty is about front-end web development 
                                        using React js, making sketches turns into a nice
                                        Semantic HTML & CSS application. I do a bit of 
                                        Back-end using Webpack, Node js, Express js and
                                        MySQL. I do sketching designs in Adobe Photoshop CS5.
                                    </h3>
                                </div>
                            </section>
                            <section className='art-text animation' data-aos='zoom-in-left'>
                                <div className='art-content'>
                                    <h2 style={{color: state.primary}}>Goal</h2>
                                    <h3>
                                        I'm planning to learn both Front-end and Back-end. 
                                        In order to do that, I need to be exposed to a real
                                        work and to be able to see, peoples loving my work.
                                    </h3>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-links'>
                <div data-aos="zoom-out-right" className='fb animation'>
                    <FontAwesomeIcon style={{ boxShadow: `0px 0px 0.5em ${state.bg}`, borderRadius: '50%' }} icon={['fab', 'facebook']} />
                </div>
                <div data-aos="zoom-out-center" className='github animation'>
                    <FontAwesomeIcon style={{ boxShadow: `0px 0px 0.5em ${state.bg}`, borderRadius: '50%' }} icon={['fab', 'github']} />
                </div>
                <div data-aos="zoom-out-left" className='linkedin animation'>
                    <FontAwesomeIcon style={{ boxShadow: `0px 0px 0.5em ${state.bg}`, borderRadius: '5%' }} icon={['fab', 'linkedin']} size="lg" />
                </div>
            </div>
            <div className='languages'>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >html</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >css</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >javascript</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >git</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >node</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >mysql</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >webpack</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >react</h4>
            </div>
            <div className='footer'>
                <h3>&copy; Jayson Morilla</h3>
            </div>
        </div>
    )
}

export default App;