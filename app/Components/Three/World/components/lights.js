import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const ambient = new HemisphereLight('white', 'darkslategrey', 5);

  const directional = new DirectionalLight('white', 5);
  directional.position.set(0, -5, 5);
  return { ambient, directional };
}

export { createLights };
