import React from 'react'

function ContactUs() {
  return (
    <div className="bg-[#4a5a3c] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <svg 
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              <h2 className="text-2xl font-semibold">Email</h2>
            </div>
            <a href="mailto:info@micmaryschool.com" 
               className="text-lg hover:text-white/80 transition-colors">
              info@micmaryschool.com
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <svg 
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
              <h2 className="text-2xl font-semibold">Location</h2>
            </div>
            <address className="text-lg not-italic">
              123 Learning Lane,<br />
              Education City, EC 12345
            </address>
          </div>

          {/* Phone Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <svg 
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              <h2 className="text-2xl font-semibold">Phone</h2>
            </div>
            <a href="tel:+12345678901" 
               className="text-lg hover:text-white/80 transition-colors">
              +1 (234) 567-8901
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs