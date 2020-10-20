import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import './index.css'
export default class Activity_Feeds extends Component {
    render() {
        return (
            <div>
                 <Card>
                    <CardBody>
                        <h5>Personal Information</h5>
                        <form className='payment-form'>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputtext">Full Name:</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Full Name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="input">Username:</label>
                                    <input type="password" className="form-control form-control-lg" id="input" placeholder="Username" />
                                </div>
                            </div>
                        </form>

                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h5>Organisation Details</h5>
                        <form className='payment-form'>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputtext">Organisation Name:</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Organisation Name" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="input">Organisation Email:</label>
                                    <input type="text" className="form-control form-control-lg" id="input" placeholder="Organisation Email" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="input">Organisation Contact Number</label>
                                    <input type="text" className="form-control form-control-lg" id="input" placeholder="Organisation Contact Number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress">Organisation Address:</label>
                                <input type="text" className="form-control form-control-lg" id="inputAddress" placeholder="Organisation Address" />
                            </div>
                            <div className="form-group col-md-5">
                                <label for="inputAddress2">Organisation Type:</label>
                                <input type="text" className="form-control form-control-lg" id="inputAddress2" placeholder="Organisation Type" />
                            </div>
                        </form>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h5>Email & Password</h5>
                        <form className='payment-form'>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputtext">Email Address:</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Email Address" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="input">Password:</label>
                                    <input type="password" className="form-control form-control-lg" id="input" placeholder="Password" />
                                </div>
                            </div>
                        </form>

                    </CardBody>
                </Card>
            </div>
        )
    }
}
