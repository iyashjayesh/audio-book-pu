import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book3audio/ch7/c7s1, 2.aac'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/vimanasthana/7.png'

const Book3ch7 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1" sholk="" audio={r1}/>
                
            </div>
        </div>
    )
}

export default Book3ch7




 