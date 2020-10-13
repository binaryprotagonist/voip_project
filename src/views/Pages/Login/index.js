import React, { useState } from 'react';
// import Loader from "../../../component/loader/loader";
import { Card, CardBody, Button, Form, FormGroup, Input, FormFeedback, Label,Row,Col } from 'reactstrap';
import Header from '../../../component/Header/index'

import { Link } from 'react-router-dom';
// 
// import Helper from '../../../common/helper'
import './style.css'
import Images from '../../../assets/image/index'
const Login = (props) => {
  const onSubmit = () => {

  }
  return (
    <div className='main-login'>
      <Header />
      <div className='card_div'>
        <Card className='main-card'>
          <CardBody>
            <h4 className='head_vopi'>Welcome Back to the VOIP</h4>
            <p className="text-muted form-p-voip">Lorem lpsum is simply dummy test of the priting <br /> and typesetting industry</p>
            <div className='form-div'>
              <Form >
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
                                    <FormGroup >
                                        <Row className='input-form'>
                                            <Col xs="3" >
                                            <Label className='viop-form-label'>Password:</Label>
                                            </Col>
                                            <Col xs="9">
                                            <Input type='password' placeholder='Password' className='voip-form-control'/>
                                        <Label>
                                            <img src={Images.password_icon} className='password-icon' />
                                        </Label>
                                            </Col>
                                        </Row>
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                    </FormGroup>
                <Link to='/forgot_password' className=" text-muted" style={{ float: 'left', marginBottom: "20px" }}>Forgot Password</Link>
                <Button className='btn-voip' style={{ color: '#ffff', fontSize: '.900rem', backgroundColor: "#32405b" }} onClick={onSubmit} size="lg" block>Let Me In</Button>
              </Form>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="card-subtitle mb-2 text-muted">
              Don't have an account? <Link to='/register'>Sign Up</Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}


export default Login;
