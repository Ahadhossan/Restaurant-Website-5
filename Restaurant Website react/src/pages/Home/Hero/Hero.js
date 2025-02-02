import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> to restaurant
            </h1>

            <p className='text-white'>The best gourmet restaurant available in Mirpur</p>

            <p className='text-white'>
                Book online or call <span className='special-word'>+8801234567890</span>
            </p>
        </div>
    </div>
  )
}

export default Hero