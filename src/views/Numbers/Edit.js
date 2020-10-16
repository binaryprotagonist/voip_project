import React, { Component } from 'react'
import DashBoard_Header from '../../component/Dashboard-Header/index'
import { Card, CardBody, Col, Row, Button, Form, FormGroup, Input, } from 'reactstrap'
import Images from '../../assets/image'
import './Edit.css'
export default class Edit_Number extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    onOpening_Hours = () => {

    }

    render() {
        return (
            <div>
                <div>
                    <DashBoard_Header />
                </div>
                <div>
                    <Card className='user-detail'>
                        <CardBody>
                            <h5>Name and Number</h5>
                            <Row className='detail-main'>
                                <Col className='row'>
                                    <div className='userdetail-icon'>
                                        <img src={Images.js_icon} className='detail-icon' />
                                    </div>
                                    <div className=''>
                                        <Form >
                                            <FormGroup>
                                                <span className='text-muted detail-label' >Insert name of your number</span>
                                                <Input placeholder='Name' className='voip-form-control' />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </Col>
                                <Col className='row'>
                                    <div className='userdetail-icon'>
                                        <img src={Images.us_Flag} className='detail-icon' />
                                    </div>
                                    <div className=''>
                                        <Form >
                                            <FormGroup>
                                                <span className='text-muted detail-label' >Insert name of your number</span>
                                                <Input placeholder='Number' className='voip-form-control' />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <Card className='user-detail'>
                        <CardBody>
                            <h5>Opening Hours</h5>
                            <Row className='detail-btn'>
                                <Button className='user-detail-btn '>ALWAYS OPENED</Button>
                                <Button className='user-detail-btn'>CUSTOM</Button>
                                <Button className='user-detail-btn'>ALWAYS CLOSED</Button>
                            </Row>
                        </CardBody>
                    </Card>
                    <Card className='user-detail'>
                        <CardBody>
                            <div className='row'>
                                <Col lg='6'>
                                    <h5>Allocation</h5>
                                </Col>
                                <Col lg='6'>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </Col>
                            </div>
                            <Row>
                                <Col lg='4'>
                                    <div className='allocation row'>
                                        <div className='allocatron-icon'>
                                            <img src={Images.js_icon} className='detail-icon' />
                                        </div>
                                        <span className='allocation-users'>James Davis</span>
                                        <div className='number-box'>
                                            100
                                    </div>
                                    </div>
                                </Col>
                                <Col lg='4'>
                                    <div className='allocation row'>
                                        <div className='allocatron-icon'>
                                            <img src={Images.js_icon} className='detail-icon' />
                                        </div>
                                        <span className='allocation-users'>James Davis</span>
                                        <div className='number-box'>
                                            100
                                    </div>
                                    </div>
                                </Col>
                                 <Col lg='4'>
                                    <div className='allocation row'>
                                        <div className='allocatron-icon'>
                                            <img src={Images.js_icon} className='detail-icon' />
                                        </div>
                                        <span className='allocation-users'>James Davis</span>
                                        <div className='number-box'>
                                            100
                                    </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <div className='detail-footer'>
                        <Button className='detail-footer-btn save'>Save</Button>
                        <Button className='detail-footer-btn cancel'>Cancel</Button>
                    </div>
                </div>
            </div>
        )
    }
}
