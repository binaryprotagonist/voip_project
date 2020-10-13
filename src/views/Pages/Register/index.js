import React, { Component } from 'react'
import { Card, CardBody, Button, Form, FormGroup, Input, Label, FormFeedback, Col, Row } from 'reactstrap';
import Header from '../../../component/Header/index'
import { Link } from 'react-router-dom'
import './index.css'

export default class Register extends Component {
    constructor(props) {
        super()
        this.state = {}
    }
    onSubmit = () => {
        this.props.history.push('/setpassword')
    }
    render() {
        return (
            <div className='main-register-Page'>
                <Header />
                <div className='card_div'>
                    <Card className='main-card'>
                        <CardBody>
                            <h4 className='head_vopi'>Create Your Account</h4>
                            <p className="text-muted form-p-voip">Lorem lpsum is simply dummy test of the priting <br /> and typesetting industry</p>
                            <div className='form-div'>
                                <Form>
                                    <FormGroup>
                                        <Row className='input-form'>
                                            <Col xs="3" >
                                                <Label className='viop-form-label'>Full Name:</Label>
                                            </Col>
                                            <Col xs="9">
                                                <Input placeholder='Full Name' className='voip-form-control' />
                                            </Col>
                                        </Row>
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row className='input-form'>
                                            <Col xs="3" >
                                                <Label className='viop-form-label'>Username:</Label>
                                            </Col>
                                            <Col xs="9">
                                                <Input placeholder='Username' className='voip-form-control' />
                                            </Col>
                                        </Row>
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row className='input-form'>
                                            <Col xs="3" >
                                                <Label className='viop-form-label'>Email ID:</Label>
                                            </Col>
                                            <Col xs="9">
                                                <Input placeholder='Email ID' className='voip-form-control' />
                                            </Col>
                                        </Row>
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                    </FormGroup>
                                    <Button className='btn-voip' style={{ color: '#ffff', fontSize: '.900rem', backgroundColor: "#32405b" }} onClick={this.onSubmit} size="lg" block>Create My Account</Button>
                                </Form>
                            </div>
                            <div className="text-muted" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                Already have an account? <Link to='/login'> Sign in</Link>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
