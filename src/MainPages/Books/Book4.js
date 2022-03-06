import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Shareerasthana-1.png'
import '../../App.css';

const Book4 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="Chapter 1" path1="/shareerasthana/chapter1" text2="Chapter 2" path2="/shareerasthana/chapter2" text3="Chapter 3" path3="/"/>
            <ChaptercardThree text1="Chapter 4 : महतीगर्भावक्रान्तिशारीरम् अध्याय" path1="/" text2="Chapter 5 : पुरुषविचयशारीरम् अध्याय" path2="/" text3="Chapter 6 : शरीरविचयशारीरम् अध्याय" path3="/"/>
            <ChaptercardThree text1="Chapter 7 : शरीरसङ्ख्याशारीरम् अध्याय" path1="/" text2="Chapter 8 : जातिसूत्रीयशारीरम् अध्याय" path2="/" text3="" path3="/"/>
        </div>
    )
}

export default Book4
