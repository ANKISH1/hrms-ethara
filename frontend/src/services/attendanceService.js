import API from './api'

export const getAttendance = (params) => {
    return API.get('/attendance/', { params })
}

export const markAttendance = (data) =>{
    return API.post('/attendance/', data)
}