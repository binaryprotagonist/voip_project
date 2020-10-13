import React, { Component } from 'react'
import { Card, CardBody, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import Images from '../../../assets/image/index'
import Header from '../../../component/Header/index'
import './index.css'
export default class Main extends Component {
    onClickSingup=()=>{
        this.props.history.push('/register')
    }
    render() {
        return (
            <div className='main-page'>
                <Header/>
                <div className='card_div'>
                    <Card className='main-card'>
                        <CardBody>
                            <h4 className="head_vopi">Welcome to the VOIP</h4>
                            <p className="text-muted form-p-voip" >Lorem lpsum is simply dummy test of the priting <br /> and typesetting industry</p>
                            <div className='btn-div'>
                                <Button className='btn-voip' style={{ color: '#ffff',fontSize:'.900rem', backgroundColor: "#32405b" }} size="lg" onClick={this.onClickSingup} block>Sign Up with Email ID</Button>
                                <Button className='btn-voip' style={{ color: '#32405b',fontSize:'.900rem' }} size="lg" block>Sign Up with Google</Button>
                            </div>
                            <div className="text-muted" style={{ marginTop: '20px' ,marginBottom:'20px'}}>
                                Already have an account? <Link to='/register'>Sign in </Link>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
