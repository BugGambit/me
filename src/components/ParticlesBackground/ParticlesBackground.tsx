import Particles from 'react-tsparticles';

import styled, { keyframes } from 'styled-components';

function ParticlesBackground(): JSX.Element {
  return (
    <GradientBackground>
      <Particles
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: window,
            events: {
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
            },
          },
          particles: {
            color: {
              value: '#264653',
            },
            links: {
              color: '#264653',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </GradientBackground>
  );
}

const Gradient = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`;

const GradientBackground = styled.div`
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${Gradient} 15s ease infinite;

  #tsparticles {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
  }
`;

export default ParticlesBackground;
