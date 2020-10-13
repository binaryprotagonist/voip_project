import React, { Component } from 'react'
import { Card, CardBody, Button } from 'reactstrap';
import Images from '../../assets/image/index'
import './index.css'
export default class Header extends Component {
    render() {
        return (
            <div className='first_div'>
            <Card className='header-card'>
                <CardBody>
                    <div className='logo_blue_img'>
                        <img src={Images.logo_blue} className='logo_blue' />
                    </div>
                </CardBody>
            </Card>
        </div>
        )
    }
}
