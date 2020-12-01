import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Navbar = ({status}) => {
    const { state, setPrimary, setTextColor, setBackground } = useContext(ThemeContext);
    // const [ page ] = useState({ indexPage: 0, numPage: 1, currentPage: status, max: 2 });
    // const PageHandler = (e) => {
    //     console.log(e)
    // }
    return ( 
        <nav className='nav-links'>
            <ul>
                <li className='txtlbl'><input type='color' onChange={ setTextColor } defaultValue={ state.text }  /></li>
                <li className='bglbl'><input type='color' onChange={ setBackground } defaultValue={ state.bg } /></li>
                <li className='primlbl'><input type='color' onChange={ setPrimary } defaultValue={ state.primary } /></li>
            </ul>
        </nav>
    );
}
