import React, { useEffect, useRef } from 'react';
import World from './World/World';

const ThreeRavers = () => {
  const canvasRef = useRef(null);

  useEffect(async () => {
    const container = canvasRef.current;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const world = new World(container, aspectRatio);
    await world.init();
    world.render();
    world.start();
  }, []);

  return <div id="canvas-container" ref={canvasRef}></div>;
};

export default ThreeRavers;
