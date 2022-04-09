import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/ch6/C6S1,2'
import r2 from '../../../../assests/Audio/book1audio/ch6/C6S3'
import r3 from '../../../../assests/Audio/book1audio/ch6/C6S4'
import r4 from '../../../../assests/Audio/book1audio/ch6/C6S5'
import r5 from '../../../../assests/Audio/book1audio/ch6/C6S6'
import r6 from '../../../../assests/Audio/book1audio/ch6/C6S7'
import r7 from '../../../../assests/Audio/book1audio/ch6/C6S8'
import r8 from '../../../../assests/Audio/book1audio/ch6/C6S9,10'
import r9 from '../../../../assests/Audio/book1audio/ch6/C611,12,13'
import r10 from '../../../../assests/Audio/book1audio/ch6/C5S14,15,16'
import r11 from '../../../../assests/Audio/book1audio/ch6/C6S16,17'
import r12 from '../../../../assests/Audio/book1audio/ch6/C6S18'
import r13 from '../../../../assests/Audio/book1audio/ch6/C6S19,20,21'
import r14 from '../../../../assests/Audio/book1audio/ch6/C6S22,23'
import r15 from '../../../../assests/Audio/book1audio/ch6/C6S24'
import r16 from '../../../../assests/Audio/book1audio/ch6/C6S25,26'
import r17 from '../../../../assests/Audio/book1audio/ch6/C6S27,28'
import r18 from '../../../../assests/Audio/book1audio/ch6/C6S29'
import r19 from '../../../../assests/Audio/book1audio/ch6/C6S30,31,32'
import r20 from '../../../../assests/Audio/book1audio/ch6/C6S33,34,35'
import r21_36 from '../../../../assests/Audio/book1audio/ch6/C6S35,36'
import r21 from '../../../../assests/Audio/book1audio/ch6/C6S36,37'
import r22 from '../../../../assests/Audio/book1audio/ch6/C6S38,39'
import r23 from '../../../../assests/Audio/book1audio/ch6/C6S40'
import r24 from '../../../../assests/Audio/book1audio/ch6/C6S41'
import r25 from '../../../../assests/Audio/book1audio/ch6/C6S42,43'
import r26 from '../../../../assests/Audio/book1audio/ch6/C6S44,45'
import r27 from '../../../../assests/Audio/book1audio/ch6/C6S46,47'
import r28 from '../../../../assests/Audio/book1audio/ch6/C6S48'
import r29 from '../../../../assests/Audio/book1audio/ch6/C6S49'
import r30 from '../../../../assests/Audio/book1audio/ch6/C6S50'
import r31 from '../../../../assests/Audio/book1audio/ch6/C6S51'
import r32 from '../../../../assests/Audio/book1audio/ch6/C6SLast'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/6.png'

const Book1ch6 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="अथातस्तस्याशितीयमध्यायं व्याख्यास्यामः ||१|| इति ह स्माह भगवानात्रेयः ||२|| " audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="तस्याशिताद्यादाहाराद्बलं वर्णश्च वर्धते |यस्यर्तुसात्म्यं विदितं चेष्टाहारव्यपाश्रयम् ||३|| " audio={r2}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="इह खलु संवत्सरं षडङ्गमृतुविभागेन विद्यात् | तत्रादित्यस्योदगयनमादानं च त्रीनृतूञ्छिशिरादीन् ग्रीष्मान्तान् व्यवस्येत्, वर्षादीन् पुनर्हेमन्तान्तान् दक्षिणायनं विसर्गं च ||४|| " audio={r3}/>
                <SingleAudioCard sholkno="Shloka 5" sholk="विसर्गे पुनर्वायवो नातिरूक्षाः प्रवान्ति, इतरे पुनरादाने; सोमश्चाव्याहतबलः शिशिराभिर्भाभिरापूरयञ्जगदाप्याययति शश्वत्, अतो विसर्गः सौम्यः |आदानं पुनराग्नेयं; तावेतावर्कवायू सोमश्च कालस्वभावमार्गपरिगृहीताः कालर्तुरसदोषदेहबलनिर्वृत्तिप्रत्ययभूताः समुपदिश्यन्ते ||५||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 6" sholk="तत्र रविर्भाभिराददानो जगतः स्नेहं वायवस्तीव्ररूक्षाश्चोपशोषयन्तः शिशिरवसन्तग्रीष्मेषु यथाक्रमं रौक्ष्यमुत्पादयन्तो रूक्षान् रसांस्तिक्तकषायकटुकांश्चाभिवर्धयन्तो नृणां दौर्बल्यमावहन्ति ||६|| " audio={r5}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="वर्षाशरद्धेमन्तेषु तु दक्षिणाभिमुखेऽर्के कालमार्गमेघवातवर्षाभिहतप्रतापे, शशिनि चाव्याहतबले, माहेन्द्रसलिलप्रशान्तसन्तापे जगति, अरूक्षा रसाः प्रवर्धन्तेऽम्ललवणमधुरा यथाक्रमं तत्र बलमुपचीयते नृणामिति ||७|| " audio={r6}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="भवति चात्र- आदावन्ते च दौर्बल्यं विसर्गादानयोर्नृणाम् | मध्ये मध्यबलं, त्वन्ते श्रेष्ठमग्रे च निर्दिशेत् ||८|| " audio={r7}/>
                <SingleAudioCard sholkno="Shloka 9,10" sholk="शीते शीतानिलस्पर्शसंरुद्धो बलिनां बली | पक्ता भवति हेमन्ते मात्राद्रव्यगुरुक्षमः ||९|| स यदा नेन्धनं युक्तं लभते देहजं तदा | रसं हिनस्त्यतो वायुः शीतः शीते प्रकुप्यति ||१०||" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 11,12,13" sholk=" तस्मात्तुषारसमये स्निग्धाम्ललवणान् रसान् |औदकानूपमांसानां मेद्यानामुपयोजयेत् ||११|| बिलेशयानां मांसानि प्रसहानां भृतानि च | भक्षयेन्मदिरां शीधुं मधु चानुपिबेन्नरः ||१२|| गोरसानिक्षुविकृतीर्वसां तैलं नवौदनम् | हेमन्तेऽभ्यस्यतस्तोयमुष्णं चायुर्न हीयते ||१३||" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 14,15,16" sholk=" अभ्यङ्गोत्सादनं मूर्ध्नि तैलं जेन्ताकमातपम् | भजेद्भूमिगृहं चोष्णमुष्णं गर्भगृहं तथा ||१४|| शीतेषु संवृतं सेव्यं यानं शयनमासनम् | प्रावाराजिनकौषेयप्रवेणीकुथकास्तृतम् ||१५|| गुरूष्णवासा दिग्धाङ्गो गुरुणाऽगुरुणा सदा |" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 16,17" sholk=" शयने प्रमदां पीनां विशालोपचितस्तनीम् ||१६||आलिङ्ग्यागुरुदिग्धाङ्गीं सुप्यात् समदमन्मथः | प्रकामं च निषेवेत मैथुनं शिशिरागमे ||१७||" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 18" sholk=" वर्जयेदन्नपानानि वातलानि लघूनि च | प्रवातं प्रमिताहारमुदमन्थं हिमागमे ||१८|| " audio={r12}/>
                <SingleAudioCard sholkno="Shloka 19,20,21" sholk="हेमन्तशिशिरौ तुल्यौ शिशिरेऽल्पं विशेषणम् | रौक्ष्यमादानजं शीतं मेघमारुतवर्षजम् ||१९|| तस्माद्धैमन्तिकः सर्वः शिशिरे विधिरिष्यते | निवातमुष्णं त्वधिकं शिशिरे गृहमाश्रयेत् ||२०||कटुतिक्तकषायाणि वातलानि लघूनि च |" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 22,23" sholk=" वसन्ते निचितः श्लेष्मा दिनकृद्भाभिरीरितः |कायाग्निं बाधते रोगांस्ततः प्रकुरुते बहून् ||२२|| तस्माद्वसन्ते कर्माणि वमनादीनि कारयेत् | गुर्वम्लस्निग्धमधुरं दिवास्वप्नं च वर्जयेत् ||२३||" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 24" sholk=" व्यायामोद्वर्तनं धूमं कवलग्रहमञ्जनम् | सुखाम्बुना शौचविधिं शीलयेत् कुसुमागमे ||२४||" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 25,26" sholk=" चन्दनागुरुदिग्धाङ्गो यवगोधूमभोजनः |शारभं शाशमैणेयं मांसं लावकपिञ्जलम् ||२५|| भक्षयेन्निर्गदं सीधुं पिबेन्माध्वीकमेव वा |वसन्तेऽनुभवेत् स्त्रीणां काननानां च यौवनम् ||२६|| " audio={r16}/>
                <SingleAudioCard sholkno="Shloka 27,28" sholk="मयूखैर्जगतः स्नेहं ग्रीष्मे पेपीयते रविः | स्वादु शीतं द्रवं स्निग्धमन्नपानं तदा हितम् ||२७|| शीतं सशर्करं मन्थं जाङ्गलान्मृगपक्षिणः | घृतं पयः सशाल्यन्नं भजन् ग्रीष्मे न सीदति ||२८||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 29" sholk=" मद्यमल्पं न वा पेयमथवा सुबहूदकम् |लवणाम्लकटूष्णानि व्यायामं च विवर्जयेत् ||२९||" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 30,31,32" sholk=" दिवा शीतगृहे निद्रां निशि चन्द्रांशुशीतले |भजेच्चन्दनदिग्धाङ्गः प्रवाते हर्म्यमस्तके ||३०|| व्यजनैः पाणिसंस्पर्शैश्चन्दनोदकशीतलैः | सेव्यमानो भजेदास्यां मुक्तामणिविभूषितः ||३१|| काननानि च शीतानि जलानि कुसुमानि च | ग्रीष्मकाले निषेवेत मैथुनाद्विरतो नरः ||३२|| " audio={r19}/>
                <SingleAudioCard sholkno="Shloka 33,34,35" sholk="आदानदुर्बले देहे पक्ता भवति दुर्बलः | स वर्षास्वनिलादीनां दूषणैर्बाध्यते पुनः ||३३|| भूबाष्पान्मेघनिस्यन्दात् पाकादम्लाज्जलस्य च | वर्षास्वग्निबले क्षीणे कुप्यन्ति पवनादयः ||३४|| तस्मात् साधारणः सर्वो विधिर्वर्षासु शस्यते |" audio={r20}/>
                
                <SingleAudioCard sholkno="Shloka 35,36" sholk="उदमन्थं दिवास्वप्नमवश्यायं नदीजलम् ||३५||व्यायाममातपं चैव व्यवायं चात्र वर्जयेत् |" audio={r21_36}/>
                
                <SingleAudioCard sholkno="Shloka 36,37" sholk="पानभोजनसंस्कारान् प्रायः क्षौद्रान्वितान् भजेत् ||३६|| व्यक्ताम्ललवणस्नेहं वातवर्षाकुलेऽहनि |विशेषशीते भोक्तव्यं वर्षास्वनिलशान्तये ||३७||" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 38,39" sholk=" अग्निसंरक्षणवता यवगोधूमशालयः | पुराणा जाङ्गलैर्मांसैर्भोज्या यूषैश्च संस्कृतैः ||३८|| पिबेत् क्षौद्रान्वितं चाल्पं माध्वीकारिष्टमम्बु वा | माहेन्द्रं तप्तशीतं वा कौपं सारसमेव वा ||३९||" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 40" sholk=" प्रघर्षोद्वर्तनस्नानगन्धमाल्यपरो भवेत् |लघुशुद्धाम्बरः स्थानं भजेदक्लेदि वार्षिकम् ||४०|| " audio={r23}/>
                <SingleAudioCard sholkno="Shloka 41" sholk="वर्षाशीतोचिताङ्गानां सहसैवार्करश्मिभिः |तप्तानामाचितं पित्तं प्रायः शरदि कुप्यति ||४१||" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 42,43" sholk=" तत्रान्नपानं मधुरं लघु शीतं सतिक्तकम् |पित्तप्रशमनं सेव्यं मात्रया सुप्रकाङ्क्षितैः ||४२|| लावान् कपिञ्जलानेणानुरभ्राञ्छरभान् शशान् | शालीन् सयवगोधूमान् सेव्यानाहुर्घनात्यये ||४३||" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 44,45" sholk=" तिक्तस्य सर्पिषः पानं विरेको रक्तमोक्षणम् | धाराधरात्यये कार्यमातपस्य च वर्जनम् ||४४|| वसां तैलमवश्यायमौदकानूपमामिषम् |क्षारं दधि दिवास्वप्नं प्राग्वातं चात्र वर्जयेत् ||४५||" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 46,47" sholk=" दिवा सूर्यांशुसन्तप्तं निशि चन्द्रांशुशीतलम् |कालेन पक्वं निर्दोषमगस्त्येनाविषीकृतम् ||४६|| हंसोदकमिति ख्यातं शारदं विमलं शुचि | स्नानपानावगाहेषु हितमम्बु यथाऽमृतम् ||४७||" audio={r27}/>
                <SingleAudioCard sholkno="Shloka 49" sholk=" शारदानि च माल्यानि वासांसि विमलानि च | शरत्काले प्रशस्यन्ते प्रदोषे चेन्दुरश्मयः ||४८|| इत्युक्तमृतुसात्म्यं यच्चेष्टाहारव्यपाश्रयम् | उपशेते यदौचित्यादोकःसात्म्यं तदुच्यते ||४९|| " audio={r28}/>
                {/* <SingleAudioCard sholkno="Shloka 49" sholk="देशानामामयानां च विपरीतगुणं गुणैः | सात्म्यमिच्छन्ति सात्म्यज्ञाश्चेष्टितं चाद्यमेव च ||५०|| " audio={r29}/> */}
                <SingleAudioCard sholkno="Shloka 50" sholk="देशानामामयानां च विपरीतगुणं गुणैः | सात्म्यमिच्छन्ति सात्म्यज्ञाश्चेष्टितं चाद्यमेव च ||५०|| " audio={r30}/>
                <SingleAudioCard sholkno="Shloka 51" sholk="तत्र श्लोकः-ऋतावृतौ नृभिः सेव्यमसेव्यं यच्च किञ्चन | तस्याशितीये निर्दिष्टं हेतुमत् सात्म्यमेव च ||५१|| " audio={r31}/>
                <SingleAudioCard sholkno="Last Shlokha" sholk="इत्यग्निवेशकृते तन्त्रे चरकप्रतिसंस्कृते श्लोकस्थानेतस्याशितीयो नाम षष्ठोऽध्यायः ||६||" audio={r32}/>

            </div>
        </div>
    )
}

export default Book1ch6




 