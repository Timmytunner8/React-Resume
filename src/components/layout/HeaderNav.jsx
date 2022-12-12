import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>B</span>
                <h3>randon <strong>R</strong>amirez <strong>H</strong>ernandez</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/main'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile'>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume'>Work</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
