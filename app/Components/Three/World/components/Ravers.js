import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const loadRavers = async () => {
  const loader = new GLTFLoader();
  const milesData = await loader.loadAsync(
    'public/assets/models/RAVERZ_AVATARZ_MILES_DANCE_2.gltf'
  );
  console.log(milesData);
};
