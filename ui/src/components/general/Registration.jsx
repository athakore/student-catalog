import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LoginDataService from '../../services/LoginDataService'

class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      teacher: false,
      isValid: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    this.validateForm()
  }

  handleSubmit() {
    let user = {
      id: -1,
      userName: this.state.username,
      password: this.state.password,
      teacher: this.state.teacher === "false"
    }
    LoginDataService.addUser(user).then(this.props.history.push(`/`))
  }

  validateForm() {
    if(this.state.username.length === 0) this.setState({isValid: true})
    else if(this.state.password.length === 0) this.setState({isValid: true})
    else this.setState({isValid: false})
  }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Register</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Username:</label>
                            <input className="form-control" type="text" name="username" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input className="form-control" type="password" name="password" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Teacher:</label>
                            <input className="form-control" type="checkbox" name="teacher" checked={this.state.teacher} onChange={this.handleChange}></input>
                        </div><br/><br/>
                      <button className="btn btn-success" type="submit" disabled={this.state.isValid}>Submit</button>&ensp;
                      <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/")}>Back</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Registration)
