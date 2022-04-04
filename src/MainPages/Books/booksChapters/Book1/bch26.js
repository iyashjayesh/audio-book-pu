import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/26/C26S1,2.mp3'
import r2 from '../../../../assests/Audio/book1audio/26/C26S3,4,5.mp3'
import r3 from '../../../../assests/Audio/book1audio/26/C26S6,7.mp3'
import r4 from '../../../../assests/Audio/book1audio/26/C26S8.mp3'
import r5 from '../../../../assests/Audio/book1audio/26/C26S9.mp3'
import r6 from '../../../../assests/Audio/book1audio/26/C26S10.mp3'
import r7 from '../../../../assests/Audio/book1audio/26/C26S11.mp3'
import r8 from '../../../../assests/Audio/book1audio/26/C26S12.mp3'
import r9 from '../../../../assests/Audio/book1audio/26/C26S13.mp3'
import r10 from '../../../../assests/Audio/book1audio/26/C26S14.mp3'
import r11 from '../../../../assests/Audio/book1audio/26/C26S15,16,17,18,19,20,21,22.mp3'
import r12 from '../../../../assests/Audio/book1audio/26/C26S23,24.mp3'
import r13 from '../../../../assests/Audio/book1audio/26/C26S25,26.mp3'
import r14 from '../../../../assests/Audio/book1audio/26/C26S27.mp3'
import r15 from '../../../../assests/Audio/book1audio/26/C26S28.mp3'
import r16 from '../../../../assests/Audio/book1audio/26/C26S29,30.mp3'
import r17 from '../../../../assests/Audio/book1audio/26/C26S31,32,33,34,35.mp3'
import r18 from '../../../../assests/Audio/book1audio/26/C26S36,37.mp3'
import r19 from '../../../../assests/Audio/book1audio/26/C26S38.mp3'
import r20 from '../../../../assests/Audio/book1audio/26/C26S39.mp3'
import r21 from '../../../../assests/Audio/book1audio/26/C26S40.mp3'
import r22 from '../../../../assests/Audio/book1audio/26/C26S41.mp3'
import r23 from '../../../../assests/Audio/book1audio/26/C26S42.mp3'
import r24 from '../../../../assests/Audio/book1audio/26/C26S43-1.mp3'
import r25 from '../../../../assests/Audio/book1audio/26/C26S43-2.mp3'
import r26 from '../../../../assests/Audio/book1audio/26/C26S43-3.mp3'
import r27 from '../../../../assests/Audio/book1audio/26/C26S43-4.mp3'
import r28 from '../../../../assests/Audio/book1audio/26/C26S43-5.mp3'
import r29 from '../../../../assests/Audio/book1audio/26/C26S43-6.mp3'
import r30 from '../../../../assests/Audio/book1audio/26/C26S44.mp3'
import r31 from '../../../../assests/Audio/book1audio/26/C26S45,46,47.mp3'
import r32 from '../../../../assests/Audio/book1audio/26/C26S48,49.mp3'
import r33 from '../../../../assests/Audio/book1audio/26/C26S50,51,52.mp3'
import r34 from '../../../../assests/Audio/book1audio/26/C26S53,54,55,56.mp3'
import r35 from '../../../../assests/Audio/book1audio/26/C26S56(1).mp3'
import r36 from '../../../../assests/Audio/book1audio/26/C26S57,58.mp3'
import r37 from '../../../../assests/Audio/book1audio/26/C26S59,60.mp3'
import r38 from '../../../../assests/Audio/book1audio/26/C26S61,62,63.mp3'
import r39 from '../../../../assests/Audio/book1audio/26/C26S64,65.mp3'
import r40 from '../../../../assests/Audio/book1audio/26/C26S66.mp3'
import r41 from '../../../../assests/Audio/book1audio/26/C26S67.mp3'
import r42 from '../../../../assests/Audio/book1audio/26/C26S68,69,70.mp3'
import r43 from '../../../../assests/Audio/book1audio/26/C26S71,72.mp3'
import r44 from '../../../../assests/Audio/book1audio/26/C26S73.mp3'
import r45 from '../../../../assests/Audio/book1audio/26/C26S74.mp3'
import r46 from '../../../../assests/Audio/book1audio/26/C26S75.mp3'
import r47 from '../../../../assests/Audio/book1audio/26/C26S76.mp3'
import r48 from '../../../../assests/Audio/book1audio/26/C26S77.mp3'
import r49 from '../../../../assests/Audio/book1audio/26/C26S78.mp3'
import r50 from '../../../../assests/Audio/book1audio/26/C26S79.mp3'
import r51 from '../../../../assests/Audio/book1audio/26/C26S80.mp3'
import r52 from '../../../../assests/Audio/book1audio/26/C26S81.mp3'
import r53 from '../../../../assests/Audio/book1audio/26/C26S82.mp3'
import r54 from '../../../../assests/Audio/book1audio/26/C26S83.mp3'
import r55 from '../../../../assests/Audio/book1audio/26/C26S84.mp3'
import r56 from '../../../../assests/Audio/book1audio/26/C26S85.mp3'
import r57 from '../../../../assests/Audio/book1audio/26/C26S86,87.mp3'
import r58 from '../../../../assests/Audio/book1audio/26/C26S88to101.mp3'
import r59 from '../../../../assests/Audio/book1audio/26/C26S102,103.mp3'
import r60 from '../../../../assests/Audio/book1audio/26/C26S104.mp3'
import r61 from '../../../../assests/Audio/book1audio/26/C26S105,106.mp3'
import r62 from '../../../../assests/Audio/book1audio/26/C26S107to113.mp3'
import r63 from '../../../../assests/Audio/book1audio/26/C26Slast.mp3'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/26.png'

const Book1ch26 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3,4,5" sholk="" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 6,7" sholk="" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 11" sholk="" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 12" sholk="" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 13" sholk="" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 15,16,18,19,20,21,22" sholk="" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 23,24" sholk="" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 25,26" sholk="" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 27" sholk="" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 28" sholk="" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 29,30" sholk="" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 31,32,33,34,35" sholk="" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 36,37" sholk="" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 38" sholk="" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 39" sholk="" audio={r20}/>

                <SingleAudioCard sholkno="Shloka 40" sholk="" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 41" sholk="" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 42" sholk="" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 43-1" sholk="" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 43-2" sholk="" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 43-3" sholk="" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 43-4" sholk="" audio={r27}/>     
                <SingleAudioCard sholkno="Shloka 43-5" sholk="" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 43-6" sholk="" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 44" sholk="" audio={r30}/>
                <SingleAudioCard sholkno="Shloka 45,46,47" sholk="" audio={r31}/> 
                <SingleAudioCard sholkno="Shloka 48,49" sholk="" audio={r32}/> 
                <SingleAudioCard sholkno="Shloka 50,51,52" sholk="" audio={r33}/>
                <SingleAudioCard sholkno="Shloka 53,54,55,56" sholk="" audio={r34}/>
                <SingleAudioCard sholkno="Shloka 56(1)" sholk="" audio={r35}/>
                <SingleAudioCard sholkno="Shloka 57,58" sholk="" audio={r36}/>
                <SingleAudioCard sholkno="Shloka 59,60" sholk="" audio={r37}/>
                <SingleAudioCard sholkno="Shloka 61,62,63" sholk="" audio={r38}/>
                <SingleAudioCard sholkno="Shloka 64,65" sholk="" audio={r39}/>
                <SingleAudioCard sholkno="Shloka 66" sholk="" audio={r40}/>
                <SingleAudioCard sholkno="Shloka 67" sholk="" audio={r41}/>
                <SingleAudioCard sholkno="Shloka 68,69,70" sholk="" audio={r42}/>
                <SingleAudioCard sholkno="Shloka 71,72" sholk="" audio={r43}/>
                <SingleAudioCard sholkno="Shloka 73" sholk="" audio={r44}/>
                <SingleAudioCard sholkno="Shloka 74" sholk="" audio={r45}/>
                <SingleAudioCard sholkno="Shloka 75" sholk="" audio={r46}/>
                <SingleAudioCard sholkno="Shloka 76" sholk="" audio={r47}/>
                <SingleAudioCard sholkno="Shloka 77" sholk="" audio={r48}/>
                <SingleAudioCard sholkno="Shloka 78" sholk="" audio={r49}/>
                <SingleAudioCard sholkno="Shloka 79" sholk="" audio={r50}/>
                <SingleAudioCard sholkno="Shloka 80" sholk="" audio={r51}/>
                <SingleAudioCard sholkno="Shloka 81" sholk="" audio={r52}/>
                <SingleAudioCard sholkno="Shloka 82" sholk="" audio={r53}/>
                <SingleAudioCard sholkno="Shloka 83" sholk="" audio={r54}/>
                <SingleAudioCard sholkno="Shloka 84" sholk="" audio={r55}/>
                <SingleAudioCard sholkno="Shloka 85" sholk="" audio={r56}/>
                <SingleAudioCard sholkno="Shloka 86,87" sholk="" audio={r57}/>
                <SingleAudioCard sholkno="Shloka 88to101" sholk="" audio={r58}/>
                <SingleAudioCard sholkno="Shloka 102,103" sholk="" audio={r59}/>
                <SingleAudioCard sholkno="Shloka 104" sholk="" audio={r60}/>
                <SingleAudioCard sholkno="Shloka 105,106" sholk="" audio={r61}/>
                <SingleAudioCard sholkno="Shloka 107to113" sholk="" audio={r62}/>
                <SingleAudioCard sholkno="Last Shloka" sholk="" audio={r63}/>

            </div>
        </div>
    )
}

export default Book1ch26




 