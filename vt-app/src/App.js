import React from 'react'
import './App.css'
//import ExampleDocument from './components/ExampleDocument'
import Login from './screens/Login'

function App () {
  return (
    <div className='App'>
      <header className='App-Header'>
        <h1>Firestore Exampe</h1>
      </header>
      <main >
        <Login />
      </main>
    </div>
  )
}

export default App
