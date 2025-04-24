import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // Ensure that particles are loaded correctly
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          value_area: 800, // Adjust to fit screen size
        },
      },
      shape: {
        type: 'circle', // Particles shape
      },
      size: {
        value: 3, // Particle size
        random: true,
      },
      opacity: {
        value: 0.5, // Opacity of particles
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'random', // Random direction for movement
        out_mode: 'out',
      },
    },
  };

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;
