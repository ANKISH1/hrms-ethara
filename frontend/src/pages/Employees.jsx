import { useState, useEffect } from "react";
import { addEmployee, deleteEmployee, getEmployees } from "../services/employeeService";

function Employees(){
    const[employees, setEmployees] = useState([])
    const[formData, setFormData] = useState({
        emp_id:'',
        full_name:'',
        email:'',
        department:''
    })

    useEffect(()=>{
        getEmployees().then((res)=>{
            setEmployees(res.data)
        })
    }, [])

    const handleAdd = () =>{
        if (!formData.emp_id || !formData.full_name || !formData.email || !formData.department){
            alert('Please fill all fields')
            return
        }
        addEmployee(formData).then((res)=>{
            setEmployees([...employees,res.data])
            setFormData({
                emp_id:'',
                full_name:'',
                email:'',
                department:''
            })
        })
    }

    const handleDelete = (id) =>{
        deleteEmployee(id).then(() =>{
            setEmployees(employees.filter((e) =>e.id !==id))
        })
    }


    return (
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Employees</h1>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Add Employee</h2>
        <div className="grid grid-cols-4 gap-4">
          <input
            type="text" placeholder="Employee ID"
            value={formData.emp_id}
            onChange={(e) => setFormData({ ...formData, emp_id: e.target.value })}
            className="border rounded px-3 py-2"
          />
          <input
            type="text" placeholder="Full Name"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className="border rounded px-3 py-2"
          />
          <input
            type="email" placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border rounded px-3 py-2"
          />
          <input
            type="text" placeholder="Department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="border rounded px-3 py-2"
          />
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Employee
        </button>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-3">Employee ID</th>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3">{employee.emp_id}</td>
                <td className="px-6 py-3">{employee.full_name}</td>
                <td className="px-6 py-3">{employee.email}</td>
                <td className="px-6 py-3">{employee.department}</td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employees