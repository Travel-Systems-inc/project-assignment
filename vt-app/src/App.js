import React from 'react'
import Home from './screens/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Login from './screens/Login'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Registration from "./screens/Registration";
import Choose from "./screens/Choose";

function App () {
  return (
    <Router>
        <div className="container-fluid d-flex flex-column pe-0 ps-0 min-vh-100">
            <Menu/>
            <div className="flex-grow-1 ">
                <Routes>
                    <Route element={<Home />} path='/map/' />
                    <Route element={<Choose />} path='/' index />
                    <Route element={<Login />} path='/login/' />
                    <Route element={<Registration />} path='/create/' />
                </Routes>
            </div>
            <Footer />
        </div>
    </Router>
  )
}

export default App
