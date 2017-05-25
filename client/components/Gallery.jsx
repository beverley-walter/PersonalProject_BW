import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = props => {
    return (
      <span>
            <div className="four columns">
               <Link to="/">
               <img src="/images/babyg_1.jpg" alt="Clothing Photo" />
               <caption for="Baby Grow 1"> Awesome! </caption>
               </Link>
            </div>

            <div className="four columns">
               <Link to="/">
               <img src="/images/babyg_2.jpg" alt="Clothing Photo" />
               <caption for="Baby Grow 2"> Cute! </caption>
               </Link>
            </div>

            <div className="four columns">
               <Link to="/">
               <img src="/images/babyg_3.jpg" alt="Clothing Photo" />
               <caption for="Baby Grow 3"> Perfect! </caption>
               </Link>
            </div>
      </span>
 )
}

export default Gallery
