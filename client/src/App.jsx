import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
