import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book4audio/ch7/7s1.acc'
import r2 from '../../../../assests/Audio/book4audio/ch7/7s2.acc'
import r3 from '../../../../assests/Audio/book4audio/ch7/7s3.acc'
import r4 from '../../../../assests/Audio/book4audio/ch7/7s4.acc'
import r5 from '../../../../assests/Audio/book4audio/ch7/7s5.acc'
import r6 from '../../../../assests/Audio/book4audio/ch7/7s6.acc'
import r7 from '../../../../assests/Audio/book4audio/ch7/7s7.acc'
import r8 from '../../../../assests/Audio/book4audio/ch7/7s8.acc'
import r9 from '../../../../assests/Audio/book4audio/ch7/7s9.acc'
import r10 from '../../../../assests/Audio/book4audio/ch7/7s10.acc'
import r11 from '../../../../assests/Audio/book4audio/ch7/7s11.acc'
import r12 from '../../../../assests/Audio/book4audio/ch7/7s12.acc'
import r13 from '../../../../assests/Audio/book4audio/ch7/7s13.acc'
import r14 from '../../../../assests/Audio/book4audio/ch7/7s14.acc'
import r15 from '../../../../assests/Audio/book4audio/ch7/7s15.acc'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/shareerasthana/7.png'

const Book4ch7 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1" sholk="" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 2" sholk="" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 5" sholk="" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 6" sholk="" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 11" sholk="" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 12" sholk="" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 13" sholk="" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="" audio={r15}/>
                
            </div>
        </div>
    )
}

export default Book4ch7



