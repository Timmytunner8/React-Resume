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
                        <NavLink to='/about' className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/experience' className={({isActive}) => isActive ? 'active' : ''}>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to='/work' className={({isActive}) => isActive ? 'active' : ''}>Work</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
