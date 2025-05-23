import React from 'react'
import Hero from './components/Hero'
import Project from './components/Project'
import Footer from './components/Footer'
import { data } from './data'
import './styles/typewriter.css'

const App = () => {
  console.log(data[0].projectData[0]);
  
  return (
    <div>
      <Hero data={data} />
      <Project data={data} />
      <Footer />
    </div>
  )
}

export default App