import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Images from '../../assets/image'
import { items } from './../../_nav'
import { compose, withState, withHandlers } from 'recompose'
import styled from 'styled-components'
import './sidebar.css'

const StyledLi = styled.li`
  font-weight: ${({ isActive }) => (isActive ? 600 : 100)};
  cursor: pointer;
  font-family: Helvetica;
  transition: 200ms all linear;
`

const enchancer = compose(
	withState('selectedTabId', 'setSelectedTabId', 1),
	withHandlers({
		isActive: props => id => {
			return props.selectedTabId === id
		},
		setActiveTab: props => id => {
			props.setSelectedTabId(id)
		},
	})
)

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
