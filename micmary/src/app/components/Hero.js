import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.jpg'

function Hero() {
  return (
    <div className="min-h-[60vh] flex items-center bg-[#F5EDE3]">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-[#2F5233] text-5xl md:text-7xl mb-4">
            MICMARY
          </h1>
          <h2 className="text-black text-3xl md:text-6xl">
            Education
          </h2>
        </div>

        {/* Hexagon Logo */}
        <div className="hidden md:block">
          <div className="relative w-32 h-32">
            {/* Hexagon shape with border */}
            <div className="absolute w-full h-full">
              <div className="bg-[#2F5233] w-full h-full rounded-xl transform rotate-45"></div>
              <div className="absolute inset-[3px] bg-[#B45B4D] rounded-xl transform rotate-45"></div>
              <div className="absolute inset-[6px] bg-[#2F5233] rounded-xl transform rotate-45"></div>
              {/* Centered Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-16">
                  <Image 
                    src={logo} 
                    alt="Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero