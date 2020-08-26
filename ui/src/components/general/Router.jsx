import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import StudentDash from './StudentDash'
import TeacherDash from './TeacherDash'
import AddStudent from './AddStudent'
import Registration from './Registration'

class Router extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/teacherDash" component={TeacherDash}></Route>
            <Route path="/studentDash" component={StudentDash}></Route>
            <Route path="/register" component={Registration}></Route>
            <Route path="/addStudent" component={AddStudent}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
