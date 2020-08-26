import axios from 'axios'

class StudentDataService {

  getAllStudents() {
    return axios.get(`http://localhost:8080/getAllStudents`)
  }

  getStudentByName(lastName, firstName) {
    return axios.get(`http://localhost:8080/lName/${lastName}/fName/${firstName}`)
  }

  addStudent(student) {
    return axios.post(`http://localhost:8080/addStudent`, student)
  }
}

export default new StudentDataService()
