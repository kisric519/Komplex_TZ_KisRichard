import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from "./oldalak/Home"
import Tagozat from './oldalak/Tagozat'
import Navbar from './elemek/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'tachyons'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tagozat/:id" element={<Tagozat />} />
      </Routes>
    </>
  )
}

export default App
