import { createCelestialPlanes } from "./celestialPlanes.js";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";
import { createCamera } from "./camera.js";
import { createAxes } from "./axes.js";
import { createEarth } from "./earth.js";
import { createEarthEquator } from "./earthEquator.js";
import { createCelestialSphere } from "./celestialSphere.js";

export function createApp(){

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x000000);

    const camera = createCamera();

    const renderer = new THREE.WebGLRenderer({
        antialias:true
    });

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.setPixelRatio(
        window.devicePixelRatio
    );

    document.body.appendChild(
        renderer.domElement
    );

    const controls = new OrbitControls(
        camera,
        renderer.domElement
    );

    controls.enableDamping = true;

    const labelRenderer = new CSS2DRenderer();

    labelRenderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    labelRenderer.domElement.style.position="absolute";
    labelRenderer.domElement.style.top="0";
    labelRenderer.domElement.style.left="0";
    labelRenderer.domElement.style.pointerEvents="none";

    document.body.appendChild(
        labelRenderer.domElement
    );

    scene.add(
        new THREE.AmbientLight(
            0xffffff,
            0.8
        )
    );

    createAxes(scene);
    createEarth(scene);
    createEarthEquator(scene);
    createCelestialSphere(scene);
    createCelestialPlanes(scene);

    function animate(){

        requestAnimationFrame(animate);

        controls.update();

        renderer.render(
            scene,
            camera
        );

        labelRenderer.render(
            scene,
            camera
        );

    }

    animate();

    window.addEventListener("resize",()=>{

        camera.aspect =
        window.innerWidth /
        window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        labelRenderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    });

}
