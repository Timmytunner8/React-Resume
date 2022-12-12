import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header>
        <h1>Brandon Ramirez Hernandez <strong>Resume</strong></h1>
        <nav>
            <ul>
                <li>
                    <NavLink to='/main'>Menu</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>Profole</NavLink>
                </li>
                <li>
                    <NavLink to='/resume'>Resume</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
