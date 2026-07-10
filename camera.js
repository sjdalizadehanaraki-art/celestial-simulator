import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function createCamera(){

    alert("CAMERA 1");

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );

    alert("CAMERA 2");

    camera.position.set(15, 15, 15);

    camera.up.set(0, 0, 1);

    camera.lookAt(0, 0, 0);

    alert("CAMERA 3");

    const controls = new OrbitControls(
        camera,
        document.body
    );

    alert("CAMERA 4");

    controls.enableDamping = true;
    controls.enablePan = false;

    controls.target.set(0, 0, 0);

    controls.update();

    alert("CAMERA 5");

    return {
        camera,
        controls
    };

}
