import React from 'react'
import AudioCard from '../../globalComponents/AudioCard'
import BookSlider from '../../localComponents/BookSlider'

import r1 from './C1S1.aac'

const Book1 = () => {
    return (
        <div>
            <BookSlider/>
            <AudioCard audio={r1}/>   
        </div>
    )
}

export default Book1
