import React, { Component } from "react"

import "./styles.scss"

import TextField from "@material-ui/core/TextField"

class AwesomeLogin extends Component {
  render() {
    return (
      <div className="login-page">
        <aside className="aside-left">
          <nav className="navbar">
            <img
              src="http://pigment.github.io/fake-logos/logos/small/color/the-dance-studio.png"
              class="brand"
            />

            <ul className="list">
              <li className="item -active">Sign In</li>
              <li className="item">Sign Up</li>
            </ul>
          </nav>

          <form action="" className="login-form">
            <h1 className="title">Sign In</h1>
            <h2 className="description">
              Sign in to continue to our application
            </h2>

            <div className="input-group">
              <TextField
                id="standard-required"
                label="E-mail"
                margin="normal"
                fullWidth
              />
              <TextField
                id="standard-required"
                label="Password"
                margin="normal"
                type="password"
                fullWidth
              />
              <span className="forgot-password">Forgot password?</span>
              <div className="input">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </form>

          <span className="footer-message">
            © 2018 Your Company - Todos os direitos reservados
          </span>
        </aside>
        <aside className="content">
          <span className="welcome-message">Welcome to Your Company</span>
        </aside>
      </div>
    )
  }
}

export default AwesomeLogin
