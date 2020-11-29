import React, { useContext } from 'react'
import { Navbar } from './navbar'
import { ThemeContext } from '../context/ThemeContext'
import spinner from '../assets/headerImg.png'
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
                <div style={{backgroundImage: `linear-gradient(0deg, black, #000000cc, transparent)` }} className='home-header'>
                    <div className='home-header-content'>
                        <section className='text'>
                            <h2>Hi, My name is <span style={{color: state.primary, fontSize: state.tlSize}}>Mark Jayson Morilla</span></h2>
                            <h3>I'm a UI/UX Web Designer &amp; Web Developer.</h3>
                        </section>
                    </div>
                </div>
                <div id='content' className='content-container'>
                    <div className='graphics-content'>
                        <section className='grph-text' data-aos='zoom-in-left'>
                            <div className='grph-content'>
                                <h2 style={{color: state.primary, fontSize: state.secSize}}>Graphics</h2>
                                <h3>
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaa awdw ad
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaaa
                                </h3>
                                <center>
                                    <button style={{border: `1px solid ${state.primary}`}} type='button'>Get More</button>
                                </center>
                            </div>
                        </section>
                        <section className='log-text' data-aos='zoom-out-up'>
                            <div className='log-content'>
                                <h2 style={{color: state.primary, fontSize: state.secSize}}>Logo</h2>
                                <h3>
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaa awdw ad
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaaa
                                </h3>
                                <center>
                                    <button style={{border: `1px solid ${state.primary}`}} type='button'>Get More</button>
                                </center>
                            </div>
                        </section>
                        <section className='art-text' data-aos='zoom-in-right'>
                            <div className='art-content'>
                                <h2 style={{color: state.primary, fontSize: state.secSize}}>Art Work</h2>
                                <h3>
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaa awdw ad
                                    awwddawawdd wwdddaa awadd wd awawddwww dad 
                                    dw dsassd wwawa waaddaa ssdsd awawdwd daasss a as 
                                    sddad asa dsdas asasd sadas dsdsaaa
                                </h3>
                                <center>
                                    <button style={{border: `1px solid ${state.primary}`}} type='button'>Get More</button>
                                </center>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='Design-page'>
                    <div className='home-focuses'>
                        <section className='img-field'>
                            <img src={ spinner } alt='cross' />
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
            <div className='footer'>
                <h3>&copy; Jayson Morilla</h3>
            </div>
        </div>
    )
}

export default App;