import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Form from './components/Form'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/form' element={<Form />} />
        <Route path='/' element={<Main />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App
