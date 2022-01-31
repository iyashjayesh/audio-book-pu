import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './localComponents/Header'
import Home from './MainPages/Home'
import AllBooks from './MainPages/AllBooks'
import Book1 from './MainPages/Books/Book1'
import Book2 from './MainPages/Books/Book2'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-books" element={<AllBooks />} />
        {/* sutrasthana,nidanasthana,vimanasthana,shareerasthana */}
        <Route path="/sutrasthana" element={<Book1 />} />
        <Route path="/nidanasthana" element={<Book2/>} />
        <Route path="/vimanasthana" element={<AllBooks />} />
        <Route path="/shareerasthana" element={<AllBooks />} />
      </Routes>
    </Router>
  )
}

export default App
