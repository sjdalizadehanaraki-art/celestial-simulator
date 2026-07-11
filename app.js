import { createObserver } from "./observer.js";
import { createTimeDisplay } from "./timeDisplay.js";
import { createTimeController } from "./timeController.js";
import { createTimeControls } from "./timeControls.js";

import { createSun } from "./sun.js";
import { createSunTrail } from "./sunTrail.js";

import * as THREE from "three";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

import { createCamera } from "./camera.js";

import { createAxes } from "./axes.js";
import { createEarth } from "./earth.js";
import { createEarthEquator } from "./earthEquator.js";
import { createCelestialSphere } from "./celestialSphere.js";
import { createCelestialPlanes } from "./celestialPlanes.js";
import { createSeasonPoints } from "./seasonPoints.js";



export function createApp(){



    const scene =
    new THREE.Scene();



    scene.background =
    new THREE.Color(0x000000);






    const time =
    createTimeController();




    createTimeDisplay(
        time
    );





    const observer =
    createObserver();






    const {camera, controls} =
    createCamera();






    const observerCamera = {

        enter(){},

        exit(){},

        toggle(){},

        isActive(){

            return false;

        }

    };








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



    document.body.appendChild(
        renderer.domElement
    );








    const labelRenderer =
    new CSS2DRenderer();



    labelRenderer.setSize(
        window.innerWidth,
        window.innerHeight
    );



    labelRenderer.domElement.style.position =
    "absolute";



    labelRenderer.domElement.style.top =
    "0";



    labelRenderer.domElement.style.left =
    "0";



    labelRenderer.domElement.style.pointerEvents =
    "none";



    document.body.appendChild(
        labelRenderer.domElement
    );








    scene.add(

        new THREE.AmbientLight(
            0xffffff,
            1
        )

    );








    // ساخت جهان

    createAxes(scene);


    createEarth(scene);


    createEarthEquator(scene);


    createCelestialSphere(scene);


    createCelestialPlanes(scene);


    createSeasonPoints(scene);








    // خورشید فقط برای تست

    createSun(scene);







    const sunTrail =
    createSunTrail();


    scene.add(
        sunTrail.line
    );








    createTimeControls(
        time,
        sunTrail,
        null,
        observerCamera
    );









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
