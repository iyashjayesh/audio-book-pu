import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/ch7/C7S1,2'
import r2 from '../../../../assests/Audio/book1audio/ch7/C7S3,4'
import r3 from '../../../../assests/Audio/book1audio/ch7/C7S5'
import r4 from '../../../../assests/Audio/book1audio/ch7/C7S6'
import r5 from '../../../../assests/Audio/book1audio/ch7/C7S7'
import r6 from '../../../../assests/Audio/book1audio/ch7/C7S8'
import r7 from '../../../../assests/Audio/book1audio/ch7/C7S9.m4a'
import r8 from '../../../../assests/Audio/book1audio/ch7/C7S10'
// import r9 from '../../../../assests/Audio/book1audio/ch7/C7S11'
import r10 from '../../../../assests/Audio/book1audio/ch7/C7S12'

import r11 from '../../../../assests/Audio/book1audio/ch7/C7S15'
import r12 from '../../../../assests/Audio/book1audio/ch7/C7S16'
import r13 from '../../../../assests/Audio/book1audio/ch7/C7S17'
import r14 from '../../../../assests/Audio/book1audio/ch7/C7S18'
import r15 from '../../../../assests/Audio/book1audio/ch7/C7S19'
import r16 from '../../../../assests/Audio/book1audio/ch7/C7S20.m4a'
import r17 from '../../../../assests/Audio/book1audio/ch7/C7S21.m4a'
import r18 from '../../../../assests/Audio/book1audio/ch7/C7S22.m4a'
import r19 from '../../../../assests/Audio/book1audio/ch7/C7S23.m4a'
import r20 from '../../../../assests/Audio/book1audio/ch7/C7S24.m4a'
import r21 from '../../../../assests/Audio/book1audio/ch7/C7S25.m4a'
import r22 from '../../../../assests/Audio/book1audio/ch7/C7S26.m4a'
import r23 from '../../../../assests/Audio/book1audio/ch7/C7S27.m4a'
import r24 from '../../../../assests/Audio/book1audio/ch7/C7S28.m4a'
import r25 from '../../../../assests/Audio/book1audio/ch7/C7S29.m4a'
import r26 from '../../../../assests/Audio/book1audio/ch7/C7S30.m4a'
import r27 from '../../../../assests/Audio/book1audio/ch7/C7S31.m4a'
import r28 from '../../../../assests/Audio/book1audio/ch7/C7S32.m4a'
import r29 from '../../../../assests/Audio/book1audio/ch7/C7S33.m4a'
import r30 from '../../../../assests/Audio/book1audio/ch7/C7S34.m4a'
import r31 from '../../../../assests/Audio/book1audio/ch7/C7S35.m4a'
import r32 from '../../../../assests/Audio/book1audio/ch7/C7S36,37.m4a'

import r34 from '../../../../assests/Audio/book1audio/ch7/C7S38.m4a'

import r35 from '../../../../assests/Audio/book1audio/ch7/C7S39,40.m4a'

import r37 from '../../../../assests/Audio/book1audio/ch7/C7S41.m4a'
import r38 from '../../../../assests/Audio/book1audio/ch7/C7S42.m4a'
import r39 from '../../../../assests/Audio/book1audio/ch7/C7S43.m4a'
import r40 from '../../../../assests/Audio/book1audio/ch7/C7S44.m4a'
import r41 from '../../../../assests/Audio/book1audio/ch7/C7S45.m4a'
import r42 from '../../../../assests/Audio/book1audio/ch7/C7S46.m4a'
import r43 from '../../../../assests/Audio/book1audio/ch7/C7S47.m4a'
import r44 from '../../../../assests/Audio/book1audio/ch7/C7S48.m4a'
import r45 from '../../../../assests/Audio/book1audio/ch7/C7S49.m4a'
import r46 from '../../../../assests/Audio/book1audio/ch7/C7S50.m4a'
import r47 from '../../../../assests/Audio/book1audio/ch7/C7S51.m4a'
import r48 from '../../../../assests/Audio/book1audio/ch7/C7S52.m4a'
import r49 from '../../../../assests/Audio/book1audio/ch7/C7S53.m4a'
import r50 from '../../../../assests/Audio/book1audio/ch7/C7S54.m4a'
import r51 from '../../../../assests/Audio/book1audio/ch7/C7S55.m4a'
import r52 from '../../../../assests/Audio/book1audio/ch7/C7S56.m4a'
import r53 from '../../../../assests/Audio/book1audio/ch7/C7S57.m4a'
import r54 from '../../../../assests/Audio/book1audio/ch7/C7S58.m4a'
import r55 from '../../../../assests/Audio/book1audio/ch7/C7S59.m4a'
import r56 from '../../../../assests/Audio/book1audio/ch7/C7S60.m4a'
import r57 from '../../../../assests/Audio/book1audio/ch7/C7S61.m4a'
import r58 from '../../../../assests/Audio/book1audio/ch7/C7S62.m4a'
import r59 from '../../../../assests/Audio/book1audio/ch7/C7S63.m4a'
import r60 from '../../../../assests/Audio/book1audio/ch7/C7S64.m4a'
import r61 from '../../../../assests/Audio/book1audio/ch7/C7S65.m4a'
import r62 from '../../../../assests/Audio/book1audio/ch7/C7S66.m4a'
import r63 from '../../../../assests/Audio/book1audio/ch7/C7SLast.m4a'
import r64 from '../../../../assests/Audio/book1audio/ch7/C7S13.m4a'
import r65 from '../../../../assests/Audio/book1audio/ch7/C7S14.m4a'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/7.png'

const Book1ch7 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="अथातो नवेगान्धारणीयमध्यायं व्याख्यास्यामः ||१|| इति ह स्माह भगवानात्रेयः ||२|| " audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3,4" sholk="न वेगान् धारयेद्धीमाञ्जातान् मूत्रपुरीषयोः | न रेतसो न वातस्य न छर्द्याः क्षवथोर्न च ||३|| नोद्गारस्य न जृम्भाया न वेगान् क्षुत्पिपासयोः | न बाष्पस्य न निद्राया निःश्वासस्य श्रमेण च ||४|| " audio={r2}/>
                <SingleAudioCard sholkno="Shloka 5" sholk="एतान् धारयतो जातान् वेगान् रोगा भवन्ति ये |पृथक्पृथक्चिकित्सार्थं तान्मे निगदतः शृणु ||५||" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 6" sholk=" बस्तिमेहनयोः शूलं मूत्रकृच्छ्रं शिरोरुजा | विनामो वङ्क्षणानाहः स्याल्लिङ्गं मूत्रनिग्रहे ||६||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 7" sholk=" स्वेदावगाहनाभ्यङ्गान् सर्पिषश्चावपीडकम् | मूत्रे प्रतिहते कुर्यात्त्रिविधं बस्तिकर्म च ||७||" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 8" sholk=" पक्वाशयशिरःशूलं वातवर्चोऽप्रवर्तनम् | पिण्डिकोद्वेष्टनाध्मानं पुरीषे स्याद्विधारिते ||८||" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 9" sholk=" स्वेदाभ्यङ्गावगाहाश्च वर्तयो बस्तिकर्म च |हितं प्रतिहते वर्चस्यन्नपानं प्रमाथि च ||९||" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 10" sholk=" मेढ्रे वृषणयोः शूलमङ्गमर्दो हृदि व्यथा |भवेत् प्रतिहते शुक्रे विबद्धं मूत्रमेव च ||१०||" audio={r8}/>
                {/* <SingleAudioCard sholkno="Shloka 11" sholk=" तत्राभ्यङ्गोऽवगाहश्च मदिरा चरणायुधाः | शालिः पयो निरूहश्च शस्तं मैथुनमेव च ||११||" audio={r9}/> */}
                <SingleAudioCard sholkno="Shloka 12" sholk=" सङ्गो विण्मूत्रवातानामाध्मानं वेदना क्लमः | जठरे वातजाश्चान्ये रोगाः स्युर्वातनिग्रहात् ||१२||" audio={r10}/>

                <SingleAudioCard sholkno="Shloka 13" sholk="  स्नेहस्वेदविधिस्तत्र वर्तयो भोजनानि च | पानानि बस्तयश्चैव शस्तं वातानुलोमनम् ||१३||" audio={r64}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="  कण्डूकोठारुचिव्यङ्गशोथपाण्ड्वामयज्वराः | कुष्ठहृल्लासवीसर्पाश्छर्दिनिग्रहजा गदाः ||१४||" audio={r65}/>
                
                <SingleAudioCard sholkno="Shloka 15" sholk=" भुक्त्वा प्रच्छर्दनं धूमो लङ्घनं रक्तमोक्षणम् | रूक्षान्नपानं व्यायामो विरेकश्चात्र शस्यते ||१५||" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 16" sholk=" मन्यास्तम्भः शिरःशूलमर्दितार्धावभेदकौ |इन्द्रियाणां च दौर्बल्यं क्षवथोः स्याद्विधारणात् ||१६||" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 17" sholk=" तत्रोर्ध्वजत्रुकेऽभ्यङ्गः स्वेदो धूमः सनावनः |हितं वातघ्नमाद्यं च घृतं चौत्तरभक्तिकम् ||१७||" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 18" sholk=" हिक्का श्वासोऽरुचिः कम्पो विबन्धो हृदयोरसोः |उद्गारनिग्रहात्तत्र हिक्कायास्तुल्यमौषधम् ||१८||" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 19" sholk=" विनामाक्षेपसङ्कोचाः सुप्तिः कम्पः प्रवेपनम् |जृम्भाया निग्रहात्तत्र सर्वं वातघ्नमौषधम् ||१९||" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 20" sholk=" कार्श्यदौर्बल्यवैवर्ण्यमङ्गमर्दोऽरुचिर्भ्रमः | क्षुद्वेगनिग्रहात्तत्र स्निग्धोष्णं लघु भोजनम् ||२०||" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 21" sholk=" कण्ठास्यशोषो बाधिर्यं श्रमः सादो हृदि व्यथा | पिपासानिग्रहात्तत्र शीतं तर्पणमिष्यते ||२१||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 22" sholk=" प्रतिश्यायोऽक्षिरोगश्च हृद्रोगश्चारुचिर्भ्रमः |बाष्पनिग्रहणात्तत्र स्वप्नो मद्यं प्रियाः कथाः ||२२||" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 23" sholk=" जृम्भाऽङ्गमर्दस्तन्द्रा च शिरोरोगोऽक्षिगौरवम् | निद्राविधारणात्तत्र स्वप्नः संवाहनानि च ||२३||" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 24" sholk=" गुल्महृद्रोगसम्मोहाः श्रमनिःश्वासधारणात् | जायन्ते तत्र विश्रामो वातघ्न्यश्च क्रिया हिताः ||२४||" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 25" sholk=" वेगनिग्रहजा रोगा य एते परिकीर्तिताः | इच्छंस्तेषामनुत्पत्तिं वेगानेतान्न धारयेत् ||२५|| " audio={r21}/>
                <SingleAudioCard sholkno="Shloka 26" sholk="इमांस्तु धारयेद्वेगान् हितार्थी प्रेत्य चेह च | साहसानामशस्तानां मनोवाक्कायकर्मणाम् ||२६|| " audio={r22}/>
                <SingleAudioCard sholkno="Shloka 27" sholk="लोभशोकभयक्रोधमानवेगान् विधारयेत् |नैर्लज्ज्येर्ष्यातिरागाणामभिध्यायाश्च बुद्धिमान् ||२७|| " audio={r23}/>
                <SingleAudioCard sholkno="Shloka 28" sholk="परुषस्यातिमात्रस्य सूचकस्यानृतस्य च |वाक्यस्याकालयुक्तस्य धारयेद्वेगमुत्थितम् ||२८|| " audio={r24}/>
                <SingleAudioCard sholkno="Shloka 29" sholk="देहप्रवृत्तिर्या काचिद्विद्यते परपीडया | स्त्रीभोगस्तेयहिंसाद्या तस्यावेगान्विधारयेत् ||२९|| " audio={r25}/>
                <SingleAudioCard sholkno="Shloka 30" sholk="पुण्यशब्दो विपापत्वान्मनोवाक्कायकर्मणाम् | धर्मार्थकामान् पुरुषः सुखी भुङ्क्ते चिनोति च ||३०|| " audio={r26}/>
                <SingleAudioCard sholkno="Shloka 31" sholk="शरीरचेष्टा या चेष्टा स्थैर्यार्था बलवर्धिनी | देहव्यायामसङ्ख्याता मात्रया तां समाचरेत् ||३१|| " audio={r27}/>
                <SingleAudioCard sholkno="Shloka 32" sholk="लाघवं कर्मसामर्थ्यं स्थैर्यं दुःखसहिष्णुता | दोषक्षयोऽग्निवृद्धिश्च व्यायामादुपजायते ||३२||" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 33" sholk=" श्रमः क्लमः क्षयस्तृष्णा रक्तपित्तं प्रतामकः | अतिव्यायामतः कासो ज्वरश्छर्दिश्च जायते ||३३||" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 34" sholk=" व्यायामहास्यभाष्याध्वग्राम्यधर्मप्रजागरान् |नोचितानपि सेवेत बुद्धिमानतिमात्रया ||३४|| " audio={r30}/>
                
                <SingleAudioCard sholkno="Shloka 35" sholk="एतानेवंविधांश्चान्यान् योऽतिमात्रं निषेवते | गजं सिंह इवाकर्षन् सहसा स विनश्यति ||३५|| " audio={r31}/>
                <SingleAudioCard sholkno="Shloka 36, 37" sholk="उचितादहिताद्धीमान् क्रमशो विरमेन्नरः | हितं क्रमेण सेवेत क्रमश्चात्रोपदिश्यते ||३६|| प्रक्षेपापचये ताभ्यां क्रमः पादांशिको भवेत् |एकान्तरं ततश्चोर्ध्वं द्व्यन्तरं त्र्यन्तरं तथा ||३७|| " audio={r32}/>
                <SingleAudioCard sholkno="Shloka 38" sholk="क्रमेणापचिता दोषाः क्रमेणोपचिता गुणाः | सन्तो यान्त्यपुनर्भावमप्रकम्प्या भवन्ति च ||३८|| " audio={r34}/> 
                <SingleAudioCard sholkno="Shloka 39, 40" sholk="समपित्तानिलकफाः केचिद्गर्भादि मानवाः |दृश्यन्ते वातलाः केचित्पित्तलाः श्लेष्मलास्तथा ||३९||तेषामनातुराः पूर्वे वातलाद्याः सदातुराः | दोषानुशयिता ह्येषां देहप्रकृतिरुच्यते ||४०|| " audio={r35}/>
                <SingleAudioCard sholkno="Shloka 41" sholk="विपरीतगुणस्तेषां स्वस्थवृत्तेर्विधिर्हितः | समसर्वरसं सात्म्यं समधातोः प्रशस्यते ||४१|| " audio={r37}/>
                <SingleAudioCard sholkno="Shloka 42" sholk="द्वे अधः सप्त शिरसि खानि स्वेदमुखानि च |मलायनानि बाध्यन्ते दुष्टैर्मात्राधिकैर्मलैः ||४२||" audio={r38}/>
                <SingleAudioCard sholkno="Shloka 43" sholk=" मलवृद्धिं गुरुतया लाघवान्मलसङ्क्षयम् | मलायनानां बुध्येत सङ्गोत्सर्गादतीव च ||४३|| " audio={r39}/>
                <SingleAudioCard sholkno="Shloka 44" sholk="तान् दोषलिङ्गैरादिश्य व्याधीन् साध्यानुपाचरेत् | व्याधिहेतुप्रतिद्वन्द्वैर्मात्राकालौ विचारयन् ||४४|| " audio={r40}/>
                <SingleAudioCard sholkno="Shloka 45" sholk="विषमस्वस्थवृत्तानामेते रोगास्तथाऽपरे | जायन्तेऽनातुरस्तस्मात् स्वस्थवृत्तपरो भवेत् ||४५||" audio={r41}/>
                <SingleAudioCard sholkno="Shloka 46" sholk=" माधवप्रथमे मासि नभस्यप्रथमे पुनः | सहस्यप्रथमे चैव हारयेद्दोषसञ्चयम् ||४६||" audio={r42}/>
                <SingleAudioCard sholkno="Shloka 47" sholk=" स्निग्धस्विन्नशरीराणामूर्ध्वं चाधश्च नित्यशः |बस्तिकर्म ततः कुर्यान्नस्यकर्म च बुद्धिमान् ||४७||" audio={r43}/>
                <SingleAudioCard sholkno="Shloka 48" sholk=" यथाक्रमं यथायोग्यमत ऊर्ध्वं प्रयोजयेत् |रसायनानि सिद्धानि वृष्ययोगांश्च कालवित् ||४८||" audio={r44}/>
                <SingleAudioCard sholkno="Shloka 49" sholk=" रोगास्तथा न जायन्ते प्रकृतिस्थेषु धातुषु | धातवश्चाभिवर्धन्ते जरा मान्द्यमुपैति च ||४९||" audio={r45}/>
                <SingleAudioCard sholkno="Shloka 50" sholk=" विधिरेष विकाराणामनुत्पत्तौ निदर्शितः |निजानामितरेषां तु पृथगेवोपदेक्ष्यते ||५०|| " audio={r46}/>
                <SingleAudioCard sholkno="Shloka 51" sholk="ये भूतविषवाय्वग्निसम्प्रहारादिसम्भवाः |नृणामागन्तवो रोगाः प्रज्ञा तेष्वपराध्यति ||५१||" audio={r47}/>
                <SingleAudioCard sholkno="Shloka 52" sholk=" ईर्ष्याशोकभयक्रोधमानद्वेषादयश्च ये |मनोविकारास्तेऽप्युक्ताः सर्वे प्रज्ञापराधजाः ||५२|| " audio={r48}/>
                <SingleAudioCard sholkno="Shloka 53" sholk="त्यागः प्रज्ञापराधानामिन्द्रियोपशमः स्मृतिः |देशकालात्मविज्ञानं सद्वृत्तस्यानुवर्तनम् ||५३||" audio={r49}/>
                <SingleAudioCard sholkno="Shloka 54" sholk=" आगन्तूनामनुत्पत्तावेष मार्गो निदर्शितः | प्राज्ञः प्रागेव तत् कुर्याद्धितं विद्याद्यदात्मनः ||५४|| " audio={r50}/>
                
                <SingleAudioCard sholkno="Shloka 55" sholk="आप्तोपदेशप्रज्ञानं प्रतिपत्तिश्च कारणम् | विकाराणामनुत्पत्तावुत्पन्नानां च शान्तये ||५५|| " audio={r51}/>
                <SingleAudioCard sholkno="Shloka 56" sholk="पापवृत्तवचःसत्त्वाः सूचकाः कलहप्रियाः |मर्मोपहासिनो लुब्धाः परवृद्धिद्विषः शठाः ||५६||" audio={r52}/>
                <SingleAudioCard sholkno="Shloka 57" sholk=" परापवादरतयश्चपला रिपुसेविनः |निर्घृणास्त्यक्तधर्माणः परिवर्ज्या नराधमाः ||५७||" audio={r53}/>
                <SingleAudioCard sholkno="Shloka 58" sholk=" बुद्धिविद्यावयःशीलधैर्यस्मृतिसमाधिभिः | वृद्धोपसेविनो वृद्धाः स्वभावज्ञा गतव्यथाः ||५८||" audio={r54}/>
                <SingleAudioCard sholkno="Shloka 59" sholk=" सुमुखाः सर्वभूतानां प्रशान्ताः शंसितव्रताः | सेव्याः सन्मार्गवक्तारः पुण्यश्रवणदर्शनाः ||५९|| " audio={r55}/>
                <SingleAudioCard sholkno="Shloka 60" sholk="आहाराचारचेष्टासु सुखार्थी प्रेत्य चेह च |परं प्रयत्नमातिष्ठेद्बुद्धिमान् हितसेवने ||६०|| " audio={r56}/>
                <SingleAudioCard sholkno="Shloka 61" sholk="न नक्तं दधि भुञ्जीत न चाप्यघृतशर्करम् | नामुद्गयूषं नाक्षौद्रं नोष्णं नामलकैर्विना ||६१||" audio={r57}/>
                <SingleAudioCard sholkno="Shloka 62" sholk=" ज्वरासृक्पित्तवीसर्पकुष्ठपाण्ड्वामयभ्रमान् |प्राप्नुयात्कामलां चोग्रां विधिं हित्वा दधिप्रियः ||६२|| " audio={r58}/>
                <SingleAudioCard sholkno="Shloka 63" sholk="तत्र श्लोकाः-वेगा वेगसमुत्थाश्च रोगास्तेषां च भेषजम् | येषां वेगा विधार्याश्च यदर्थं यद्धिताहितम् ||६३||" audio={r59}/>
                <SingleAudioCard sholkno="Shloka 64" sholk=" उचिते चाहिते वर्ज्ये सेव्ये चानुचिते क्रमः |यथाप्रकृति चाहारो मलायनगदौषधम् ||६४||" audio={r60}/>
                <SingleAudioCard sholkno="Shloka 65" sholk=" भविष्यतामनुत्पत्तौ रोगाणामौषधं च यत् |वर्ज्याः सेव्याश्च पुरुषा धीमताऽऽत्मसुखार्थिना ||६५||" audio={r61}/>
                <SingleAudioCard sholkno="Shloka 66" sholk=" विधिना दधि सेव्यं च येन यस्मात्तदत्रिजः | नवेगान्धारणेऽध्याये सर्वमेवावदन्मुनिः ||६६|| " audio={r62}/>
                <SingleAudioCard sholkno="Last Shloka" sholk="इत्यग्निवेशकृते तन्त्रे चरकप्रतिसंस्कृते श्लोकस्थानेनवेगान्धारणीयो नाम सप्तमोऽध्यायः ||७||" audio={r63}/>
            </div>
        </div>
    )
}

export default Book1ch7




 