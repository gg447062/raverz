import {
  BoxBufferGeometry,
  PlaneBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  ShadowMaterial,
} from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(1, 1, 1);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: '#B45FFF' });

  // create a Mesh containing the geometry and material
  const one = new Mesh(geometry, material);
  const two = new Mesh(geometry, material);
  const three = new Mesh(geometry, material);

  one.rotation.set(-1, 1, 0);
  one.position.set(-3, 0, 0);
  two.rotation.set(-1, 1, 0);
  two.position.set(-0, 0, 0);
  three.rotation.set(-1, 1, 0);
  three.position.set(3, 0, 0);

  return { one, two, three };
}

function createFloor() {
  const geometry = new PlaneBufferGeometry(2000, 2000);
  const material = new ShadowMaterial({ color: '#000000', opacity: 0.2 });

  const floor = new Mesh(geometry, material);
  floor.position.set(0, -1.5, 0);
  floor.rotation.x = -Math.PI * 0.5;
  // floor.receiveShadow = true;

  return floor;
}

export { createCube, createFloor };
