import React from 'react'
import Home from './screens/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Login from './screens/Login'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App () {
  return (
    <Router>
        <div className="container-fluid d-flex flex-column pe-0 ps-0 min-vh-100">
            <Menu/>
            <div className="flex-grow-1">
                <Routes>
                    <Route element={<Login/>} path='/login/' />
                </Routes>
            </div>
            <Footer />
        </div>
    </Router>
  )
}

export default App
