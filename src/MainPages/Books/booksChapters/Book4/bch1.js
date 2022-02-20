import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../C1S1.aac'
import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/shareerasthana/1.png'

const Book4ch1 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Sholk 1" sholk="अथातः कतिधापुरुषीयं शारीरं व्याख्यास्यामः||१|| " audio="https://drive.google.com/file/d/1FkCt-sz1OXqU9cp5x0KB3tl-H_gBuhFi/preview"/>
                <SingleAudioCard sholkno="Sholk 2" sholk="इति ह स्माह भगवानात्रेयः ||२||" audio={r1} />
                <SingleAudioCard sholkno="Sholk 3" sholk="दीर्घं जीवितमन्विच्छन्भरद्वाज उपागमत् |इन्द्रमुग्रतपा बुद्ध्वा शरण्यममरेश्वरम् ||३" audio={r1}/>
                <SingleAudioCard sholkno="Sholk 4" sholk="ब्रह्मणा हि यथाप्रोक्तमायुर्वेदं प्रजापतिः |जग्राह निखिलेनादावश्विनौ तु पुनस्ततः ||४||" audio={r1}/>
                <SingleAudioCard sholkno="Sholk 5" sholk="अश्विभ्यां भगवाञ्छक्रः प्रतिपेदे ह केवलम् |ऋषिप्रोक्तो भरद्वाजस्तस्माच्छक्रमुपागमत् ||५||" audio={r1} audio={r1}/>
                <SingleAudioCard sholkno="Sholk 6" sholk="विघ्नभूता यदा रोगाः प्रादुर्भूताः शरीरिणाम् |तपोपवासाध्ययनब्रह्मचर्यव्रतायुषाम् ||६||" audio={r1}/>
            </div>
        </div>
    )
}

export default Book4ch1
