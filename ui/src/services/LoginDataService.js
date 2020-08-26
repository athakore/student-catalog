import axios from 'axios'

class LoginDataService {

  getAllUsers() {
    return axios.get(`http://localhost:8080/getAllUsers`)
  }

  getUserById(id) {
    return axios.get(`http://localhost:8080/id/${id}`)
  }

  getUserByUsername(username) {
    return axios.get(`http://localhost:8080/user/${username}`)
  }

  addUser(user) {
    return axios.post(`http://localhost:8080/addUser`, user)
  }
}

export default new LoginDataService()
