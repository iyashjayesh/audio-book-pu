import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Nidanasthana1.png'
import '../../App.css';

const Book2 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="1.ज्वरनिदानम्" path1="/nidanasthana/chapter1" text2="2. रक्तपित्तनिदानम्" path2="/nidanasthana/chapter2" text3="3.गुल्मनिदानम्" path3="/nidanasthana/chapter3"/>
            <ChaptercardThree text1="4. प्रमेहनिदानम्" path1="/nidanasthana/chapter4" text2="5.कुष्ठनिदानम्" path2="/nidanasthana/chapter5" text3="6. शोषनिदानम्" path3="/nidanasthana/chapter6"/>
            <ChaptercardThree text1="7. उन्मादनिदानम्" path1="/nidanasthana/chapter7" text2="8. अपस्मारनिदानम्" path2="/nidanasthana/chapter8" text3="" path3="/"/>
        </div>
    )

    






    
}

export default Book2
