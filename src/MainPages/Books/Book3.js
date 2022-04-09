import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Vimanasthana-1.png'
import '../../App.css';

const Book3 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="1. रसविमानम्" path1="/vimanasthana/chapter1" text2="2. त्रिविधकुक्षीयविमानम्" path2="/vimanasthana/chapter2" text3="3. जनपदोद्ध्वंसनीयविमानम्" path3="/vimanasthana/chapter3"/>
            <ChaptercardThree text1="4. त्रिविधरोगविशेषविज्ञानीयविमानम्" path1="/vimanasthana/chapter4" text2="5. स्रोतोविमानम्" path2="/vimanasthana/chapter5" text3="6. रोगानीकविमानम्" path3="/vimanasthana/chapter6"/>
            <ChaptercardThree text1="7. व्याधितरूपीयविमानम्" path1="/vimanasthana/chapter7" text2="8. रोगभिषग्जितीयविमानम्" path2="/vimanasthana/chapter8" text3="" path3="/"/>
        </div>
    )
    
}

export default Book3
