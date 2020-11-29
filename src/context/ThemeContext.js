import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (prop) => {

    const [ state, setProperty ] = useState({
        primary: '#e15619', text: '#cccccc', bg: '#cccccc',
        border: '2px solid', tlSize: '27px', pSize: '13px',
        txtSize: '20px', secSize: '30px' , prmSize: '35px'
    }) 

    const setPrimaryColor = ({ currentTarget }) => {
        setProperty({...state, primary: currentTarget.value});
    }

    const setTextColor = ({ currentTarget }) => {
        setProperty({...state, text: currentTarget.value});
    }

    const setBackground = ({ currentTarget }) => {
        setProperty({...state, bg: currentTarget.value});
    }

    return (
        <ThemeContext.Provider value={{ state, setPrimary: setPrimaryColor, setBackground: setBackground, setTextColor: setTextColor }}>
            { prop.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;