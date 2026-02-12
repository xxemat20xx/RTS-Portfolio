import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white my-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="space-y-2">
              <a href="https://github.com/xxemat20xx" 
                 className="flex items-center gap-2 hover:text-violet-500 transition-colors"
                 target="_blank" 
                 rel="noopener noreferrer">
                <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-6 h-6" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/raymart-t-santiago-024aa41b2/" 
                 className="flex items-center gap-2 hover:text-violet-500 transition-colors"
                 target="_blank" 
                 rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                     alt="LinkedIn" 
                     className="w-6 h-6" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col" id='contact'>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400">Phone: +63 912 345 6789</p>
            <p className="text-gray-400">Email: emat5252@gmail.com</p>
          </div>

          {/* Special Thanks */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Special Thanks</h3>
            <p className="text-gray-400 mb-2">Special thanks to The Odin Project for providing an excellent curriculum for web development.</p>
            <a href="https://www.theodinproject.com" 
               className="text-violet-500 hover:text-violet-400 transition-colors"
               target="_blank" 
               rel="noopener noreferrer">
              Visit The Odin Project →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Raymart S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
