import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <>
            <div id="header">
            <header>
                <h1 id='main'>TRAVEL AND EXPLORE</h1>
                <hr />
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <ul id='nav_ul'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/dest'>Destinations</a></li>
                            <li><a href='/contact'>Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            </div>

        </>
    )
}

export default Header
