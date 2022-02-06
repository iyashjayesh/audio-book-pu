import React from 'react'
import AudioCard from '../../../../globalComponents/AudioCard'
// import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../C1S1.aac'
import Modal from '../../../../pop-up/Modal'
import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'

import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/1.png'


const Book1 = () => {
    return (
        <div>
            <BookSlider img={sliderImg}/>
            {/* <ChaptercardThree img1={book1} path1="/sutrasthana/chapter1" img2={book2} path2="/" img3={book3} path3="/"/> */}
            {/* <ChaptercardThree text1="ch1" path1="/sutrasthana/chapter1" text2="ch1" path2="/" text3="ch1" path3="/"/> */}
            <div className="audio-gallery center">
                <SingleAudioCard sholkno="Sholk 1" sholk="अथातो दीर्घञ्जीवितीयमध्यायं व्याख्यास्यामः ||१||" audio={r1}/>
                <SingleAudioCard sholkno="Sholk 2" sholk="इति ह स्माह भगवानात्रेयः ||२||" audio={r1} />
                <SingleAudioCard sholkno="Sholk 3" sholk="दीर्घं जीवितमन्विच्छन्भरद्वाज उपागमत् |इन्द्रमुग्रतपा बुद्ध्वा शरण्यममरेश्वरम् ||३" audio={r1}/>
                <SingleAudioCard sholkno="Sholk 4" sholk="ब्रह्मणा हि यथाप्रोक्तमायुर्वेदं प्रजापतिः |जग्राह निखिलेनादावश्विनौ तु पुनस्ततः ||४||" audio={r1}/>
                <SingleAudioCard sholkno1="Sholk 5" sholk1="अश्विभ्यां भगवाञ्छक्रः प्रतिपेदे ह केवलम् |ऋषिप्रोक्तो भरद्वाजस्तस्माच्छक्रमुपागमत् ||५||" audio1={r1} audio={r1}/>
                <SingleAudioCard sholkno="Sholk 6" sholk="विघ्नभूता यदा रोगाः प्रादुर्भूताः शरीरिणाम् |तपोपवासाध्ययनब्रह्मचर्यव्रतायुषाम् ||६||" audio={r1}/>
                
                {/* <AudioCard 
                    sholkno="Sholk 1" sholk="अथातो दीर्घञ्जीवितीयमध्यायं व्याख्यास्यामः ||१||" audio={r1} 
                    sholkno1="Sholk 2" sholk1="इति ह स्माह भगवानात्रेयः ||२||" audio1={r1} 
                    sholkno2="Sholk 3" sholk2="दीर्घं जीवितमन्विच्छन्भरद्वाज उपागमत् |इन्द्रमुग्रतपा बुद्ध्वा शरण्यममरेश्वरम् ||३" audio2={r1}
                />
                <AudioCard 
                    sholkno="Sholk 4" sholk="ब्रह्मणा हि यथाप्रोक्तमायुर्वेदं प्रजापतिः |जग्राह निखिलेनादावश्विनौ तु पुनस्ततः ||४||" audio={r1} 
                    sholkno1="Sholk 5" sholk1="अश्विभ्यां भगवाञ्छक्रः प्रतिपेदे ह केवलम् |ऋषिप्रोक्तो भरद्वाजस्तस्माच्छक्रमुपागमत् ||५||" audio1={r1} 
                    sholkno2="Sholk 6" sholk2="विघ्नभूता यदा रोगाः प्रादुर्भूताः शरीरिणाम् |तपोपवासाध्ययनब्रह्मचर्यव्रतायुषाम् ||६||" audio2={r1}
                />
                <AudioCard 
                    sholkno="Sholk 4" sholk="ब्रह्मणा हि यथाप्रोक्तमायुर्वेदं प्रजापतिः |जग्राह निखिलेनादावश्विनौ तु पुनस्ततः ||४||" audio={r1} 
                    sholkno1="Sholk 5" sholk1="अश्विभ्यां भगवाञ्छक्रः प्रतिपेदे ह केवलम् |ऋषिप्रोक्तो भरद्वाजस्तस्माच्छक्रमुपागमत् ||५||" audio1={r1} 
                    sholkno2="Sholk 6" sholk2="विघ्नभूता यदा रोगाः प्रादुर्भूताः शरीरिणाम् |तपोपवासाध्ययनब्रह्मचर्यव्रतायुषाम् ||६||" audio2={r1}
                />   */}
            </div>
        </div>
    )
}

export default Book1
