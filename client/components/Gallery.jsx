import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = props => {
    return (
      <div className= 'gallery'>
            <div className="gallery_item four columns">
               <Link to="/">
               <span className= "button" for="Baby Grow 1"> Awesome!<br/> For Age: 3-6 months </span>
               <img src="images/babyg_1.jpg" alt="Clothing Photo" />
               </Link>
            </div>

            <div className="gallery_item four columns">
               <Link to="/">
               <span className= "button" for="Baby Grow 2"> Cute As!<br/> For Age: 3-6 months </span>
               <img src="images/babyg_2.jpg" alt="Clothing Photo" />
               </Link>
            </div>

            <div className="gallery_item four columns">
               <Link to="/">
               <span className= "button" for="Baby Grow 3"> Perfect!<br/> For Age: 0-3 months </span>
               <img src="images/babyg_3.jpg" alt="Clothing Photo" />
               </Link>
            </div>
      </div>
 )
}

export default Gallery
