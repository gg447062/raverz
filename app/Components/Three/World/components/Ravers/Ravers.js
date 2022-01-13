import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel';

export const loadRavers = async () => {
  const loader = new GLTFLoader();

  const [milesData, sidData, xavierData] = await Promise.all([
    loader.loadAsync('assets/models/RAVERZ_AVATARZ_MILES_DANCE_2.gltf'),
    loader.loadAsync('assets/models/RAVERz_AVATARZ_SID_DANCE.gltf'),
    loader.loadAsync('assets/models/RAVERz_AVATARZ_XAVIER_DANCE.gltf'),
  ]);

  const miles = setupModel(milesData);
  miles.position.set(2.5, -1.5, 0);
  const sid = setupModel(sidData);
  sid.position.set(-2.5, -1.5, 0);
  const xavier = setupModel(xavierData);
  xavier.position.set(0, -1.5, 0);
  return { miles, sid, xavier };
};
