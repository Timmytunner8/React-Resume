import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { About } from '../ui/About'
import { Contact } from '../ui/Contact'
import { HeaderNav } from '../layout/HeaderNav'
import { Footer } from '../layout/Footer'
import { Experience } from '../ui/Experience'
import { Work } from '../ui/Work'

export const RoutesCV = () => {
    return (
        <BrowserRouter>
            {/* Navigation and header*/}
            <HeaderNav />
            {/* Central Content */}
            <section className='content'>
                <Routes>
                    <Route
                        path='/'
                        element={<About />}
                    />
                    <Route
                        path='/main'
                        element={<About />}
                    />
                    <Route
                        path='/experience'
                        element={<Experience />}
                    />
                    <Route
                        path='/work'
                        element={<Work />}
                    />
                    <Route
                        path='/contact'
                        element={<Contact />}
                    />
                </Routes>
            </section>
            {/* Footer */}
            <Footer />
        </BrowserRouter>
    )
}