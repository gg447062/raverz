import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createScene } from './components/scene';
import { loadRavers } from './components/Ravers/Ravers';
import { createRenderer } from './systems/renderer';
import Resizer from './systems/Resizer';
import { Loop } from './systems/Loop';

class World {
  constructor(container) {
    this.camera = createCamera();
    this.lights = createLights();
    this.scene = createScene();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);
    this.scene.add(this.lights.directional, this.lights.ambient);
    this.loop = new Loop(this.camera, this.scene, this.renderer);

    this.resizer = new Resizer(container, this.camera, this.renderer);
  }

  async init() {
    const { miles, sid, xavier } = await loadRavers();

    this.loop.updatables.push(miles, sid, xavier);
    this.scene.add(miles, sid, xavier);
  }

  start() {
    this.loop.start();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default World;
