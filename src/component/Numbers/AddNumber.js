import React, { Component } from 'react'
import { Button, Form, Modal, ModalBody, FormGroup, Input, Row, Col, Label } from 'reactstrap';
import Images from '../../assets/image';
import { NumberList_Suggest } from '../../Store/Numbers'
import './Addnumber.css'
import Payment from './Payment'
export default class AddNumber extends Component {
    constructor() {
        super()
        this.state = {
            modal: false,
            selectPlan: false,
            comfirm: false,
            payment: false
        }
    }
    onContine = () => {
        this.setState({ modal: !this.state.modal })
    }
    onSelectPlan = () => {
        this.setState({ selectPlan: !this.state.selectPlan, modal: false })
    }
    onComfirm = () => {
        this.setState({ comfirm: !this.state.comfirm ,selectPlan: false})
    }
    onPayment = () => {
        this.setState({ payment: !this.state.payment, comfirm: false})
    }
    render() {
        return (
            <div>
                <div className='add-number'>
                    <h5 className='add-number-card-header'>Add New Number</h5>
                    <span className='text-muted'>please name your Number</span>
                </div>
                <Form>
                    <FormGroup>
                        <div className='input-form'>
                            <Input placeholder='Name' className='voip-form-control' />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className='input-form'>
                            <select id="mySelect" data-show-content="true" class="voip-form-control form-control">
                                <option>Select your country</option>
                                <option data-content="<i class='fa fa-cutlery'></i> Cutlery"></option>
                                <option data-content="<i class='fa fa-eye'></i> Eye"> Eye</option>
                                <option data-content="<i class='fa fa-heart-o'></i> Heart"></option>
                                <option data-content="<i class='fa fa-leaf'></i> Leaf"></option>
                                <option data-content="<i class='fa fa-music'></i> Music"></option>
                                <option data-content="<i class='fa fa-star'></i> Star"></option>
                                <option data-content="<span class='badge badge-warning mt-1 ml-2 float-right'>3</span> More"></option>
                            </select>
                        </div>
                    </FormGroup>
                    <Button className='btn btn-add-number' onClick={this.onContine}>Continue</Button>
                </Form>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} size="lg" aria-labelledby="contained-modal-title-vcenter"
                    centered className='call_logs_model'>
                    <ModalBody>
                        <div className='add-number'>
                            <button className='btn cancle-btn' onClick={this.onContine}>
                                <img src={Images.Cross_icon} className='cancel-icon' />
                            </button>
                            <h5 className='add-number-card-header'>Add a New Number</h5>
                            <span className='text-muted'>please name your Number</span>
                        </div>
                        <Row>
                            <Col lg='3'>
                                <FormGroup>
                                    <Label className='add-number-label'>Call Type</Label>
                                    <div className='input-form'>
                                        <Input type='select' className='voip-form-control' >
                                            <option>Local</option>
                                            <option>International</option>
                                        </Input>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col lg='3'>
                                <FormGroup>
                                    <Label className='add-number-label'>Search By</Label>
                                    <div className='input-form'>
                                        <Input type='select' className='voip-form-control' >
                                            <option>Number</option>
                                            <option>Name</option>
                                        </Input>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col lg='4'>
                                <FormGroup>
                                    <Label className='add-number-label'>Search By</Label>
                                    <div className='input-form'>
                                        <Input placeholder='Enter a prefix or a number' className='voip-form-control' />
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col lg='2'>
                                <div className='addnumber-btn'>
                                    <Button className='add-number-btn-voip'>Search</Button>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <Row>
                                {NumberList_Suggest.map((item, i) => {
                                    return (
                                        <Col lg='3' className='number-grid'>
                                            {/* <button onClick={this.onSelectPlan}> */}
                                                <div className='number-userdetail-icon'>

                                                    <img src={Images.us_Flag} className='detail-icon' />
                                                </div>
                                                <div>
                                                    <span className='number-span'>+1234567890</span><br />
                                                    <div className='row'>
                                                        <div className='number-type-box'>SMS</div>
                                                        <div className="number-type-box">VOICE</div>
                                                    </div>
                                                </div>
                                            {/* </button> */}
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.selectPlan} fade={false} toggle={this.onSelectPlan} size="lg" aria-labelledby="contained-modal-title-vcenter"
                    centered className='call_logs_model'>
                    <ModalBody>
                        <div>
                            <button className='btn cancle-btn' onClick={this.onContine}>
                                <img src={Images.Cross_icon} className='cancel-icon' />
                            </button>
                            <h4 className='add-number-card-header'>Select your plan and you are done!</h4>
                            <span className='text-muted'>Everything you need to understand your business</span>
                            <div className='switch-div row'>
                                <p className='Monthly'>Monthly Plan</p>
                                <label class="select-switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                                <p className='Annual'>Annual Plans</p>
                            </div>
                            <div className='row plan'>
                                <Col lg='4' >
                                    <div className='plan-list'>
                                        <h5 className='planing-heading'>StartUp</h5>
                                        <span className='text-muted'>Lorem Ipsum is simply dummy text<br /> of the printing and typesetting<br /> industry.</span>
                                        <sup>$</sup>  <h1>29</h1>/<h4>month</h4>
                                        <button className='btn btn-planing' >select</button>
                                    </div>
                                </Col>
                                <Col lg='4' >
                                    <div className='plan-list'>
                                        <h5 className='planing-heading'>StartUp</h5>
                                        <span className='text-muted'>Lorem Ipsum is simply dummy text<br /> of the printing and typesetting<br /> industry.</span>
                                        <h1>29</h1>/<h4>month</h4>
                                        <button className='btn btn-planing' >select</button>
                                    </div>
                                </Col>
                                <Col lg='4' >
                                    <div className='plan-list'>
                                        <h5 className='planing-heading'>StartUp</h5>
                                        <span className='text-muted'>Lorem Ipsum is simply dummy text<br /> of the printing and typesetting<br /> industry.</span>
                                        <h1>29</h1>/<h4>month</h4>
                                        <button className='btn btn-planing' >select</button>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.comfirm} fade={false} toggle={this.onComfirm} size="m" aria-labelledby="contained-modal-title-vcenter"
                    centered className='call_logs_model-confirm'>
                    <ModalBody>
                        <button className='btn cancle-btn' onClick={this.onComfirm}>
                            <img src={Images.Cross_icon} className='cancel-icon' />
                        </button>
                        <div className='fina-price-main'>
                            <h4 className='add-number-card-header'>Please confirm your order</h4>
                            <div className='final-price'>
                                <div className='price'>
                                    <h2>$29<sub className='text-muted'>/month</sub></h2>
                                </div>
                                <h6 className='price'>Startup Plan(Annual)</h6>
                            </div>
                            <div className='pricing-footer-btn'>
                                <button className='btn btn-checkout'>Checkout</button>
                                <button className='btn btn-checkout-cancel'> Cancle</button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.payment} fade={false} toggle={this.onPayment} size="m" aria-labelledby="contained-modal-title-vcenter"
                    centered className='call_logs_model'>
                    <ModalBody>
                        <button className='btn cancle-btn' onClick={this.onPayment}>
                            <img src={Images.Cross_icon} className='cancel-icon' />
                        </button>
                        <Payment />
                    </ModalBody>
                </Modal>
            </div >
        )
    }
}
