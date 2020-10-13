import React, { Component } from 'react'
import { Card, CardBody, Button, Form, FormGroup, Input, FormFeedback, Label, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Images from '../../assets/image';
import './index.css'
export default class DashBoard_Header extends Component {
    render() {
        return (
            <div className='dashboard-header'>
                <Row>
                    <Col lg='7'>
                        <h3 className='dash-header-title'>Numbers</h3>
                    </Col>
                    <Col lg='5'>
                        <ul className='dash-header-ul'>
                            <li>
                                <a href=''>
                                    <Button className='dash-header-button'>+ Add Number</Button>
                                </a>
                            </li>
                            <li>

                                <a href=''>
                                    <div className='bell-img'>
                                        <img src={Images.bell_icon} className='bell-icon' />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='' >
                                    <div className='user-img'>
                                        <img src={Images.user_icon} className='user-icon' />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className='user-details'>
                                    <h6 className='user-name'> Maria Garcia </h6>
                                    {/* mariagarcia@gmail.com */}
                                    <span className='useremail'> mariagarcia@gmail.com</span>
                                </div>
                            </li>
                        </ul>

                    </Col>
                </Row>
            </div>
        )
    }
}
