import React from 'react';
import ParticlesBg from "particles-bg";


function Particles() {
  return (
    <div className="Particles" style={{width:"100%",height:"auto"}}>
      Particle Animation
      <ParticlesBg type="random" bg={true}/>
    </div>
  );
}

export default Particles;
