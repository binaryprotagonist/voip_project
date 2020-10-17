import React, { Component } from 'react'
import { Button, Form, Modal, ModalBody, FormGroup, Input, Row, Col, Label } from 'reactstrap';
import Images from '../../assets/image';
import { NumberList_Suggest } from '../../Store/Numbers'
import './Addnumber.css'
export default class AddNumber extends Component {
    constructor() {
        super()
        this.state = {
            modal: false
        }
    }
    onContine = () => {
        this.setState({ modal: !this.state.modal })
    }
    onClosemodal=()=>{

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
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
