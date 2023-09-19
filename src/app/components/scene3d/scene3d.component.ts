import { AfterViewInit, Component } from '@angular/core';
import { 
  AmbientLight, 
  AxesHelper, 
  Color, 
  HemisphereLight,
  LoadingManager,
  PerspectiveCamera, 
  PointLight, 
  ReinhardToneMapping, 
  Scene, 
  SpotLight, 
  WebGLRenderer 
} from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

@Component({
  selector: 'scene3d',
  templateUrl: './scene3d.component.html',
  styleUrls: ['./scene3d.component.scss']
})
export class Scene3dComponent implements AfterViewInit {

  readonly CONTAINER_ID = 'threejs-scene';

  manager = new LoadingManager();
  DRACO_LOADER = new DRACOLoader( this.manager ).setDecoderPath( `three/examples/jsm/libs/draco/gltf/` );
  KTX2_LOADER = new KTX2Loader( this.manager ).setTranscoderPath( `three/examples/jsm/libs/basis/` );

  container: HTMLElement
	scene: Scene
  controls: OrbitControls
	camera: PerspectiveCamera
	renderer: WebGLRenderer
	world: any
	dice: any = [];

  spotLight: SpotLight;

  ngAfterViewInit() {
    this.init();
  }

  private init() {
    this.initBasicScene();
    this.load();
    this.animate();
  }

  private initBasicScene() {
    // Create a new scene
    this.scene = new Scene();

    // this.scene.add(new AxesHelper(500));

    // Create a camera and position it
    this.camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 500;

    // Create a renderer and set its size
    this.renderer = new WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);

    this.renderer.toneMapping = ReinhardToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.shadowMap.enabled = true;

    // Add the renderer to the DOM
    this.container = document.getElementById(this.CONTAINER_ID);
    this.container.appendChild(this.renderer.domElement);

    const ambientLight = new AmbientLight(0xffa95c, 1);
    this.scene.add(ambientLight);

    const hemiLight = new HemisphereLight(0xffeeb1, 0x080820, 4);
    this.scene.add(hemiLight);

    this.spotLight = new SpotLight(0xffa95c, 4);
    this.spotLight.castShadow = true;
    this.spotLight.shadow.bias = -0.0001;
    this.spotLight.shadow.mapSize.width = 1024 * 4;
    this.spotLight.shadow.mapSize.height = 1024 * 4;

    this.scene.add(this.spotLight);

    this.addRandomCozyLights();

    // ...

    // const light = new PointLight(0xffffff, 2, 1000);
    // light.position.set(0, 0, 10);
    // this.scene.add(light);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  private addRandomCozyLights() {
    const numLights = 4;
    const lightColor = new Color(0xffe6b3);
    const lightIntensity = 0.5;
    const lightDistance = 200;

    for (let i = 0; i < numLights; i++) {
      const light = new PointLight(lightColor, lightIntensity, lightDistance);
      light.position.set(
        Math.random() * 400 - 200, // x position between -200 and 200
        Math.random() * 400 - 200, // y position between -200 and 200
        Math.random() * 400 - 200  // z position between -200 and 200
      );
      this.scene.add(light);
    }
  }

  private load() {
    const loader = new GLTFLoader( this.manager )
    .setCrossOrigin('anonymous')
    .setDRACOLoader( this.DRACO_LOADER )
    .setKTX2Loader( this.KTX2_LOADER.detectSupport( this.renderer ) )
    .setMeshoptDecoder( MeshoptDecoder );

    const scene = this.scene;

    loader.load(
      '/assets/3d/d20/scene.gltf',
      (gltf) => {
        const model = gltf.scene.children[0];

        model.position.set(0, 0, 0);
        model.traverse((o: any) => {
          if (o.isMesh) {
            o.castShadow = true;
            o.receiveShadow = true;

            if (o.material.map) {
              o.material.map.anisotropy = 16;
            }
          }
        });

        scene.add(model);
      }
    );
  }

  // private initScene() {
  
  //   ////////////
  //   // CUSTOM //
  //   ////////////

  //   // world = new CANNON.World();
  
  //   // world.gravity.set(0, -9.82 * 20, 0);
  //   // world.broadphase = new CANNON.NaiveBroadphase();
  //   // world.solver.iterations = 16;
  
  //   // DiceManager.setWorld(world);
  
  //   // //Floor
  //   // let floorBody = new CANNON.Body({
  //   //   mass: 0,
  //   //   shape: new CANNON.Plane(),
  //   //   material: DiceManager.floorBodyMaterial
  //   // });
  //   // floorBody.quaternion.setFromAxisAngle(
  //   //   new CANNON.Vec3(1, 0, 0),
  //   //   -Math.PI / 2
  //   // );
  //   // world.add(floorBody);
  
  //   // //Walls
  
  //   // var colors = ["#ff0000", "#ffff00", "#00ff00", "#0000ff", "#ff00ff"];
  //   // for (var i = 0; i < 5; i++) {
  //   //   var die = new DiceD6({ size: 1.5, backColor: colors[i] });
  //   //   scene.add(die.getObject());
  //   //   dice.push(die);
  //   // }

  //   // setInterval(randomDiceThrow, 3000);
  //   // randomDiceThrow();
  // }

  private randomDiceThrow() {
    // var diceValues = [];

    // for (var i = 0; i < dice.length; i++) {
    //   let yRand = Math.random() * 20;
    //   dice[i].getObject().position.x = -15 - (i % 3) * 1.5;
    //   dice[i].getObject().position.y = 2 + Math.floor(i / 3) * 1.5;
    //   dice[i].getObject().position.z = -15 + (i % 3) * 1.5;
    //   dice[i].getObject().quaternion.x =
    //     ((Math.random() * 90 - 45) * Math.PI) / 180;
    //   dice[i].getObject().quaternion.z =
    //     ((Math.random() * 90 - 45) * Math.PI) / 180;
    //   dice[i].updateBodyFromMesh();
    //   let rand = Math.random() * 5;
    //   dice[i]
    //     .getObject()
    //     .body.velocity.set(25 + rand, 40 + yRand, 15 + rand);
    //   dice[i]
    //     .getObject()
    //     .body.angularVelocity.set(
    //       20 * Math.random() - 10,
    //       20 * Math.random() - 10,
    //       20 * Math.random() - 10
    //     );

    //   diceValues.push({ dice: dice[i], value: i + 1 });
    // }

    // DiceManager.prepareValues(diceValues);
    console.error('randomDiceThrow() not implemented');
  }


  private animate() {
    this.updatePhysics();
    this.render();
  
    requestAnimationFrame(this.animate.bind(this));
  }
  
  private updatePhysics() {
    // world.step(1.0 / 60.0);
  
    // for (var i in dice) {
    //   dice[i].updateMeshFromBody();
    // }
  }
  
  private render() {
    this.renderer.render(this.scene, this.camera);

    this.spotLight.position.set(
      this.camera.position.x + 10,
      this.camera.position.y + 10,
      this.camera.position.z + 10
    );
  }

}
