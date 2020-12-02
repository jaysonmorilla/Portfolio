import React, { useContext } from 'react'
import { Navbar } from './navbar'
import { ThemeContext } from '../context/ThemeContext'
import spinner from '../assets/headerImg.png'
import fb from '../assets/fb.png'
import github from '../assets/github.png'
import linkedin from '../assets/link.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration : 2000
})
    
const App = () => {
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
                </div>
                <div id='content' className='content-container'>
                    <div className='graphics-content'>
                        <section style={{border: `1px solid ${ state.primary }`}} className='grph-text' data-aos='zoom-in-right'>
                            <div className='grph-content'>
                                <h2 style={{color: state.primary}}>Graphics</h2>
                                <h3>
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaa awdw ad
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaaa
                                </h3>
                            </div>
                        </section>
                        <section style={{border: `1px solid ${ state.primary }`}} className='log-text' data-aos='zoom-out-up'>
                            <div className='log-content'>
                                <h2 style={{color: state.primary}}>Logo</h2>
                                <h3>
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaa awdw ad
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaaa
                                </h3>
                            </div>
                        </section>
                        <section style={{border: `1px solid ${ state.primary }`}} className='art-text' data-aos='zoom-in-left'>
                            <div className='art-content'>
                                <h2 style={{color: state.primary}}>Art Work</h2>
                                <h3>
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaa awdw ad
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaaa
                                </h3>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='Design-page'>
                    <div className='home-focuses'>
                        <section className='img-field'>
                            <img id="spinner" src={ spinner } alt='cross' />
                        </section>
                        <section className='text-field'>
                            <div>
                                <h2 style={{color: state.primary}}>Example</h2>
                                <article>
                                    awwddawawdd wwdddaa awadd wd
                                    awawddwww dad dw dsassd wwawa waaddaa
                                    ssdsd awawdwd daasss a as sddad asa
                                    dsdas asasd sadas dsdsaa awdw
                                        ad awwddawawdd wwdddaa awadd wd awawddwww
                                        dad dw dsassd wwawa waaddaa ssdsd awawdwd
                                        daasss a as sddad asa dsdas asasd sadas dsdsaaa
                                </article>
                            </div>
                            <div>
                                <h2 style={{color: state.primary}}>Example</h2>
                                <article>
                                    awwddawawdd wwdddaa awadd wd
                                    awawddwww dad dw dsassd wwawa waaddaa
                                    ssdsd awawdwd daasss a as sddad asa
                                    dsdas asasd sadas dsdsaa awdw
                                        ad awwddawawdd wwdddaa awadd wd awawddwww
                                        dad dw dsassd wwawa waaddaa ssdsd awawdwd
                                        daasss a as sddad asa dsdas asasd sadas dsdsaaa
                                </article>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className='social-links'>
                <div data-aos="zoom-out-right" className='fb'>
                    <img style={{ filter: `invert() drop-shadow(0px 0px 2px ${state.primary})` }} src={ fb } alt='facebook' />
                </div>
                <div data-aos="zoom-out-center" className='github'>
                    <img style={{ filter: `invert() drop-shadow(0px 0px 2px ${state.primary})` }} src={ github } alt='github' />
                </div>
                <div data-aos="zoom-out-left" className='linkedin'>
                    <img style={{ filter: `invert() drop-shadow(0px 0px 2px ${state.primary})` }} src={ linkedin } alt='linkedin' />
                </div>
            </div>
            <div className='languages'>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >html</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >css</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >javascript</h4>
                <h4 style={{ textShadow: `0px 0px 18px ${state.bg}` }} >git</h4>
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