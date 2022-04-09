import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/25/C25S1,2.mp3'
import r2 from '../../../../assests/Audio/book1audio/25/C25S3,4.mp3'
import r3 from '../../../../assests/Audio/book1audio/25/C25S5,6.mp3'
import r4 from '../../../../assests/Audio/book1audio/25/C25S7.mp3'
import r5 from '../../../../assests/Audio/book1audio/25/C25S8,9.mp3'
import r6 from '../../../../assests/Audio/book1audio/25/C25S10,11.mp3'
import r7 from '../../../../assests/Audio/book1audio/25/C25S12,13.mp3'
import r8 from '../../../../assests/Audio/book1audio/25/C25S14,15.mp3'
import r9 from '../../../../assests/Audio/book1audio/25/C25S16,17.mp3'
import r10 from '../../../../assests/Audio/book1audio/25/C25S18,19.mp3'
import r11 from '../../../../assests/Audio/book1audio/25/C25S20,21.mp3'
import r12 from '../../../../assests/Audio/book1audio/25/C25S22,23.mp3'
import r13 from '../../../../assests/Audio/book1audio/25/C25S24,25.mp3'
import r14 from '../../../../assests/Audio/book1audio/25/C25S26,27,28.mp3'
import r15 from '../../../../assests/Audio/book1audio/25/C25S29.mp3'
import r16 from '../../../../assests/Audio/book1audio/25/C25S30.mp3'
import r17 from '../../../../assests/Audio/book1audio/25/C25S31.mpg'
import r18 from '../../../../assests/Audio/book1audio/25/C25S32.mpg'
import r19 from '../../../../assests/Audio/book1audio/25/C25S33.mp3'
import r20 from '../../../../assests/Audio/book1audio/25/C25S34.mp3'
import r21 from '../../../../assests/Audio/book1audio/25/C25S35.mp3'
import r22 from '../../../../assests/Audio/book1audio/25/C25S36.mpg'
import r23 from '../../../../assests/Audio/book1audio/25/C25S37.mpg'
import r24 from '../../../../assests/Audio/book1audio/25/C25S38.mp3'
import r25 from '../../../../assests/Audio/book1audio/25/C25S39.mp3'
import r26 from '../../../../assests/Audio/book1audio/25/C25S40.mp3'
import r27 from '../../../../assests/Audio/book1audio/25/C25S41.mp3'
import r28 from '../../../../assests/Audio/book1audio/25/C25S42,43,44.mp3'
import r29 from '../../../../assests/Audio/book1audio/25/C25S45,46,47.mp3'
import r30 from '../../../../assests/Audio/book1audio/25/C25S48.mp3'
import r31 from '../../../../assests/Audio/book1audio/25/C25S48(1).mp3'
import r32 from '../../../../assests/Audio/book1audio/25/C25S48(2).mp3'
import r33 from '../../../../assests/Audio/book1audio/25/C25S48(3).mp3'
import r34 from '../../../../assests/Audio/book1audio/25/C25S48(4).mp3'
import r35 from '../../../../assests/Audio/book1audio/25/C25S48(5).mp3'
import r36 from '../../../../assests/Audio/book1audio/25/C25S48(6).mp3'
import r37 from '../../../../assests/Audio/book1audio/25/C25S48(7).mp3'
import r38 from '../../../../assests/Audio/book1audio/25/C25S48(8).mpg'
import r39 from '../../../../assests/Audio/book1audio/25/C25S48(9).mp3'
import r40 from '../../../../assests/Audio/book1audio/25/C25S49.mp3'
import r41 from '../../../../assests/Audio/book1audio/25/C25S50.mp3'
import r42 from '../../../../assests/Audio/book1audio/25/C25S51.mpg'
import r43 from '../../../../assests/Audio/book1audio/25/C25S487(1).mpg'
import r44 from '../../../../assests/Audio/book1audio/25/C25Slast.mp3'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/25.png'

const Book1ch25 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="अथातो यज्जःपुरुषीयमध्यायं व्याख्यास्यामः||१||
इति ह स्माह भगवानात्रेयः||२||" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3,4" sholk="पुरा प्रत्यक्षधर्माणं भगवन्तं पुनर्वसुम्|
समेतानां [१] महर्षीणां प्रादुरासीदियं कथा [२] ||३||
आत्मेन्द्रियमनोर्थानां योऽयं पुरुषसञ्ज्ञकः|
राशिरस्यामयानां च प्रागुत्पत्तिविनिश्चये||४||" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 5,6" sholk="तदन्तरं काशिपतिर्वामको वाक्यमर्थवित् [३] |
व्याजहारर्षिसमितिमुपसृत्याभिवाद्य च||५||
किन्नु भोः पुरुषो यज्जस्तज्जास्तस्यामयाः स्मृताः|
न वेत्युक्ते नरेन्द्रेण प्रोवाचर्षीन् पुनर्वसुः||६||" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="सर्व एवामितज्ञानविज्ञानच्छिन्नसंशयाः|
भवन्तश्छेत्तुमर्हन्ति काशिराजस्य संशयम्||७||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 8,9" sholk="पारीक्षिस्तत्परीक्ष्याग्रे मौद्गल्यो वाक्यमब्रवीत्|
आत्मजः पुरुषो रोगाश्चात्मजाः कारणं हि सः||८||
स चिनोत्युपभुङ्क्ते च कर्म कर्मफलानि च|
नह्यृते चेतनाधातोः प्रवृत्तिः सुखदुःखयोः||९||" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 10,11" sholk="शरलोमा तु नेत्याह न ह्यात्माऽऽत्मानमात्मना|
योजयेद्व्याधिभिर्दुःखैर्दुःखद्वेषी कदाचन||१०||
रजस्तमोभ्यां तु मनः परीतं सत्त्वसञ्ज्ञकम्|
शरीरस्य समुत्पत्तौ विकाराणां च कारणम्||११||" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 12,13" sholk="वार्योविदस्तु नेत्याह न ह्येकं कारणं मनः [४] |
नर्ते शरीराच्छारीररोगा [५] न मनसः स्थितिः||१२||
रसजानि तु भूतानि व्याधयश्च पृथग्विधाः|
आपो हि रसवत्यस्ताः स्मृता निर्वृत्तिहेतवः||१३||" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 14,15" sholk="हिरण्याक्षस्तु नेत्याह न ह्यात्मा रसजः स्मृतः|
नातीन्द्रियं [६] मनः सन्ति रोगाः शब्दादिजास्तथा||१४||
षड्धातुजस्तु पुरुषो रोगाः षड्धातुजास्तथा|
राशिः षड्धातुजो ह्येष साङ्ख्यैराद्यैः प्रकीर्तितः [७] ||१५||" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 16,17" sholk="तथा ब्रुवाणं कुशिकमाह तन्नेति कौशिकः|
कस्मान्मातापितृभ्यां हि विना षड्धातुजो भवेत्||१६||
पुरुषः पुरुषाद्गौर्गोरश्वादश्वः प्रजायते|
पित्र्या मेहादयश्चोक्ता [८] रोगास्तावत्र कारणम्||१७||" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 18,19" sholk="भद्रकाप्यस्तु नेत्याह नह्यन्धोऽन्धात् प्रजायते|
मातापित्रोरपि च ते प्रागुत्पत्तिर्न युज्यते||१८||
कर्मजस्तु मतो जन्तुः कर्मजास्तस्य चामयाः|
नह्यृते कर्मणो जन्म रोगाणां पुरुषस्य वा||१९||" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 20,21" sholk="भरद्वाजस्तु नेत्याह कर्ता पूर्वं हि कर्मणः|
दृष्टं न चाकृतं कर्म यस्य स्यात् पुरुषः फलम्||२०||
भावहेतुः स्वभावस्तु व्याधीनां पुरुषस्य च|
खरद्रवचलोष्णत्वं तेजोन्तानां यथैव हि||२१||" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 22,23" sholk="काङ्कायनस्तु नेत्याह न ह्यारम्भफलं भवेत्|
भवेत् स्वभावाद्भावानामसिद्धिः सिद्धिरेव वा||२२||
स्रष्टा त्वमितसङ्कल्पो ब्रह्मापत्यं प्रजापतिः|
चेतनाचेतनस्यास्य [९] जगतः सुखदुःखयोः||२३||" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 24,25" sholk="तन्नेति भिक्षुरात्रेयो न ह्यपत्यं प्रजापतिः|
प्रजाहितैषी सततं दुःखैर्युञ्ज्यादसाधुवत्||२४||
कालजस्त्वेव पुरुषः कालजास्तस्य चामयाः|
जगत् कालवशं सर्वं कालः सर्वत्र कारणम्||२५||" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 26,27,28" sholk="तथर्षीणां विवदतामुवाचेदं [१०] पुनर्वसुः|
मैवं वोचत तत्त्वं हि दुष्प्रापं पक्षसंश्रयात्||२६||
वादान् सप्रतिवादान् हि वदन्तो निश्चितानिव|
पक्षान्तं नैव गच्छन्ति तिलपीडकवद्गतौ||२७||
मुक्त्वैवं वादसङ्घट्टमध्यात्ममनुचिन्त्यताम्|
नाविधूते तमःस्कन्धे ज्ञेये ज्ञानं प्रवर्तते||२८||" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 29" sholk="येषामेव हि भावानां सम्पत् सञ्जनयेन्नरम्|
तेषामेव विपद्व्याधीन्विविधान्समुदीरयेत्||२९||" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 30" sholk="अथात्रेयस्य भगवतो वचनमनुनिशम्य पुनरेव वामकः काशिपतिरुवाच भगवन्तमात्रेयं- भगवन्! सम्पन्निमित्तजस्य पुरुषस्य विपन्निमित्तजानां च रोगाणां किमभिवृद्धिकारणमिति||३०||" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 31" sholk="तमुवाच भगवानात्रेयः- हिताहारोपयोग एक एव पुरुषवृद्धिकरो भवति, अहिताहारोपयोगः पुनर्व्याधिनिमित्तमिति [११] ||३१||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 32" sholk="एवंवादिनं भगवन्तमात्रेयमग्निवेश उवाच- कथमिह भगवन्! हिताहितानामाहारजातानां लक्षणमनपवादमभिजानीमहे; हितसमाख्यातानामाहारजातानामहितसमाख्यातानां च मात्राकालक्रियाभूमिदेहदोषपुरुषावस्थान्तरेषु विपरीतकारित्वमुपलभामह इति||३२||" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 33" sholk="तमुवाच भगवानात्रेयः- यदाहारजातमग्निवेश! समांश्चैव शरीरधातून् प्रकृतौ स्थापयति विषमांश्च समीकरोतीत्येतद्धितं विद्धि, विपरीतं त्वहितमिति; इत्येतद्धिताहितलक्षणमनपवादं भवति||३३||" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 34" sholk="एवंवादिनं च भगवन्तमात्रेयमग्निवेश उवाच- भगवन्! न त्वेतदेवमुपदिष्टं भूयिष्ठकल्पाः सर्वभिषजो विज्ञास्यन्ति||३४||" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 35" sholk="तमुवाच भगवानात्रेयः- येषां हि विदितमाहारतत्त्वमग्निवेश! गुणतो द्रव्यतः कर्मतः सर्वावयवशश्च मात्रादयो भावाः, त एतदेवमुपदिष्टं विज्ञातुमुत्सहन्ते|
यथा तु खल्वेतदुपदिष्टं भूयिष्ठकल्पाः सर्वभिषजो विज्ञास्यन्ति, तथैतदुपदेक्ष्यामो मात्रादीन् [१२] भावाननुदाहरन्तः; तेषां हि बहुविधविकल्पा भवन्ति|
आहारविधिविशेषांस्तु खलु लक्षणतश्चावयवतश्चानुव्याख्यास्यामः||३५||" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 36" sholk="तद्यथा- आहारत्वमाहारस्यैकविधमर्थाभेदात्; स पुनर्द्वियोनिः, स्थावरजङ्गमात्मकत्वात्; द्विविधप्रभावः, हिताहितोदर्कविशेषात्; चतुर्विधोपयोगः, पानाशनभक्ष्यलेह्योपयोगात्; षडास्वादः, रसभेदतः षड्विधत्वात्; विंशतिगुणः, गुरुलघुशीतोष्णस्निग्धरूक्षमन्दतीक्ष्णस्थिरसरमृदुकठिन- विशदपिच्छिलश्लक्ष्णखरसूक्ष्मस्थूलसान्द्रद्रवानुगमात्; अपरिसङ्ख्येयविकल्पः, द्रव्यसंयोगकरणबाहुल्यात्||३६||" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 37" sholk="तस्य खलु ये ये विकारावयवा भूयिष्ठमुपयुज्यन्ते, भूयिष्ठकल्पानां च मनुष्याणां प्रकृत्यैव हिततमाश्चाहिततमाश्च, तांस्तान् यथावदुपदेक्ष्यामः||३७||" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 38" sholk="तद्यथा- लोहितशालयः शूकधान्यानां पथ्यतमत्वे श्रेष्ठतमा भवन्ति, मुद्गाः शमीधान्यानाम्, आन्तरिक्षमुदकानां, सैन्धवं लवणानां, जीवन्तीशाकं शाकानाम्, ऐणेयं मृगमांसानां, लावः पक्षिणां, गोधा बिलेशयानां, रोहितो मत्स्यानां, गव्यं सर्पिः सर्पिषां, गोक्षीरं क्षीराणां, तिलतैलं स्थावरजातानां स्नेहानां, वराहवसा आनूपमृगवसानां, चुलुकीवसा मत्स्यवसानां, पाकहंसवसा जलचरविहङ्गवसानां, कुक्कुटवसा विष्किरशकुनिवसानां, अजमेदः शाखादमेदसां, शृङ्गवेरं कन्दानां, मृद्वीका फलानां, शर्करेक्षुविकाराणाम्, इति प्रकृत्यैव हिततमानामाहारविकाराणां प्राधान्यतो द्रव्याणि व्याख्यातानि भवन्ति||३८||" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 39" sholk="अहिततमानप्युपदेक्ष्यामः- यवकाः शूकधान्यानामपथ्यतमत्वेन प्रकृष्टतमा [१३] भवन्ति, माषाः शमीधान्यानां, वर्षानादेयमुदकानाम्, ऊषरं लवणानां, सर्षपशाकं शाकानां, गोमांसं मृगमांसानां, काणकपोतः पक्षिणां, भेको बिलेशयानां, चिलिचिमो मत्स्यानाम्, आविकं सर्पिः सर्पिषाम्, अविक्षीरं क्षीराणां, कुसुम्भस्नेहः स्थावरस्नेहानां, महिषवसा आनूपमृगवसानां, कुम्भीरवसा मत्स्यवसानां, काकमद्गुवसा जलचरविहङ्गवसानां, चटकवसा विष्किरशुकनिवसानां, हस्तिमेदः शाखादमेदसां, निकुचं फलानाम्, आलुकं कन्दानां, फाणितमिक्षुविकाराणाम्, इति प्रकृत्यैवाहिततमानामाहारविकाराणां प्रकृष्टतमानि द्रव्याणि व्याख्यातानि भवन्ति; (इति) हिताहितावयवो व्याख्यात आहारविकाराणाम्||३९||" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 40" sholk="अतो भूयः कर्मौषधानां च प्राधान्यतः सानुबन्धानि द्रव्याण्यनुव्याख्यास्यामः| तद्यथा- अन्नं वृत्तिकराणां श्रेष्ठम्, उदकमाश्वासकराणां [१४] (सुरा श्रमहराणां [१५] ) क्षीरं जीवनीयानां, मांसं बृंहणीयानां, रसस्तर्पणीयानां, लवणमन्नद्रव्यरुचिकराणाम्, अम्लं हृद्यानां, कुक्कुटो बल्यानां, नक्ररेतो वृष्याणां, मधु श्लेष्मपित्तप्रशमनानां, सर्पिर्वातपित्तप्रशमनानां, तैलं वातश्लेष्मप्रशमनानां, वमनं श्लेष्महराणां, विरेचनं पित्तहराणां, बस्तिर्वातहराणां, स्वेदो मार्दवकराणां, व्यायामः स्थैर्यकराणां, क्षारः पुंस्त्वोपघातिनां, (तिन्दुकमनन्नद्रव्यरुचिकराणाम् [१६] ,) आमं कपित्थमकण्ठ्यानाम्, आविकं सर्पिरहृद्यानाम्, अजाक्षीरं शोषघ्नस्तन्यसात्म्यरक्तसाङ्ग्राहिकरक्तपित्तप्रशमनानाम्, अविक्षीरं श्लेष्मपित्तजननानां, महिषीक्षीरं स्वप्नजननानां, मन्दकं दध्यभिष्यन्दकराणां, गवेधुकान्नं कर्शनीयानाम्, उद्दालकान्नं विरूक्षणीयानाम्, इक्षुर्मूत्रजननानां, यवाः पुरीषजननानां, जाम्बवं वातजननानां, शष्कुल्यः श्लेष्मपित्तजननानां, कुलत्था अम्लपित्तजननानां, माषाः श्लेष्मपित्तजननानां, मदनफलं वमनास्थापनानुवासनोपयोगिनां, त्रिवृत् सुखविरेचनानां, चतुरङ्गुलो मृदुविरेचनानां, स्नुक्पयस्तीक्ष्णविरेचननां, प्रत्यक्पुष्पा शिरोविरेचनानां, विडङ्गं क्रिमिघ्नानां, शिरीषो विषघ्नानां, खदिरः कुष्ठघ्नानां, रास्ना वातहराणाम्, आमलकं वयःस्थापनानां, हरीतकी पथ्यानाम्, एरण्डमूलं वृष्यवातहराणां, पिप्पलीमूलं दीपनीयपाचनीयानाहप्रशमनानां, चित्रकमूलं दीपनीयपाचनीयगुदशोथार्शःशूलहराणां, पुष्करमूलं हिक्काश्वासकासपार्श्वशूलहराणां, मुस्तं साङ्ग्राहिकदीपनीयपाचनीयानाम्, उदीच्यं निर्वापणदीपनीयपाचनीयच्छर्द्यतीसारहराणां, कट्वङ्गं साङ्ग्राहिकपाचनीयदीपनीयानाम्, अनन्ता साङ्ग्राहिकरक्तपित्तप्रशमनानाम्, अमृता साङ्ग्राहिकवातहरदीपनीयश्लेष्मशोणितविबन्धप्रशमनानां, बिल्वं साङ्ग्राहिकदीपनीयवातकफप्रशमनानाम्, अतिविषा दीपनीयपाचनीयसाङ्ग्राहिकसर्वदोषहराणाम्, उत्पलकुमुदपद्मकिञ्जल्कः साङ्ग्राहिकरक्तपित्तप्रशमनानां, दुरालभा पित्तश्लेष्मप्रशमनानां, गन्धप्रियङ्गुः शोणितपित्तातियोगप्रशमनानां, कुटजत्वक् श्लेष्मपित्तरक्तसाङ्ग्राहिकोपशोषणानां, काश्मर्यफलं रक्तसाङ्ग्राहिकरक्तपित्तप्रशमनानां,
                 पृश्निपर्णी साङ्ग्राहिकवातहरदीपनीयवृष्याणां, विदारिगन्धा वृष्यसर्वदोषहराणां, बला साङ्ग्राहिकबल्यवातहराणां, गोक्षुरको मूत्रकृच्छ्रानिलहराणां, हिङ्गुनिर्यासश्छेदनीयदीपनीयानुलोमिकवातकफप्रशमनानाम्,
                 अम्लवेतसो भेदनीयदीपनीयानुलोमिकवातश्लेष्महराणां, यावशूकः स्रंसनीयपाचनीयार्शोघ्नानां, तक्राभ्यासो ग्रहणीदोषशोफार्शोघृतव्यापत्प्रशमनानां, क्रव्यान्मांसरसाभ्यासो ग्रहणीदोषशोषार्शोघ्नानां, क्षीरघृताभ्यासो रसायनानां,
                 समघृतसक्तुप्राशाभ्यासो वृष्योदावर्तहराणां, तैलगण्डूषाभ्यासो दन्तबलरुचिकराणां, चन्दनं दुर्गन्धहरदाहनिर्वापणलेपनानां, रास्नागुरुणी शीतापनयनप्रलेपनानां, लामज्जकोशीरं 
                 दाहत्वग्दोषस्वेदापनयनप्रलेपनानां, कुष्ठं वातहराभ्यङ्गोपनाहोपयोगिनां, मधुकं चक्षुष्यवृष्यकेश्यकण्ठ्यवर्ण्यविरजनीयरोपणीयानां, वायुः प्राणसञ्ज्ञाप्रदानहेतूनाम्, अग्निरामस्तम्भशीतशूलोद्वेपनप्रशमनानां, जलं स्तम्भनीयानां, मृद्भृष्टलोष्ट्रनिर्वापितमुदकं 
                 तृष्णाच्छर्द्यतियोगप्रशमनानाम्, अतिमात्राशनमामप्रदोषहेतूनां, यथाग्न्यभ्यवहारोऽग्निसन्धुक्षणानां, यथासात्म्यं चेष्टाभ्यवहारौ सेव्यानां, कालभोजनमारोग्यकराणां, तृप्तिराहारगुणानां, वेगसन्धारणमनारोग्यकराणां, मद्यं सौमनस्यजननानां, मद्याक्षेपो धीधृतिस्मृतिहराणां, गुरुभोजनं दुर्विपाककराणाम्, एकाशनभोजनं सुखपरिणामकराणां, स्त्रीष्वतिप्रसङ्गः शोषकराणां, शुक्रवेगनिग्रहः षाण्ड्यकराणां, पराघातनमन्नाश्रद्धाजननानाम्, अनशनमायुषो ह्रासकराणां, प्रमिताशनं कर्शनीयानाम्, अजीर्णाध्यशनं ग्रहणीदूषणानां, विषमाशनमग्निवैषम्यकराणां, विरुद्धवीर्याशनं निन्दितव्याधिकराणां, प्रशमः पथ्यानां, आयासः सर्वापथ्यानां, मिथ्यायोगो व्याधिकराणां, रजस्वलाभिगमनमलक्ष्मीमुखानां, ब्रह्मचर्यमायुष्याणां, परदाराभिगमनमनायुष्याणां, सङ्कल्पो वृष्याणां, दौर्मनस्यमवृष्याणाम्, अयथाबलमारम्भः प्राणोपरोधिनां, विषादो रोगवर्धनानां, स्नानं श्रमहराणां, हर्षः प्रीणनानां, शोकः शोषणानां, निवृत्तिः पुष्टिकराणां, पुष्टिःस्वप्नकराणाम्, अतिस्वप्नस्तन्द्राकराणां, सर्वरसाभ्यासो बलकराणाम्, एकरसाभ्यासो दौर्बल्यकराणां, गर्भशल्यमाहार्याणाम्, अजीर्णमुद्धार्याणां, बालो मृदुभेषजीयानां, वृद्धो याप्यानां, गर्भिणी तीक्ष्णौषधव्यवायव्यायामवर्जनीयानां, सौमनस्यं गर्भधारणानां, सन्निपातो दुश्चिकित्स्यानाम्, आमो विषमचिकित्स्यानां [१७] , ज्वरो रोगाणां, कुष्ठं दीर्घरोगाणां, राजयक्ष्मा रोगसमूहानां, प्रमेहोऽनुषङ्गिणां, जलौकसोऽनुशस्त्राणां, बस्तिस्तन्त्राणां, हिमवानौषधिभूमीनां, सोम ओषधीनां, मरुभूमिरारोग्यदेशानाम्, अनूपोऽहितदेशानाम्, निर्देशकारित्वमातुरगुणानां, भिषक् चिकित्साङ्गानां, नास्तिकोवर्ज्यानां, लौल्यं क्लेशकराणाम्, अनिर्देशकारित्वमरिष्टानां, अनिर्वेदो वार्तलक्षणानां, वैद्यसमूहो निःसंशयकराणं, योगो वैद्यगुणानां, विज्ञानमौषधीनां, शास्त्रसहितस्तर्कः साधनानां, सम्प्रतिपत्तिः कालज्ञानप्रयोजनानाम्, अव्यवसायः कालातिपत्तिहेतूनां, दृष्टकर्मता निःसंशयकराणाम्, असमर्थता भयकराणां, 
                 तद्विद्यसम्भाषा बुद्धिवर्धनानाम्, आचार्यः शास्त्राधिगमहेतूनाम्, आयुर्वेदोऽमृतानां, सद्वचनमनुष्ठेयानाम्, असद्ग्रहणं [१८] सर्वाहितानां, सर्वसन्न्यासः सुखानामिति||४०||
                 " audio={r26}/>
                <SingleAudioCard sholkno="Shloka 41" sholk="भवन्ति चात्र-
अग्र्याणां शतमुद्दिष्टं यद्द्विपञ्चाशदुत्तरम्|
अलमेतद्विकाराणां विघातायोपदिश्यते||४१||" audio={r27}/>
                <SingleAudioCard sholkno="Shloka 42,43,44" sholk="समानकारिणो येऽर्थास्तेषां श्रेष्ठस्य लक्षणम्|
ज्यायस्त्वं कार्यकर्तृत्वे [१९] वरत्वं चाप्युदाहृतम्||४२||
वातपित्तकफानां च यद्यत् प्रशमने हितम्|
प्राधान्यतश्च निर्दिष्टं यद्व्याधिहरमुत्तमम्||४३||
एतन्निशम्य निपुणं चिकित्सां सम्प्रयोजयेत्|
एवं कुर्वन् सदा वैद्यो धर्मकामौ समश्नुते||४४||" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 45,46,47" sholk="पथ्यं पथोऽनपेतं यद्यच्चोक्तं मनसः प्रियम्|
यच्चाप्रियमपथ्यं च नियतं तन्न लक्षयेत्||४५||
मात्राकालक्रियाभूमिदेहदोषगुणान्तरम् [२०] |
प्राप्य तत्तद्धि दृश्यन्ते ते ते भावास्तथा तथा||४६||
तस्मात् स्वभावो निर्दिष्टस्तथा मात्रादिराश्रयः|
तदपेक्ष्योभयं कर्म प्रयोज्यं सिद्धिमिच्छता||४७||" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 48" sholk="तदात्रेयस्य भगवतो वचनमनुनिशम्य पुनरपि भगवन्तमात्रेयमग्निवेश उवाच- यथोद्देशमभिनिर्दिष्टः केवलोऽयमर्थो [२१] भगवता श्रुतश्चास्माभिः|
आसवद्रव्याणामिदानीमनपवादं लक्षणमनतिसङ्क्षेपेणोपदिश्यमानं शुश्रूषामह इति||४८||" audio={r30}/>
                <SingleAudioCard sholkno="Shloka 48(1)" sholk="तमुवाच भगवानात्रेयः- धान्यफलमूलसारपुष्पकाण्डपत्रत्वचो भवन्त्यासवयोनयोऽग्निवेश! सङ्ग्रहेणाष्टौ शर्करानवमीकाः|" audio={r31}/>
                <SingleAudioCard sholkno="Shloka 48(2)" sholk="तास्वेव द्रव्यसंयोगकरणतोऽपरिसङ्ख्येयासु [२२] यथापथ्यतमानामासवानां चतुरशीतिं निबोध|तद्यथा- सुरासौवीरतुषोदकमैरेयमेदकधान्याम्लाः षड् धान्यासवा [२३] भवन्ति, " audio={r32}/>
                <SingleAudioCard sholkno="Shloka 48(3)" sholk="मृद्वीकाखर्जूरकाश्मर्यधन्वनराजादनतृणशून्यपरूषकाभयामलकमृगलिण्डिकाजाम्बवकपित्थ- कुवलबदरकर्कन्धुपीलुप्रियालपनसन्यग्रोधाश्वत्थप्लक्षकपीतनोदुम्बराजमोदशृङ्गाटकशाङ्खिनीफलासवाः षड्विंशतिर्भवन्ति" audio={r33}/>
                <SingleAudioCard sholkno="Shloka 48(4)" sholk="विदारिगन्धाश्वगन्धाकृष्णगन्धाशतावरीश्यामात्रिवृद्दन्तीद्रवन्तीबिल्वोरुबूकचित्रकमूलैरेकादश मूलासवा भवन्ति" audio={r34}/>
                <SingleAudioCard sholkno="Shloka 48(5)" sholk="शालप्रियकाश्वकर्णचन्दनस्यन्दनखदिरकदरसप्तपर्णार्जुनासनारिमेदतिन्दुककिणिहीशमी- शुक्तिशिंशपाशिरीषवञ्जलधन्वनमधूकैः सारासवा [२४] विंशतिर्भवन्ति" audio={r35}/>

                <SingleAudioCard sholkno="Shloka 48(6)" sholk="पद्मोत्पलनलिकुमुदसौगन्धिकपुण्डरीकशतपत्रमधूकप्रियङ्गुधातकीपुष्पैर्दश पुष्पासवा भवन्ति" audio={r36}/>
                <SingleAudioCard sholkno="Shloka 48(7)" sholk="इक्षुकाण्डेक्ष्विक्षुवालिकापुण्ड्रकचतुर्थाः काण्डासवा भवन्ति" audio={r37}/>
                <SingleAudioCard sholkno="Shloka 48(7-1)" sholk="पटोलताडकपत्रासवौ [२५] द्वौ भवतः" audio={r43}/>
                <SingleAudioCard sholkno="Shloka 48(8)" sholk="पटोलताडकपत्रासवौ [२५] द्वौ भवतः तिल्वकलोध्रैलवालुकक्रमुकचतुर्थास्त्वगासवा भवन्ति, " audio={r38}/>
                <SingleAudioCard sholkno="Shloka 48(9)" sholk="शर्करासव एक एवेति|
एवमेषामासवानां चतुरशीतिः परस्परेणासंसृष्टानामासवद्रव्याणामुपनिर्दिष्टा भवति|" audio={r39}/>

                <SingleAudioCard sholkno="Shloka 49" sholk="एषामासवानामासुतत्वादासवसञ्ज्ञा|
द्रव्यसंयोगविभागविस्तारस्त्वेषां [२६] बहुविधकल्पः संस्कारश्च|
यथास्वं संयोगसंस्कारसंस्कृता ह्यासवाः स्वं कर्म कुर्वन्ति|
संयोगसंस्कारदेशकालमात्रादयश्च भावास्तेषां तेषामासवानां ते ते समुपदिश्यन्ते तत्तत्कार्यमभिसमीक्ष्येति||४९||" audio={r40}/>
                <SingleAudioCard sholkno="Shloka 50" sholk="भवति चात्र-
मनःशरीराग्निबलप्रदानामस्वप्नशोकारुचिनाशनानाम्|
संहर्षणानां प्रवरासवानामशीतिरुक्ता चतुरुत्तरैषा||५०||" audio={r41}/>
                <SingleAudioCard sholkno="Shloka 51" sholk="तत्र श्लोकः-
शरीररोगप्रकृतौ मतानि [२७] तत्त्वेन चाहारविनिश्चयं च|
उवाच यज्जःपुरुषादिकेऽस्मिन् मुनिस्तथाऽग्र्याणि वरासवांश्च||५१||" audio={r42}/>
                <SingleAudioCard sholkno="Last Shloka" sholk="इत्यग्निवेशकृते तन्त्रे चरकप्रतिसंस्कृते श्लोकस्थाने यज्जःपुरुषीयो नाम पञ्चविंशोऽध्यायः||२५||" audio={r44}/>

            </div>
        </div>
    )
}

export default Book1ch25




 