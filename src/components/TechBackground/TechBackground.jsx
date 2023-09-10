import React, { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import particlesConfig from './particles-config'


import "./TechBackground.css"
const TechBackground = () => {

  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  }, [])

  return (
    <div className='particlesDiv'>
    <Particles
    //id="tsparticles"
    options={particlesConfig}
    init={particlesInit}
    />
    </div>
  )
}

export default TechBackground