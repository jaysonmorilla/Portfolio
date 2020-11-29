import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import ThemeContextProvider from './context/ThemeContext'
import './style.css';

const Root = () => {
    return (
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    )
}

ReactDom.render(<Root />, document.getElementById('Root'))