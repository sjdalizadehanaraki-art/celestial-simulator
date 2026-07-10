import * as THREE from "three";

import { createCamera } from "./camera.js";
import { createAxes } from "./axes.js";
import { createEarth } from "./earth.js";


export function createApp(){

    const scene = new THREE.Scene();

    scene.background =
    new THREE.Color(0x000000);



    const {camera, controls} =
    createCamera();



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



    // نور
    scene.add(
        new THREE.AmbientLight(
            0xffffff,
            0.8
        )
    );


    createAxes(scene);

    createEarth(scene);



    function animate(){

        requestAnimationFrame(
            animate
        );

        controls.update();


        renderer.render(
            scene,
            camera
        );
    }


    animate();



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

        }
    );

}
