import React from 'react'
import { Link } from 'react-router-dom'

import Gallery from './Gallery'

const Gallery = props => {
    return (
      <span>
         <div className="container">
            <div className="row">

               <div className="two columns">
                  <img>
                  <label for="clothingPhoto"> Awesome! </label>
                  <tag>
               </div>

               <div className="two columns">
                  <img>
                  <label for="clothingPhoto"> Cute! </label>
                  <tag>
               </div>

               <div className="two columns">
                  <img>
                  <label for="clothingPhoto"> Perfect! </label>
                  <tag>
               </div>

            </div>
         </div>
      </span>
 )
}

export default Gallery
