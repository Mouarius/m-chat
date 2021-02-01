import axios from 'axios'

const baseUrl = '/api/colors'

const getRandomColor = async () => {
  try {
    const request = await axios.get(`${baseUrl}/random`)
    return request.data.color
  } catch (e) {
    console.log(e)
  }
}

export default { getRandomColor }
