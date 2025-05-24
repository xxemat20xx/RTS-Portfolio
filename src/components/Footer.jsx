import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Footer = () => {
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);
  const [copyrightRef, isCopyrightVisible] = useScrollAnimation(0.2);
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div ref={contentRef} className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 ease-out
                      ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Contact Info */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-bold mb-4'>Contact</h3>
            <div className='space-y-2'>
              <a href='mailto:your.email@example.com' 
                className='flex items-center justify-center md:justify-start gap-2 hover:text-violet-400 transition-colors'>
                <FaEnvelope />
                <span>your.email@example.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className='text-center'>
            <h3 className='text-xl font-bold mb-4'>Connect</h3>
            <div className='flex justify-center gap-6'>
              <a href='https://github.com/yourusername' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-2xl hover:text-violet-400 transition-colors'>
                <FaGithub />
              </a>
              <a href='https://linkedin.com/in/yourusername' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-2xl hover:text-violet-400 transition-colors'>
                <FaLinkedin />
              </a>
              <a href='https://www.theodinproject.com/' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-2xl hover:text-violet-400 transition-colors'>
                <FaCode />
              </a>
            </div>
          </div>

          {/* Credits */}
          <div className='text-center md:text-right'>
            <h3 className='text-xl font-bold mb-4'>Credits</h3>
            <div className='space-y-2'>
              <p>Built with React & Tailwind</p>
              <p>Inspired by The Odin Project</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div ref={copyrightRef} className={`text-center mt-8 pt-8 border-t border-gray-800 transform transition-all duration-1000 ease-out delay-300
                      ${isCopyrightVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer