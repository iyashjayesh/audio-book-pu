import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/ch2/C2S1.m4a'
import r2 from '../../../../assests/Audio/book1audio/ch2/C2S2.m4a'
import r3 from '../../../../assests/Audio/book1audio/ch2/C2S3.m4a'
import r4 from '../../../../assests/Audio/book1audio/ch2/C2S4.m4a'
import r5 from '../../../../assests/Audio/book1audio/ch2/C2S5.m4a'
import r6 from '../../../../assests/Audio/book1audio/ch2/C2S6.m4a'
import r7 from '../../../../assests/Audio/book1audio/ch2/C2S7.m4a'
import r8 from '../../../../assests/Audio/book1audio/ch2/C2S8.m4a'
import r9 from '../../../../assests/Audio/book1audio/ch2/C2S9.m4a'
import r10 from '../../../../assests/Audio/book1audio/ch2/C2S10.m4a'
import r11 from '../../../../assests/Audio/book1audio/ch2/C2S11.m4a'
import r12 from '../../../../assests/Audio/book1audio/ch2/C2S12.m4a'
import r13 from '../../../../assests/Audio/book1audio/ch2/C2S13.m4a'
import r14 from '../../../../assests/Audio/book1audio/ch2/C2S14'
import r15 from '../../../../assests/Audio/book1audio/ch2/C2S15'
import r16 from '../../../../assests/Audio/book1audio/ch2/C2S16'
import r17 from '../../../../assests/Audio/book1audio/ch2/C2S17'
import r18 from '../../../../assests/Audio/book1audio/ch2/C2S18'
import r19 from '../../../../assests/Audio/book1audio/ch2/C2S19'
import r20 from '../../../../assests/Audio/book1audio/ch2/C2S20'
import r21 from '../../../../assests/Audio/book1audio/ch2/C2S21'
import r22 from '../../../../assests/Audio/book1audio/ch2/C2S22'
import r23 from '../../../../assests/Audio/book1audio/ch2/C2S23'
import r24 from '../../../../assests/Audio/book1audio/ch2/C2S24'
import r25 from '../../../../assests/Audio/book1audio/ch2/C2S25'
import r26 from '../../../../assests/Audio/book1audio/ch2/C2S26'
import r27 from '../../../../assests/Audio/book1audio/ch2/C2S27'
import r28 from '../../../../assests/Audio/book1audio/ch2/C2S28'
import r29 from '../../../../assests/Audio/book1audio/ch2/C2S29'
import r30 from '../../../../assests/Audio/book1audio/ch2/C2S30'
import r31 from '../../../../assests/Audio/book1audio/ch2/C2S31'
import r32 from '../../../../assests/Audio/book1audio/ch2/C2S32'
import r33 from '../../../../assests/Audio/book1audio/ch2/C2S33'
import r34 from '../../../../assests/Audio/book1audio/ch2/C2S34'
import r35 from '../../../../assests/Audio/book1audio/ch2/C2S35'
import r36 from '../../../../assests/Audio/book1audio/ch2/C2S36'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/2.png'

const Book1ch2 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1" sholk="अथातोऽपामार्गतण्डुलीयमध्यायं व्याख्यास्यामः ||१||" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 2" sholk=" इति ह स्माह भगवानात्रेयः ||२||" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 3" sholk=" अपामार्गस्य बीजानि पिप्पलीर्मरिचानि च | विडङ्गान्यथ शिग्रूणि सर्षपांस्तुम्बुरूणि च ||३||" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 4" sholk=" अजाजीं चाजगन्धां च पीलून्येलां हरेणुकाम् |पृथ्वीकां सुरसां श्वेतां कुठेरकफणिज्झकौ ||४||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 5" sholk=" शिरीषबीजं लशुनं हरिद्रे लवणद्वयम् |ज्योतिष्मतीं नागरं च दद्याच्छीर्षविरेचने ||५||" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 6" sholk=" गौरवे शिरसः शूले पीनसेऽर्धावभेदके |क्रिमिव्याधावपस्मारे घ्राणनाशे प्रमोहके ||६|| " audio={r6}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="मदनं मधुकं निम्बं जीमूतं कृतवेधनम् | पिप्पलीकुटजेक्ष्वाकूण्येलां धामार्गवाणि च ||७||" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 8" sholk=" उपस्थिते श्लेष्मपित्ते व्याधावामाशयाश्रये |वमनार्थं प्रयुञ्जीत भिषग्देहमदूषयन् ||८|| " audio={r8}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="त्रिवृतां त्रिफलां दन्तीं नीलिनीं सप्तलां वचाम् |कम्पिल्लकं गवाक्षीं च क्षीरिणीमुदकीर्यकाम् ||९||" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 10" sholk=" पीलून्यारग्वधं द्राक्षां द्रवन्तीं निचुलानि च |पक्वाशयगते दोषे विरेकार्थं प्रयोजयेत् ||१०|| " audio={r10}/>
                <SingleAudioCard sholkno="Shloka 11" sholk="पाटलां चाग्निमन्थं च बिल्वं श्योनाकमेव च |काश्मर्यं शालपर्णीं च पृश्निपर्णीं निदिग्धिकाम् ||११||" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 12" sholk=" बलां श्वदंष्ट्रां बृहतीमेरण्डं सपुनर्नवम् |यवान् कुलत्थान् कोलानि गुडूचीं मदनानि च ||१२||" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 13" sholk=" पलाशं कत्तृणं चैव स्नेहांश्च लवणानि च | उदावर्ते विबन्धेषु युञ्ज्यादास्थापनेषु च ||१३||" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 14" sholk=" अत एवौषधगणात् सङ्कल्प्यमनुवासनम् | मारुतघ्नमिति प्रोक्तः सङ्ग्रहः पाञ्चकर्मिकः ||१४|| " audio={r14}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="तान्युपस्थितदोषाणां स्नेहस्वेदोपपादनैः | पञ्चकर्माणि कुर्वीत मात्राकालौ विचारयन् ||१५|| " audio={r15}/>
                <SingleAudioCard sholkno="Shloka 16" sholk="मात्राकालाश्रया युक्तिः, सिद्धिर्युक्तौ प्रतिष्ठिता |तिष्ठत्युपरि युक्तिज्ञो द्रव्यज्ञानवतां सदा ||१६|| " audio={r16}/>
                <SingleAudioCard sholkno="Shloka 17" sholk="अत ऊर्ध्वं प्रवक्ष्यामि यवागूर्विविधौषधाः |विविधानां विकाराणां तत्साध्यानां निवृत्तये ||१७|| " audio={r17}/>
                <SingleAudioCard sholkno="Shloka 18" sholk="पिप्पलीपिप्पलीमूलचव्यचित्रकनागरैः | यवागूर्दीपनीया स्याच्छूलघ्नी चोपसाधिता ||१८||" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 19" sholk=" दधित्थबिल्वचाङ्गेरीतक्रदाडिमसाधिता | पाचनी ग्राहिणी, पेया सवाते पाञ्चमूलिकी ||१९||" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 20" sholk=" शालपर्णीबलाबिल्वैः पृश्निपर्ण्या च साधिता | दाडिमाम्ला हिता पेया पित्तश्लेष्मातिसारिणाम् ||२०||" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 21" sholk=" पयस्यर्धोदके च्छागे ह्रीवेरोत्पलनागरैः | पेया रक्तातिसारघ्नी पृश्निपर्ण्या च साधिता ||२१||" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 22" sholk=" दद्यात् सातिविषां पेयां सामे साम्लां सनागराम् |श्वदंष्ट्राकण्टकारीभ्यां मूत्रकृच्छ्रे सफाणिताम् ||२२||" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 23" sholk=" विडङ्गपिप्पलीमूलशिग्रुभिर्मरिचेन च |तक्रसिद्धा यवागूः स्यात् क्रिमिघ्नी ससुवर्चिका ||२३||" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 24" sholk=" मृद्वीकासारिवालाजपिप्पलीमधुनागरैः | पिपासाघ्नी, विषघ्नी च सोमराजीविपाचिता ||२४||" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 25" sholk=" सिद्धा वराहनिर्यूहे यवागूर्बृंहणी मता | गवेधुकानां भृष्टानां कर्शनीया समाक्षिका ||२५||" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 26" sholk=" सर्पिष्मती बहुतिला स्नेहनी लवणान्विता | कुशामलकनिर्यूहे श्यामाकानां विरूक्षणी ||२६||" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 27" sholk=" दशमूलीशृता कासहिक्काश्वासकफापहा |यमके मदिरासिद्धा पक्वाशयरुजापहा ||२७||" audio={r27}/>
                <SingleAudioCard sholkno="Shloka 28" sholk=" शाकैर्मांसैस्तिलैर्माषैः सिद्धा वर्चो निरस्यति | जम्ब्वाम्रास्थिदधित्थाम्लबिल्वैः साङ्ग्राहिकी मता ||२८||" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 29" sholk=" क्षारचित्रकहिङ्ग्वम्लवेतसैर्भेदिनी मता | अभयापिप्पलीमूलविश्वैर्वातानुलोमनी ||२९||" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 30" sholk=" तक्रसिद्धा यवागूः स्याद्धृतव्यापत्तिनाशिनी |तैलव्यापदि शस्ता स्यात्तक्रपिण्याकसाधिता ||३०||" audio={r30}/>
                <SingleAudioCard sholkno="Shloka 31" sholk=" गव्यमांसरसैः साम्ला विषमज्वरनाशिनी | कण्ठ्या यवानां यमके पिप्पल्यामलकैः शृता ||३१||" audio={r31}/>
                <SingleAudioCard sholkno="Shloka 32" sholk=" ताम्रचूडरसे सिद्धा रेतोमार्गरुजापहा | समाषविदला वृष्या घृतक्षीरोपसाधिता ||३२||" audio={r32}/>
                <SingleAudioCard sholkno="Shloka 33" sholk=" उपोदिकादधिभ्यां तु सिद्धा मदविनाशिनी |क्षुधं हन्यादपामार्गक्षीरगोधारसैः शृता ||३३|| " audio={r33}/>
                <SingleAudioCard sholkno="Shloka 34" sholk="तत्र श्लोकः-अष्टाविंशतिरित्येता यवाग्वः परिकीर्तिताः |पञ्चकर्माणि चाश्रित्य प्रोक्तो भैषज्यसङ्ग्रहः ||३४|| " audio={r34}/>
                <SingleAudioCard sholkno="Shloka 35" sholk="पूर्वं मूलफलज्ञानहेतोरुक्तं यदौषधम् |पञ्चकर्माश्रयज्ञानहेतोस्तत् कीर्तितं पुनः ||३५|| " audio={r35}/>
                <SingleAudioCard sholkno="Shloka 36" sholk="स्मृतिमान् हेतुयुक्तिज्ञो जितात्मा प्रतिपत्तिमान् | भिषगौषधसंयोगैश्चिकित्सां कर्तुमर्हति ||३६|| " audio={r36}/>

            </div>
        </div>
    )
}

export default Book1ch2




 