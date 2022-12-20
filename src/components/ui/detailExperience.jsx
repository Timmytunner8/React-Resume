import React from 'react'
import '../../style/experience.css'


export const DetailExperience = ({ title, details, position, duration }) => {
    return (
        <div className='experience'>
            <h1>Company - {title}</h1>
            <span>{position}</span>
            <br />
            <strong>{duration}</strong>
            <br />
            <ul className='list_exp'>
                {details && details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
        </div>
    )
}
