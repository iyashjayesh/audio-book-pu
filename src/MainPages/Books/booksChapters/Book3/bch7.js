import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book3audio/ch7/c7s1, 2.aac'
import r2 from '../../../../assests/Audio/book3audio/ch7/c7s3.aac'
import r3 from '../../../../assests/Audio/book3audio/ch7/c7s4.aac'
import r4 from '../../../../assests/Audio/book3audio/ch7/c7s5, 6,7.aac'
import r5 from '../../../../assests/Audio/book3audio/ch7/c7s8.aac'
import r6 from '../../../../assests/Audio/book3audio/ch7/c7s9.aac'
import r7 from '../../../../assests/Audio/book3audio/ch7/c7s10.aac'
import r8 from '../../../../assests/Audio/book3audio/ch7/c7s11.aac'
import r9 from '../../../../assests/Audio/book3audio/ch7/c7s12.aac'
import r10 from '../../../../assests/Audio/book3audio/ch7/c7s13.aac'
import r11 from '../../../../assests/Audio/book3audio/ch7/c7s14.aac'
import r12 from '../../../../assests/Audio/book3audio/ch7/c7s15.aac'
import r13 from '../../../../assests/Audio/book3audio/ch7/c7s16.aac'
import r14 from '../../../../assests/Audio/book3audio/ch7/c7s17.aac'
import r15 from '../../../../assests/Audio/book3audio/ch7/c7s18.aac'
import r16 from '../../../../assests/Audio/book3audio/ch7/c7s19.aac'
import r17 from '../../../../assests/Audio/book3audio/ch7/c7s20.aac'
import r18 from '../../../../assests/Audio/book3audio/ch7/c7s21.aac'
import r19 from '../../../../assests/Audio/book3audio/ch7/c7s22.aac'
import r20 from '../../../../assests/Audio/book3audio/ch7/c7s23, 24.aac'
import r21 from '../../../../assests/Audio/book3audio/ch7/c7s25.aac'
import r22 from '../../../../assests/Audio/book3audio/ch7/c7s26.aac'
import r23 from '../../../../assests/Audio/book3audio/ch7/c7s27.aac'
import r24 from '../../../../assests/Audio/book3audio/ch7/c7s28, 29,30.aac'
import r25 from '../../../../assests/Audio/book3audio/ch7/c7s31, 32.aac'
import r26 from '../../../../assests/Audio/book3audio/ch7/c7slast.aac'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/vimanasthana/7.png'

const Book3ch7 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1, 2" sholk="" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 5, 6, 7" sholk="" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 11" sholk="" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 12" sholk="" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 13" sholk="" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 16" sholk="" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 17" sholk="" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 18" sholk="" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 19" sholk="" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 20" sholk="" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 21" sholk="" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 22" sholk="" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 23, 24" sholk="" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 25" sholk="" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 26" sholk="" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 27" sholk="" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 28, 29, 30" sholk="" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 31, 32" sholk="" audio={r25}/>
                <SingleAudioCard sholkno="Shloka last" sholk="" audio={r26}/>

            </div>
        </div>
    )
}

export default Book3ch7




 