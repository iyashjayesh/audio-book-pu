import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/21/C21S1,2.mp3'
import r2 from '../../../../assests/Audio/book1audio/21/C21S3.mp3'
import r3 from '../../../../assests/Audio/book1audio/21/C21S4.mp3'
import r4 from '../../../../assests/Audio/book1audio/21/C21S5,6.mp3'
import r5 from '../../../../assests/Audio/book1audio/21/C21S7,8.mp3'
import r6 from '../../../../assests/Audio/book1audio/21/C21S9.mp3'  
import r7 from '../../../../assests/Audio/book1audio/21/C21S10.mp3'
import r8 from '../../../../assests/Audio/book1audio/21/C21S11,12.mp3'
import r9 from '../../../../assests/Audio/book1audio/21/C21S13,14.mp3'
import r10 from '../../../../assests/Audio/book1audio/21/C21S15.mp3'
import r11 from '../../../../assests/Audio/book1audio/21/C21S16,17.mp3'
import r12 from '../../../../assests/Audio/book1audio/21/C21S18,19.mp3'
import r13 from '../../../../assests/Audio/book1audio/21/C21S20.mp3'
import r14 from '../../../../assests/Audio/book1audio/21/C21S21.mp3'
import r15 from '../../../../assests/Audio/book1audio/21/C21S22,23,24,25,26,27.mp3'
import r16 from '../../../../assests/Audio/book1audio/21/C21S28.mp3'
import r17 from '../../../../assests/Audio/book1audio/21/C21S29,30,31,32,33.mp3'
import r18 from '../../../../assests/Audio/book1audio/21/C21S34.mp3'
import r19 from '../../../../assests/Audio/book1audio/21/C21S35.mp3'
import r20 from '../../../../assests/Audio/book1audio/21/C21S36.mp3'
import r21 from '../../../../assests/Audio/book1audio/21/C21S37,38.mp3'
import r22 from '../../../../assests/Audio/book1audio/21/C21S39,40,41,42,43.mp3'
import r23 from '../../../../assests/Audio/book1audio/21/C21S44,45.mp3'
import r24 from '../../../../assests/Audio/book1audio/21/C21S46,47,48,49.mp3'
import r25 from '../../../../assests/Audio/book1audio/21/C21S50.mp3'
import r26 from '../../../../assests/Audio/book1audio/21/C21S51.mp3'
import r27 from '../../../../assests/Audio/book1audio/21/C21S52,53,54.mp3'
import r28 from '../../../../assests/Audio/book1audio/21/C21S55,56,57.mp3'
import r29 from '../../../../assests/Audio/book1audio/21/C21S58,59.mp3'
import r30 from '../../../../assests/Audio/book1audio/21/C21S60,61,62.mp3'
import r31 from '../../../../assests/Audio/book1audio/21/C21Slast63.mp3'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/21.png'

const Book1ch21 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 5,6" sholk="" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 7,8" sholk="" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 11,12" sholk="" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 13,14" sholk="" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 16,17" sholk="" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 18,19" sholk="" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 20" sholk="" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 21" sholk="" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 22,23,24,25,26,27" sholk="" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 28" sholk="" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 29,30,31,32,33" sholk="" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 34" sholk="" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 35" sholk="" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 36" sholk="" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 37,38" sholk="" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 39,40,41,42,43" sholk="" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 44,45" sholk="" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 46,47,48,49" sholk="" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 50" sholk="" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 51" sholk="" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 52,53,54" sholk="" audio={r27}/>
                <SingleAudioCard sholkno="Shloka 55,56,57" sholk="" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 58,59" sholk="" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 60,61,62" sholk="" audio={r30}/>
                <SingleAudioCard sholkno="Last Shloka" sholk="" audio={r31}/>
                
            </div>
        </div>
    )
}

export default Book1ch21




 