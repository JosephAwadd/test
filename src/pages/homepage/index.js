import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CreditCard from '../../components/creditCard'
import CardForm from '../../components/form'
import ImageBackground from '../../components/imageBackground'
import './styles.css'

function Homepage() {
    return (
        <div className='homePageWrapper'>
            <div className='cardContainer'>
                <Row>
                    <Col lg={6} style={{ padding: 0 }}>
                        <div className='cardFormContainer'>
                            <CreditCard />
                            <CardForm />
                        </div>
                    </Col>
                    <Col lg={6} style={{ padding: 0 }}>
                        <ImageBackground />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Homepage