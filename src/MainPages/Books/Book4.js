import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Sutrasthana1.png'
import '../../App.css';

const Book4 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="ch1" path1="/shareerasthana/chapter1" text2="ch2" path2="/" text3="ch1" path3="/"/>
            {/* <ChaptercardThree text1="testch" path1="/testch" text2="ch1" path2="/" text3="ch1" path3="/"/> */}
        </div>
    )
}

export default Book4
