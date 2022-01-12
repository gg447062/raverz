import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(1, 1, 1);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: '#B45FFF' });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-1, 1, 0);

  return cube;
}

export { createCube };
