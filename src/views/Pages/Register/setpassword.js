import React, { Component } from 'react'
import { Card, CardBody, Button, Form, FormGroup, Input, FormFeedback, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import Images from '../../../assets/image/index'
import Header from '../../../component/Header/index'
import './setpassword.css'
export default class SetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'password'
        }
    }

    onSubmit = () => {
        this.props.history.push('/organisation_detail')
    }
    Password_showhide = () => {
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input'
        })
    }
    render() {
        return (
            <div className='main-setpassword'>
                <Header />
                <div className='card-password-div'>
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
                                            <Input type={this.state.type} placeholder='Password' className='voip-form-control' />
                                            <Label className='password-show'>
                                                {(this.state.type === 'password') ?
                                                    < button className='btn password-icon' onClick={this.Password_showhide} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={30} height={30} viewBox="0 0 30 30"><defs><style dangerouslySetInnerHTML={{ __html: ".a,.c{fill:#979797;}.a{stroke:#707070;}.b{clip-path:url(#a);}" }} /><clipPath id="a"><rect className="a" width={30} height={30} transform="translate(1135 560)" /></clipPath></defs><g className="b" transform="translate(-1135 -560)"><path className="c" d="M7.5,19.1a1.172,1.172,0,0,1,1.172,1.172h0a1.172,1.172,0,0,1-2.344,0h0A1.172,1.172,0,0,1,7.5,19.1Zm3.223,1.172h0a1.172,1.172,0,0,0,2.344,0h0a1.172,1.172,0,0,0-2.344,0Zm4.395,0h0a1.172,1.172,0,1,0,2.344,0h0a1.172,1.172,0,0,0-2.344,0Zm6.27,8.555A1.172,1.172,0,0,1,20.211,30H5.621A4.693,4.693,0,0,1,.934,25.313V15.7a4.693,4.693,0,0,1,4.688-4.687h1.4V6.883a7.033,7.033,0,0,1,14.063,0v4.133H22.5a4.657,4.657,0,0,1,1.293.162,1.172,1.172,0,1,1-.646,2.253,2.386,2.386,0,0,0-.647-.072H5.621A2.346,2.346,0,0,0,3.278,15.7v9.609a2.346,2.346,0,0,0,2.344,2.344h14.59A1.172,1.172,0,0,1,21.383,28.828ZM9.369,11.016h9.375V6.883a4.69,4.69,0,0,0-9.375,0ZM24.9,27.656h0A1.172,1.172,0,1,0,24.9,30h0a1.172,1.172,0,0,0,0-2.344Zm4.167-8.249a4.162,4.162,0,0,0-8.323.048,1.172,1.172,0,0,0,2.344,0,1.818,1.818,0,0,1,3.636,0c0,.011,0,.021,0,.032a1.817,1.817,0,0,1-1.105,1.643,3.117,3.117,0,0,0-1.885,2.877V25.02a1.172,1.172,0,0,0,2.344,0V24.006a.776.776,0,0,1,.461-.721,4.158,4.158,0,0,0,2.529-3.83Q29.066,19.43,29.065,19.407Z" transform="translate(1135 560)" /></g></svg>
                                                    </ button>
                                                    : < button className='btn password-icon' onClick={this.Password_showhide} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={30} height={30} viewBox="0 0 30 30"><defs><style dangerouslySetInnerHTML={{ __html: ".a,.c{fill:#1a0101;}.a{stroke:#707070;}.b{clip-path:url(#a);}" }} /><clipPath id="a"><rect className="a" width={30} height={30} transform="translate(1135 560)" /></clipPath></defs><g className="b" transform="translate(-1135 -560)"><path className="c" d="M7.5,19.1a1.172,1.172,0,0,1,1.172,1.172h0a1.172,1.172,0,0,1-2.344,0h0A1.172,1.172,0,0,1,7.5,19.1Zm3.223,1.172h0a1.172,1.172,0,0,0,2.344,0h0a1.172,1.172,0,0,0-2.344,0Zm4.395,0h0a1.172,1.172,0,1,0,2.344,0h0a1.172,1.172,0,0,0-2.344,0Zm6.27,8.555A1.172,1.172,0,0,1,20.211,30H5.621A4.693,4.693,0,0,1,.934,25.313V15.7a4.693,4.693,0,0,1,4.688-4.687h1.4V6.883a7.033,7.033,0,0,1,14.063,0v4.133H22.5a4.657,4.657,0,0,1,1.293.162,1.172,1.172,0,1,1-.646,2.253,2.386,2.386,0,0,0-.647-.072H5.621A2.346,2.346,0,0,0,3.278,15.7v9.609a2.346,2.346,0,0,0,2.344,2.344h14.59A1.172,1.172,0,0,1,21.383,28.828ZM9.369,11.016h9.375V6.883a4.69,4.69,0,0,0-9.375,0ZM24.9,27.656h0A1.172,1.172,0,1,0,24.9,30h0a1.172,1.172,0,0,0,0-2.344Zm4.167-8.249a4.162,4.162,0,0,0-8.323.048,1.172,1.172,0,0,0,2.344,0,1.818,1.818,0,0,1,3.636,0c0,.011,0,.021,0,.032a1.817,1.817,0,0,1-1.105,1.643,3.117,3.117,0,0,0-1.885,2.877V25.02a1.172,1.172,0,0,0,2.344,0V24.006a.776.776,0,0,1,.461-.721,4.158,4.158,0,0,0,2.529-3.83Q29.066,19.43,29.065,19.407Z" transform="translate(1135 560)" /></g></svg>
                                                    </ button>}
                                            </Label>
                                            {/* <Label>
                                            
                                        </Label> */}
                                        </Col>
                                    </Row>
                                    <FormFeedback>You will not be able to see this</FormFeedback>
                                </FormGroup>
                                <Button className='btn-voip' style={{ color: '#ffff', fontSize: '.900rem', backgroundColor: "#32405b" }} onClick={this.onSubmit} size="lg" block>This Will Be My Password</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
