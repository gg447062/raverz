import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(50, 1, 0.1, 20);

  camera.position.set(0, 0, 7);

  return camera;
}

export { createCamera };
