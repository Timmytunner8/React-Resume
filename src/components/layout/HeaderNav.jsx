import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLink } from '../../config'

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>B</span>
                <h3>randon <strong>R</strong>amirez <strong>H</strong>ernandez</h3>
            </div>
            <nav>
                <ul>
                    {
                        navLink.map(({ name, to }) => {
                            return (
                                <li key={name}>
                                    <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}
