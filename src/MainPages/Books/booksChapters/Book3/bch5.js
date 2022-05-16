import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book3audio/ch5/c5s1, 2.aac'
import r2 from '../../../../assests/Audio/book3audio/ch5/c5s3.aac'
import r3 from '../../../../assests/Audio/book3audio/ch5/c5s4,5.aac'
import r4 from '../../../../assests/Audio/book3audio/ch5/c5s6,7.aac'
import r5 from '../../../../assests/Audio/book3audio/ch5/c5s8(1).aac'
import r6 from '../../../../assests/Audio/book3audio/ch5/c5s8(2).aac'
import r7 from '../../../../assests/Audio/book3audio/ch5/c5s8(3).aac'
import r8 from '../../../../assests/Audio/book3audio/ch5/c5s8(4).aac'
import r9 from '../../../../assests/Audio/book3audio/ch5/c5s8(5).aac'
import r10 from '../../../../assests/Audio/book3audio/ch5/c5s8(6).aac'
import r11 from '../../../../assests/Audio/book3audio/ch5/c5s8(7).aac'
import r12 from '../../../../assests/Audio/book3audio/ch5/c5s8(8).aac'
import r13 from '../../../../assests/Audio/book3audio/ch5/c5s9.aac'
import r14 from '../../../../assests/Audio/book3audio/ch5/c5s10.aac'
import r15 from '../../../../assests/Audio/book3audio/ch5/c5s11.aac'
import r16 from '../../../../assests/Audio/book3audio/ch5/c5s12.aac'
import r17 from '../../../../assests/Audio/book3audio/ch5/c5s13.aac'
import r18 from '../../../../assests/Audio/book3audio/ch5/c5s14.aac'
import r19 from '../../../../assests/Audio/book3audio/ch5/c5s15.aac'
import r20 from '../../../../assests/Audio/book3audio/ch5/c5s16.aac'
import r21 from '../../../../assests/Audio/book3audio/ch5/c5s17.aac'
import r22 from '../../../../assests/Audio/book3audio/ch5/c5s18.aac'
import r23 from '../../../../assests/Audio/book3audio/ch5/c5s19.aac'
import r24 from '../../../../assests/Audio/book3audio/ch5/c5s20.aac'
import r25 from '../../../../assests/Audio/book3audio/ch5/c5s21.aac'
import r26 from '../../../../assests/Audio/book3audio/ch5/c5s22.aac'
import r27 from '../../../../assests/Audio/book3audio/ch5/c5s23.aac'
import r28 from '../../../../assests/Audio/book3audio/ch5/c5s24.aac'
import r29 from '../../../../assests/Audio/book3audio/ch5/c5s25.aac'
import r30 from '../../../../assests/Audio/book3audio/ch5/c5s26, 27,28.aac'
import r31 from '../../../../assests/Audio/book3audio/ch5/c5s29, 30,31.aac'
import r32 from '../../../../assests/Audio/book3audio/ch5/c5slast.aac'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/vimanasthana/5.png'

import All from '../../../../assests/Audio/AllMerged/ch3/ch5.aac'

const Book3ch5 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="All Shloks" sholk="" audio={All} />
                <SingleAudioCard sholkno="Shloka 1, 2" sholk="अथातः स्रोतसां विमानं व्याख्यास्यामः||१|| इति ह स्माह भगवानात्रेयः||२||" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="यावन्तः पुरुषे मूर्तिमन्तो भावविशेषास्तावन्त एवास्मिन् स्रोतसां प्रकारविशेषाः| सर्वे हि भावा पुरुषे नान्तरेण स्रोतांस्यभिनिर्वर्तन्ते, क्षयं वाऽप्यभिगच्छन्ति| स्रोतांसि खलु परिणाममापद्यमानानां धातूनामभिवाहीनि भवन्त्ययनार्थेन||३||" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 4, 5" sholk="अपि चैके स्रोतसामेव समुदयं पुरुषमिच्छन्ति, सर्वगतत्वात् सर्वसरत्वाच्च दोषप्रकोपणप्रशमनानाम्| न त्वेतदेवं, यस्य हि स्रोतांसि, यच्च वहन्ति, यच्चावहन्ति, यत्र चावस्थितानि, सर्वं तदन्यत्तेभ्यः||४|| अतिबहुत्वात् खलु केचिदपरिसङ्ख्येयान्याचक्षते स्रोतांसि, परिसङ्ख्येयानि पुनरन्ये||५||" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 6, 7" sholk="तेषां तु खलु स्रोतसां यथास्थूलं कतिचित्प्रकारान्मूलतश्च प्रकोपविज्ञानतश्चानुव्याख्यास्यामः; ये भविष्यन्त्यलमनुक्तार्थज्ञानाय ज्ञानवतां, विज्ञानाय चाज्ञानवताम्||६|| तद्यथा- प्राणोदकान्नरसरुधिरमांसमेदोस्थिमज्जशुक्रमूत्रपुरीषस्वेदवहानीति; वातपित्तश्लेष्मणां पुनः सर्वशरीरचराणां सर्वाणि स्रोतांस्ययनभूतानि, तद्वदतीन्द्रियाणां पुनः सत्त्वादीनां केवलं चेतनावच्छरीरमयनभूतमधिष्ठानभूतं च| तदेतत् स्रोतसां प्रकृतिभूतत्वान्न विकारैरुपसृज्यते शरीरम्||७||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 8(1)" sholk="तत्र प्राणवहानां स्रोतसां हृदयं मूलं महास्रोतश्च, प्रदुष्टानां तु खल्वेषामिदं विशेषविज्ञानं भवति; तद्यथा- अतिसृष्टमतिबद्धं कुपितमल्पाल्पमभीक्ष्णं वा सशब्दशूलमुच्छ्वसन्तं दृष्ट्वा प्राणवहान्यस्य स्रोतांसि प्रदुष्टानीति विद्यात्|" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 8(2)" sholk="उदकवहानां स्रोतसां तालुमूलं क्लोम च, प्रदुष्टानां तु खल्वेषामिदं विशेषविज्ञानं भवति; तद्यथा- जिह्वाताल्वोष्ठकण्ठक्लोमशोषं पिपासां चातिप्रवृद्धां दृष्ट्वोदकवहान्यस्य स्रोतांसि प्रदुष्टानीति विद्यात्|" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 8(3)" sholk="अन्नवहानां स्रोतसामामाशयो मूलं वामं च पार्श्वं, प्रदुष्टानां तु खल्वेषामिदं विशेषविज्ञानं भवति; तद्यथा- अनन्नाभिलषणमरोचकविपाकौ छर्दिं च दृष्ट्वाऽन्नवहान्यस्य स्रोतांसि प्रदुष्टानीति विद्यात्|" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 8(4)" sholk="रसवहानां स्रोतसां हृदयं मूलं दश च धमन्यः| शोणितवहानां स्रोतसां यकृन्मूलं प्लीहा च| मांसवहानां च स्रोतसां स्नायुर्मूलं त्वक् च| मेदोवहानां स्रोतसां वृक्कौ  मूलं वपावहनं च| अस्थिवहानां स्रोतसां मेदो मूलं जघनं च मज्जवहानां स्रोतसामस्थीनि मूलं सन्धयश्च| शुक्रवहानां स्रोतसां वृषणौ मूलं शेफश्च|" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 8(5)" sholk="प्रदुष्टानां तु खल्वेषां रसादिवहस्रोतसां विज्ञानान्युक्तानि विविधाशितपीतीये; यान्येव हि धातूनां प्रदोषविज्ञानानि तान्येव यथास्वं प्रदुष्टानां धातुस्रोतसाम्|" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 8(6)" sholk="मूत्रवहानां स्रोतसां बस्तिर्मूलं वङ्क्षणौ  च, प्रदुष्टानां तु खल्वेषामिदं विशेषविज्ञानं भवति; तद्यथा- अतिसृष्टमतिबद्धं प्रकुपितमल्पाल्पमभीक्ष्णं वा बहलं सशूलं मूत्रयन्तं दृष्ट्वा मूत्रवहान्यस्य स्रोतांसि प्रदुष्टानीति विद्यात्|" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 8(7)" sholk="पुरीषवहानां स्रोतसां पक्वाशयो मूलं स्थूलगुदं च, प्रदुष्टानां तु खल्वेषामिदं विशेषविज्ञानं भवति; तद्यथा- कृच्छ्रेणाल्पाल्पं सशब्दशूलमतिद्रवमतिग्रथितमतिबहु चोपविशन्तं दृष्ट्वा पुरीषवहान्यस्य स्रोतांसि प्रदुष्टानीति विद्यात्|" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 8(8)" sholk="स्वेदवहानां स्रोतसां मेदो मूलं लोमकूपाश्च, प्रदुष्टानां तु खल्वेषामिदं विशेषविज्ञानं भवति; तद्यथा- अस्वेदनमतिस्वेदनं पारुष्यमतिश्लक्ष्णतामङ्गस्य परिदाहं लोमहर्षं च दृष्ट्वा स्वेदवहान्यस्य स्रोतांसि प्रदुष्टानीति विद्यात्||८||" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="स्रोतांसि, सिराः, धमन्यः, रसायन्यः, रसवाहिन्यः, नाड्यः, पन्थानः, मार्गाः, शरीरच्छिद्राणि, संवृतासंवृतानि, स्थानानि, आशयाः, निकेताश्चेति शरीरधात्ववकाशानां लक्ष्यालक्ष्याणां नामानि भवन्ति| तेषां प्रकोपात् स्थानस्थाश्चैव मार्गगाश्च शरीरधातवः प्रकोपमापद्यन्ते, इतरेषां प्रकोपादितराणि च| स्रोतांसि स्रोतांस्येव, धातवश्च धातूनेव प्रदूषयन्ति प्रदुष्टाः| तेषां सर्वेषामेव वातपित्तश्लेष्माणः प्रदुष्टा दूषयितारो भवन्ति, दोषस्वभावादिति||९||" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="भवन्ति चात्र- क्षयात् सन्धारणाद्रौक्ष्याद्व्यायामात् क्षुधितस्य च| प्राणवाहीनि दुष्यन्ति स्रोतांस्यन्यैश्च दारुणैः||१०||" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 11" sholk="औष्ण्यादामाद्भयात् पानादतिशुष्कान्नसेवनात्| अम्बुवाहीनि दुष्यन्ति तृष्णायाश्चातिपीडनात्||११||" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 12" sholk="अतिमात्रस्य चाकाले चाहितस्य च भोजनात्| अन्नवाहीनि दुष्यन्ति वैगुण्यात् पावकस्य च||१२||" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 13" sholk="गुरुशीतमतिस्निग्धमतिमात्रं समश्नताम्| रसवाहीनि दुष्यन्ति चिन्त्यानां चातिचिन्तनात्||१३||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="विदाहीन्यन्नपानानि स्निग्धोष्णानि द्रवाणि च| रक्तवाहीनि दुष्यन्ति भजतां चातपानलौ||१४||" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="अभिष्यन्दीनि भोज्यानि स्थूलानि च गुरूणि च| मांसवाहीनि दुष्यन्ति भुक्त्वा च स्वपतां दिवा||१५||" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 16" sholk="अव्यायामाद्दिवास्वप्नान्मेद्यानां चातिभक्षणात्| मेदोवाहीनि दुष्यन्ति वारुण्याश्चातिसेवनात्||१६||" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 17" sholk="व्यायामादतिसङ्क्षोभादस्थ्नामतिविघट्टनात्| अस्थिवाहीनि दुष्यन्ति वातलानां च सेवनात्||१७||" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 18" sholk="उत्पेषादत्यभिष्यन्दादभिघातात् प्रपीडनात्| मज्जवाहीनि दुष्यन्ति विरुद्धानां च सेवनात्||१८||" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 19" sholk="अकालयोनिगमनान्निग्रहादतिमैथुनात्| शुक्रवाहीनि दुष्यन्ति शस्त्रक्षाराग्निभिस्तथा||१९||" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 20" sholk="मूत्रितोदकभक्ष्यस्त्रीसेवनान्मूत्रनिग्रहात्| मूत्रवाहीनि दुष्यन्ति क्षीणस्याभिक्षतस्य  च||२०||" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 21" sholk="सन्धारणादत्यशनादजीर्णाध्यशनात्तथा| वर्चोवाहीनि दुष्यन्ति दुर्बलाग्नेः कृशस्य च||२१||" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 22" sholk="व्यायामादतिसन्तापाच्छीतोष्णाक्रमसेवनात्  | स्वेदवाहीनि दुष्यन्ति क्रोधशोकभयैस्तथा||२२||" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 23" sholk="आहारश्च विहारश्च यः स्याद्दोषगुणैः समः| धातुभिर्विगुणश्चापि स्रोतसां स प्रदूषकः||२३||" audio={r27}/>
                <SingleAudioCard sholkno="Shloka 24" sholk="अतिप्रवृत्तिः सङ्गो वा सिराणां ग्रन्थयोऽपि वा| विमार्गगमनं चापि स्रोतसां दुष्टिलक्षणम्||२४||" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 25" sholk="स्वधातुसमवर्णानि वृत्तस्थूलान्यणूनि च| स्रोतांसि दीर्घाण्याकृत्या प्रतानसदृशानि च||२५||" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 26, 27, 28" sholk="प्राणोदकान्नवाहानां दुष्टानां श्वासिकी क्रिया| कार्या तृष्णोपशमनी तथैवामप्रदोषिकी||२६|| विविधाशितपीतीये रसादीनां यदौषधम्| रसादिस्रोतसां कुर्यात्तद्यथास्वमुपक्रमम्||२७|| मूत्रविट्स्वेदवाहानां चिकित्सा मौत्रकृच्छ्रिकी| तथाऽतिसारिकी कार्या तथा ज्वरचिकित्सिकी||२८||" audio={r30}/>
                <SingleAudioCard sholkno="Shloka 29, 30, 31" sholk="तत्र श्लोकाः- त्रयोदशानां मूलानि स्रोतसां दुष्टिलक्षणम्| सामान्यं नामपर्यायाः कोपनानि परस्परम्||२९|| दोषहेतुः पृथक्त्वेन भेषजोद्देश एव च| स्रोतोविमाने निर्दिष्टस्तथा चादौ विनिश्चयः||३०|| केवलं विदितं यस्य शरीरं सर्वभावतः| शारीराः सर्वरोगाश्च स कर्मसु न मुह्यति||३१||" audio={r31}/>
                <SingleAudioCard sholkno="Last Shloka" sholk="इत्यग्निवेशकृते तन्त्रे चरकप्रतिसंस्कृते विमानस्थाने स्रोतोविमानं नाम पञ्चमोऽध्यायः||५||" audio={r32}/>
            </div>
        </div>
    )
}

export default Book3ch5




 