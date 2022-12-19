import React from 'react'

export const About = () => {
  const skills = ['Angular', 'Firebase', 'Spring Boot', 'OutSystem', 'React', 'Unity', 'JavaScript (ES6+)']
  return (
    <div className='container_about'>
      <h5>Hi, My name is</h5>
      <h2>Brandon, <br /> Software Engineer</h2>
      <h2 className='about_description'>I building things for Web, and VideoGames</h2>
      <p>
        Hello My name is Brandon, I'm a WEB Developer, I'm working. on my own videogame,and at the moment, I am interested in React.
        <br />
        My interest is to know everything in fullstack specific to JavaScript and Java, to know how to work an application and how to manage errors.
        I just want to be an expert in these areas(Fullstack, VideoGame, and VR).
      </p>
      <p>
        Currently, I'm learning React.
        I'm creating my own
        <br />
        portfolio page with static data, but once I understand hooks, I'll make it dynamic by adding external factors.
      </p>
      <p>
        I'm still practicing my skills in React for the Front-End part. In the back-end part, I'm learning Spring Boot.
      </p>
      <ul className='list_skills'>
        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </div>
  )
}
