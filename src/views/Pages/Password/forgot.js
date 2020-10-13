import React, { Component } from 'react'
import { Card, CardBody, Button, Form, FormGroup, Input, FormFeedback, Label } from 'reactstrap';
import Header from '../../../component/Header/index'
import './index.css'
export default class Forgot_Password extends Component {
    constructor(){
        super()
        this.state={}
    }
onSubmit=()=>{
    this.props.history.push('/login')
}
    render() {
        return (
            <div className='main-password-page'>
                <Header />
                <div className='card_div'>
                    <Card className='main-card'> 
                        <CardBody>
                            <h4 className='head_vopi' >Forgot Password?</h4>
                            <p className="text-muted form-p-voip">Lorem lpsum is simply dummy test of the priting <br /> and typesetting industry</p>
                            <div className='form-div'>
                                <Form >
                                    <FormGroup>
                                        <Input placeholder='Email ID' />
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                    </FormGroup>
                                    <Button className='btn-voip' style={{ color: '#ffff', fontSize: '.900rem', backgroundColor: "#32405b" }} onClick={this.onSubmit} size="lg" block>Send</Button>
                                </Form>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
