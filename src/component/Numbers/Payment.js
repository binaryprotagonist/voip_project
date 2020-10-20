import React, { Component } from 'react'
import './payment.css'
import Images from '../../assets/image/index'
export default class Payment extends Component {
    render() {
        return (
            <div>
                <h5 className='add-number-card-header'>Add your billing address</h5>

                <form className='payment-form'>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputtext">First Name</label>
                            <input type="text" className="form-control payment" placeholder="First name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="input">Last Name</label>
                            <input type="text" className="form-control payment" id="input" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address Line 1</label>
                        <input type="text" className="form-control payment" id="inputAddress" placeholder="Address Line 1" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Address Line 2</label>
                        <input type="text" className="form-control payment" id="inputAddress2" placeholder="Address Line 2" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control payment" id="inputCity" placeholder='City' />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputCity">Zip Code</label>
                            <input type="text" className="form-control payment" id="inputCity" placeholder='Zip Code' />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">State(optional)</label>
                            <input type="text" className="form-control payment" id="inputCity" placeholder='State(optional)' />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputCity">Country</label>
                            <input type="text" className="form-control payment" id="inputCity" placeholder='Country' />
                        </div>
                    </div>
                    <div className='submit-btn'>
                    <button type="submit" className="btn btn-submit"><img src={Images.Stripe_icon} className='stripe-icon' />Stripe Checkout</button>
                    </div>
                </form>
            </div>
        )
    }
}
