import { createEarthEquator } from "./earthEquator.js";

import { createCelestialSphere } from "./celestialSphere.js";

import * as THREE from "three";

import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

import { createCamera } from "./camera.js";
import { createAxes } from "./axes.js";
import { createEarth } from "./earth.js";



export function createApp(){

    const scene = new THREE.Scene();

    scene.background =
    new THREE.Color(0x000000);



    // دوربین

    const {camera,controls} =
    createCamera();




    // WebGL Renderer

    const renderer =
    new THREE.WebGLRenderer({

        antialias:true

    });


    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.setPixelRatio(
        window.devicePixelRatio
    );

    renderer.outputColorSpace =
    THREE.SRGBColorSpace;

    document.body.appendChild(
        renderer.domElement
    );



    // CSS2D Renderer

    const labelRenderer =
    new CSS2DRenderer();

    labelRenderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    labelRenderer.domElement.style.position =
    "absolute";

    labelRenderer.domElement.style.top =
    "0px";

    labelRenderer.domElement.style.left =
    "0px";

    labelRenderer.domElement.style.pointerEvents =
    "none";

    document.body.appendChild(
        labelRenderer.domElement
    );



    // نور

    scene.add(

        new THREE.AmbientLight(
            0xffffff,
            0.8
        )

    );



    // اجسام

    createAxes(scene);

    createEarth(scene);

    createEarthEquator(scene);

    createCelestialSphere(scene);




    // انیمیشن

    function animate(){

        requestAnimationFrame(
            animate
        );


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




    // Resize

    window.addEventListener(

        "resize",

        ()=>{

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

        }

    );

}
