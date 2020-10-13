import React, { Component } from 'react'
import { Card, CardBody, Table,Row,Col,Button, } from 'reactstrap';
import { NumbersList } from '../../Store/Numbers'
import DashBoard_Header from '../../component/Dashboard-Header/index'
import './index.css'
import Images from '../../assets/image/index'
export default class Users extends Component {
    render() {
        return (
            <div>
                <div>
                <div className='dashboard-header'>
                <Row>
                    <Col lg='7'>
                        <h3 className='dash-header-title'>Users</h3>
                    </Col>
                    <Col lg='5'>
                        <ul className='dash-header-ul'>
                            <li>
                                <a href=''>
                                    <Button className='dash-header-button'>+ Invite User</Button>
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
                </div>
                <Card className='dashbord-card'>
                    <CardBody>
                        <table className='table table-borderless'>
                            <thead>
                                <tr>
                                    <th className="text-muted" >Name</th>
                                    <th className="text-muted" >Phone Number</th>
                                    <th className="text-muted" >Availability</th>
                                    <th className="text-muted" >Users</th>
                                    <th className="text-muted" >Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {NumbersList.map((item, i) => {
                                    return (
                                        <tr className='number-tr' style={{backgroundColor:'#0000000D'}} >
                                            <td scope="row">{item.name}</td>
                                            <td>{item.phone_number}</td>
                                            <td>{item.availabity}</td>
                                            <td>{item.user}</td>
                                            <td>
                                                <button className='btn btn-trash'>
                                                <i class="fa fa-trash trash-icon" style={{color:'red'}} aria-hidden="true"></i>
                                                </button>
                                                <button className='btn btn-trash'>
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
            </div>
        )
    }
}
