import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/18/C18S1,2.mp3'
import r2 from '../../../../assests/Audio/book1audio/18/C18S3.mp3'
import r3 from '../../../../assests/Audio/book1audio/18/C18S4.mp3'
import r4 from '../../../../assests/Audio/book1audio/18/C18S5.mp3'
import r5 from '../../../../assests/Audio/book1audio/18/C18S6.mp3'
import r6 from '../../../../assests/Audio/book1audio/18/C18S6(1).mp3'
import r7 from '../../../../assests/Audio/book1audio/18/C18S6(2).mp3'
import r8 from '../../../../assests/Audio/book1audio/18/C18S6(3).mp3'



import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/18.png'

const Book1ch18 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="" audio={r1}/>




            </div>
        </div>
    )
}

export default Book1ch18




 