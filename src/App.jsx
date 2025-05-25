  import React from 'react'

  import { data } from './data'
  import Hero from './components/Hero'
  import Projects from './components/Projects'
  import Footer from './components/Footer'
  const App = () => {
 
    
    return (
      <main className='bg-gray-900 text-white 
      py-12 px-12 flex flex-col items-center justify-center'>
        <Hero />
        <Projects />
        <Footer />
      </main>
    )
  }

  export default App