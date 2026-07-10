import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";


export function createCamera(){

    const camera =
    new THREE.PerspectiveCamera(
        45,
        window.innerWidth /
        window.innerHeight,
        0.1,
        100
    );


    // نمای مورد نظر تو
    camera.position.set(5, 5, 5);

camera.up.set(0, 0, 1);

camera.lookAt(0, 0, 0);



    const controls =
    new OrbitControls(
        camera,
        document.body
    );


    controls.enableDamping=true;

    controls.enablePan=false;


    controls.target.set(
        0,
        0,
        0
    );


    controls.update();



    return {
        camera,
        controls
    };

}
