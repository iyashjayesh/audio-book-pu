import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './localComponents/Header'
import Home from './MainPages/Home'
import AllBooks from './MainPages/AllBooks'
import Book1 from './MainPages/Books/Book1'
import Book4 from './MainPages/Books/Book4'
import Book4ch1 from './MainPages/Books/booksChapters/Book1/bch1'
import Book4ch2 from './MainPages/Books/booksChapters/Book4/bch2'
import Book4ch3 from './MainPages/Books/booksChapters/Book4/bch3'
// import Book4ch4 from './MainPages/Books/booksChapters/Book4/bch4'
// import Book4ch5 from './MainPages/Books/booksChapters/Book4/bch5'
// import Book4ch6 from './MainPages/Books/booksChapters/Book4/bch6'
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
        {/* <Route path="/sutrasthana/chapter1" element={<Book1ch1 />} /> */}
        <Route path="/nidanasthana" element={<Book2/>} />
        <Route path="/vimanasthana" element={<AllBooks />} />
        <Route path="/shareerasthana" element={<Book4 />} />
        <Route path="/shareerasthana/chapter1" element={<Book4ch1 />} />
        <Route path="/shareerasthana/chapter2" element={<Book4ch2 />} />
        <Route path="/shareerasthana/chapter3" element={<Book4ch3 />} />
        {/* <Route path="/shareerasthana/chapter4" element={<Book4ch4 />} />
        <Route path="/shareerasthana/chapter5" element={<Book4ch5 />} />
        <Route path="/shareerasthana/chapter6" element={<Book4ch6 />} />
        <Route path="/shareerasthana/chapter7" element={<Book4ch7 />} />
        <Route path="/shareerasthana/chapter8" element={<Book4ch8 />} /> */}
      </Routes>
    </Router>
  )
}

export default App
