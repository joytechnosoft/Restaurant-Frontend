import React from 'react'
import { Toaster } from 'react-hot-toast'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import '../src/App.css'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Notfound from './Pages/Notfound'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/success' element={<Success />}/>
        <Route path='*' element={<Notfound />}/>

      </Routes>
      <Toaster />
    </Router>
  )
}

export default App