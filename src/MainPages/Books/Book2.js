import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Nidanasthana1.png'
import '../../App.css';

const Book2 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="Chapter 1" path1="/nidanasthana/chapter1" text2="Chapter 2" path2="/nidanasthana/chapter2" text3="Chapter 3" path3="/nidanasthana/chapter3"/>
            <ChaptercardThree text1="Chapter 4" path1="/nidanasthana/chapter4" text2="Chapter 5" path2="/nidanasthana/chapter5" text3="Chapter 6" path3="/nidanasthana/chapter6"/>
            <ChaptercardThree text1="Chapter 7" path1="/nidanasthana/chapter7" text2="Chapter 8" path2="/nidanasthana/chapter8" text3="" path3="/"/>
        </div>
    )
    
}

export default Book2
