import { DirectionalLight, HemisphereLight, Color } from 'three';

function createLights() {
  const white = new Color('#FFFFFF');
  const black = new Color('#000000');
  const ambient = new HemisphereLight(white, black, 5);

  const directional = new DirectionalLight(white, 6);
  directional.position.set(0, 0, 5);
  return { ambient, directional };
}

export { createLights };
