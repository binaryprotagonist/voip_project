import React, { Component } from 'react'
import { Card, CardBody, Button, Form, Modal,ModalBody,FormGroup, Input, FormFeedback, Label, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Images from '../../assets/image';
import AddNumber from '../Numbers/AddNumber'
import './index.css'
export default class DashBoard_Header extends Component {
    constructor(){
        super()
        this.state={
            modal: false,

        }
    }
    toggle = () => {
        this.setState({ modal: !this.state.modal })
    };
    render() {
        return (
            <div className='dashboard-header'>
                <Row>
                    <Col lg='7'>
                        <h3 className='dash-header-title'>Numbers</h3>
                    </Col>
                    <Col lg='5'>
                        <ul className='dash-header-ul'>
                            <li className='dash-li' >
                               
                                    <Button className='dash-header-button'  onClick={this.toggle}>+ Add Number</Button>
                               
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
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} size="sm" aria-labelledby="contained-modal-title-vcenter"
                        centered className='call_logs_model'>
                        <ModalBody>
                            <AddNumber />
                        </ModalBody>
                    </Modal>
            </div>
        )
    }
}
