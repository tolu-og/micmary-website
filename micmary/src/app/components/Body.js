import React from 'react'
import Image from 'next/image'

function Body() {
  return (
    <div className="bg-[#3F5C40] text-white py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Leap into Learning
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
            Nestled in the heart of the city, Micmary is 
            a vibrant oasis offering exceptional 
            Montessori education, creche facilities and 
            a pre-school program that is unrivalled. 
            Ignite the spark of learning with our 
            innovative and comprehensive approach to 
            education.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Montessori Card */}
          <div className="bg-[#4A694B] rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-3">Montessori</h2>
            <p className="text-lg mb-6">A nurturing environment for holistic development.</p>
            <div className="aspect-video bg-[#5B7B5C] rounded-2xl overflow-hidden">
              {/* Replace with actual image */}
              <div className="w-full h-full flex items-center justify-center">
                <Image 
                  src="/montessori-image.jpg" 
                  alt="Montessori"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Creche Card */}
          <div className="bg-[#4A694B] rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-3">Creche</h2>
            <p className="text-lg mb-6">Homely and safe for infants.</p>
            <div className="aspect-video bg-[#5B7B5C] rounded-2xl overflow-hidden">
              <Image 
                src="/creche-image.jpg" 
                alt="Creche"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Pre-school Card */}
          <div className="bg-[#4A694B] rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-3">Pre-school</h2>
            <p className="text-lg mb-6">Learning made fun and engaging</p>
            <div className="aspect-video bg-[#5B7B5C] rounded-2xl overflow-hidden">
              <Image 
                src="/preschool-image.jpg" 
                alt="Pre-school"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Clubs Card */}
          <div className="bg-[#4A694B] rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-3">Clubs</h2>
            <p className="text-lg mb-6">Empowering children outside the classroom.</p>
            <div className="aspect-video bg-[#5B7B5C] rounded-2xl overflow-hidden">
              <Image 
                src="/clubs-image.jpg" 
                alt="Clubs"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body