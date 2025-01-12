import React from 'react'

function Join() {
  return (
    <div className="bg-[#4a5a3c] text-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-serif mb-8">Join Us</h1>
        
        <p className="text-lg leading-relaxed mb-12">
          Been hunting for a school that will nurture your child(ren) curiosity and propel them towards a brighter future?
          Your search ends here! Become a part of Micmary and watch as we mold your child into a confident and
          compassionate leader of tomorrow. Dont dawdle, spots fill up faster than a leopard on a caffeine rush!
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            Admissions
          </button>
          <button className="bg-[#a3b18a] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Join