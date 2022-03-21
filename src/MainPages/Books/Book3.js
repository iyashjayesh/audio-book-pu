import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Vimanasthana-1.png'
import '../../App.css';

const Book3 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="Chapter 1 : कतिधापुरुषीयशारीरम् अध्याय" path1="/vimanasthana/chapter1" text2="Chapter 2 : अतुल्यगोत्रीयशारीरम् अध्याय" path2="/vimanasthana/chapter2" text3="Chapter 3 : खुड्डिकागर्भावक्रान्तिशारीरम् अध्याय" path3="/vimanasthana/chapter3"/>
            <ChaptercardThree text1="Chapter 4 : महतीगर्भावक्रान्तिशारीरम् अध्याय" path1="/vimanasthana/chapter4" text2="Chapter 5 : पुरुषविचयशारीरम् अध्याय" path2="/vimanasthana/chapter5" text3="Chapter 6 : शरीरविचयशारीरम् अध्याय" path3="/vimanasthana/chapter6"/>
            <ChaptercardThree text1="Chapter 7 : शरीरसङ्ख्याशारीरम् अध्याय" path1="/vimanasthana/chapter7" text2="Chapter 8 : जातिसूत्रीयशारीरम् अध्याय" path2="/vimanasthana/chapter8" text3="" path3="/"/>
        </div>
    )
    
}

export default Book3
