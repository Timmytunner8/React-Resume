import React, { useEffect, useState } from 'react'
import { Col, Nav, Row } from 'rsuite'
import { works } from '../../config'
import { DetailWork } from './detailWork'

const NavBar = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={{ width: 150 }}>
      <Nav.Item eventKey='hp'>Happy By Aquanses</Nav.Item>
      <Nav.Item eventKey='vd'>Elementary School</Nav.Item>
    </Nav>
  )
}
export const Work = () => {
  const [active, setActive] = useState('hp')
  const [work, setWork] = useState({})

  useEffect(() => {
    onChangeInfo();
  }, [active])

  const onChangeInfo = () => {
    setWork(works.find(work => work.link === active))
  }
  return (
    <div>
      <Row>
        <Col md={4} onClick={onChangeInfo}>
          <NavBar appearance="subtle" reversed active={active} onSelect={setActive} />
        </Col>
        <Col md={4}>
          {
            <DetailWork
              key={work.link}
              company={work.company}
              tecnologies={work.tecnologies}
              details={work.details}
            />
          }
        </Col>
      </Row>
    </div>
  )
}
