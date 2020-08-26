import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import StudentDataService from '../../services/StudentDataService'

class TeacherDash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      message: null
    }
    this.refreshStudentDirectory = this.refreshStudentDirectory.bind(this)
    this.updateStudentDirectory = this.updateStudentDirectory.bind(this)
    }

    componentDidMount() {
      this.refreshStudentDirectory()
    }

    refreshStudentDirectory() {
      StudentDataService.getAllStudents().then(response => {this.setState({students: response.data})})
    }

    updateStudentDirectory(lastName, firstName) {
      StudentDataService.getStudentByName(lastName, firstName).then(response => {this.setState({students: response.data})})
    }

    addStudentClicked() {
      this.props.history.push("/addStudent/")
    }

  render() {
    return(
      <div className="container">
        <h1 style={{textAlign:"center"}}>Teacher Dashboard</h1><br></br>
        <div className="jumbotron" style={{backgroundColor: "gray", color: "white"}}>
          <table className="table">
            <thead>
              <tr style={{textAlign: "center", color: "black"}}>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Social Security Number</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.students.map(students =>
                <tr style={{textAlign: "center"}} key={students.id}>
                  <td>{students.id}</td>
                  <td>{students.firstName}</td>
                  <td>{students.lastName}</td>
                  <td>{students.ssn}</td>
                </tr>
              )
            }
            </tbody>
          </table>
          <div className="row"style={{width: "100%"}}>
            <br/>
            <div style={{width:"50%"}}>
              <button className="btn btn-success" onClick={this.addStudentClicked}>Add Student</button>
            </div>
            <div style={{float: "right", width:"50%"}}>
              <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TeacherDash);
