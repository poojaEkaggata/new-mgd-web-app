import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.SmilegallerySlice} SmilegallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SmilegallerySlice>} SmilegalleryProps
 * @param { SmilegalleryProps }
 */
const Smilegallery = ({ slice }) => (
 <div className='smilebackgroundcolor'>
  <br/>
 <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 className="H1">The Smile Gallery</h2>
    </div>
    <br />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h3 className="h2">Sit Back, Relax, Leave it to the Experts</h3>
    </div>
    <br />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
    </div>
 </div>
)

export default Smilegallery;