import React from 'react'
import '../App.css';
import BookList from '../globalComponents/ChapterCard'
import book1 from '../assests/Book/sutrasthana.png'
import book2 from '../assests/Book/nidanasthana.png'
import book3 from '../assests/Book/vimanasthana.png'
import book4 from '../assests/Book/shareerasthana.png'

const AllBooks = () => {
    return (
        <div>
            <div className="conatiner text-center mt-3">
                <h1><strong>List of Sthana | अध्याय</strong></h1>
            </div>
                    {/* <NavDropdown.Divider />sutrasthana,sutrasthana,vimanasthana,shareerasthana */}

            <BookList img1={book1} path1="/sutrasthana" img2={book2} path2="/sutrasthana"/>
            <BookList img1={book3} path1="/vimanasthana" img2={book4} path2="/shareerasthana"/>
        </div>
    )
}

export default AllBooks
