import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Sutrasthana1.png'
import '../../App.css';

const Book1 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="1. दीर्घञ्जीवितीयोऽध्यायः" path1="/sutrasthana/chapter1" text2="2. अपामार्गतण्डुलीयोऽध्यायः " path2="/sutrasthana/chapter2" text3="3. आरग्वधीयोऽध्यायः" path3="/sutrasthana/chapter3"/>
            <ChaptercardThree text1="4. षड्विरेचनशताश्रितीयोऽध्यायः" path1="/sutrasthana/chapter4" text2="5. मात्राशितीयोऽध्यायः " path2="/sutrasthana/chapter5" text3="6. तस्याशितीयोऽध्यायः" path3="/sutrasthana/chapter6"/>
            <ChaptercardThree text1="7. नवेगान्धारणीयोऽध्यायः" path1="/sutrasthana/chapter7" text2="8. इन्द्रियोपक्रमणीयोऽध्यायः" path2="/sutrasthana/chapter8" text3="9. खुड्डाकचतुष्पादोऽध्यायः" path3="/sutrasthana/chapter9"/>
            <ChaptercardThree text1="10. महाचतुष्पादोऽध्यायः" path1="/sutrasthana/chapter10" text2="11. तिस्रैषणीयोऽध्यायः" path2="/sutrasthana/chapter11" text3="12. वातकलाकलीयोऽध्यायः " path3="/sutrasthana/chapter12"/>
            <ChaptercardThree text1="13. स्नेहाध्यायः" path1="/sutrasthana/chapter13" text2="14. स्वेदाध्यायः" path2="/sutrasthana/chapter14" text3="15. उपकल्पनीयोऽध्यायः" path3="/sutrasthana/chapter15"/>
            <ChaptercardThree text1="16. चिकित्साप्राभृतीयोऽध्यायः" path1="/sutrasthana/chapter16" text2="17. कियन्तःशिरसीयोऽध्यायः" path2="/sutrasthana/chapter17" text3="18. त्रिशोथीयोऽध्यायः" path3="/sutrasthana/chapter18"/>
            <ChaptercardThree text1="19. अष्टोदरीयोऽध्यायः" path1="/sutrasthana/chapter19" text2="20. महारोगाध्यायः" path2="/sutrasthana/chapter20" text3="21. अष्टौनिन्दितीयोऽध्यायः" path3="/sutrasthana/chapter21"/>
            <ChaptercardThree text1="22. लङ्घनबृंहणीयोऽध्यायः" path1="/sutrasthana/chapter22" text2="23. सन्तर्पणीयोऽध्यायः" path2="/sutrasthana/chapter23" text3="24. विधिशोणितीयोऽध्यायः" path3="/sutrasthana/chapter24"/>
            <ChaptercardThree text1="25. यज्जःपुरुषीयोऽध्यायः" path1="/sutrasthana/chapter25" text2="26. आत्रेयभद्रकाप्यीयोऽध्यायः" path2="/sutrasthana/chapter26" text3="27. अन्नपानविध्यध्यायः" path3="/sutrasthana/chapter27"/>
            <ChaptercardThree text1="28. विविधाशितपीतीयोऽध्यायः" path1="/sutrasthana/chapter28" text2="29. दशप्राणायतनीयोऽध्यायः" path2="/sutrasthana/chapter29" text3="30. अर्थेदशमहामूलीयोऽध्यायः" path3="/sutrasthana/chapter30"/>
        </div>
    )
    
}

export default Book1
