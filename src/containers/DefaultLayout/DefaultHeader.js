import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './style.css'
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(){
    super()
  }
  logOut = () => {
    localStorage.removeItem('token');
    
    window.location.assign('/');

 }
 onClickloguot = () => {
    const swalWithBootstrapButtons = Swal.mixin({
       customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
       },
       buttonsStyling: false
    })



    swalWithBootstrapButtons.fire({
       allowOutsideClick: false,
       title: 'Are you sure?',
       text: "Logout",
       icon: 'warning',
       showCancelButton: true,
       cancelButtonText: 'No!',
       confirmButtonText: 'Yes!',
       reverseButtons: true
    })
       .then((result) => {
          if (result.value) {
             this.logOut()
          } else {
          }
       })
 }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}
        {/* <AppNavbarBrand
          full={{ src: image.logo_main, width: 150, height: 45  , alt: 'CoreUI Logo' }}
          minimized={{ src: image.logo_main, width: 30, height: 30, alt: 'CoreUI Logo' }}
        /> */}
       
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
