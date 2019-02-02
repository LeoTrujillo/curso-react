import React, { Component } from 'react';
import { login, resetPassword } from '../helpers/Auth';

import 'pure-css/lib/forms.css';
import 'pure-css/lib/buttons.css';
import './login-register.css';

class Login extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      loginMessage: null
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    login(this.email.value, this.password.value)
      .catch(err => this.setState(this.setMessage('Usuario o password incorrectos')))
  }

  setMessage(err) {
    return {loginMessage: err}
  }

  resetPassword() {
    resetPassword(this.email.value)
      .then(() => this.setState(this.setMessage(`Se ha enviado un correo a ${this.email.value}`)))
      .catch(error => this.setState(this.setMessage(`El email ${this.email.value} no esta registrado`)))
  }

  render() {
    return (
      <article className="Main-container">
        <h1>Login</h1>
        <form className="pure-form AuthForm" onSubmit={this.handleOnSubmit}>
          <input type="email" placeholder="Email" ref={email => this.email = email} />
          <input type="password" placeholder="Password" ref={password => this.password = password} />
          {
            this.state.loginMessage &&
            <div className="u-error">
              <p>
                Error: {this.state.loginMessage}
                <button type="button" onClick={this.resetPassword} className="alert-link">Olvidates tu contraseña?</button>
              </p>
            </div>
          }
          <input type="submit" className="pure-button pure-button-primary" value="login" />
        </form>
      </article>
    );
  }
}

export default Login;