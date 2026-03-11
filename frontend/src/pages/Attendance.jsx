import { useState, useEffect } from 'react'
import { getAttendance, markAttendance } from '../services/attendanceService'
import { getEmployees } from '../services/employeeService'

function Attendance() {
  const [attendance, setAttendance] = useState([])
  const [employees, setEmployees] = useState([])
  const[formData, setFormData] = useState({
    emp :'',
    date:'',
    status:'Present'
  })

  useEffect(() => {
    getAttendance().then((res) =>  setAttendance(res.data))
    getEmployees().then((res) => setEmployees(res.data))
  }, [])

  const handleMarkAttendance = () =>{
    console.log(formData)
    if (!formData.emp||!formData.date||!formData.status){
        alert('Please fill all fields')
        return
    }

    markAttendance(formData).then((res)=>{
        setAttendance([...attendance, res.data])
        setFormData({
            emp :'',
            date:'',
            status:'Present'
        })
    })

  }

  return (
 <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Attendance</h1>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Mark Attendance</h2>
        <div className="grid grid-cols-3 gap-4">
          <select
            value={formData.emp}
            onChange={(e) => setFormData({ ...formData, emp: e.target.value })}
            className="border rounded px-3 py-2"
          >
            <option value="">Select Employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.full_name}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="border rounded px-3 py-2"
          />

          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="border rounded px-3 py-2"
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button
          onClick={handleMarkAttendance}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Mark Attendance
        </button>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-3">Employee</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3">{record.emp_detail.full_name}</td>
                <td className="px-6 py-3">{record.date}</td>
                <td className="px-6 py-3">
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    record.status === 'Present'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Attendance