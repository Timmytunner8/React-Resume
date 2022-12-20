import React, { useEffect, useState } from 'react'
import { Col, Nav, Row } from 'rsuite'
import { jobs } from '../../config';
import { DetailExperience } from './detailExperience';

const NavBar = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={{ width: 150 }}>
      <Nav.Item eventKey='tcs'>TCS</Nav.Item>
      <Nav.Item eventKey='gr'>Grupo Radsoft</Nav.Item>
      <Nav.Item eventKey='zin'>ZinT3CH</Nav.Item>
      <Nav.Item eventKey='fca'>FCA</Nav.Item>
    </Nav>
  )
}

export const Experience = () => {
  const [active, setActive] = useState('tcs')
  const [job, setJob] = useState({})

  useEffect((event) => {
    onChangeInfo();
  }, [active])

  const onChangeInfo = (event) => {
    setJob(jobs.find(job => job.link === active))
  }
  return (
    <div>
      <Row>
        <Col md={4} onClick={onChangeInfo}>
          <NavBar appearance="subtle" reversed active={active} onSelect={setActive} />
        </Col>
        <Col md={4}>
          {
            <DetailExperience key={job.link} title={job.name} duration={job.durationWork}/>
          }
        </Col>
      </Row>
    </div>
  )
}
