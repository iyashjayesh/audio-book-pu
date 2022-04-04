import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/28/C28S1,2.mp3'
import r2 from '../../../../assests/Audio/book1audio/28/C28S3.mp3'
import r3 from '../../../../assests/Audio/book1audio/28/C28S3(1).mp3'
import r4 from '../../../../assests/Audio/book1audio/28/C28S3(2).mp3'
import r5 from '../../../../assests/Audio/book1audio/28/C28S4.mp3'
import r6 from '../../../../assests/Audio/book1audio/28/C28S5.mp3'
import r7 from '../../../../assests/Audio/book1audio/28/C28S6.mp3'
import r8 from '../../../../assests/Audio/book1audio/28/C28S6(1).mp3'
import r9 from '../../../../assests/Audio/book1audio/28/C28S6(2).mp3'
import r10 from '../../../../assests/Audio/book1audio/28/C28S6(3).mp3'
import r11 from '../../../../assests/Audio/book1audio/28/C28S7.mp3'
import r12 from '../../../../assests/Audio/book1audio/28/C28S8.mp3'
import r13 from '../../../../assests/Audio/book1audio/28/C28S9,10.mp3'
import r14 from '../../../../assests/Audio/book1audio/28/C28S11to13.mp3'
import r15 from '../../../../assests/Audio/book1audio/28/C28S14.mp3'
import r16 from '../../../../assests/Audio/book1audio/28/C28S15.mp3'
import r17 from '../../../../assests/Audio/book1audio/28/C28S16.mp3'
import r18 from '../../../../assests/Audio/book1audio/28/C28S17.mp3'
import r19 from '../../../../assests/Audio/book1audio/28/C28S18,19.mp3'
import r20 from '../../../../assests/Audio/book1audio/28/C28S20.mp3'
import r21 from '../../../../assests/Audio/book1audio/28/C28S21.mp3'
import r22 from '../../../../assests/Audio/book1audio/28/C28S22.mp3'
import r23 from '../../../../assests/Audio/book1audio/28/C28S23,24.mp3'
import r24 from '../../../../assests/Audio/book1audio/28/C28S25.mp3'
import r25 from '../../../../assests/Audio/book1audio/28/C28S26.mp3'
import r26 from '../../../../assests/Audio/book1audio/28/C28S27.mp3'
import r27 from '../../../../assests/Audio/book1audio/28/C28S28.mp3'
import r28 from '../../../../assests/Audio/book1audio/28/C28S29.mp3'
import r29 from '../../../../assests/Audio/book1audio/28/C28S30.mp3'
import r30 from '../../../../assests/Audio/book1audio/28/C28S31,32.mp3'
import r31 from '../../../../assests/Audio/book1audio/28/C28S33.mp3'
import r32 from '../../../../assests/Audio/book1audio/28/C28S34.mp3'
import r33 from '../../../../assests/Audio/book1audio/28/C28S35.mp3'
import r34 from '../../../../assests/Audio/book1audio/28/C28S36.mpg'
import r35 from '../../../../assests/Audio/book1audio/28/C28S37.mpg'
import r36 from '../../../../assests/Audio/book1audio/28/C28S38.mp3'
import r37 from '../../../../assests/Audio/book1audio/28/C28S39.mp3'
import r38 from '../../../../assests/Audio/book1audio/28/C28S40.mp3'
import r39 from '../../../../assests/Audio/book1audio/28/C28S41.mp3'
import r40 from '../../../../assests/Audio/book1audio/28/C28S42.mp3'
import r41 from '../../../../assests/Audio/book1audio/28/C28S43.mp3'
import r42 from '../../../../assests/Audio/book1audio/28/C28S44.mp3'
import r43 from '../../../../assests/Audio/book1audio/28/C28S45-48.mp3'
import r44 from '../../../../assests/Audio/book1audio/28/C28Slast.mp3'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/28.png'

const Book1ch28 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="अथातो विविधाशितपीतीयमध्यायं [१] व्याख्यास्यामः||१||
इति ह स्माह भगवानात्रेयः||२||" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="विविधमशितं पीतं लीढं खादितं जन्तोर्हितमन्तरग्निसन्धुक्षितबलेन यथास्वेनोष्मणा सम्यग्विपच्यमानं कालवदनवस्थितसर्वधातुपाकमनुपहतसर्वधातूष्ममारुतस्रोतः केवलं शरीरमुपचयबलवर्णसुखायुषा योजयति शरीरधातूनूर्जयति च|
धातवो हि धात्वाहाराः प्रकृतिमनुवर्तन्ते||३||" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 3(1)" sholk="तत्राहारप्रसादाख्यो [२] रसः किट्टं च मलाख्यमभिनिर्वर्तते|
किट्टात् स्वेदमूत्रपुरीषवातपित्तश्लेष्माणः कर्णाक्षिनासिकास्यलोमकूपप्रजननमलाः केशश्मश्रुलोमनखादयश्चावयवाः पुष्यन्ति|" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 3(2)" sholk="पुष्यन्ति त्वाहाररसाद्रसरुधिरमांसमेदोस्थिमज्जशुक्रौजांसि पञ्चेन्द्रियद्रव्याणि धातुप्रसादसञ्ज्ञकानि शरीरसन्धिबन्धपिच्छादयश्चावयवाः|
ते सर्व एव धातवो मलाख्याः प्रसादाख्याश्च रसमलाभ्यां पुष्यन्तः स्वं मानमनुवर्तन्ते यथावयःशरीरम्|
एवं रसमलौ स्वप्रमाणावस्थितावाश्रयस्य समधातोर्धातुसाम्यमनुवर्तयतः|
निमित्ततस्तु क्षीणवृद्धानां प्रसादाख्यानां धातूनां वृद्धिक्षयाभ्यामाहारमूलाभ्यां रसः साम्यमुत्पादयत्यारोग्याय, किट्टं च मलानामेवमेव|" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="स्वमानातिरिक्ताः पुनरुत्सर्गिणः शीतोष्णपर्यायगुणैश्चोपचर्यमाणा मलाः शरीर धातुसाम्यकराः समुपलभ्यन्ते||४||" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 5" sholk="तेषां तु मलप्रसादाख्यानां धातूनां स्रोतांस्ययनमुखानि|
तानि यथाविभागेन यथास्वं धातूनापूरयन्ति|
एवमिदं शरीरमशितपीतलीढखादितप्रभवम्|
अशितपीतलीढखादितप्रभवाश्चास्मिञ् शरीरे व्याधयो भवन्ति|
हिताहितोपयोगविशेषास्त्वत्र शुभाशुभविशेषकरा भवन्तीति||५||" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 6" sholk="एवंवादिनं भगवन्तमात्रेयमग्निवेश उवाच- दृश्यन्ते हि भगवन्! हितसमाख्यातमप्याहारमुपयुञ्जाना व्याधिमन्तश्चागदाश्च, तथैवाहितसमाख्यातम्; एवं दुष्टे कथं हिताहितोपयोगविशेषात्मकं शुभाशुभविशेषमुपलभामह इति||६||" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 6(1)" sholk="तमुवाच भगवानात्रेयः- न हिताहारोपयोगिनामग्निवेश! तन्निमित्ता व्याधयो जायन्ते, न च केवलं हिताहारोपयोगादेव सर्वव्याधिभयमतिक्रान्तं भवति, सन्ति ह्यृतेऽप्यहिताहारोपयोगादन्या रोगप्रकृतयः, तद्यथा- कालविपर्ययः, प्रज्ञापराधः, शब्दस्पर्शरूपरसगन्धाश्चासात्म्या इति|" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 6(2)" sholk="ताश्च रोगप्रकृतयो रसान् सम्यगुपयुञ्जानमपि पुरुषमशुभेनोपपादयन्ति; तस्माद्धिताहारोपयोगिनोऽपि दृश्यन्ते व्याधिमन्तः|
अहिताहारोपयोगिनां पुनः कारणतो [३] न सद्यो दोषवान् भवत्यपचारः|" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 6(3)" sholk="न हि सर्वाण्यपथ्यानि तुल्यदोषाणि, न च सर्वे दोषास्तुल्यबलाः, न च सर्वाणि शरीराणि व्याधिक्षमत्वे समर्थानि भवन्ति|
तदेव ह्यपथ्यं देशकालसंयोगवीर्यप्रमाणातियोगाद्भूयस्तरमपथ्यं सम्पद्यते|" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="स एव दोषः संसृष्टयोनिर्विरुद्धोपक्रमो गम्भीरानुगतश्चिरस्थितः प्राणायतनसमुत्थो मर्मोपघाती कष्टतमः क्षिप्रकारितमश्च सम्पद्यते|
शरीराणि चातिस्थूलान्यतिकृशान्यनिविष्टमांसशोणितास्थीनि दुर्बलान्यसात्म्याहारोपचितान्यल्पाहाराण्यल्पसत्त्वानि च भवन्त्यव्याधिसहानि, विपरीतानि पुनर्व्याधिसहानि|
एभ्यश्चैवापथ्याहारदोषशरीरविशेषेभ्यो व्याधयो मृदवो दारुणाः क्षिप्रसमुत्थाश्चिरकारिणश्च भवन्ति|
त एव वातपित्तश्लेष्माणः स्थानविशेषे प्रकुपिता व्याधिविशेषानभिनिर्वर्तयन्त्यग्निवेश!||७||" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="तत्र रसादिषु स्थानेषु प्रकुपितानां दोषाणां यस्मिन् स्थाने ये ये व्याधयः सम्भवन्ति तांस्तान् यथावदनुव्याख्यास्यामः||८||" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 9,10" sholk="अश्रद्धा चारुचिश्चास्यवैरस्यमरसज्ञता|
हृल्लासो गौरवं तन्द्रा साङ्गमर्दो ज्वरस्तमः [४] ||९||
पाण्डुत्वं स्रोतसां रोधः क्लैब्यं सादः कृशाङ्गता|
नाशोऽग्नेरयथाकालं वलयः पलितानि च||१०||
रसप्रदोषजा रोगा,...|११|" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 11to13" sholk="...वक्ष्यन्ते रक्तदोषजाः|
कुष्ठवीसर्पपिडका रक्तपित्तमसृग्दरः||११||
गुदमेढ्रास्यपाकश्च प्लीहा गुल्मोऽथ विद्रधिः|
नीलिका कामला व्यङ्गः पिप्प्लवस्तिलकालकाः||१२||
दद्रुश्चर्मदलं श्वित्रं पामा कोठास्रमण्डलम्|
रक्तप्रदोषाज्जायन्ते,...|१४|" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="...शृणु मांसप्रदोषजान्||१३||
अधिमांसार्बुदं कीलं गलशालूकशुण्डिके|
पूतिमांसालजीगण्डगण्डमालोपजिह्विकाः||१४||
विद्यान्मांसाश्रयान्,...|१५|" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="... मेदःसंश्रयांस्तु प्रचक्ष्महे|
निन्दितानि प्रमेहाणां पूर्वरूपाणि यानि च||१५||" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 16" sholk="अध्यस्थिदन्तौ [५] दन्तास्थिभेदशूलं विवर्णता|
केशलोमनखश्मश्रुदोषाश्चास्थिप्रदोषजाः||१६||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 17" sholk="रुक् पर्वणां भ्रमो मूर्च्छा दर्शनं तमसस्तथा|
अरुषां स्थूलमूलानां [६] पर्वजानां च दर्शनम्||१७||
मज्जप्रदोषात्, ...|१८|" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 18,19" sholk="...शुक्रस्य दोषात् क्लैब्यमहर्षणम्|
रोगि वा क्लीबमल्पायुर्विरूपं वा प्रजायते||१८||
न चास्य जायते गर्भः पतति प्रस्रवत्यपि|
शुक्रं हि दुष्टं सापत्यं सदारं बाधते नरम्||१९||" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 20" sholk="इन्द्रियाणि समाश्रित्य प्रकुप्यन्ति यदा मलाः|
उपघातोपतापाभ्यां योजयन्तीन्द्रियाणि ते||२०||" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 21" sholk="स्नायौ सिराकण्डराभ्यो [७] दुष्टाः क्लिश्नन्ति मानवम्|
स्तम्भसङ्कोचखल्लीभिर्ग्रन्थिस्फुरणसुप्तिभिः||२१||" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 22" sholk="मलानाश्रित्य कुपिता भेदशोषप्रदूषणम्|
दोषा मलानां कुर्वन्ति सङ्गोत्सर्गावतीव च||२२||" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 23,24" sholk="विविधादशितात् पीतादहिताल्लीढखादितात्|
भवन्त्येते मनुष्याणां विकारा य उदाहृताः||२३||
तेषामिच्छन्ननुत्पत्तिं सेवेत मतिमान् सदा|
हितान्येवाशितादीनि न स्युस्तज्जास्तथाऽऽमयाः||२४||" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 25" sholk="रसजानां विकाराणां सर्वं लङ्घनमौषधम्|
विधिशोणितिकेऽध्याये रक्तजानां भिषग्जितम्||२५||" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 26" sholk="मांसजानां तु संशुद्धिः शस्त्रक्षाराग्निकर्म च|
अष्टौनिन्दितिकेऽध्याये [८] मेदोजानां चिकित्सितम्||२६||" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 27" sholk="अस्थ्याश्रयाणां व्याधीनां पञ्चकर्माणि भेषजम्|
बस्त्यः क्षीरसर्पींषि तिक्तकोपहितानि च||२७||" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 28" sholk="मज्जशुक्रसमुत्थानामौषधं स्वादुतिक्तकम्|
अन्नं व्यवायव्यायामौ शुद्धिः काले च मात्रया||२८||" audio={r27}/>
                <SingleAudioCard sholkno="Shloka 29" sholk="शान्तिरिन्द्रियजानां तु त्रिमर्मीये प्रवक्ष्यते|
स्नाय्वादिजानां प्रशमो वक्ष्यते वातरोगिके||२९||" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 30" sholk="नवेगान्धारणेऽध्याये चिकित्सासङ्ग्रहः कृतः|
मलजानां विकाराणां सिद्धिश्चोक्ता क्वचित्क्वचित्||३०||" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 31,32" sholk="व्यायामादूष्मणस्तैक्ष्ण्याद्धितस्यानवचारणात्|
कोष्ठाच्छाखा [९] मला यान्ति द्रुतत्वान्मारुतस्य च||३१||
तत्रस्थाश्च विलम्बन्ते कदाचिन्न समीरिताः|
नादेशकाले कुप्यन्ति भूयो हेतुप्रतीक्षिणः||३२||" audio={r30}/>
                <SingleAudioCard sholkno="Shloka 33" sholk="वृद्ध्या विष्यन्दनात् पाकात् स्रोतोमुखविशोधनात्|
शाखा मुक्त्वा मलाः कोष्ठं यान्ति वायोश्च निग्रहात्||३३||" audio={r31}/>
                <SingleAudioCard sholkno="Shloka 34" sholk="अजातानामनुत्पत्तौ जातानां विनिवृत्तये|
रोगाणां यो विधिर्दृष्टः [१०] सुखार्थी तं समाचरेत्||३४||" audio={r32}/>
                <SingleAudioCard sholkno="Shloka 35" sholk="सुखार्थाः सर्वभूतानां मताः सर्वाः प्रवृत्तयः|
ज्ञानाज्ञानविशेषात्तु मार्गामार्गप्रवृत्तयः||३५||" audio={r33}/>
                <SingleAudioCard sholkno="Shloka 36" sholk="हितमेवानुरुध्यन्ते [११] प्रपरीक्ष्य परीक्षकाः|
रजोमोहावृतात्मानः प्रियमेव तु लौकिकाः||३६||" audio={r34}/>
                <SingleAudioCard sholkno="Shloka 37" sholk="श्रुतं बुद्धिः स्मृतिर्दाक्ष्यं धृतिर्हितनिषेवणम्|
वाग्विशुद्धिः शमो धैर्यमाश्रयन्ति परीक्षकम्||३७||" audio={r35}/>
                <SingleAudioCard sholkno="Shloka 38" sholk="लौकिकं नाश्रयन्त्येते गुणा मोहरजःश्रितम् [१२] |
तन्मूला बहवो [१३] यन्ति रोगाः शारीरमानसाः||३८||" audio={r36}/>
                <SingleAudioCard sholkno="Shloka 39" sholk="प्रज्ञापराधाद्ध्यहितानर्थान् [१४] पञ्च निषेवते|
सन्धारयति वेगांश्च सेवते साहसानि च||३९||" audio={r37}/>
                <SingleAudioCard sholkno="Shloka 40" sholk="तदात्वसुखसञ्ज्ञेषु भावेष्वज्ञोऽनुरज्यते|
रज्यते न तु विज्ञाता विज्ञाने ह्यमलीकृते||४०||" audio={r38}/>
                <SingleAudioCard sholkno="Shloka 41" sholk="न रागान्नाप्यविज्ञानादाहारानुपयोजयेत्|
परीक्ष्य हितमश्नीयाद्देहो ह्याहारसम्भवः||४१||" audio={r39}/>
                <SingleAudioCard sholkno="Shloka 42" sholk="आहारस्य विधावष्टौ विशेषा हेतुसञ्ज्ञकाः|
शुभाशुभसमुत्पत्तौ तान् परीक्ष्य प्रयोजयेत्||४२||" audio={r40}/>
                <SingleAudioCard sholkno="Shloka 43" sholk="परिहार्याण्यपथ्यानि सदा परिहरन्नरः|
भवत्यनृणतां प्राप्तः साधूनामिह पण्डितः||४३||" audio={r41}/>
                <SingleAudioCard sholkno="Shloka 44" sholk="यत्तु रोगसमुत्थानमशक्यमिह केनचित्|
परिहर्तुं न तत् प्राप्य शोचितव्यं मनीषिभिः||४४||" audio={r42}/>
                <SingleAudioCard sholkno="Shloka 45-48" sholk="तत्र श्लोकाः-
आहारसम्भवं वस्तु रोगाश्चाहारसम्भवाः|
हिताहितविशेषाच्च विशेषः सुखदुःखयोः||४५||
सहत्वे चासहत्वे च दुःखानां देहसत्त्वयोः [१५] |
विशेषो रोगसङ्घाश्च धातुजा ये पृथक्पृथक्||४६||
तेषां चैव प्रशमनं कोष्ठाच्छाखा उपेत्य च|
दोषा यथा प्रकुप्यन्ति शाखाभ्यः कोष्ठमेत्य च||४७||
प्राज्ञाज्ञयोर्विशेषश्च स्वस्थातुरहितं च यत्|
विविधाशितपीतीये तत् सर्वं सम्प्रकाशितम्||४८||" audio={r43}/>
                <SingleAudioCard sholkno="Last Shloka" sholk="इत्यग्निवेशकृते तन्त्रे चरकप्रतिसंस्कृते सूत्रस्थाने विविधाशितपीतीयो नामाष्टाविंशोऽध्यायः||२८||
इत्यन्नपानचतुष्कः||७||" audio={r44}/>

            </div>
        </div>
    )
}

export default Book1ch28




 