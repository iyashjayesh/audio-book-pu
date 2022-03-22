import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Sutrasthana1.png'
import '../../App.css';

const Book1 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="Chapter 1" path1="/sutrasthana/chapter1" text2="Chapter 2 " path2="/sutrasthana/chapter2" text3="Chapter 3 " path3="/sutrasthana/chapter3"/>
            <ChaptercardThree text1="Chapter 4" path1="/sutrasthana/chapter4" text2="Chapter 5 " path2="/sutrasthana/chapter5" text3="Chapter 6 " path3="/sutrasthana/chapter6"/>
            <ChaptercardThree text1="Chapter 7" path1="/sutrasthana/chapter7" text2="Chapter 8" path2="/sutrasthana/chapter8" text3="Chapter 9" path3="/sutrasthana/chapter9"/>
            <ChaptercardThree text1="Chapter 10" path1="/sutrasthana/chapter10" text2="" path2="" text3="" path3="/"/>
        </div>
    )
    
}

export default Book1
