import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = props => {
    return (
      <div className= 'gallery'>
            <div className="gallery_item four columns">
               <Link to="/">
               <caption className= "button" for="Baby Grow 1"> Awesome! </caption>
               <img src="/images/babyg_1.jpg" alt="Clothing Photo" />
               </Link>
            </div>

            <div className="gallery_item four columns">
               <Link to="/">
               <caption className= "button" for="Baby Grow 2"> Cute! </caption>
               <img src="/images/babyg_2.jpg" alt="Clothing Photo" />
               </Link>
            </div>

            <div className="gallery_item four columns">
               <Link to="/">
               <caption className= "button" for="Baby Grow 3"> Perfect! </caption>
               <img src="/images/babyg_3.jpg" alt="Clothing Photo" />
               </Link>
            </div>
      </div>
 )
}

export default Gallery
