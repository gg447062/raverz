import { createCamera } from './components/camera';
import { createLights, createSpotLights } from './components/lights';
import { createScene } from './components/scene';
import { loadRavers, loadRaver } from './components/Ravers/Ravers';
import { createCube, createFloor } from './components/cube';
import { createRenderer } from './systems/renderer';
import Resizer from './systems/Resizer';
import { Loop } from './systems/Loop';
import { SpotLightHelper, CameraHelper } from 'three';

class World {
  constructor(container, aspect) {
    this.camera = createCamera(aspect);
    this.lights = createLights();
    this.spotLights = createSpotLights();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.cubes = createCube();
    this.floor = createFloor();
    container.append(this.renderer.domElement);
    this.helper = new CameraHelper(this.spotLights.two.shadow.camera);

    this.scene.add(
      // this.cubes.one,
      // this.cubes.two,
      // this.cubes.three,
      this.lights.ambient,
      this.spotLights.one,
      this.spotLights.two,
      this.spotLights.three,
      this.floor
      // this.helper
    );
    this.loop = new Loop(this.camera.camera, this.scene, this.renderer);

    this.resizer = new Resizer(container, this.camera.camera, this.renderer);
  }

  async init() {
    const { miles, sid, xavier } = await loadRavers();

    // const xavier = await loadRaver();
    this.loop.updatables.push(sid, miles, xavier);
    this.scene.add(sid, miles, xavier);

    this.spotLights.one.target = sid;
    this.spotLights.two.target = miles;
    this.spotLights.three.target = xavier;
  }

  start() {
    this.loop.start();
  }

  render() {
    this.renderer.render(this.scene, this.camera.camera);
  }
}

export default World;
