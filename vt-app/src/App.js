import React from 'react'
import Home from './screens/Home'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./screens/Login";

function App () {
  return (
    <Router>
        <div className="container">
            <Routes>
                <Route element={<Home/>} path='/' index/>
                <Route element={<Login/>} path='/login/' index/>
            </Routes>
        </div>
    </Router>
  )
}

export default App
