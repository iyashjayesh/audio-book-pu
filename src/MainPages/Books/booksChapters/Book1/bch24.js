import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/24/C24S1,2.mp3'
import r2 from '../../../../assests/Audio/book1audio/24/C24S3.mp3'
import r3 from '../../../../assests/Audio/book1audio/24/C24S4.mp3'
import r4 from '../../../../assests/Audio/book1audio/24/C24S5,6,7,8,9,10.mp3'
import r5 from '../../../../assests/Audio/book1audio/24/C24S11,12,13,14,15,16.mp3'
import r6 from '../../../../assests/Audio/book1audio/24/C24S17.mp3'
import r7 from '../../../../assests/Audio/book1audio/24/C24S18.mp3'
import r8 from '../../../../assests/Audio/book1audio/24/C24S19.mp3'
import r9 from '../../../../assests/Audio/book1audio/24/C24S20,21.mp3'
import r10 from '../../../../assests/Audio/book1audio/24/C24S22.mp3'
import r11 from '../../../../assests/Audio/book1audio/24/C24S23.mp3'
import r12 from '../../../../assests/Audio/book1audio/24/C24S24.mp3'
import r13 from '../../../../assests/Audio/book1audio/24/C24S25,26,27.mp3'
import r14 from '../../../../assests/Audio/book1audio/24/C24S28,29.mp3'
import r15 from '../../../../assests/Audio/book1audio/24/C24S30.mp3'
import r16 from '../../../../assests/Audio/book1audio/24/C24S31.mp3'
import r17 from '../../../../assests/Audio/book1audio/24/C24S32.mp3'
import r18 from '../../../../assests/Audio/book1audio/24/C24S33.mp3'
import r19 from '../../../../assests/Audio/book1audio/24/C24S34.mp3'
import r20 from '../../../../assests/Audio/book1audio/24/C24S35,36.mp3'
import r21 from '../../../../assests/Audio/book1audio/24/C24S37,38.mp3'
import r22 from '../../../../assests/Audio/book1audio/24/C24S39,40.mp3'
import r23 from '../../../../assests/Audio/book1audio/24/C24S41.mp3'
import r24 from '../../../../assests/Audio/book1audio/24/C24S42.mp3'
import r25 from '../../../../assests/Audio/book1audio/24/C24S43.mp3'
import r26 from '../../../../assests/Audio/book1audio/24/C24S44,45.mp3'
import r27 from '../../../../assests/Audio/book1audio/24/C24S46,47.mp3'
import r28 from '../../../../assests/Audio/book1audio/24/C24S48,49,50.mp3'
import r29 from '../../../../assests/Audio/book1audio/24/C24S51,52,53.mp3'
import r30 from '../../../../assests/Audio/book1audio/24/C24S54.mp3'
import r31 from '../../../../assests/Audio/book1audio/24/C24S55,56,57,58.mp3'
import r32 from '../../../../assests/Audio/book1audio/24/C24S59,60.mp3'
import r33 from '../../../../assests/Audio/book1audio/24/C24Slast.mp3'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/24.png'

const Book1ch24 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 5,6,7,8,9,10" sholk="" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 11,12,13,14,15,16" sholk="" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 17" sholk="" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 18" sholk="" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 19" sholk="" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 20,21" sholk="" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 22" sholk="" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 23" sholk="" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 24" sholk="" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 25,26,27" sholk="" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 28,29" sholk="" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 30" sholk="" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 31" sholk="" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 32" sholk="" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 33" sholk="" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 34" sholk="" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 35,36" sholk="" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 37,38" sholk="" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 39,40" sholk="" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 41" sholk="" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 42" sholk="" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 43" sholk="" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 44,45" sholk="" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 46,47" sholk="" audio={r27}/>
                <SingleAudioCard sholkno="Shloka 48,49,50" sholk="" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 51,52,53" sholk="" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 54" sholk="" audio={r30}/>
                <SingleAudioCard sholkno="Shloka 55,56,57,58" sholk="" audio={r31}/>
                <SingleAudioCard sholkno="Shloka 59,60" sholk="" audio={r32}/>
                <SingleAudioCard sholkno="Last Shloka" sholk="" audio={r33}/>
                
            </div>
        </div>
    )
}

export default Book1ch24




 