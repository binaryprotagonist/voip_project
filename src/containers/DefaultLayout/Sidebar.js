import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Images from '../../assets/image'
import { items } from './../../_nav'
import { compose, withState, withHandlers } from 'recompose'
import styled, { ThemeProvider } from 'styled-components'
import './sidebar.css'



export default class extends Component {
    constructor() {
        super()
        this.state = {
            Navdata: [],
            class_name:'dashboard-titles text-muted',
        }
    }
    componentDidMount = () => {
    }
    onChangeClass=(i)=>{
        console.log("iddd",i)
        this.setState({index:i})
    }
    render() {
        return (
            <div>
                <div className="sidebar">
                    <nav className="sidebar-nav">
                        <ul className="nav">
                            {items.map((item, i) => {
                                return (
                                    <li className="nav-item" key={i}>
                                        {(i ===this.state.index)?
                                         <Link to={item.url} className='dashboard-title-active' style={{ color: '#ffff' }} onClick={()=>this.onChangeClass(i)}>
                                            <div className='dash-board-icons'>
                                                <img src={item.icon} className='icons-sidebar' />
                                            </div>
                                            {item.name}
                                        </Link>
                                        :  <Link to={item.url} className={this.state.class_name} style={{ color: '#ffff' }} onClick={()=>this.onChangeClass(i)}>
                                        <div className='dash-board-icons'>
                                            <img src={item.icon} className='icons-sidebar' />
                                        </div>
                                        {item.name}
                                    </Link>}
                                       
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <button className="sidebar-minimizer brand-minimizer" type="button"></button>
                </div>
            </div>
        )
    }
}
