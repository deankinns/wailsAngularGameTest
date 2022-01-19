import {Injectable} from '@angular/core';
import {Color, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {Project} from 'enable3d/dist/project'

@Injectable({
  providedIn: 'root'
})

// class SceneTest extends Scene3D{
//
//   init(data?: any) {
//     super.init(data);
//
//     this.warpSpeed();
//
//     // this.haveSomeFun(10);
//   }
// }

export class EngineService {

  constructor() {
  }

  public createScene(element: HTMLCanvasElement): void {

    const scene = new Scene()
    scene.background = new Color(0xf0f0f0)

    // camera
    const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(10, 10, 20)

    // renderer
    const renderer = new WebGLRenderer({canvas: element});
    renderer.setSize(window.innerWidth, window.innerHeight)

    new Project({scenes:[], renderer})
    // debugger

    // new Factories(scene);
    //
    // let test : Factories;
    //
    // // test = new Factories('headless');
    // //
    // // import('@enable3d/three-graphics/jsm/').then(e => {
    // // //   debugger
    // // //   // new e.Misc(scene, renderer)
    // // })

  }

}
