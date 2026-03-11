import axios from 'axios'

const API = axios.create({
    baseURL:'https://hrms-ethara.onrender.com',
})

export default API