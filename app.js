import * as THREE from "three";

import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

import { createCamera } from "./camera.js";
import { createAxes } from "./axes.js";
import { createEarth } from "./earth.js";
import { createEarthEquator } from "./earthEquator.js";
import { createCelestialSphere } from "./celestialSphere.js";

export function createApp() {

    alert("APP START");

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x000000);

    // دوربین
    const { camera, controls } = createCamera();

    alert("CAMERA OK");

    // ---------- Renderer ----------

    alert("BEFORE RENDERER");

    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    alert("AFTER RENDERER");

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    alert("AFTER SETSIZE");

    renderer.setPixelRatio(
        window.devicePixelRatio
    );

    renderer.outputColorSpace =
        THREE.SRGBColorSpace;

    document.body.appendChild(
        renderer.domElement
    );

    alert("AFTER APPEND");

    // ---------- Label Renderer ----------

    const labelRenderer = new CSS2DRenderer();

    labelRenderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    labelRenderer.domElement.style.left = "0";
    labelRenderer.domElement.style.pointerEvents = "none";

    document.body.appendChild(
        labelRenderer.domElement
    );

    alert("LABEL OK");

    // ---------- نور ----------

    scene.add(
        new THREE.AmbientLight(
            0xffffff,
            0.8
        )
    );

    alert("LIGHT OK");

    // ---------- اجسام ----------

    createAxes(scene);
    alert("AXES OK");

    createEarth(scene);
    alert("EARTH OK");

    createEarthEquator(scene);
    alert("EQUATOR OK");

    createCelestialSphere(scene);
    alert("CELESTIAL OK");

    // ---------- Animation ----------

    function animate() {

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

    // ---------- Resize ----------

    window.addEventListener("resize", () => {

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
