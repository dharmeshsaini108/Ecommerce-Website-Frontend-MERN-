import React from 'react'
import './DescriptionBox.css'

//we had mounted this page in 'Product.jsx'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="description-navigator">
          <div className="description-nav-box">Description</div>
          <div className="description-nav-box fade">Reviews (122)</div>
       </div>
       <div className="descriptionbox-description">
           <p>Elevate your style with our Men's Green Solid Zippered Slim Fit Bomber Jacket. The vibrant green color, full-zip design, and slim fit silhouette make it a contemporary wardrobe essential. Crafted for both style and comfort, the jacket features edgy zipper details and ribbed cuffs/hem for a modern look. Pair it with jeans for a casual vibe or chinos for a more polished appearance. Make a lasting impression with this versatile and on-trend bomber jacket.</p>
           <p>Crafted from high-quality materials, this bomber jacket not only delivers in style but also ensures durability and comfort. The full-zip feature allows for easy wear, adapting seamlessly to changing weather conditions. The slim fit silhouette provides a modern and tailored aesthetic, enhancing your overall look.

           Designed for versatility, pair this jacket with your favorite jeans for a laid-back vibe, or dress it up with chinos for a more refined appearance. The bold green hue ensures you make a statement wherever you go, while the zipper details add a touch of urban sophistication..</p>
       </div>
    </div>
  )
}

export default DescriptionBox