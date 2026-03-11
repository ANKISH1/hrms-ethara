import API from './api'

export const getEmployees = () => {
    return API.get('/employees')
}

export const addEmployee = (data) =>{
    return API.post('/employees/', data)

}

export const deleteEmployee = (id) =>  {
    return API.delete(`/employees/${id}/`)
}