import React, { useContext } from 'react'
import { Navbar } from './navbar'
import { ThemeContext } from '../context/ThemeContext'
import spinner from '../assets/headerImg.png'
import fb from '../assets/fb.png'
import github from '../assets/insta.png'
import linkedin from '../assets/link.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration : 2000
})

// window.addEventListener('DOMContentLoaded', () => {
//     window.fbAsyncInit = function() {
//         FB.init({
//         appId      : 2636806746444538,
//         cookie     : true,
//         xfbml      : true,
//         version    : 'v9.0'
//         });
        
//         FB.AppEvents.logPageView();   
//     };

//     (function(d, s, id){
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) {return;}
//         js = d.createElement(s); js.id = id;
//         js.src = "https://connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));

//     FB.getLoginStatus(function(response) {
//         statusChangeCallback(response);
//     });
// })
    
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
                            <h3>I'm a UI/UX Web Designer &amp; Web Developer.</h3>
                            <button style={{border: `1px solid ${state.primary}`}} type='button'>Show Project</button>
                        </section>
                    </div>
                </div>
                <div id='content' className='content-container'>
                    <div className='graphics-content'>
                        <section className='grph-text' data-aos='zoom-in-left'>
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
                        <section className='log-text' data-aos='zoom-out-up'>
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
                        <section className='art-text' data-aos='zoom-in-right'>
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
                <div className='fb'>
                    <img style={{ filter: `invert() drop-shadow(0px 0px 2px ${state.primary})` }} src={ fb } alt='facebook' />
                </div>
                <div className='github'>
                    <img style={{ filter: `invert() drop-shadow(0px 0px 2px ${state.primary})` }} src={ github } alt='github' />
                </div>
                <div className='linkedin'>
                    <img style={{ filter: `invert() drop-shadow(0px 0px 2px ${state.primary})` }} src={ linkedin } alt='linkedin' />
                </div>
            </div>
            <div className='footer'>
                <h3>&copy; Jayson Morilla</h3>
            </div>
        </div>
    )
}

export default App;