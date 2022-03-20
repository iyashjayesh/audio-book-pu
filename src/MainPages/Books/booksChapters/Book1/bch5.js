import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/ch5/C5S1,2'
import r2 from '../../../../assests/Audio/book1audio/ch5/C5S3'
import r3 from '../../../../assests/Audio/book1audio/ch5/C5S4'
import r4 from '../../../../assests/Audio/book1audio/ch5/C5S5'
import r5 from '../../../../assests/Audio/book1audio/ch5/C5S6'
import r6 from '../../../../assests/Audio/book1audio/ch5/C5S7'
import r7 from '../../../../assests/Audio/book1audio/ch5/C5S8'
import r8 from '../../../../assests/Audio/book1audio/ch5/C5S9'
import r9 from '../../../../assests/Audio/book1audio/ch5/C5S10'
import r10 from '../../../../assests/Audio/book1audio/ch5/C5S11'
import r11 from '../../../../assests/Audio/book1audio/ch5/C5S12'
import r12 from '../../../../assests/Audio/book1audio/ch5/C5S13'
import r13 from '../../../../assests/Audio/book1audio/ch5/C5S14'
import r14 from '../../../../assests/Audio/book1audio/ch5/C5S15'
import r15 from '../../../../assests/Audio/book1audio/ch5/C5S16'
import r16 from '../../../../assests/Audio/book1audio/ch5/C5S17'
import r17 from '../../../../assests/Audio/book1audio/ch5/C5S18'
import r18 from '../../../../assests/Audio/book1audio/ch5/C5S19'
import r19 from '../../../../assests/Audio/book1audio/ch5/C5S20,21'
import r20 from '../../../../assests/Audio/book1audio/ch5/C5S22'
import r21 from '../../../../assests/Audio/book1audio/ch5/C5S23'
import r22 from '../../../../assests/Audio/book1audio/ch5/C5S24'
import r23 from '../../../../assests/Audio/book1audio/ch5/C5S25'
import r24 from '../../../../assests/Audio/book1audio/ch5/C5S26'
import r25 from '../../../../assests/Audio/book1audio/ch5/C5S27,28.m4a'
import r26 from '../../../../assests/Audio/book1audio/ch5/C5S29'
import r27 from '../../../../assests/Audio/book1audio/ch5/C5S30'
import r28 from '../../../../assests/Audio/book1audio/ch5/C5S31'
import r29 from '../../../../assests/Audio/book1audio/ch5/C5S32,33'
import r30 from '../../../../assests/Audio/book1audio/ch5/C5S33,34'
import r31 from '../../../../assests/Audio/book1audio/ch5/C5S36,37(1)'
import r32 from '../../../../assests/Audio/book1audio/ch5/C5S37(2),38(1)'
import r33 from '../../../../assests/Audio/book1audio/ch5/C5S38(2),39'
import r34 from '../../../../assests/Audio/book1audio/ch5/C5S40'

import r46 from '../../../../assests/Audio/book1audio/ch5/C5S46'
import r47 from '../../../../assests/Audio/book1audio/ch5/C5S47'
import r48 from '../../../../assests/Audio/book1audio/ch5/C5S48'
import r49 from '../../../../assests/Audio/book1audio/ch5/C5S49,50'
import r50 from '../../../../assests/Audio/book1audio/ch5/C5S51'
import r51 from '../../../../assests/Audio/book1audio/ch5/C5S52'
import r52 from '../../../../assests/Audio/book1audio/ch5/C5S53'
import r53 from '../../../../assests/Audio/book1audio/ch5/C5S54,55'
import r54 from '../../../../assests/Audio/book1audio/ch5/C5S56'
import r55 from '../../../../assests/Audio/book1audio/ch5/C5S57,58,59,60,6162_'
import r56 from '../../../../assests/Audio/book1audio/ch5/C5S63,64,65,6667'
import r57 from '../../../../assests/Audio/book1audio/ch5/C5S68,6970'
import r58 from '../../../../assests/Audio/book1audio/ch5/C5S71,72,7374(1)'
import r59 from '../../../../assests/Audio/book1audio/ch5/C5S74,75'
import r60 from '../../../../assests/Audio/book1audio/ch5/C5S76,77'
import r61 from '../../../../assests/Audio/book1audio/ch5/C5S78,79,80,81'
import r62 from '../../../../assests/Audio/book1audio/ch5/C5S82,83'
import r63 from '../../../../assests/Audio/book1audio/ch5/C5S84'
import r64 from '../../../../assests/Audio/book1audio/ch5/C5S85,86,87.88.89'
import r65 from '../../../../assests/Audio/book1audio/ch5/C5S90,91,92'
import r66 from '../../../../assests/Audio/book1audio/ch5/C5S93'
import r67 from '../../../../assests/Audio/book1audio/ch5/C5S94'
import r68 from '../../../../assests/Audio/book1audio/ch5/C5S95'
import r69 from '../../../../assests/Audio/book1audio/ch5/C5S96'
import r70 from '../../../../assests/Audio/book1audio/ch5/C5S97'
import r71 from '../../../../assests/Audio/book1audio/ch5/C5S98'
import r72 from '../../../../assests/Audio/book1audio/ch5/C5S99'
import r73 from '../../../../assests/Audio/book1audio/ch5/C5S100'
import r74 from '../../../../assests/Audio/book1audio/ch5/C5S101'
import r75 from '../../../../assests/Audio/book1audio/ch5/C5S102'
import r76 from '../../../../assests/Audio/book1audio/ch5/C5S103'
import r77 from '../../../../assests/Audio/book1audio/ch5/C5S104'
import r78 from '../../../../assests/Audio/book1audio/ch5/C5S105,106,107,108,109,110,111'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/5.png'

const Book1ch5 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="अथातो मात्राशितीयमध्यायं व्याख्यास्यामः ||१| इति ह स्माह भगवानात्रेयः ||२|| " audio={r1}/>
                {/* 34-40 */}
                <SingleAudioCard sholkno="Shloka 3" sholk="मात्राशी स्यात् |आहारमात्रा पुनरग्निबलापेक्षिणी ||३|| " audio={r2}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="यावद्ध्यस्याशनमशितमनुपहत्य प्रकृतिं यथाकालं जरां गच्छति तावदस्य मात्राप्रमाणं वेदितव्यं भवति ||४|| " audio={r3}/>
                <SingleAudioCard sholkno="Shloka 5" sholk=" तत्र शालिषष्टिकमुद्गलावकपिञ्जलैणशशशरभशम्बरादीन्याहारद्रव्याणि प्रकृतिलघून्यपि मात्रापेक्षीणि भवन्ति |5||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 6" sholk="न चैवमुक्ते द्रव्ये गुरुलाघवमकारणं मन्येत, लघूनि हि द्रव्याणि वाय्वग्निगुणबहुलानि भवन्ति; पृथ्वीसोमगुणबहुलानीतराणि, तस्मात् स्वगुणादपि लघून्यग्निसन्धुक्षणस्वभावान्यल्पदोषाणि चोच्यन्तेऽपि सौहित्योपयुक्तानि, गुरूणि पुनर्नाग्निसन्धुक्षणस्वभावान्यसामान्यात्, अतश्चातिमात्रं दोषवन्ति सौहित्योपयुक्तान्यन्यत्र व्यायामाग्निबलात्; सैषा भवत्यग्निबलापेक्षिणी मात्रा ||६|| " audio={r5}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="न च नापेक्षते द्रव्यं; द्रव्यापेक्षया च त्रिभागसौहित्यमर्धसौहित्यं वा गुरूणामुपदिश्यते, लघूनामपि च नातिसौहित्यमग्नेर्युक्त्यर्थम् ||७|| " audio={r6}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="मात्रावद्ध्यशनमशितमनुपहत्य प्रकृतिं बलवर्णसुखायुषा योजयत्युपयोक्तारमवश्यमिति ||८|| " audio={r7}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="भवन्ति चात्र- गुरु पिष्टमयं तस्मात्तण्डुलान् पृथुकानपि | न जातु भुक्तवान् खादेन्मात्रां खादेद्बुभुक्षितः ||९|| " audio={r8}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="वल्लूरं शुष्कशाकानि शालूकानि बिसानि च |नाभ्यसेद्गौरवान्मांसं कृशं नैवोपयोजयेत् ||१०||" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 11" sholk=" कूर्चिकांश्च किलाटांश्च शौकरं गव्यमाहिषे | मत्स्यान् दधि च माषांश्च यवकांश्च न शीलयेत् ||११|| " audio={r10}/>
                <SingleAudioCard sholkno="Shloka 12" sholk="षष्टिकाञ्छालिमुद्गांश्च सैन्धवामलके यवान् | आन्तरीक्षं पयः सर्पिर्जाङ्गलं मधु चाभ्यसेत् ||१२|| " audio={r11}/>
                <SingleAudioCard sholkno="Shloka 13" sholk="तच्च नित्यं प्रयुञ्जीत स्वास्थ्यं येनानुवर्तते |अजातानां विकाराणामनुत्पत्तिकरं च यत् ||१३|| " audio={r12}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="अत ऊर्ध्वं शरीरस्य कार्यमक्ष्यञ्जनादिकम् | स्वस्थवृत्तिमभिप्रेत्य गुणतः सम्प्रवक्ष्यते ||१४|| " audio={r13}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="सौवीरमञ्जनं नित्यं हितमक्ष्णोः प्रयोजयेत् | पञ्चरात्रेऽष्टरात्रे वा स्रावणार्थे रसाञ्जनम् ||१५|| " audio={r14}/>
                <SingleAudioCard sholkno="Shloka 16" sholk="चक्षुस्तेजोमयं तस्य विशेषाच्छ्लेष्मतो भयम् | ततः श्लेष्महरं कर्म हितं दृष्टेः प्रसादनम् ||१६||" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 17" sholk=" दिवा तन्न प्रयोक्तव्यं नेत्रयोस्तीक्ष्णमञ्जनम् | विरेकदुर्बला दृष्टिरादित्यं प्राप्य सीदति ||१७||" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 18" sholk=" तस्मात् स्राव्यं निशायां तु ध्रुवमञ्जनमिष्यते || यथा हि कनकादीनां मलिनां विविधात्मनाम् ||१८||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 19" sholk=" धौतानां निर्मला शुद्धिस्तैलचेलकचादिभिः | एवं नेत्रेषु मर्त्यानामञ्जनाश्च्योतनादिभिः ||१९||" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 20,21" sholk=" दृष्टिर्निराकुला भाति निर्मले नभसीन्दुवत् ||हरेणुकां प्रियङ्गुं च पृथ्वीकां केशरं नखम् ||२०||ह्रीवेरं चन्दनं पत्रं त्वगेलोशीरपद्मकम् |ध्यामकं मधुकं मांसी गुग्गुल्वगुरुशर्करम् ||२१||" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 22" sholk=" न्यग्रोधोदुम्बराश्वत्थप्लक्षलोध्रत्वचः शुभाः |वन्यं सर्जरसं मुस्तं शैलेयं कमलोत्पले ||२२||" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 23" sholk=" श्रीवेष्टकं शल्लकीं च शुकबर्हमथापि च |पिष्ट्वा लिम्पेच्छरेषीकां तां वर्तिं यवसन्निभाम् ||२३||" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 24" sholk=" अङ्गुष्ठसम्मितां कुर्यादष्टाङ्गुलसमां भिषक् |शुष्कां निगर्भां तां वर्तिं धूमनेत्रार्पितां नरः ||२४||" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 25" sholk=" स्नेहाक्तामग्निसम्प्लुष्टां पिबेत् प्रायोगिकीं सुखाम् ||वसाघृतमधूच्छिष्टैर्युक्तियुक्तैर्वरौषधैः ||२५||" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 26" sholk=" वर्तिं मधुरकैः कृत्वा स्नैहिकीं धूममाचरेत् ||श्वेता ज्योतिष्मती चैव हरितालं मनःशिला ||२६||" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 27,28" sholk=" गन्धाश्चागुरुपत्राद्या धूमं मूर्धविरेचने ||गौरवं शिरसः शूलं पीनसार्धावभेदकौ ||२७||  कर्णाक्षिशूलं कासश्च हिक्काश्वासौ गलग्रहः | दन्तदौर्बल्यमास्रावः श्रोत्रघ्राणाक्षिदोषजः ||२८||" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 29" sholk=" पूतिर्घ्राणास्यगन्धश्च दन्तशूलमरोचकः |हनुमन्याग्रहः कण्डूः क्रिमयः पाण्डुता मुखे ||२९||" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 30" sholk=" श्लेष्मप्रसेको वैस्वर्यं गलशुण्ड्युपजिह्विका |खालित्यं पिञ्जरत्वं च केशानां पतनं तथा ||३०||" audio={r27}/>
                <SingleAudioCard sholkno="Shloka 31" sholk=" क्षवथुश्चातितन्द्रा च बुद्धेर्मोहोऽतिनिद्रता | धूमपानात् प्रशाम्यन्ति बलं भवति चाधिकम् ||३१||" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 32,33" sholk=" शिरोरुहकपालानामिन्द्रियाणां स्वरस्य च | न च वातकफात्मानो बलिनोऽप्यूर्ध्वजत्रुजाः ||३२|| धूमवक्त्रकपानस्य व्याधयः स्युः शिरोगताः ||३३|| " audio={r29}/>
                <SingleAudioCard sholkno="Shloka 34" sholk="प्रयोगपाने तस्याष्टौ कालाः सम्परिकीर्तिताः ||३३||वातश्लेष्मसमुत्क्लेशः कालेष्वेषु हि लक्ष्यते | स्नात्वा भुक्त्वा समुल्लिख्य क्षुत्वा दन्तान्निघृष्य च |" audio={r30}/>
                <SingleAudioCard sholkno="Shloka 36,37(1)" sholk=" नावनाञ्जननिद्रान्ते चात्मवान् धूमपो भवेत् |तथा वातकफात्मानो न भवन्त्यूर्ध्वजत्रुजाः ||३५|| रोगास्तस्य तु पेयाः स्युरापानास्त्रिस्त्रयस्त्रयः ||३६|| " audio={r31}/>
                <SingleAudioCard sholkno="Shloka 37(2),38(1)" sholk="परं द्विकालपायी स्यादह्नः कालेषु बुद्धिमान् ||३६|| प्रयोगे, स्नैहिके त्वेकं, वैरेच्यं त्रिचतुः पिबेत् |  हृत्कण्ठेन्द्रियसंशुद्धिर्लघुत्वं शिरसः शमः ||३७||यथेरितानां दोषाणां सम्यक्पीतस्य लक्षणम् ||३८|| " audio={r32}/>
                <SingleAudioCard sholkno="Shloka 38(2),39" sholk="बाधिर्यमान्ध्यमूकत्वं रक्तपित्तं शिरोभ्रमम् ||३८|| अकाले चातिपीतश्च धूमः कुर्यादुपद्रवान् | तत्रेष्टं सर्पिषः पानं नावनाञ्जनतर्पणम् ||३९||" audio={r33}/>
                <SingleAudioCard sholkno="Shloka 40" sholk=" स्नैहिकं धूमजे दोषे वायुः पित्तानुगो यदि | शीतं तु रक्तपित्ते स्याच्छ्लेष्मपित्ते विरूक्षणम् ||४०|| " audio={r34}/>

                <SingleAudioCard sholkno="Shloka 46" sholk="परं त्वतः प्रवक्ष्यामि धूमो येषां विगर्हितः |न विरिक्तः पिबेद्धूमं न कृते बस्तिकर्मणि ||४१|| न रक्ती न विषेणार्तो न शोचन्न च गर्भिणी |न श्रमे न मदे नामे न पित्ते न प्रजागरे ||४२| न मूर्च्छाभ्रमतृष्णासु न क्षीणे नापि च क्षते | न मद्यदुग्धे पीत्वा च न स्नेहं न च माक्षिकम् ||४३|| धूमं न भुक्त्वा दध्ना च न रूक्षः क्रुद्ध एव च |न तालुशोषे तिमिरे शिरस्यभिहिते न च ||४४||न शङ्खके न रोहिण्यां न मेहे न मदात्यये |एषु धूममकालेषु मोहात् पिबति यो नरः ||४५||रोगास्तस्य प्रवर्धन्ते दारुणा धूमविभ्रमात् ||४६|| " audio={r46}/>
                <SingleAudioCard sholkno="Shloka 47" sholk="धूमयोग्यः पिबेद्दोषे शिरोघ्राणाक्षिसंश्रये ||४६||घ्राणेनास्येन कण्ठस्थे मुखेन घ्राणपो वमेत् |  आस्येन धूमकवलान् पिबन् घ्राणेन नोद्वमेत् ||४७|| प्रतिलोमं गतो ह्याशु धूमो हिंस्याद्धि चक्षुषी ||४८|| " audio={r47}/>
                <SingleAudioCard sholkno="Shloka 48" sholk="ऋज्वङ्गचक्षुस्तच्चेताः सूपविष्टस्त्रिपर्ययम् ||४८||पिबेच्छिद्रं पिधायैकं नासया धूममात्मवान् ||४९|| " audio={r48}/>
                <SingleAudioCard sholkno="Shloka 49,50" sholk="" audio={r49}/>
                <SingleAudioCard sholkno="Shloka 51" sholk="चतुर्विंशतिकं नेत्रं स्वाङ्गुलीभिर्विरेचने ||४९||द्वात्रिंशदङ्गुलं स्नेहे प्रयोगेऽध्यर्धमिष्यते |ऋजु त्रिकोषाफलितं कोलास्थ्यग्रप्रमाणितम् ||५०||बस्तिनेत्रसमद्रव्यं धूमनेत्रं प्रशस्यते ||५१|| " audio={r50}/>
                <SingleAudioCard sholkno="Shloka 52" sholk="दूराद्विनिर्गतः पर्वच्छिन्नो नाडीतनूकृतः ||५१||नेन्द्रियं बाधते धूमो मात्राकालनिषेवितः ||५२|| " audio={r51}/>
                <SingleAudioCard sholkno="Shloka 53" sholk=" अविशुद्धः स्वरो यस्य कण्ठश्च सकफो भवेत् ||५३||स्तिमितो मस्तकश्चैवमपीतं धूममादिशेत् |" audio={r52}/>
                <SingleAudioCard sholkno="Shloka 54,55" sholk=" तालु मूर्धा च कण्ठश्च शुष्यते परितप्यते ||५४|| तृष्यते मुह्यते जन्तू रक्तं च स्रवतेऽधिकम् |शिरश्च भ्रमतेऽत्यर्थं मूर्च्छा चास्योपजायते ||५५|| इन्द्रियाण्युपतप्यन्ते धूमेऽत्यर्थं निषेविते ||५६|| " audio={r53}/>
                <SingleAudioCard sholkno="Shloka 56" sholk="वर्षे वर्षेऽणुतैलं च कालेषु त्रिषु ना चरेत् ||५६|| प्रावृट्शरद्वसन्तेषु गतमेघे नभस्तले |" audio={r54}/>
                <SingleAudioCard sholkno="Shloka 57,58,59,60,61,62" sholk=" नस्यकर्म यथाकालं यो यथोक्तं निषेवते ||५७||न तस्य चक्षुर्न घ्राणं न श्रोत्रमुपहन्यते |न स्युः श्वेता न कपिलाः केशाः श्मश्रूणि वा पुनः ||५८||न च केशाः प्रमुच्यन्ते वर्धन्ते च विशेषतः मन्यास्तम्भः शिरःशूलमर्दितं हनुसङ्ग्रहः ||५९||पीनसार्धावभेदौ च शिरःकम्पश्च शाम्यति |सिराः शिरःकपालानां सन्धयः स्नायुकण्डराः ||६०|| नावनप्रीणिताश्चास्य लभन्तेऽभ्यधिकं बलम् |मुखं प्रसन्नोपचितं स्वरः स्निग्धः स्थिरो महान् ||६१|| सर्वेन्द्रियाणां वैमल्यं बलं भवति चाधिकम् |न चास्य रोगाः सहसा प्रभवन्त्यूर्ध्वजत्रुजाः ||६२||" audio={r55}/>
                <SingleAudioCard sholkno="Shloka 63,64,65,66,67" sholk=" जीर्यतश्चोत्तमाङ्गेषु जरा न लभते बलम् |चन्दनागुरुणी पत्रं दार्वीत्वङ्मधुकं बलाम् ||६३||प्रपौण्डरीकं सूक्ष्मैलां विडङ्गं बिल्वमुत्पलम् | ह्रीबेरमभयं वन्यं त्वङ्मुस्तं सारिवां स्थिराम् ||६४|| जीवन्तीं पृश्निपर्णीं च सुरदारु शतावरीम् | हरेणुं बृहतीं व्याघ्रीं सुरभीं पद्मकेशरम् ||६५||विपाचयेच्छतगुणे माहेन्द्रे विमलेऽम्भसि | तैलाद्दशगुणं शेषं कषायमवतारयेत् ||६६|| तेन तैलं कषायेण दशकृत्वो विपाचयेत् |अथास्य दशमे पाके समांशं छागलं पयः ||६७||" audio={r56}/>
                <SingleAudioCard sholkno="Shloka 68,69,70" sholk=" दद्यादेषोऽणुतैलस्य नावनीयस्य संविधिः | अस्य मात्रां प्रयुञ्जीत तैलस्यार्धपलोन्मिताम् ||६८|| स्निग्धस्विन्नोत्तमाङ्गस्य पिचुना नावनैस्त्रिभिः | त्र्यहात्त्र्यहाच्च सप्ताहमेतत् कर्म समाचरेत् ||६९|| निवातोष्णसमाचारी हिताशी नियतेन्द्रियः | तैलमेतत्त्रिदोषघ्नमिन्द्रियाणां बलप्रदम् ||७०||" audio={r57}/>
                <SingleAudioCard sholkno="Shloka 71,72,73,74(1)" sholk="प्रयुञ्जानो यथाकालं यथोक्तानश्नुते गुणान् ||आपोथिताग्रं द्वौ कालौ कषायकटुतिक्तकम् ||७१|| भक्षयेद्दन्तपवनं दन्तमांसान्यबाधयन् | निहन्ति गन्धं वैरस्यं जिह्वादन्तास्यजं मलम् ||७२||निष्कृष्य रुचिमाधत्ते सद्यो दन्तविशोधनम् | करञ्जकरवीरार्कमालतीककुभासनाः ||७३||शस्यन्ते दन्तपवने ये चाप्येवंविधा द्रुमाः | सुवर्णरूप्यताम्राणि त्रपुरीतिमयानि च ||७४||" audio={r58}/>
                <SingleAudioCard sholkno="Shloka 74,75" sholk="सुवर्णरूप्यताम्राणि त्रपुरीतिमयानि च ||७४||जिह्वानिर्लेखनानि स्युरतीक्ष्णान्यनृजूनि च |जिह्वामूलगतं यच्च मलमुच्छ्वासरोधि च ||७५|| दौर्गन्ध्यं भजते तेन तस्माज्जिह्वां विनिर्लिखेत् " audio={r59}/>
                <SingleAudioCard sholkno="Shloka 76,77" sholk="धार्याण्यास्येन वैशद्यरुचिसौगन्ध्यमिच्छता ||७६|| जातीकटुकपूगानां लवङ्गस्य फलानि च |कक्कोलस्य फलं पत्रं ताम्बूलस्य शुभं तथा |तथा कर्पूरनिर्यासः सूक्ष्मैलायाः फलानि च ||७७|| " audio={r60}/>
                <SingleAudioCard sholkno="Shloka 78,79,80,81" sholk="हन्वोर्बलं स्वरबलं वदनोपचयः परः |स्यात् परं च रसज्ञानमन्ने च रुचिरुत्तमा ||७८|| न चास्य कण्ठशोषः स्यान्नौष्ठयोः स्फुटनाद्भयम् |न च दन्ताः क्षयं यान्ति दृढमूला भवन्ति च ||७९|| न शूल्यन्ते न चाम्लेन हृष्यन्ते भक्षयन्ति च |परानपि खरान् भक्ष्यांस्तैलगण्डूषधारणात् ||८०|| नित्यं स्नेहार्द्रशिरसः शिरःशूलं न जायते |न खालित्यं न पालित्यं न केशाः प्रपतन्ति च ||८१||" audio={r61}/>
                <SingleAudioCard sholkno="Shloka 82,83" sholk="बलं शिरःकपालानां विशेषेणाभिवर्धते |दृढमूलाश्च दीर्घाश्च कृष्णाः केशा भवन्ति च ||८२|| इन्द्रियाणि प्रसीदन्ति सुत्वग्भवति चाननम् |निद्रालाभः सुखं च स्यान्मूर्ध्नि तैलनिषेवणात् ||८३||" audio={r62}/>
                <SingleAudioCard sholkno="Shloka 84" sholk=" न कर्णरोगा वातोत्था न मन्याहनुसङ्ग्रहः | नोच्चैः श्रुतिर्न बाधिर्यं स्यान्नित्यं कर्णतर्पणात् ||८४||" audio={r63}/>
                <SingleAudioCard sholkno="Shloka 85,86,87,88,89" sholk="स्नेहाभ्यङ्गाद्यथा कुम्भश्चर्म स्नेहविमर्दनात् |भवत्युपाङ्गादक्षश्च दृढः क्लेशसहो यथा ||८५||तथा शरीरमभ्यङ्गाद्दृढं सुत्वक् च जायते | प्रशान्तमारुताबाधं क्लेशव्यायामसंसहम् ||८६|| स्पर्शनेऽभ्यधिको वायुः स्पर्शनं च त्वगाश्रितम् |त्वच्यश्च परमभ्यङ्गस्तस्मात्तं शीलयेन्नरः ||८७|| न चाभिघाताभिहतं गात्रमभ्यङ्गसेविनः | विकारं भजतेऽत्यर्थं बलकर्मणि वा क्वचित् ||८८|| सुस्पर्शोपचिताङ्गश्च बलवान् प्रियदर्शनः | भवत्यभ्यङ्गनित्यत्वान्नरोऽल्पजर एव च ||८९|| " audio={r64}/>
                <SingleAudioCard sholkno="Shloka 90,91,92" sholk="खरत्वं स्तब्धता रौक्ष्यं श्रमः सुप्तिश्च पादयोः | सद्य एवोपशाम्यन्ति पादाभ्यङ्गनिषेवणात् ||९०||जायते सौकुमार्यं च बलं स्थैर्यं च पादयोः |दृष्टिः प्रसादं लभते मारुतश्चोपशाम्यति ||९१||न च स्याद्गृध्रसीवातः पादयोः स्फुटनं न च |न सिरास्नायुसङ्कोचः पादाभ्यङ्गेन पादयोः ||९२|| " audio={r65}/>
                <SingleAudioCard sholkno="Shloka 93" sholk="दौर्गन्ध्यं गौरवं तन्द्रां कण्डूं मलमरोचकम् | स्वेदबीभत्सतां हन्ति शरीरपरिमार्जनम् ||९३||" audio={r66}/>
                <SingleAudioCard sholkno="Shloka 94" sholk=" पवित्रं वृष्यमायुष्यं श्रमस्वेदमलापहम् | शरीरबलसन्धानं स्नानमोजस्करं परम् ||९४|| " audio={r67}/>
                <SingleAudioCard sholkno="Shloka 95" sholk="काम्यं यशस्यमायुष्यमलक्ष्मीघ्नं प्रहर्षणम् | श्रीमत् पारिषदं शस्तं निर्मलाम्बरधारणम् ||९५||" audio={r68}/>
                <SingleAudioCard sholkno="Shloka 96" sholk=" वृष्यं सौगन्ध्यमायुष्यं काम्यं पुष्टिबलप्रदम् |सौमनस्यमलक्ष्मीघ्नं गन्धमाल्यनिषेवणम् ||९६||" audio={r69}/>
                <SingleAudioCard sholkno="Shloka 97" sholk=" धन्यं मङ्गल्यमायुष्यं श्रीमद्व्यसनसूदनम् |हर्षणं काम्यमोजस्यं रत्नाभरणधारणम् ||९७||" audio={r70}/>
                <SingleAudioCard sholkno="Shloka 98" sholk=" मेध्यं पवित्रमायुष्यमलक्ष्मीकलिनाशनम् | पादयोर्मलमार्गाणां शौचाधानमभीक्ष्णशः ||९८||" audio={r71}/>
                <SingleAudioCard sholkno="Shloka 99" sholk=" पौष्टिकं वृष्यमायुष्यं शुचि रूपविराजनम् |केशश्मश्रुनखादीनां कल्पनं सम्प्रसाधनम् ||९९||" audio={r72}/>
                <SingleAudioCard sholkno="Shloka 100" sholk=" चक्षुष्यं स्पर्शनहितं पादयोर्व्यसनापहम् |बल्यं पराक्रमसुखं वृष्यं पादत्रधारणम् ||१००||" audio={r73}/>
                <SingleAudioCard sholkno="Shloka 101" sholk=" ईतेः प्रशमनं बल्यं गुप्त्यावरणशङ्करम् |घर्मानिलरजोम्बुघ्नं छत्रधारणमुच्यते ||१०१||" audio={r74}/>
                <SingleAudioCard sholkno="Shloka 102" sholk=" स्खलतः सम्प्रतिष्ठानं शत्रूणां च निषूदनम् |अवष्टम्भनमायुष्यं भयघ्नं दण्डधारणम् ||१०२|| " audio={r75}/>
                <SingleAudioCard sholkno="Shloka 103" sholk="नगरी नगरस्येव रथस्येव रथी यथा |स्वशरीरस्य मेधावी कृत्येष्ववहितो भवेत् ||१०३|| " audio={r76}/>
                <SingleAudioCard sholkno="Shloka 104" sholk="भवति चात्र- वृत्त्युपायान्निषेवेत ये स्युर्धर्माविरोधिनः | शममध्ययनं चैव सुखमेवं समश्नुते ||१०४|| " audio={r77}/>
                <SingleAudioCard sholkno="Shloka 105,106,107,108,109,110,111" sholk="तत्र श्लोकाः-मात्रा द्रव्याणि मात्रां च संश्रित्य गुरुलाघवम् | द्रव्याणां गर्हितोऽभ्यासो येषां, येषां च शस्यते ||१०५|| अञ्जनं धूमवर्तिश्च त्रिविधा वर्तिकल्पना | धूमपानगुणाः कालाः पानमानं च यस्य यत् ||१०६||व्यापत्तिचिह्नं भैषज्यं धूमो येषां विगर्हितः | पेयो यथा यन्मयं च नेत्रं यस्य च यद्विधम् ||१०७|| नस्यकर्मगुणा नस्तःकार्यं यच्च यथा यदा | भक्षयेद्दन्तपवनं यथा यद्यद्गुणं च यत् ||१०८||यदर्थं यानि चास्येन धार्याणि कवलग्रहे | तैलस्य ये गुणा दिष्टाः शिरस्तैलगुणाश्च ये ||१०९|| कर्णतैले तथाऽभ्यङ्गे पादाभ्यङ्गेऽङ्गमार्जने |स्नाने वाससि शुद्धे च सौगन्ध्ये रत्नधारणे ||११०|| शौचे संहरणे लोम्नां पादत्रच्छत्रधारणे | गुणा मात्राशितीयेऽस्मिंस्तथोक्ता दण्डधारणे ||१११|| " audio={r78}/>
            
            </div>
        </div>
    )
}

export default Book1ch5




 