import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './localComponents/Header'
import Home from './MainPages/Home'
import AllBooks from './MainPages/AllBooks'
import Book1 from './MainPages/Books/Book1'
import Book1ch1 from './MainPages/Books/booksChapters/Book1/bch1'
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
        <Route path="/sutrasthana/chapter1" element={<Book1ch1 />} />
        <Route path="/nidanasthana" element={<Book2/>} />
        <Route path="/vimanasthana" element={<AllBooks />} />
        {/* <Route path="/shareerasthana" element={<Book1 />} />
        <Route path="/shareerasthana/chapter1" element={<Book1ch1 />} /> */}
      </Routes>
    </Router>
  )
}

export default App
