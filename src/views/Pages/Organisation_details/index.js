import React, { Component } from 'react'
import { Card, CardBody, Button, Form, FormGroup, Input, Label, FormFeedback, Col, Row } from 'reactstrap';
import Header from '../../../component/Header/index'
import './index.css'
export default class Organisation_Details extends Component {
    constructor(props) {
        super()
        this.state = {}
    }
    onSubmit = () => {
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div className='main-organisation'>
            <Header />
            <div className='card_div'>
                <Card className='main-card'>
                    <CardBody>
                        <h4 className='head_vopi'>Your Organisation Details</h4>
                        <p className="text-muted form-p-voip">Lorem lpsum is simply dummy test of the priting <br /> and typesetting industry</p>
                        <div className='form-div'>
                            <Form>
                                <FormGroup>
                                    <Row className='input-form'>
                                        <Col xs="4" >
                                            <Label className='viop-form-label'>Organisation Name:</Label>
                                        </Col>
                                        <Col xs="8">
                                            <Input placeholder='Organisation Name' className='voip-form-control' />
                                        </Col>
                                    </Row>
                                    <FormFeedback>You will not be able to see this</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Row className='input-form'>
                                        <Col xs="4" >
                                            <Label className='viop-form-label'>Email Address:</Label>
                                        </Col>
                                        <Col xs="8">
                                            <Input placeholder='Organisation Email Address' className='voip-form-control' />
                                        </Col>
                                    </Row>
                                    <FormFeedback>You will not be able to see this</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Row className='input-form'>
                                        <Col xs="4" >
                                            <Label className='viop-form-label'>Contact Number:</Label>
                                        </Col>
                                        <Col xs="8">
                                            <Input placeholder='Organisation Contact Number' className='voip-form-control' />
                                        </Col>
                                    </Row>
                                    <FormFeedback>You will not be able to see this</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Row className='input-form'>
                                        <Col xs="4" >
                                            <Label className='viop-form-label'>Full Address:</Label>
                                        </Col>
                                        <Col xs="8">
                                            <Input type='textarea' placeholder='Organisation Full Address' className='voip-form-control' />
                                        </Col>
                                    </Row>
                                    <FormFeedback>You will not be able to see this</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Row className='input-form'>
                                        <Col xs="4" >
                                            <Label className='viop-form-label'>Organisation Type:</Label>
                                        </Col>
                                        <Col xs="8">
                                            <Input placeholder='Organisation Type' className='voip-form-control' />
                                        </Col>
                                    </Row>
                                    <FormFeedback>You will not be able to see this</FormFeedback>
                                </FormGroup>
                                <Button className='btn-voip' style={{ color: '#ffff', fontSize: '.900rem', backgroundColor: "#32405b" }} onClick={this.onSubmit} size="lg" block>Let's Go</Button>
                            </Form>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
        )
    }
}
