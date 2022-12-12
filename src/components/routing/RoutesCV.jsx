import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Main } from '../ui/Main'
import { Contact } from '../ui/Contact'
import { Profile } from '../ui/Profile'
import { Resume } from '../ui/Resume'
import { HeaderNav } from '../layout/HeaderNav'
import { Footer } from '../layout/Footer'

export const RoutesCV = () => {
  return (
    <BrowserRouter>
        {/* Navigation and header*/}
            <HeaderNav />
        {/* Central Content */}
            <Routes>
                <Route
                    path='/'
                    element={<Main />}
                />
                <Route 
                    path='/main'
                    element={<Main />}
                />
                <Route 
                    path='/contact'
                    element={<Contact />}
                />
                <Route 
                    path='/profile'
                    element={<Profile />}
                />
                <Route 
                    path='/resume'
                    element={<Resume />}
                />
            </Routes>
        {/* Footer */}
        <Footer />
    </BrowserRouter>
  )
}