import axios from 'axios'

const baseUrl = '/api/login'
const loginUser = async (username) => {
  const request = axios.post(`${baseUrl}`, { username })
  return request.data
}

export default { loginUser }
