import React from 'react'
import '../../style/work.css'

export const DetailWork = ({ company, tecnologies, details }) => {
  return (
    <div className='work'>
            <h1>Company - {company}</h1>
            <hr />
            <strong>Skills Applied</strong>
            <ul className='list_tec'>
                {tecnologies && tecnologies.map((tec, i) => <li key={i}>{tec}</li>)}
            </ul>
            <br />
            <hr />
            <strong>Implementations</strong>
            <ul className='list_work'>
                {details && details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
        </div>
  )
}
