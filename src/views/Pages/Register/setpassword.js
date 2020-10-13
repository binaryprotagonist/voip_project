import React, { Component } from 'react'
import { Card, CardBody, Button,Form, FormGroup, Input, FormFeedback,Label, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'
import Images from '../../../assets/image/index'
import Header from '../../../component/Header/index'
import './setpassword.css'
export default class SetPassword extends Component {
     constructor(props) {
         super(props);
         this.state={}
     }
     
     onSubmit=()=>{
        this.props.history.push('/organisation_detail')

     }
    render() {
            return (
                <div className='main-setpassword'>
                   <Header/>
                    <div className='card_div'>
                        <Card className='main-card'>
                            <CardBody>
                                <h4 className='head_vopi' style={{ marginBottom: '20px' }}>Set a Password</h4>
                                <p className="text-muted form-p-voip">Lorem lpsum is simply dummy test of the priting <br /> and typesetting industry</p>
                                <Form >
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
                                    <Button className='btn-voip' style={{ color: '#ffff',fontSize:'.900rem', backgroundColor: "#32405b" }} onClick={this.onSubmit} size="lg" block>This Will Be My Password</Button>
                                    </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
        )
    }
}
