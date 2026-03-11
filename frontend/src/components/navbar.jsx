import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-bold">HRMS Lite</h2>
      <div className="flex gap-6">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/employees" className="hover:underline">Employees</Link>
        <Link to="/attendance" className="hover:underline">Attendance</Link>
      </div>
    </nav>
  )
}

export default Navbar