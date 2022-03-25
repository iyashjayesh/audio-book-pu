import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/ch16/C16S1,2'
import r2 from '../../../../assests/Audio/book1audio/ch16/C16S3,4'
import r3 from '../../../../assests/Audio/book1audio/ch16/C16S5,6'
import r4 from '../../../../assests/Audio/book1audio/ch16/C16S7,8(1)'
import r5 from '../../../../assests/Audio/book1audio/ch16/C16S8(2)'
import r6 from '../../../../assests/Audio/book1audio/ch16/C16S9,10'
import r7 from '../../../../assests/Audio/book1audio/ch16/C16S11'
import r8 from '../../../../assests/Audio/book1audio/ch16/C16S12'
import r9 from '../../../../assests/Audio/book1audio/ch16/C16S13,14,15,16'
import r10 from '../../../../assests/Audio/book1audio/ch16/C16S17,18,19'
import r11 from '../../../../assests/Audio/book1audio/ch16/C16S20'
import r12 from '../../../../assests/Audio/book1audio/ch16/C16S21'
import r13 from '../../../../assests/Audio/book1audio/ch16/C16S22,23'
import r14 from '../../../../assests/Audio/book1audio/ch16/C16S24'
import r15 from '../../../../assests/Audio/book1audio/ch16/C16S25'
import r16 from '../../../../assests/Audio/book1audio/ch16/C16S26'
import r17 from '../../../../assests/Audio/book1audio/ch16/C16S27'
import r18 from '../../../../assests/Audio/book1audio/ch16/C16S28'
import r19 from '../../../../assests/Audio/book1audio/ch16/C16S29,30'
import r20 from '../../../../assests/Audio/book1audio/ch16/C16S31'
import r21 from '../../../../assests/Audio/book1audio/ch16/C16S32,33'
import r22 from '../../../../assests/Audio/book1audio/ch16/C16S34'
import r23 from '../../../../assests/Audio/book1audio/ch16/C16S35'
import r24 from '../../../../assests/Audio/book1audio/ch16/C16S36'
import r25 from '../../../../assests/Audio/book1audio/ch16/C16S37'
import r26 from '../../../../assests/Audio/book1audio/ch16/C16S38'
import r27 from '../../../../assests/Audio/book1audio/ch16/C16S39,40,41'
import r28 from '../../../../assests/Audio/book1audio/ch16/C16Slast'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/16.png'

const Book1ch16 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="अथातश्चिकित्साप्राभृतीयमध्यायं व्याख्यास्यामः ||१|| इति ह स्माह भगवानात्रेयः ||२|| " audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3,4" sholk="चिकित्साप्राभृतो धीमान् शास्त्रवान् कर्मतत्परः | नरं विरेचयति यं स योगात् सुखमश्नुते ||३|| यं वैद्यमानी त्वबुधो विरेचयति मानवम् | सोऽतियोगादयोगाच्च मानवो दुःखमश्नुते ||४|| " audio={r2}/>
                <SingleAudioCard sholkno="Shloka 5,6" sholk="दौर्बल्यं लाघवं ग्लानिर्व्याधीनामणुता रुचिः | हृद्वर्णशुद्धिः क्षुत्तृष्णा काले वेगप्रवर्तनम् ||५|| बुद्धीन्द्रियमनःशुद्धिर्मारुतस्यानुलोमता | सम्यग्विरिक्तलिङ्गानि कायाग्नेश्चानुवर्तनम् ||६||" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 7,8(1)" sholk=" ष्ठीवनं हृदयाशुद्धिरुत्क्लेशः श्लेष्मपित्तयोः |आध्मानमरुचिश्छर्दिरदौर्बल्यमलाघवम् ||७||जङ्घोरुसदनं तन्द्रा स्तैमित्यं पीनसागमः | लक्षणान्यविरिक्तानां मारुतस्य च निग्रहः ||८||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 8(2)" sholk=" विट्पित्तकफवातानामागतानां यथाक्रमम् | " audio={r5}/>
                <SingleAudioCard sholkno="Shloka 9,10" sholk="परं स्रवति यद्रक्तं मेदोमांसोदकोपमम् ||९|| निःश्लेष्मपित्तमुदकं शोणितं कृष्णमेव वा | तृष्यतो मारुतार्तस्य सोऽतियोगः प्रमुह्यतः ||१०|| " audio={r6}/>
                <SingleAudioCard sholkno="Shloka 11" sholk="वमनेऽतिकृते लिङ्गान्येतान्येव भवन्ति हि |ऊर्ध्वगा वातरोगाश्च वाग्ग्रहश्चाधिको भवेत् ||११||" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 12" sholk=" चिकित्साप्राभृतं तस्मादुपेयाच्छरणं नरः | युञ्ज्याद् य एनमत्यन्तमायुषा च सुखेन च ||१२|| " audio={r8}/>
                <SingleAudioCard sholkno="Shloka 13,14,15,16" sholk="अविपाकोऽरुचिः स्थौल्यं पाण्डुता गौरवं क्लमः |पिडकाकोठकण्डूनां सम्भवोऽरतिरेव च ||१३|| आलस्यश्रमदौर्बल्यं दौर्गन्ध्यमवसादकः | श्लेष्मपित्तसमुत्क्लेशो निद्रानाशोऽतिनिद्रता ||१४|| तन्द्रा क्लैब्यमबुद्धित्वमशस्तस्वप्नदर्शनम् |बलवर्णप्रणाशश्च तृप्यतो बृंहणैरपि ||१५||बहुदोषस्य लिङ्गानि तस्मै संशोधनं हितम् | ऊर्ध्वं चैवानुलोमं च यथादोषं यथाबलम् ||१६||" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 17,18,19" sholk=" एवं विशुद्धकोष्ठस्य कायाग्निरभिवर्धते |व्याधयश्चोपशाम्यन्ति प्रकृतिश्चानुवर्तते ||१७|| इन्द्रियाणि मनोबुद्धिर्वर्णश्चास्य प्रसीदति | बलं पुष्टिरपत्यं च वृषता चास्य जायते ||१८|| जरां कृच्छ्रेण लभते चिरं जीवत्यनामयः | तस्मात् संशोधनं काले युक्तियुक्तं पिबेन्नरः ||१९|| " audio={r10}/>
                <SingleAudioCard sholkno="Shloka 20" sholk="दोषाः कदाचित् कुप्यन्ति जिता लङ्घनपाचनैः | जिताः संशोधनैर्ये तु न तेषां पुनरुद्भवः ||२०||" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 21" sholk=" दोषाणां च द्रुमाणां च मूलेऽनुपहते सति | रोगाणां प्रसवानां च गतानामागतिर्ध्रुवा ||२१|| " audio={r12}/>
                <SingleAudioCard sholkno="Shloka 22,23" sholk="भेषजक्षपिते पथ्यमाहारैरेव बृंहणम् | घृतमांसरसक्षीरहृद्ययूषोपसंहितैः ||२२|| अभ्यङ्गोत्सादनैः स्नानैर्निरूहैः सानुवासनैः | तथा स लभते शर्म युज्यते चायुषा चिरम् ||२३|| " audio={r13}/>
                <SingleAudioCard sholkno="Shloka 24" sholk="अतियोगानुबद्धानां सर्पिःपानं प्रशस्यते | तैलं मधुरकैः सिद्धमथवाऽप्यनुवासनम् ||२४||" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 25" sholk=" यस्य त्वयोगस्तं स्निग्धं पुनः संशोधयेन्नरम् | मात्राकालबलापेक्षी स्मरन् पूर्वमनुक्रमम् ||२५||" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 26" sholk=" स्नेहने स्वेदने शुद्धौ रोगाः संसर्जने च ये |जायन्तेऽमार्गविहिते तेषां सिद्धिषु साधनम् ||२६|| " audio={r16}/>
                <SingleAudioCard sholkno="Shloka 27" sholk="जायन्ते हेतुवैषम्याद्विषमा देहधातवः | हेतुसाम्यात् समास्तेषां स्वभावोपरमः सदा ||२७|| " audio={r17}/>
                <SingleAudioCard sholkno="Shloka 28" sholk="प्रवृत्तिहेतुर्भावानां न निरोधेऽस्ति कारणम् | केचित्तत्रापि मन्यन्ते हेतुं हेतोरवर्तनम् ||२८|| " audio={r18}/>
                <SingleAudioCard sholkno="Shloka 29,30" sholk="एवमुक्तार्थमाचार्यमग्निवेशोऽभ्यभाषत |स्वभावोपरमे कर्म चिकित्साप्राभृतस्य किम् ||२९|| भेषजैर्विषमान् धातून् कान् समीकुरुते भिषक् | का वा चिकित्सा भगवन्! किमर्थं वा प्रयुज्यते ||३०|| " audio={r19}/>
                <SingleAudioCard sholkno="Shloka 31" sholk="तच्छिष्यवचनं श्रुत्वा व्याजहार पुनर्वसुः |श्रूयतामत्र या सोम्य! युक्तिर्दृष्टा महार्षिभिः ||३१||" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 32,33" sholk=" न नाशकारणाभावाद्भावानां नाशकारणम् | ज्ञायते नित्यगस्येव कालस्यात्ययकारणम् ||३२|| शीघ्रगत्वाद्यथा भूतस्तथा भावो विपद्यते ||३३|| निरोधे कारणं तस्य नास्ति नैवान्यथाक्रिया ||३३|| " audio={r21}/>
                <SingleAudioCard sholkno="Shloka 34" sholk="याभिः क्रियाभिर्जायन्ते शरीरे धातवः समाः | सा चिकित्सा विकाराणां कर्म तद्भिषजां स्मृतम् ||३४||" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 35" sholk=" कथं शरीरे धातूनां वैषम्यं न भवेदिति |समानां चानुबन्धः स्यादित्यर्थं क्रियते क्रिया ||३५||" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 36" sholk=" त्यागाद्विषमहेतूनां समानां चोपसेवनात् | विषमा नानुबध्नन्ति जायन्ते धातवः समाः ||३६|| " audio={r24}/>
                <SingleAudioCard sholkno="Shloka 37" sholk="समैस्तु हेतुभिर्यस्माद्धातून् सञ्जनयेत् समान् | चिकित्साप्राभृतस्तस्माद्दाता देहसुखायुषाम् ||३७||" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 38" sholk=" धर्मस्यार्थस्य कामस्य नृलोकस्योभयस्य च | दाता सम्पद्यते वैद्यो दानाद्देहसुखायुषाम् ||३८|| " audio={r26}/>
                <SingleAudioCard sholkno="Shloka 39,40,41" sholk="तत्र श्लोकाः-चिकित्साप्राभृतगुणो दोषो यश्चेतराश्रयः | योगायोगातियोगानां लक्षणं शुद्धिसंश्रयम् ||३९|| बहुदोषस्य लिङ्गानि संशोधनगुणाश्च ये | चिकित्सासूत्रमात्रं च सिद्धिव्यापत्तिसंश्रयम् ||४०|| या च युक्तिश्चिकित्सायां यं चार्थं कुरुते भिषक् |चिकित्साप्राभृतेऽध्याये तत् सर्वमवदन्मुनिः ||४१|| " audio={r27}/>
                <SingleAudioCard sholkno="Shloka last" sholk="इत्यग्निवेशकृते तन्त्रे चरकप्रतिसंस्कृते श्लोकस्थाने चिकित्साप्राभृतीयो नाम षोडशोऽध्यायः ||१६||समाप्तः कल्पनाचतुष्कः ||४||" audio={r28}/>
                
            </div>
        </div>
    )
}

export default Book1ch16




 