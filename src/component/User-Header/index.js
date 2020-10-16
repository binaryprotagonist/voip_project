import React, { Component } from 'react'
import { Card, CardBody, Button, Form, FormGroup, Input, FormFeedback, Label, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Images from '../../assets/image';
import './index.css'
export default class User_Header extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount=()=>{
        
    }
    render() {
        return (
            <div className='dashboard-header'>
                <Row className='user-header'>
                    <Col lg='7'>
                        <h3 className='dash-header-title'>Users</h3>
                    </Col>
                    <Col lg='5'>
                        <ul className='dash-header-ul'>
                            <li className='dash-li' >
                                <a href=''>
                                    <Button className='dash-header-button'>+ Invite User</Button>
                                </a>
                            </li>
                            <li className='dash-li'>
                                <a href=''>
                                    <div className='bell-img'>
                                        <img src={Images.bell_icon} className='bell-icon' />
                                    </div>
                                </a>
                            </li>
                            <li className='dash-li'>
                                <Row className='profile-details'>
                                    <Col lg='3'>
                                        <div className='user-img'>
                                            <img src={Images.user_icon} className='user-icon' />
                                        </div>
                                    </Col>
                                    <Col lg='9'>
                                        <div className='user-details'>
                                            <h6 className='user-name'> Maria Garcia </h6>
                                            {/* mariagarcia@gmail.com */}
                                            <span className='useremail text-muted'> mariagarcia@gmail.com</span>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}
