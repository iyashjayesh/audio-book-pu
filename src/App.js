import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './localComponents/Header'
import Home from './MainPages/Home'
import AllBooks from './MainPages/AllBooks'
import Book1 from './MainPages/Books/Book1'
import Book1ch1 from './MainPages/Books/booksChapters/Book1/bch1'
import Book1ch2 from './MainPages/Books/booksChapters/Book1/bch2'
import Book1ch3 from './MainPages/Books/booksChapters/Book1/bch3'
import Book1ch4 from './MainPages/Books/booksChapters/Book1/bch4'
import Book1ch5 from './MainPages/Books/booksChapters/Book1/bch5'
import Book1ch6 from './MainPages/Books/booksChapters/Book1/bch6'
import Book1ch7 from './MainPages/Books/booksChapters/Book1/bch7'
import Book1ch8 from './MainPages/Books/booksChapters/Book1/bch8'
import Book1ch9 from './MainPages/Books/booksChapters/Book1/bch9'
import Book1ch10 from './MainPages/Books/booksChapters/Book1/bch10'
import Book1ch11 from './MainPages/Books/booksChapters/Book1/bch11'
import Book1ch12 from './MainPages/Books/booksChapters/Book1/bch12'
import Book1ch13 from './MainPages/Books/booksChapters/Book1/bch13'
import Book1ch14 from './MainPages/Books/booksChapters/Book1/bch14'
import Book1ch15 from './MainPages/Books/booksChapters/Book1/bch15'
import Book1ch16 from './MainPages/Books/booksChapters/Book1/bch16'
import Book1ch17 from './MainPages/Books/booksChapters/Book1/bch17'
import Book1ch18 from './MainPages/Books/booksChapters/Book1/bch18'
import Book1ch19 from './MainPages/Books/booksChapters/Book1/bch19'
import Book1ch20 from './MainPages/Books/booksChapters/Book1/bch20'
import Book1ch21 from './MainPages/Books/booksChapters/Book1/bch21'
import Book1ch22 from './MainPages/Books/booksChapters/Book1/bch22'
import Book1ch23 from './MainPages/Books/booksChapters/Book1/bch23'
import Book1ch24 from './MainPages/Books/booksChapters/Book1/bch24'
import Book1ch25 from './MainPages/Books/booksChapters/Book1/bch25'
import Book1ch26 from './MainPages/Books/booksChapters/Book1/bch26'
import Book1ch27 from './MainPages/Books/booksChapters/Book1/bch27'
import Book1ch28 from './MainPages/Books/booksChapters/Book1/bch28'
import Book1ch29 from './MainPages/Books/booksChapters/Book1/bch29'
import Book1ch30 from './MainPages/Books/booksChapters/Book1/bch30'

//Book 2
import Book2 from './MainPages/Books/Book2'
import Book2ch1 from './MainPages/Books/booksChapters/Book2/bch1'
import Book2ch2 from './MainPages/Books/booksChapters/Book2/bch2'
import Book2ch3 from './MainPages/Books/booksChapters/Book2/bch3'
import Book2ch4 from './MainPages/Books/booksChapters/Book2/bch4'
import Book2ch5 from './MainPages/Books/booksChapters/Book2/bch5'
import Book2ch6 from './MainPages/Books/booksChapters/Book2/bch6'
import Book2ch7 from './MainPages/Books/booksChapters/Book2/bch7'
import Book2ch8 from './MainPages/Books/booksChapters/Book2/bch8'

import Book3 from './MainPages/Books/Book3'
import Book3ch1 from './MainPages/Books/booksChapters/Book3/bch1'
import Book3ch2 from './MainPages/Books/booksChapters/Book3/bch2'
import Book3ch3 from './MainPages/Books/booksChapters/Book3/bch3'
import Book3ch4 from './MainPages/Books/booksChapters/Book3/bch4'
import Book3ch5 from './MainPages/Books/booksChapters/Book3/bch5'
import Book3ch6 from './MainPages/Books/booksChapters/Book3/bch6'
import Book3ch7 from './MainPages/Books/booksChapters/Book3/bch7'
import Book3ch8 from './MainPages/Books/booksChapters/Book3/bch8'

import Book4 from './MainPages/Books/Book4'
import Book4ch1 from './MainPages/Books/booksChapters/Book4/bch1'
import Book4ch2 from './MainPages/Books/booksChapters/Book4/bch2'
import Book4ch3 from './MainPages/Books/booksChapters/Book4/bch3'
import Book4ch4 from './MainPages/Books/booksChapters/Book4/bch4'
import Book4ch5 from './MainPages/Books/booksChapters/Book4/bch5'
import Book4ch6 from './MainPages/Books/booksChapters/Book4/bch6'
import Book4ch7 from './MainPages/Books/booksChapters/Book4/bch7'
import Book4ch8 from './MainPages/Books/booksChapters/Book4/bch8'

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
        <Route path="/sutrasthana/chapter2" element={<Book1ch2 />} />
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
        <Route path="/sutrasthana/chapter17" element={<Book1ch17 />} />
        <Route path="/sutrasthana/chapter18" element={<Book1ch18 />} />
        <Route path="/sutrasthana/chapter19" element={<Book1ch19 />} />
        <Route path="/sutrasthana/chapter20" element={<Book1ch20 />} />
        <Route path="/sutrasthana/chapter21" element={<Book1ch21 />} />
        <Route path="/sutrasthana/chapter22" element={<Book1ch22 />} />
        <Route path="/sutrasthana/chapter23" element={<Book1ch23 />} />
        <Route path="/sutrasthana/chapter24" element={<Book1ch24 />} />
        <Route path="/sutrasthana/chapter25" element={<Book1ch25 />} />
        <Route path="/sutrasthana/chapter26" element={<Book1ch26 />} />
        <Route path="/sutrasthana/chapter27" element={<Book1ch27 />} />
        <Route path="/sutrasthana/chapter28" element={<Book1ch28 />} />
        <Route path="/sutrasthana/chapter29" element={<Book1ch29 />} />
        <Route path="/sutrasthana/chapter30" element={<Book1ch30 />} />
        
        {/* Book 2 Routing */}
        <Route path="/nidanasthana" element={<Book2/>} />
          <Route path="/nidanasthana/chapter1" element={<Book2ch1 />} />
          <Route path="/nidanasthana/chapter2" element={<Book2ch2 />} />
          <Route path="/nidanasthana/chapter3" element={<Book2ch3 />} />
          <Route path="/nidanasthana/chapter4" element={<Book2ch4 />} />
          <Route path="/nidanasthana/chapter5" element={<Book2ch5 />} />
          <Route path="/nidanasthana/chapter6" element={<Book2ch6 />} />
          <Route path="/nidanasthana/chapter7" element={<Book2ch7 />} />
          <Route path="/nidanasthana/chapter8" element={<Book2ch8 />} />

        
        {/* Book 3 Routing */}
        <Route path="/vimanasthana" element={<Book3 />} />
        <Route path="/vimanasthana/chapter1" element={<Book3ch1 />} />
        <Route path="/vimanasthana/chapter2" element={<Book3ch2 />} />
        <Route path="/vimanasthana/chapter3" element={<Book3ch3 />} />
        <Route path="/vimanasthana/chapter4" element={<Book3ch4 />} />
        <Route path="/vimanasthana/chapter5" element={<Book3ch5 />} />
        <Route path="/vimanasthana/chapter6" element={<Book3ch6 />} />
        <Route path="/vimanasthana/chapter7" element={<Book3ch7 />} />
        <Route path="/vimanasthana/chapter8" element={<Book3ch8 />} />

        {/* Book 4 Routing */}
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
