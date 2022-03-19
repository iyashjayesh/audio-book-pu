import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../C1S1.aac'
import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/1.png'

const Book1 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Sholk 1" sholk="अथातो दीर्घञ्जीवितीयमध्यायं व्याख्यास्यामः ||१||" audio="https://drive.google.com/file/d/1FkCt-sz1OXqU9cp5x0KB3tl-H_gBuhFi/preview"/>
                
            </div>
        </div>
    )
}

export default Book1
