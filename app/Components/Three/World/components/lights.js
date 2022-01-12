import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  // const ambientLight = new HemisphereLight('white', 'darkslategrey', 5);

  const mainLight = new DirectionalLight('purple', 4);
  mainLight.position.set(10, 10, 10);

  // return { ambientLight, mainLight };
  return mainLight;
}

export { createLights };
