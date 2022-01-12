// import { loadRavers } from './components/Ravers';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createScene } from './components/scene';
import { createCube } from './components/cube';
import { createRenderer } from './systems/renderer';
import Resizer from './systems/Resizer';

class World {
  constructor(container) {
    this.camera = createCamera();
    this.lights = createLights();
    this.scene = createScene();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);
    const cube = createCube();
    this.scene.add(cube, this.lights);
    console.log(this.lights);

    this.resizer = new Resizer(container, this.camera, this.renderer);
  }

  async init() {
    await loadRavers();
    console.log('inititialized');
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default World;
