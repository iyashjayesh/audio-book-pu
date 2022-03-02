import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book4audio/ch1/C1S1.aac'
import r2 from '../../../../assests/Audio/book4audio/ch1/c1s2.aac'
import r3 from '../../../../assests/Audio/book4audio/ch1/c1s3.aac'
import r4 from '../../../../assests/Audio/book4audio/ch1/c1s4.aac'
import r5 from '../../../../assests/Audio/book4audio/ch1/C1s5.aac'
import r6 from '../../../../assests/Audio/book4audio/ch1/c1s6.aac'
import r7 from '../../../../assests/Audio/book4audio/ch1/c1s7.aac'
import r8 from '../../../../assests/Audio/book4audio/ch1/c1s8.aac'
import r9 from '../../../../assests/Audio/book4audio/ch1/c1s9.aac'
import r10 from '../../../../assests/Audio/book4audio/ch1/c1s10.aac'
// import r11 from '../../../../assests/Audio/book4audio/ch1/c1s11.aac'
// import r12 from '../../../../assests/Audio/book4audio/ch1/c1s12.aac'
// import r13 from '../../../../assests/Audio/book4audio/ch1/c1s13.aac'
// import r14 from '../../../../assests/Audio/book4audio/ch1/c1s14.aac'
// import r15 from '../../../../assests/Audio/book4audio/ch1/c1s15.aac'
// import r16 from '../../../../assests/Audio/book4audio/ch1/c1s16.aac'
// import r17 from '../../../../assests/Audio/book4audio/ch1/c1s17.aac'
// import r18 from '../../../../assests/Audio/book4audio/ch1/c1s18.aac'
// import r19 from '../../../../assests/Audio/book4audio/ch1/c1s19.aac'
// import r20 from '../../../../assests/Audio/book4audio/ch1/c1s20.aac'
// import r21 from '../../../../assests/Audio/book4audio/ch1/c1s21.aac'
// import r22 from '../../../../assests/Audio/book4audio/ch1/c1s22.aac'
// import r23 from '../../../../assests/Audio/book4audio/ch1/c1s23.aac'
// import r24 from '../../../../assests/Audio/book4audio/ch1/c1s24.aac'
// import r25 from '../../../../assests/Audio/book4audio/ch1/c1s25.aac'
// import r26 from '../../../../assests/Audio/book4audio/ch1/c1s26.aac'
// import r27 from '../../../../assests/Audio/book4audio/ch1/c1s27.aac'
// import r28 from '../../../../assests/Audio/book4audio/ch1/c1s28.aac'
// import r29 from '../../../../assests/Audio/book4audio/ch1/c1s29.aac'
// import r30 from '../../../../assests/Audio/book4audio/ch1/c1s30.aac'
// import r31 from '../../../../assests/Audio/book4audio/ch1/c1s31.aac'
// import r32 from '../../../../assests/Audio/book4audio/ch1/c1s32.aac'
// import r33 from '../../../../assests/Audio/book4audio/ch1/c1s33.aac'
// import r34 from '../../../../assests/Audio/book4audio/ch1/c1s34.aac'
// import r35 from '../../../../assests/Audio/book4audio/ch1/c1s35.aac'
// import r36 from '../../../../assests/Audio/book4audio/ch1/c1s36.aac'
// import r37 from '../../../../assests/Audio/book4audio/ch1/c1s37.aac'
// import r38 from '../../../../assests/Audio/book4audio/ch1/c1s38.aac'
// import r39 from '../../../../assests/Audio/book4audio/ch1/c1s39.aac'
// import r40 from '../../../../assests/Audio/book4audio/ch1/C1s40.aac'
// import r41 from '../../../../assests/Audio/book4audio/ch1/c1s41.aac'
// import r42 from '../../../../assests/Audio/book4audio/ch1/c1s42.aac'
// import r43 from '../../../../assests/Audio/book4audio/ch1/c1s43.aac'
// import r44 from '../../../../assests/Audio/book4audio/ch1/c1s44.aac'
import r45 from '../../../../assests/Audio/book4audio/ch1/c1s45.aac'
import r46 from '../../../../assests/Audio/book4audio/ch1/c1s46.aac'
import r47 from '../../../../assests/Audio/book4audio/ch1/c1s47.aac'
import r48 from '../../../../assests/Audio/book4audio/ch1/c1s48.aac'
import r49 from '../../../../assests/Audio/book4audio/ch1/c1s49.aac'
import r50 from '../../../../assests/Audio/book4audio/ch1/c1s50.aac'
import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/shareerasthana/1.png'

const Book4ch1 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Sholk 1" sholk="अथातः कतिधापुरुषीयं शारीरं व्याख्यास्यामः||१|| " audio={r1}/>
                <SingleAudioCard sholkno="Sholk 2" sholk="इति ह स्माह भगवानात्रेयः||२||" audio={r2} />
                <SingleAudioCard sholkno="Sholk 3" sholk="कतिधा पुरुषो धीमन्! धातुभेदेन भिद्यते| पुरुषः कारणं कस्मात्, प्रभवः पुरुषस्य कः||३||" audio={r3}/>
                <SingleAudioCard sholkno="Sholk 4" sholk="किमज्ञो ज्ञः, स नित्यः किं किमनित्यो निदर्शितः| प्रकृतिः का, विकाराः के, किं लिङ्गं पुरुषस्य च||४||" audio={r4}/>
                <SingleAudioCard sholkno="Sholk 5" sholk="निष्क्रियं च स्वतन्त्रं च वशिनं सर्वगं विभुम्| वदन्त्यात्मानमात्मज्ञाः क्षेत्रज्ञं साक्षिणं तथा||५||" audio={r5}/>
                <SingleAudioCard sholkno="Sholk 6" sholk="निष्क्रियस्य क्रिया तस्य भगवन्! विद्यते कथम्| स्वतन्त्रश्चेदनिष्टासु कथं योनिषु जायते||६||" audio={r6}/>
                <SingleAudioCard sholkno="Sholk 7" sholk="वशी यद्यसुखैः कस्माद्भावैराक्रम्यते बलात्| सर्वाः सर्वगतत्वाच्च वेदनाः किं न वेत्ति सः||७||" audio={r7}/>
                <SingleAudioCard sholkno="Sholk 8" sholk="न पश्यति विभुः कस्माच्छैलकुड्यतिरस्कृतम्| क्षेत्रज्ञः क्षेत्रमथवा किं पूर्वमिति संशयः||८||" audio={r8}/>
                <SingleAudioCard sholkno="Sholk 9" sholk="ज्ञेयं क्षेत्रं विना पूर्वं क्षेत्रज्ञो हि न युज्यते| क्षेत्रं च यदि पूर्वं स्यात् क्षेत्रज्ञः स्यादशाश्वतः||९||" audio={r9}/>
                <SingleAudioCard sholkno="Sholk 10" sholk="साक्षिभूतश्च कस्यायं कर्ता ह्यन्यो न विद्यते| स्यात् कथं चाविकारस्य विशेषो वेदनाकृतः||१०||" audio={r10}/>
                {/* <SingleAudioCard sholkno="Sholk 11" sholk= audio={r11}/>
                <SingleAudioCard sholkno="Sholk 12" sholk= audio={r12}/>

                <SingleAudioCard sholkno="Sholk 13" sholk= audio={r13}/>

                <SingleAudioCard sholkno="Sholk 14" sholk= audio={r14}/>
                <SingleAudioCard sholkno="Sholk 15" sholk= audio={r15}/>
                <SingleAudioCard sholkno="Sholk 16" sholk= audio={r16}/>
                <SingleAudioCard sholkno="Sholk 17" sholk= audio={r17}/>
                <SingleAudioCard sholkno="Sholk 18" sholk= audio={r18}/>
                <SingleAudioCard sholkno="Sholk 19" sholk= audio={r19}/>
                <SingleAudioCard sholkno="Sholk 20" sholk= audio={r20}/>
                <SingleAudioCard sholkno="Sholk 21" sholk= audio={r21}/>
                <SingleAudioCard sholkno="Sholk 22" sholk= audio={r22}/>
                <SingleAudioCard sholkno="Sholk 23" sholk= audio={r23}/>
                <SingleAudioCard sholkno="Sholk 24" sholk= audio={r24}/>
                <SingleAudioCard sholkno="Sholk 25" sholk= audio={r25}/>
                <SingleAudioCard sholkno="Sholk 26" sholk= audio={r26}/>
                <SingleAudioCard sholkno="Sholk 27" sholk= audio={r27}/>
                <SingleAudioCard sholkno="Sholk 28" sholk= audio={r28}/>
                <SingleAudioCard sholkno="Sholk 29" sholk= audio={r29}/>

                <SingleAudioCard sholkno="Sholk 30" sholk= audio={r30}/>
                <SingleAudioCard sholkno="Sholk 31" sholk= audio={r31}/>
                <SingleAudioCard sholkno="Sholk 32" sholk= audio={r32}/>
                <SingleAudioCard sholkno="Sholk 33" sholk= audio={r33}/>
                <SingleAudioCard sholkno="Sholk 34" sholk= audio={r34}/>
                <SingleAudioCard sholkno="Sholk 35" sholk= audio={r35}/>
                <SingleAudioCard sholkno="Sholk 36" sholk= audio={r36}/>
                <SingleAudioCard sholkno="Sholk 37" sholk= audio={r37}/>
                <SingleAudioCard sholkno="Sholk 38" sholk= audio={r38}/>
                <SingleAudioCard sholkno="Sholk 39" sholk= audio={r39}/>
                <SingleAudioCard sholkno="Sholk 40" sholk= audio={r40}/>
                <SingleAudioCard sholkno="Sholk 41" sholk= audio={r41}/>
                <SingleAudioCard sholkno="Sholk 42" sholk= audio={r42}/>
                <SingleAudioCard sholkno="Sholk 43" sholk= audio={r43}/>
                <SingleAudioCard sholkno="Sholk 44" sholk= audio={r44}/> */}
                <SingleAudioCard sholkno="Sholk 45" sholk="कारणं पुरुषः सर्वैः प्रमाणैरुपलभ्यते| येभ्यः प्रमेयं सर्वेभ्य आगमेभ्यः प्रमीयते||४५||" audio={r45}/>
                <SingleAudioCard sholkno="Sholk 46" sholk="न ते तत्सदृशास्त्वन्ये पारम्पर्यसमुत्थिताः| सारूप्याद्ये त एवेति निर्दिश्यन्ते नवा नवाः||४६||" audio={r46}/>
                <SingleAudioCard sholkno="Sholk 47" sholk="भावास्तेषां समुदयो निरीशः सत्त्वसञ्ज्ञकः| कर्ता भोक्ता न स पुमानिति केचिद्व्यवस्थिताः||४७||" audio={r47}/>
                <SingleAudioCard sholkno="Sholk 48" sholk="तेषामन्यैः कृतस्यान्ये भावा भावैर्नवाः फलम्| भुञ्जते सदृशाः प्राप्तं यैरात्मा नोपदिश्यते||४८||" audio={r48}/>
                <SingleAudioCard sholkno="Sholk 49" sholk="करणान्यान्यता दृष्टा कर्तुः कर्ता स एव तु| कर्ता हि करणैर्युक्तः कारणं सर्वकर्मणाम्||४९||" audio={r49}/>
                <SingleAudioCard sholkno="Sholk 50" sholk="निमेषकालाद्भावानां कालः शीघ्रतरोऽत्यये| भग्नानां न पुनर्भावः कृतं नान्यमुपैति च||५०||" audio={r50}/>

            </div>
        </div>
    )
}

export default Book4ch1




