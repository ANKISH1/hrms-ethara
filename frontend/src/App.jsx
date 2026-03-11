import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Employees from './pages/employees'
import Attendance from './pages/Attendance'
import Dashboard from './pages/Dashboard'

function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element= {<Dashboard />} />
        <Route path  = "/employees" element = {<Employees/>}/>
        <Route path ="/attendance" element = {<Attendance/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
