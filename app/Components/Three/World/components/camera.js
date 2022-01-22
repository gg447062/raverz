import { PerspectiveCamera, CameraHelper } from 'three';

function createCamera(aspect) {
  const camera = new PerspectiveCamera(50, aspect, 0.1, 1000);
  const helper = new CameraHelper(camera);

  camera.position.set(0, 0, 7);

  return { camera, helper };
}

export { createCamera };
