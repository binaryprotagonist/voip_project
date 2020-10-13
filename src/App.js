import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login/index'));
const Register = React.lazy(() => import('./views/Pages/Register/index'));
const Main = React.lazy(()=>import('./views/Pages/main/index'))
const SetPassword = React.lazy(()=>import('./views/Pages/Register/setpassword'))
const Forgot_Password =React.lazy(()=>import('./views/Pages/Password/forgot'))
const Organisation_Details =React.lazy(()=>import('./views/Pages/Organisation_details/index'))
class App extends Component {
  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
            <Route exact path="/" name="Main Page" render={props => <Main {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/setpassword" name="Set Password" render={props => <SetPassword {...props}/>} />
              <Route exact path="/forgot_password" name="Forgot Password" render={props => <Forgot_Password {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/organisation_detail" name="Organisation Details Page" render={props => <Organisation_Details {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
