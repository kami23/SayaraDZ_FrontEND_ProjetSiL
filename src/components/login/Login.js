import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (

        
      <div class="login-page">
      <div class="form">
          <p class="message">Connecter au tant qu'un utilisateur fabricant</p>
        <form class="login-form">
          <input type="text" placeholder="Email d'utilisateur"/>
          <input type="password" placeholder="mot de passe"/>
          <button>Connecter</button>
        </form>
      </div>
    </div>
    );
  }
}
