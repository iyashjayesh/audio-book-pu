import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './localComponents/Header'
import Home from './MainPages/Home'
import AllBooks from './MainPages/AllBooks'
import Book1 from './MainPages/Books/Book1'
import Book1ch1 from './MainPages/Books/booksChapters/Book1/bch1'
// import Book1ch2 from './MainPages/Books/Book1/bch2'
// import Book1ch3 from './MainPages/Books/Book1/bch3'
// import Book1ch4 from './MainPages/Books/Book1/bch4'
// import Book1ch5 from './MainPages/Books/Book1/bch5'
// import Book1ch6 from './MainPages/Books/Book1/bch6'
// import Book1ch7 from './MainPages/Books/Book1/bch7'
// import Book1ch8 from './MainPages/Books/Book1/bch8'
// import Book1ch9 from './MainPages/Books/Book1/bch9'
// import Book1ch10 from './MainPages/Books/Book1/bch10'
// import Book1ch11 from './MainPages/Books/Book1/bch11'
// import Book1ch12 from './MainPages/Books/Book1/bch12'
// import Book1ch13 from './MainPages/Books/Book1/bch13'
// import Book1ch14 from './MainPages/Books/Book1/bch14'
// import Book1ch15 from './MainPages/Books/Book1/bch15'
// import Book1ch16 from './MainPages/Books/Book1/bch16'
// import Book1ch1730 from './MainPages/Books/Book1/bch1730'


import Book4 from './MainPages/Books/Book4'
import Book4ch1 from './MainPages/Books/booksChapters/Book4/bch1'
import Book4ch2 from './MainPages/Books/booksChapters/Book4/bch2'
import Book4ch3 from './MainPages/Books/booksChapters/Book4/bch3'
import Book4ch4 from './MainPages/Books/booksChapters/Book4/bch4'
import Book4ch5 from './MainPages/Books/booksChapters/Book4/bch5'
import Book4ch6 from './MainPages/Books/booksChapters/Book4/bch6'
import Book4ch7 from './MainPages/Books/booksChapters/Book4/bch7'
import Book4ch8 from './MainPages/Books/booksChapters/Book4/bch8'
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
        {/* <Route path="/sutrasthana/chapter2" element={<Book1ch2 />} />
        <Route path="/sutrasthana/chapter3" element={<Book1ch3 />} />
        <Route path="/sutrasthana/chapter4" element={<Book1ch4 />} />
        <Route path="/sutrasthana/chapter5" element={<Book1ch5 />} />
        <Route path="/sutrasthana/chapter6" element={<Book1ch6 />} />
        <Route path="/sutrasthana/chapter7" element={<Book1ch7 />} />
        <Route path="/sutrasthana/chapter8" element={<Book1ch8 />} />
        <Route path="/sutrasthana/chapter9" element={<Book1ch9 />} />
        <Route path="/sutrasthana/chapter10" element={<Book1ch10 />} />
        <Route path="/sutrasthana/chapter11" element={<Book1ch11 />} />
        <Route path="/sutrasthana/chapter12" element={<Book1ch12 />} />
        <Route path="/sutrasthana/chapter13" element={<Book1ch13 />} />
        <Route path="/sutrasthana/chapter14" element={<Book1ch14 />} />
        <Route path="/sutrasthana/chapter15" element={<Book1ch15 />} />
        <Route path="/sutrasthana/chapter16" element={<Book1ch16 />} />
        <Route path="/sutrasthana/chapter17" element={<Book1ch1730 />} /> */}

        {/* <Route path="/nidanasthana" element={<Book2/>} />
        <Route path="/vimanasthana" element={<Book3 />} /> */}
        <Route path="/shareerasthana" element={<Book4 />} />
        <Route path="/shareerasthana/chapter1" element={<Book4ch1 />} />
        <Route path="/shareerasthana/chapter2" element={<Book4ch2 />} />
        <Route path="/shareerasthana/chapter3" element={<Book4ch3 />} />
        <Route path="/shareerasthana/chapter4" element={<Book4ch4 />} />
        <Route path="/shareerasthana/chapter5" element={<Book4ch5 />} />
        <Route path="/shareerasthana/chapter6" element={<Book4ch6 />} /> 
        <Route path="/shareerasthana/chapter7" element={<Book4ch7 />} />
        <Route path="/shareerasthana/chapter8" element={<Book4ch8 />} />
      </Routes>
    </Router>
  )
}

export default App
