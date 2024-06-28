import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='overflow-x-hidden'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
