import React from 'react'
import { Twitter } from '../icons/twitter'
import { Github } from '../icons/github'
import { Linkedin } from '../icons/linkedin'

export const Social = () => {
  return (
    <div className='social'>
        <a href='https://twitter.com/TimmyTunner08' target='_blank' rel='noopener'>
        <Twitter />
      </a>
      <a href='https://github.com/Timmytunner8' target='_blank' rel='noopener'>
        <Github />
      </a>
      <a href='https://www.linkedin.com/in/brandon-ramirez-hernandez-24754517a/' target='_blank' rel='noopener'>
        <Linkedin />
      </a>
    </div>
  )
}
