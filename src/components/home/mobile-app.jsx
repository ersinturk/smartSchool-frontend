import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {TfiApple, TfiAndroid} from "react-icons/tfi"
import "./mobile-app.scss"

const MobileApp = () => {
  return (
    <Container className='mobile-app'>
        <Row className='g-3 text-center align-items-center'>
            <Col lg={7}>
            <h2>Are ypou ready to start your online course</h2>
            </Col>
            <Col lang={5} className='text-lg-end'>
            <a href="#" className="btn btn-outline-secondary m-3"> <TfiApple/> Apple Store</a>
            <a href="#" className="btn btn-outline-secondary"> <TfiAndroid/> Play Store</a>
            </Col>
        </Row>
    </Container>
  )
}

export default MobileApp