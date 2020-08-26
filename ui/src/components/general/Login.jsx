import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoginDataService from "../../services/LoginDataService"
import "./Login.css";

class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      teacher: false,
      error: "",
      isValid: true,
      statusCheck:"status",
      passwordCheck: "password"
    }
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    if(this.state.username.length === 0) this.setState({isValid: true});
    else if(this.state.password.length === 0) this.setState({isValid: true});
    else this.setState({isValid: false});
  }

  handleSubmit(event) {
    event.preventDefault()
    LoginDataService.getUserByUsername(this.state.username).then(
      response =>{this.setState({passwordCheck: response.data.password, statusCheck: response.status, teacher: response.data.teacher})},
      reason =>{this.setState({error:"The username and/or password you have entered is not correct, please try again."})}
    ).then(()=>
      {
        if(this.state.password !== this.state.passwordCheck) this.setState({error:"The username and/or password you have entered is not correct, please try again."})
        else {
          this.state.teacher === true ? this.props.history.push("/teacherDash/") : this.props.history.push("/studentDash/")
        }
      }
    );
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    this.validateForm();
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{backgroundColor: "gray"}}>
          <h3 style={{textAlign: "center"}}>Login</h3>
        </div>
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username">
              <FormLabel>Username</FormLabel>
              <FormControl
                autoFocus
                type="input"
                value={this.state.username}
                name="username"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </FormGroup>
            <b className="error" style={{color: "red"}}>{this.state.error}</b>
            <Button block disabled={this.state.isValid} type="submit">
              Login
            </Button>
            <Button block name="registration" onClick={() =>this.props.history.push("/register/")} >
              Register
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
