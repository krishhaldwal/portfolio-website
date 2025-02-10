import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const FirefliesEffect = () => {
  const particlesInit = useCallback(async (main) => {
    console.log("Particles Init", main);
    await loadFull(main); // Correct way to initialize
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 w-full h-full z-[0]"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 80 },
          color: { value: "#FFD700" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            animation: { enable: true, speed: 0.3, minimumValue: 0.2 },
          },
          size: { value: 4, random: true },
          move: {
            enable: true,
            speed: 1.5,
            random: true,
            straight: false,
            outModes: "out",
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default FirefliesEffect;
