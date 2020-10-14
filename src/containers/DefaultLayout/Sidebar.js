import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Images from '../../assets/image'
import { items } from './../../_nav'
import './sidebar.css'
export default class extends Component {
    constructor() {
        super()
        this.state = {
            Navdata: []
        }
    }
    componentDidMount = () => {
        console.log("navbar items", items)
    }
    render() {
        return (
            <div>
                <div class="sidebar">
                    <nav class="sidebar-nav">
                        <ul class="nav">
                            {items.map((item, i) => {
                                return (
                                    <li class="nav-item">
                                        <Link to={item.url} className='dashboard-titles text-muted' style={{ color: '#ffff' }}>
                                            <div className='dash-board-icons'>
                                                <img src={item.icon} className='icons-sidebar' />
                                            </div>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })}


                        </ul>
                    </nav>
                    <button class="sidebar-minimizer brand-minimizer" type="button"></button>
                </div>
            </div>
        )
    }
}
