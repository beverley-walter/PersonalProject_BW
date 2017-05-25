import React from 'react'
import { Link } from 'react-router-dom'

import Home from './Home'

const Gallery = props => {
    return (
      <span>
         <div className="container">
            <div className="row">

               <div className="two columns">
                  <img/>
                  <label for="clothingPhoto"> Awesome! </label>
                  <Link></Link>
               </div>

               <div className="two columns">
                  <img/>
                  <label for="clothingPhoto"> Cute! </label>
                  <Link></Link>
               </div>

               <div className="two columns">
                  <img/>
                  <label for="clothingPhoto"> Perfect! </label>
                  <Link></Link>
               </div>

            </div>
         </div>
      </span>
 )
}

export default Gallery
