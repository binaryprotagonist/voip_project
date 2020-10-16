import React, { Component } from 'react'
import { Card, CardBody, Col, Row, Button, Form, FormGroup, Input } from 'reactstrap'
import Images from '../../assets/image'
import User_Header from '../../component/User-Header/index'
import './user_details.css'
export default class User_details extends Component {
    render() {
        return (
            <div>
                <div>
                    <User_Header />
                </div>
                <Card className='user-detail'>
                    <CardBody>
                        <h5>User Name and Email</h5>
                        <Row className='detail-main'>
                            <Col className='row'>
                                <div className='userdetail-icon'>
                                    <img src={Images.User_detail_icon} className='detail-icon' />
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
                                    <img src={Images.inbox_icon} className='detail-icon' />
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
                <Card className='user-details' >
                    <CardBody>
                        <h5>Availability    </h5>
                        <Form >
                            <FormGroup>
                                <span className='text-muted detail-label' >Timezone</span><br />
                                <select class="custom-select">
                                    <option selected>(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </FormGroup>
                            <Row className='detail-btn'>
                                <Button className='user-detail-btn ' style={{backgroundColor:'#32405b',color:'#ffff'}}>ALWAYS OPENED</Button>
                                <Button className='user-detail-btn'>CUSTOM</Button>
                                <Button className='user-detail-btn'>ALWAYS CLOSED</Button>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
                <div className='detail-footer'>
                    <Button className='detail-footer-btn save'>Save</Button>
                    <Button className='detail-footer-btn cancel'>Cancel</Button>
                </div>
            </div>
        )
    }
}
