import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link, Redirect, Switch} from 'react-router-dom';

import 'pure-css/lib/menus.css';
import './index.css';
import logo from './media/logo.jpg';

import { firebaseAuth } from '../data/config';

import Home from './pages/';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Error404 from './pages/404';
import DashboardCourses from './pages/protected/';
import { logout } from './helpers/Auth';


const PrivateRoute = ({component: Component, authed, rest}) => (
  <Route
    {...rest}
    render={
      props => authed === true
        ? <Component {...props}/>
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  />
);

const PublicRoute = ({component: Component, authed, rest}) => (
  <Route
    {...rest}
    render={
      props => authed === false
        ? <Component {...props} />
        : <Redirect to='/courses' />
    }
  />
);

class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      authed: false,
      loading: true
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    if (e.target === document.getElementById('toggle')) {
      e.preventDefault()
    }

    document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
    document.getElementById('toggle').classList.toggle('x');
  }

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        });
      } else {
        this.setState({
          loading: false
        });
      }
    })
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return this.state.loading
      ? <h1>Cargando...</h1>
      : (
        <Router>
          <div>
            <header className="custom-menu-wrapper">
              <div className="pure-menu custom-menu custom-menu-top">
                <a href="/" className="pure-menu-heading custom-menu-brand">
                  <img className="pk-logo" src={logo} alt="logo" />
                </a>
                <div className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></div>
              </div>
              <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                <div className="custom-menu-screen"></div>
                <ul className="pure-menu-list">
                  <li className="pure-menu-item">
                    <Link to="/" className="pure-menu-link" onClick={this.handleOnClick}>Home</Link>
                  </li>
                  <li className="pure-menu-item">
                    <Link to="/about" className="pure-menu-link" onClick={this.handleOnClick}>Acerca</Link>
                  </li>
                  {
                    this.state.authed
                    ?
                      <span>
                        <li className="pure-menu-item">
                          <Link to="/courses" className="pure-menu-link" onClick={this.handleOnClick}>Cursos</Link>
                        </li>
                        <li className="pure-menu-item">
                          <Link
                            to="/logout"
                            className="pure-menu-link"
                            onClick={() => {
                              logout()
                              this.setState({ authed: false })
                              this.handleOnClick()
                            }}
                            >Logout</Link>
                        </li>
                      </span>
                    :
                      <span>
                        <li className="pure-menu-item">
                          <Link to="/register" className="pure-menu-link" onClick={this.handleOnClick}>Registro</Link>
                        </li>
                        <li className="pure-menu-item">
                          <Link to="/login" className="pure-menu-link" onClick={this.handleOnClick}>Login</Link>
                        </li>
                      </span>
                  }
                </ul>
              </div>
            </header>
            <main className="Main">
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PrivateRoute authed={this.state.authed} path='/courses' component={DashboardCourses} />
                <Route component={Error404} />
              </Switch>
            </main>
          </div>
        </Router>
      )
  }
}


export default App;