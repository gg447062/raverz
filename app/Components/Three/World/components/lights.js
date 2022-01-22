import { DirectionalLight, HemisphereLight, SpotLight, Color } from 'three';

function createLights() {
  const white = new Color('#FFFFFF');
  const black = new Color('#000000');
  const ambient = new HemisphereLight(white, black, 1);
  const directional = new DirectionalLight(white, 6);
  directional.position.set(0, 0, 5);

  return { ambient, directional };
}

function createSpotLights() {
  const one = new SpotLight('pink', 4, 0, 0.2, 0.2);
  one.position.set(-3, -5, -2);
  // one.castShadow = true;

  const two = new SpotLight('pink', 6, 0, 0.2, 0.2);
  two.position.set(0, 5, 2);
  // two.castShadow = true;

  const three = new SpotLight('white', 10, 0, 0.2, 0.2);
  three.position.set(3, 5, 2);
  // three.castShadow = true;

  return { one, two, three };
}

export { createLights, createSpotLights };
