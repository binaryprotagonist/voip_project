import React, { Component } from 'react'
import { Card, CardBody, Table, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UserList } from '../../Store/users'
import User_Header from '../../component/User-Header/index'
import './index.css'
import Images from '../../assets/image/index'
import className from 'classnames'
import Call_logs from '../../component/Users/Call_logs'
export default class Users extends Component {
    constructor() {
        super()
        this.state = {
            model: false,
            callLogs_model: false
        }
    }
    toggle = () => {
        this.setState({ modal: !this.state.model })
    };
    onCallLogs = () => {
        this.setState({ callLogs_model: !this.state.callLogs_model })
    }
    onEdit = () => {
        this.props.history.push('/user-detail')
    }
    render() {
        return (
            <div>
                <div>
                    <User_Header />
                </div>
                <Card className='dashbord-card'>
                    <CardBody>
                        <table className='table table-borderless'>
                            <thead>
                                <tr className='number-tr'>
                                    <th className="text-muted" >Email</th>
                                    <th className="text-muted" >Availability</th>
                                    <th className="text-muted" >Numbers</th>
                                    <th className="text-muted" >Users Activity</th>
                                    <th className="text-muted" >Call Log</th>
                                    <th className="text-muted" >Status</th>
                                    <th className="text-muted" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {UserList.map((item, i) => {
                                    return (
                                        <tr className='number-tr' style={{ backgroundColor: '#0000000D' }} >
                                            <td scope="row">{item.email}</td>
                                            <td>{item.availabity}</td>
                                            <td>{item.number}</td>
                                            <td><a className='text-muted' onClick={this.toggle}> <u>click here</u></a></td>
                                            <td><a className='text-muted' onClick={this.onCallLogs} > <u>click here</u></a></td>
                                            <td>{item.status}</td>
                                            <td>
                                                <button className='btn btn-trash'>
                                                    <i class="fa fa-trash trash-icon" style={{ color: 'red' }} aria-hidden="true"></i>
                                                </button>
                                                <button className='btn btn-trash' onClick={this.onEdit}>
                                                    <i class="fa fa-edit trash-icon"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </CardBody>
                </Card>
                <div>
                    <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={className}>
                        <ModalBody>
                            <span className='text-muted'>User</span><br />
                            <span><b>jamessmith@gmail.com</b></span>
                            <Row className='model-main-div'>
                                <Col className='model-div '>
                                    <div className='user-modal-icon'>
                                        <img src={Images.modal_call_icon} className='model-call-icons' />
                                    </div>
                                    <div className='calls-details'>
                                        <span className='text-muted'>Total Incoming call</span><br />
                                        <span className=''><b>195</b></span>
                                    </div>
                                </Col>
                                <Col className='model-div'>
                                    <div className='user-modal-icon'>
                                        <img src={Images.model_outcall_icon} className='model-call-icons' />
                                    </div>
                                    <div className='calls-details'>
                                        <span className='text-muted'>Total Out call</span><br />
                                        <span className=''><b>195</b></span>
                                    </div>

                                </Col>
                                <Col className='model-div'>
                                    <div className='user-modal-icon'>
                                        <img src={Images.model_call_duration} className='model-call-icons' />
                                    </div>
                                    <div className='calls-details'>
                                        <span className='text-muted'>Average Call Duration</span><br />
                                        <span className=''><b>195</b></span>
                                    </div>
                                </Col>
                            </Row>
                        </ModalBody>
                        {/* <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter> */}
                    </Modal>
                    <Modal isOpen={this.state.callLogs_model} fade={false} toggle={this.onCallLogs} size="lg" aria-labelledby="contained-modal-title-vcenter"
                        centered className='call_logs_model'>
                        <ModalBody>
                            <Call_logs />
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    }
}
