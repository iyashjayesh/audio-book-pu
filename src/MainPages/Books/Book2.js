import React, { useState } from "react";
import AudioCard from '../../globalComponents/AudioCard'
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'
import book1 from '../../assests/book-ch-img/Audio-Book-PU/sutrasthana/1.png'
import book2 from '../../assests/book-ch-img/Audio-Book-PU/sutrasthana/2.png'
import book3 from '../../assests/book-ch-img/Audio-Book-PU/sutrasthana/3.png'

import sliderImg from '../../assests/BookLong/Nidanasthana1.png'

import Modal from '../../pop-up/Modal'
import '../../App.css';

import r1 from './C1S1.aac'

const Book2 = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="popup">
            <BookSlider img={sliderImg} />
            {/* <ChaptercardThree img1={book1} path1="/sutrasthana/chapter1" img2={book2} path2="/" img3={book3} path3="/"/> */}
            <ChaptercardThree text1="ch1" path1="/sutrasthana/chapter1" text2="ch1" path2="/" text3="ch1" path3="/"/>
            <ChaptercardThree text1="testch" path1="/testch" text2="ch1" path2="/" text3="ch1" path3="/"/>
            <AudioCard audio={r1}/>  
            <button
                className="openModalBtn"
                to="/testch"
                onClick={() => {
                setModalOpen(true);
            }}
            >
                Open
            </button>

            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    )
}

export default Book2
