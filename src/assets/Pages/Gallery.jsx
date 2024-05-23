import React from 'react'
import Main13 from '../Components/Main13/Main13'
import Gallery2 from '../Components/Gallery2/Gallery2'
import s1 from "../Components/Media/s1.webp"
import s2 from "../Components/Media/s2.webp"
import s3 from "../Components/Media/s3.webp"
import s4 from "../Components/Media/s4.webp"
import s5 from "../Components/Media/s5.webp"
import s6 from "../Components/Media/s6.webp"
import s9 from "../Components/Media/s9.webp"
import d4 from "../Components/Media/d4.webp"
import background1 from "../Components/Media/background2.webp"



const Gallery = () => {
  return (
    <div>
      <Main13/>
      <hr style={{display:"inline-block", height:"70px"}}/>
      <Gallery2 s1={s1} s2={s2} s3={s3} s4={s4} s5={s5} s6={s6}/>
      <hr style={{display:"inline-block"}}/>
      <Gallery2 s1={s5} s2={s4} s3={s9} s4={d4} s5={s1} s6={background1} />
      <hr style={{display:"inline-block", height:"70px"}}/>
    </div>
  )
}

export default Gallery
