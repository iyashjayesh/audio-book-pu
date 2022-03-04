import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Shareerasthana-1.png'
import '../../App.css';

const Book4 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="Chapter 1" path1="/shareerasthana/chapter1" text2="Chapter 2" path2="/" text3="Chapter 3" path3="/"/>
            {/* <ChaptercardThree text1="testch" path1="/testch" text2="ch1" path2="/" text3="ch1" path3="/"/> */}
        </div>
    )
}

export default Book4
