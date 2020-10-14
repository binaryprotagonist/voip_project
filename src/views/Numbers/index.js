import React, { Component } from 'react'
import { Card, CardBody, Table } from 'reactstrap';
import { NumbersList } from '../../Store/Numbers'
import DashBoard_Header from '../../component/Dashboard-Header/index'
import './index.css'
export default class Numbers extends Component {
    render() {
        return (
            <div>
                <div>
                    <DashBoard_Header/>
                </div>
                <Card className='dashbord-card'>
                    <CardBody>
                        <table className='table table-borderless'>
                            <thead>
                                <tr className='number-tr'>
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
