import { useState, useEffect } from 'react'
import { getEmployees } from '../services/employeeService'
import { getAttendance } from '../services/attendanceService'

function Dashboard() {
  const [employees, setEmployees] = useState([])
  const [attendance, setAttendance] = useState([])

  useEffect(() => {
    getEmployees().then((res) => setEmployees(res.data))
    getAttendance().then((res) => setAttendance(res.data))
  }, [])

  return (
   <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="flex gap-6">
        <div className="bg-blue-100 p-6 rounded-lg w-64">
          <p className="text-gray-500">Total Employees</p>
          <p className="text-4xl font-bold text-blue-600">{employees.length}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg w-64">
          <p className="text-gray-500">Attendance Records</p>
          <p className="text-4xl font-bold text-green-600">{attendance.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard