import React, { Component, lazy, Suspense } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Images from '../../assets/image/index';
import image from '../../assets/image/index'
import Charts from '../../component/Charts/index'
import './style.css'
// const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));
import DashBoard_Header from '../../component/Dashboard-Header/index'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      from: undefined,
      to: undefined,
    }
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div>
        <DashBoard_Header />
        <div>
          <div className=''>
            <div>
              hello
            </div>
            <div className='row'>
              <Col>
                <Card className='total-user-card'>
                  <CardBody className='dashboard-card-body'>
                    <div className='row'>
                      <Col lg={2}>
                        <div className='contact-icon '>
                          <img src={Images.Contact_icon} className='contact-img' />
                        </div>
                      </Col>
                      <Col lg={8}>
                        <h6 className='text muted'>Total Users: 250</h6 >
                      </Col>
                      <Col lg={2}>
                        <div className='add_icon'>
                          <img src={Images.Add_icon} className='add-img' />
                        </div>
                      </Col>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className='total-user-card'>
                <CardBody className='dashboard-card-body'>
                    <div className='row'>
                      <Col lg={2}>
                        <div className='contact-icon '>
                          <img src={Images.Contact_icon} className='contact-img' />
                        </div>
                      </Col>
                      <Col lg={8}>
                        <h6 className='text muted'>Total Users: 250</h6 >
                      </Col>
                      <Col lg={2}>
                        <div className='add_icon'>
                          <img src={Images.Add_icon} className='add-img' />
                        </div>
                      </Col>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </div>
            <div className='row'>
              <Col lg={2}>
                <Card className='calls-card'>
                <CardBody className='dashboard-card-body'>
                    <div className='row'>
                    <div className='contact-icon '>
                      <img src={Images.Contact_icon} className='contact-img' />
                    </div>
                    <span className='text-muted'>Total Calls</span>
                    </div>
                   
                    <h6 className='calls-record'>195</h6>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={2}>
              <Card className='calls-card'>
              <CardBody className='dashboard-card-body'>
                    <div className='row'>
                    <div className='contact-icon '>
                      <img src={Images.Call_icon} className='contact-img' />
                    </div>
                    <span className='text-muted'>Total Calls</span>
                    </div>
                    <h6 className='calls-record'>195</h6>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={2}>
              <Card className='calls-card'>
              <CardBody className='dashboard-card-body'>
                    <div className='row'>
                    <div className='contact-icon '>
                      <img src={Images.Contact_icon} className='contact-img' />
                    </div>
                    <span className='text-muted'>Total Calls</span>
                    </div>
                    <h6 className='calls-record'>195</h6>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={2}>
              <Card className='calls-card'>
              <CardBody className='dashboard-card-body'>
                    <div className='row'>
                    <div className='contact-icon '>
                      <img src={Images.Contact_icon} className='contact-img' />
                    </div>
                    <span className='text-muted'>Total Calls</span>
                    </div>
                    <h6 className='calls-record'>195</h6>
                  </CardBody>
                </Card>
              </Col><Col lg={2}>
              <Card className='calls-card'>
              <CardBody className='dashboard-card-body'>
                    <div className='row'>
                    <div className='contact-icon '>
                      <img src={Images.Contact_icon} className='contact-img' />
                    </div>
                    <span className='text-muted'>Total Calls</span>
                    </div>
                    <h6 className='calls-record'>195</h6>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={2}>
              <Card className='calls-card'>
              <CardBody className='dashboard-card-body'>
                    <div className='row'>
                    <div className='contact-icon '>
                      <img src={Images.Contact_icon} className='contact-img' />
                    </div>
                    <span className='text-muted'>Total Calls</span>
                    </div>
                    <h6 className='calls-record'>195</h6>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
