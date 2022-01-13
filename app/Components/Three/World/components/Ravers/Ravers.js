import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { setupModel } from './setupModel';

export const loadRavers = async () => {
  const loader = new GLTFLoader();
  const draco = new DRACOLoader();
  draco.setDecoderPath('decoders/');
  draco.preload();
  loader.setDRACOLoader(draco);

  const [milesData, sidData, xavierData] = await Promise.all([
    loader.loadAsync('assets/models/milesDraco.glb'),
    loader.loadAsync('assets/models/sidDraco.glb'),
    loader.loadAsync('assets/models/xavierDraco2.glb'),
  ]);

  const miles = setupModel(milesData);
  miles.position.set(2.5, -1.5, 2);
  const sid = setupModel(sidData);
  sid.position.set(-3, -1.5, 2);
  const xavier = setupModel(xavierData);
  xavier.position.set(0, -1.5, 2);

  return { miles, sid, xavier };
};
