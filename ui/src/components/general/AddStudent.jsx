import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import StudentDataService from '../../services/StudentDataService'

class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      ssn: '',
      isValid: false
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
    let student = {
      id: -1,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      ssn: this.state.ssn
    }
    StudentDataService.addStudent(student).then(this.props.history.push(`/teacherDash`))
  }

  validateForm() {
    if(this.state.firstName.length === 0) this.setState({isValid: true})
    else if(this.state.lastName.length === 0) this.setState({isValid: true})
    else this.setState({isValid: false})
  }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Add Student</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input className="form-control" type="text" name="firstName" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input className="form-control" type="text" name="lastName" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Social Security Number:</label>
                            <input className="form-control" type="number" name="ssn" onChange={this.handleChange}></input>
                        </div><br/><br/>
                      <button className="btn btn-success" type="submit" disabled={this.state.isValid}>Submit</button>&ensp;
                      <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/teacherDash")}>Back</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(AddStudent)
