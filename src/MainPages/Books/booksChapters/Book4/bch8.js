import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book4audio/ch8/8S1.aac'
import r2 from '../../../../assests/Audio/book4audio/ch8/8s2.aac'
import r3 from '../../../../assests/Audio/book4audio/ch8/8s3.aac'
import r4 from '../../../../assests/Audio/book4audio/ch8/8s4.aac'
import r5 from '../../../../assests/Audio/book4audio/ch8/8s5.aac'
import r6 from '../../../../assests/Audio/book4audio/ch8/8s6.aac'
import r7 from '../../../../assests/Audio/book4audio/ch8/8s7.aac'
import r8 from '../../../../assests/Audio/book4audio/ch8/8s8.aac'
import r9 from '../../../../assests/Audio/book4audio/ch8/8s9.aac'
import r10 from '../../../../assests/Audio/book4audio/ch8/8s10.aac'
import r11 from '../../../../assests/Audio/book4audio/ch8/8s11.aac'
import r12 from '../../../../assests/Audio/book4audio/ch8/8s12.aac'
import r13 from '../../../../assests/Audio/book4audio/ch8/8s13.aac'
import r14 from '../../../../assests/Audio/book4audio/ch8/8s14.aac'
import r15 from '../../../../assests/Audio/book4audio/ch8/8s15.aac'
import r16 from '../../../../assests/Audio/book4audio/ch8/8s16.aac'
import r17 from '../../../../assests/Audio/book4audio/ch8/8s17.aac'
import r18 from '../../../../assests/Audio/book4audio/ch8/8s18.aac'
import r19 from '../../../../assests/Audio/book4audio/ch8/8s19.aac'
import r20 from '../../../../assests/Audio/book4audio/ch8/8s20.aac'
import r21 from '../../../../assests/Audio/book4audio/ch8/8s21.aac'
import r22 from '../../../../assests/Audio/book4audio/ch8/8s22.aac'
import r23 from '../../../../assests/Audio/book4audio/ch8/8s23.aac'
import r24 from '../../../../assests/Audio/book4audio/ch8/8s24.aac'
import r25 from '../../../../assests/Audio/book4audio/ch8/8s25.aac'
import r26 from '../../../../assests/Audio/book4audio/ch8/8s26.aac'
import r27 from '../../../../assests/Audio/book4audio/ch8/8s27.aac'
import r28 from '../../../../assests/Audio/book4audio/ch8/8s28.aac'
import r29 from '../../../../assests/Audio/book4audio/ch8/8s29.aac'
import r30 from '../../../../assests/Audio/book4audio/ch8/8s30.aac'
import r31 from '../../../../assests/Audio/book4audio/ch8/8s31.aac'
import r32 from '../../../../assests/Audio/book4audio/ch8/8s32.aac'
import r33 from '../../../../assests/Audio/book4audio/ch8/8s33.aac'
import r34 from '../../../../assests/Audio/book4audio/ch8/8s34.aac'
import r35 from '../../../../assests/Audio/book4audio/ch8/8s35.aac'
import r36 from '../../../../assests/Audio/book4audio/ch8/8s36.aac'
import r37 from '../../../../assests/Audio/book4audio/ch8/8s37.aac'
import r38 from '../../../../assests/Audio/book4audio/ch8/8s38.aac'
import r39 from '../../../../assests/Audio/book4audio/ch8/8s39.aac'
import r40 from '../../../../assests/Audio/book4audio/ch8/8s40.aac'
import r41 from '../../../../assests/Audio/book4audio/ch8/8s41.aac'
import r42 from '../../../../assests/Audio/book4audio/ch8/8s42.aac'
import r43 from '../../../../assests/Audio/book4audio/ch8/8s43.aac'
import r44 from '../../../../assests/Audio/book4audio/ch8/8s44.aac'
import r45 from '../../../../assests/Audio/book4audio/ch8/8s45.aac'
import r46 from '../../../../assests/Audio/book4audio/ch8/8s46.aac'
import r47 from '../../../../assests/Audio/book4audio/ch8/8s47.aac'
import r48 from '../../../../assests/Audio/book4audio/ch8/8s48.aac'
import r49 from '../../../../assests/Audio/book4audio/ch8/8s49.aac'
import r50 from '../../../../assests/Audio/book4audio/ch8/8s50.aac'
import r51 from '../../../../assests/Audio/book4audio/ch8/8s51.aac'
import r52 from '../../../../assests/Audio/book4audio/ch8/8S52.aac'
import r53 from '../../../../assests/Audio/book4audio/ch8/8S53.aac'
import r54 from '../../../../assests/Audio/book4audio/ch8/8S54.aac'
import r55 from '../../../../assests/Audio/book4audio/ch8/8S55.aac'
import r56 from '../../../../assests/Audio/book4audio/ch8/8S56.aac'
import r57 from '../../../../assests/Audio/book4audio/ch8/8S57.aac'
import r58 from '../../../../assests/Audio/book4audio/ch8/8S58.aac'
import r59 from '../../../../assests/Audio/book4audio/ch8/8S59.aac'
import r60 from '../../../../assests/Audio/book4audio/ch8/8S60.aac'
import r61 from '../../../../assests/Audio/book4audio/ch8/8S61.aac'
import r62 from '../../../../assests/Audio/book4audio/ch8/8S62.aac'
import r63 from '../../../../assests/Audio/book4audio/ch8/8S63.aac'
import r64 from '../../../../assests/Audio/book4audio/ch8/8S64.aac'
import r65 from '../../../../assests/Audio/book4audio/ch8/8S65.aac'
import r66 from '../../../../assests/Audio/book4audio/ch8/8S66.aac'
import r67 from '../../../../assests/Audio/book4audio/ch8/8S67.aac'
import r68 from '../../../../assests/Audio/book4audio/ch8/8S68.aac'
import r69 from '../../../../assests/Audio/book4audio/ch8/8S69.aac'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/shareerasthana/8.png'

const Book4ch8 = () => {
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
                <SingleAudioCard sholkno="Shloka 7" sholk= audio={r7}/>
                <SingleAudioCard sholkno="Shloka 8" sholk= audio={r8}/>
                <SingleAudioCard sholkno="Shloka 9" sholk= audio={r9}/>
                <SingleAudioCard sholkno="Shloka 10" sholk= audio={r10}/>
                <SingleAudioCard sholkno="Shloka 11" sholk= audio={r11}/>
                <SingleAudioCard sholkno="Shloka 12" sholk= audio={r12}/>
                <SingleAudioCard sholkno="Shloka 13" sholk= audio={r13}/>
                <SingleAudioCard sholkno="Shloka 14" sholk= audio={r14}/>
                <SingleAudioCard sholkno="Shloka 15" sholk= audio={r15}/>
                <SingleAudioCard sholkno="Shloka 16" sholk= audio={r16}/>
                <SingleAudioCard sholkno="Shloka 17" sholk= audio={r17}/>
                <SingleAudioCard sholkno="Shloka 18" sholk= audio={r18}/>
                <SingleAudioCard sholkno="Shloka 19" sholk= audio={r19}/>
                <SingleAudioCard sholkno="Shloka 20" sholk= audio={r20}/>
                <SingleAudioCard sholkno="Shloka 21" sholk= audio={r21}/>
                <SingleAudioCard sholkno="Shloka 22" sholk= audio={r22}/>
                <SingleAudioCard sholkno="Shloka 23" sholk= audio={r23}/>
                <SingleAudioCard sholkno="Shloka 24" sholk= audio={r24}/>
                <SingleAudioCard sholkno="Shloka 25" sholk= audio={r25}/>
                <SingleAudioCard sholkno="Shloka 26" sholk= audio={r26}/>
                <SingleAudioCard sholkno="Shloka 27" sholk= audio={r27}/>
                <SingleAudioCard sholkno="Shloka 28" sholk= audio={r28}/>
                <SingleAudioCard sholkno="Shloka 29" sholk= audio={r29}/>
                <SingleAudioCard sholkno="Shloka 30" sholk= audio={r30}/>
                <SingleAudioCard sholkno="Shloka 31" sholk= audio={r31}/>
                <SingleAudioCard sholkno="Shloka 32" sholk= audio={r32}/>
                <SingleAudioCard sholkno="Shloka 33" sholk= audio={r33}/>
                <SingleAudioCard sholkno="Shloka 34" sholk= audio={r34}/>
                <SingleAudioCard sholkno="Shloka 35" sholk= audio={r35}/>
                <SingleAudioCard sholkno="Shloka 36" sholk= audio={r36}/>
                <SingleAudioCard sholkno="Shloka 37" sholk= audio={r37}/>              
                <SingleAudioCard sholkno="Shloka 38" sholk= audio={r38}/>
                <SingleAudioCard sholkno="Shloka 39" sholk= audio={r39}/>
                <SingleAudioCard sholkno="Shloka 40" sholk= audio={r40}/>
                <SingleAudioCard sholkno="Shloka 41" sholk= audio={r41}/>
                <SingleAudioCard sholkno="Shloka 42" sholk= audio={r42}/>
                <SingleAudioCard sholkno="Shloka 43" sholk= audio={r43}/>
                <SingleAudioCard sholkno="Shloka 44" sholk= audio={r44}/>
                <SingleAudioCard sholkno="Shloka 45" sholk= audio={r45}/>
                <SingleAudioCard sholkno="Shloka 46" sholk= audio={r46}/>
                <SingleAudioCard sholkno="Shloka 47" sholk= audio={r47}/>
                <SingleAudioCard sholkno="Shloka 48" sholk= audio={r48}/>
                <SingleAudioCard sholkno="Shloka 49" sholk= audio={r49}/>
                <SingleAudioCard sholkno="Shloka 50" sholk= audio={r50}/>
                <SingleAudioCard sholkno="Shloka 51" sholk= audio={r51}/>
                <SingleAudioCard sholkno="Shloka 52" sholk= audio={r52}/>
                <SingleAudioCard sholkno="Shloka 53" sholk= audio={r53}/>
                <SingleAudioCard sholkno="Shloka 54" sholk= audio={r54}/>
                <SingleAudioCard sholkno="Shloka 55" sholk= audio={r55}/>
                <SingleAudioCard sholkno="Shloka 56" sholk= audio={r56}/>
                <SingleAudioCard sholkno="Shloka 57" sholk= audio={r57}/>
                <SingleAudioCard sholkno="Shloka 58" sholk= audio={r58}/>
                <SingleAudioCard sholkno="Shloka 59" sholk= audio={r59}/>
                <SingleAudioCard sholkno="Shloka 60" sholk= audio={r60}/>
                <SingleAudioCard sholkno="Shloka 61" sholk= audio={r61}/>
                <SingleAudioCard sholkno="Shloka 62" sholk= audio={r62}/>
                <SingleAudioCard sholkno="Shloka 63" sholk= audio={r63}/>
                <SingleAudioCard sholkno="Shloka 64" sholk= audio={r64}/>
                <SingleAudioCard sholkno="Shloka 65" sholk= audio={r65}/>
                <SingleAudioCard sholkno="Shloka 66" sholk= audio={r66}/>
                <SingleAudioCard sholkno="Shloka 67" sholk= audio={r67}/>
                <SingleAudioCard sholkno="Shloka 68" sholk= audio={r68}/>
                <SingleAudioCard sholkno="Shloka 69" sholk= audio={r69}/>

            </div>
        </div>
    )
}

export default Book4ch8




