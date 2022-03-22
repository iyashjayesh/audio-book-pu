import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/ch9/C9S1,2'
import r2 from '../../../../assests/Audio/book1audio/ch9/C9S3'
import r3 from '../../../../assests/Audio/book1audio/ch9/C9S4'
import r4 from '../../../../assests/Audio/book1audio/ch9/C9S4(1)'
import r5 from '../../../../assests/Audio/book1audio/ch9/C9S6'
import r6 from '../../../../assests/Audio/book1audio/ch9/C9S7'
import r7 from '../../../../assests/Audio/book1audio/ch9/C9S8'
import r8 from '../../../../assests/Audio/book1audio/ch9/C9S9'
import r9 from '../../../../assests/Audio/book1audio/ch9/C9S10'
import r10 from '../../../../assests/Audio/book1audio/ch9/C9S11,12'
import r11 from '../../../../assests/Audio/book1audio/ch9/C9S13'
import r12 from '../../../../assests/Audio/book1audio/ch9/C9S14'
import r13 from '../../../../assests/Audio/book1audio/ch9/C9S15'
import r14 from '../../../../assests/Audio/book1audio/ch9/C9S16'
import r15 from '../../../../assests/Audio/book1audio/ch9/C9S17'
import r16 from '../../../../assests/Audio/book1audio/ch9/C9S18'
import r17 from '../../../../assests/Audio/book1audio/ch9/C9S19'
import r18 from '../../../../assests/Audio/book1audio/ch9/C9S20'
import r19 from '../../../../assests/Audio/book1audio/ch9/C9S21'
// import r20 from '../../../../assests/Audio/book1audio/ch9/C9S22'
import r21 from '../../../../assests/Audio/book1audio/ch9/C9S23'
import r22 from '../../../../assests/Audio/book1audio/ch9/C9S24'
import r23 from '../../../../assests/Audio/book1audio/ch9/C9S25'
import r24 from '../../../../assests/Audio/book1audio/ch9/C9S26'
import r25 from '../../../../assests/Audio/book1audio/ch9/C9S27,28'
import r26 from '../../../../assests/Audio/book1audio/ch9/C9SLast'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/9.png'

const Book1ch9 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="अथातः खुड्डाकचतुष्पादमध्यायं व्याख्यास्यामः ||१||इति ह स्माह भगवानात्रेयः ||२|| " audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="भिषग्द्रव्याण्युपस्थाता रोगी पादचतुष्टयम् | गुणवत् कारणं ज्ञेयं विकारव्युपशान्तये ||३|| " audio={r2}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="विकारो धातुवैषम्यं, साम्यं प्रकृतिरुच्यते |सुखसञ्ज्ञकमारोग्यं, विकारो दुःखमेव च ||४|| " audio={r3}/>
                <SingleAudioCard sholkno="Shloka 4(1)" sholk="विकारो धातुवैषम्यं, साम्यं प्रकृतिरुच्यते |सुखसञ्ज्ञकमारोग्यं, विकारो दुःखमेव च ||४|| " audio={r4}/>
                <SingleAudioCard sholkno="Shloka 6" sholk="श्रुते पर्यवदातत्वं बहुशो दृष्टकर्मता |दाक्ष्यं शौचमिति ज्ञैयं वैद्ये गुणचतुष्टयम् ||६|| " audio={r5}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="बहुता तत्रयोग्यत्वमनेकविधकल्पना | सम्पच्चेति चतुष्कोऽयं द्रव्याणां गुण उच्यते ||७|| " audio={r6}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="उपचारज्ञता दाक्ष्यमनुरागश्च भर्तरि | शौचं चेति चतुष्कोऽयं गुणः परिचरे जने ||८|| " audio={r7}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="स्मृतिर्निर्देशकारित्वमभीरुत्वमथापि च | ज्ञापकत्वं च रोगाणामातुरस्य गुणाः स्मृताः ||९|| " audio={r8}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="कारणं षोडशगुणं सिद्धौ पादचतुष्टयम् |विज्ञाता शासिता योक्ता प्रधानं भिषगत्र तु ||१०|| " audio={r9}/>
                <SingleAudioCard sholkno="Shloka 11,12" sholk="पक्तौ हि कारणं पक्तुर्यथा पात्रेन्धनानलाः |विजेतुर्विजये भूमिश्चमूः प्रहरणानि च ||११||आतुराद्यास्तथा सिद्धौ पादाः कारणसञ्ज्ञिताः | वैद्यस्यातश्चिकित्सायां प्रधानं कारणं भिषक् ||१२|| " audio={r10}/>
                <SingleAudioCard sholkno="Shloka 13" sholk="मृद्दण्डचक्रसूत्राद्याः कुम्भकारादृते यथा | नावहन्ति गुणं वैद्यादृते पादत्रयं तथा ||१३|| " audio={r11}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="गन्धर्वपुरवन्नाशं यद्विकाराः सुदारुणाः | यान्ति यच्चेतरे वृद्धिमाशूपायप्रतीक्षिणः ||१४||" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 15" sholk=" सति पादत्रये ज्ञाज्ञौ भिषजावत्र कारणम् ||१५|| वरमात्मा हुतोऽज्ञेन न चिकित्सा प्रवर्तिता ||१५||" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 16" sholk=" पाणिचाराद्यथाऽचक्षुरज्ञानाद्भीतभीतवत् | नौर्मारुतवशेवाज्ञो भिषक् चरति कर्मसु ||१६|| " audio={r14}/>
                <SingleAudioCard sholkno="Shloka 17" sholk="यदृच्छया समापन्नमुत्तार्य नियतायुषम् | भिषङ्मानी निहन्त्याशु शतान्यनियतायुषाम् ||१७|| " audio={r15}/>
                <SingleAudioCard sholkno="Shloka 18" sholk="तस्माच्छास्त्रेऽर्थविज्ञाने प्रवृत्तौ कर्मदर्शने |भिषक् चतुष्टये युक्तः प्राणाभिसर उच्यते ||१८|| " audio={r16}/>
                <SingleAudioCard sholkno="Shloka 19" sholk="हेतौ लिङ्गे प्रशमने रोगाणामपुनर्भवे |ज्ञानं चतुर्विधं यस्य स राजार्हो भिषक्तमः ||१९||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 20" sholk=" शस्त्रं शास्त्राणि सलिलं गुणदोषप्रवृत्तये | पात्रापेक्षीण्यतः प्रज्ञां चिकित्सार्थं विशोधयेत् ||२०||" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 21" sholk=" विद्या वितर्को विज्ञानं स्मृतिस्तत्परता क्रिया | यस्यैते षड्गुणास्तस्य न साध्यमतिवर्तते ||२१||" audio={r19}/>
                {/* <SingleAudioCard sholkno="Shloka 22" sholk=" विद्या मतिः कर्मदृष्टिरभ्यासः सिद्धिराश्रयः | वैद्यशब्दाभिनिष्पत्तावलमेकैकमप्यतः ||२२||" audio={r20}/> */}
                <SingleAudioCard sholkno="Shloka 23" sholk=" यस्य त्वेते गुणाः सर्वे सन्ति विद्यादयः शुभाः | स वैद्यशब्दं सद्भूतमर्हन् प्राणिसुखप्रदः ||२३|| " audio={r21}/>
                <SingleAudioCard sholkno="Shloka 24" sholk="शास्त्रं ज्योतिः प्रकाशार्थं दर्शनं बुद्धिरात्मनः | ताभ्यां भिषक् सुयुक्ताभ्यां चिकित्सन्नापराध्यति ||२४||" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 25" sholk=" चिकित्सिते त्रयः पादा यस्माद्वैद्यव्यपाश्रयः | तस्मात् प्रयत्नमातिष्ठेद्भिषक् स्वगुणसम्पदि ||२५|| " audio={r23}/>
                <SingleAudioCard sholkno="Shloka 26" sholk="मैत्री कारुण्यमार्तेषु शक्ये प्रीतिरुपेक्षणम् |प्रकृतिस्थेषु भूतेषु वैद्यवृत्तिश्चतुर्विधेति ||२६|| " audio={r24}/>
                <SingleAudioCard sholkno="Shloka 27, 28" sholk="तत्र श्लोकौ-भिषग्जितं चतुष्पादं पादः पादश्चतुर्गुणः | भिषक् प्रधानं पादेभ्यो यस्माद्वैद्यस्तु यद्गुणः ||२७|| ज्ञानानि बुद्धिर्ब्राह्मी च भिषजां या चतुर्विधा | सर्वमेतच्चतुष्पादे खुड्डाके सम्प्रकाशितमिति ||२८|| " audio={r25}/>
                <SingleAudioCard sholkno="Last Shloka" sholk="इत्यग्निवेशकृते तन्त्रे चरकप्रतिसंस्कृते श्लोकस्थानेखुड्डाकचतुष्पादो नाम नवमोऽध्यायः ||९||" audio={r26}/>
                
            </div>
        </div>
    )
}

export default Book1ch9




 