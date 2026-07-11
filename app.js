import { createObserver } from "./observer.js";
import { createLocalSky } from "./localSky.js";
import { createTimeDisplay } from "./timeDisplay.js";
import { createSunTrail } from "./sunTrail.js";
import { createTimeControls } from "./timeControls.js";
import { createTimeController } from "./timeController.js";
import { createSun } from "./sun.js";
import { createSunMotion } from "./sunApparentMotion.js";
import { createCelestialPlanes } from "./celestialPlanes.js";

import { createObserverCamera } from "./observerCamera.js";
import { createObserverSphere } from "./observerSphere.js";
import { createObserverHorizon } from "./observerHorizon.js";

import * as THREE from "three";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

import { createCamera } from "./camera.js";
import { createAxes } from "./axes.js";
import { createEarth } from "./earth.js";
import { createCelestialSphere } from "./celestialSphere.js";
import { createSeasonPoints } from "./seasonPoints.js";



export function createApp(){



    const scene =
    new THREE.Scene();



    scene.background =
    new THREE.Color(0x000000);






    // =========================
    // Groups
    // =========================


    const worldGroup =
    new THREE.Group();



    const observerGroup =
    new THREE.Group();



    scene.add(
        worldGroup
    );


    scene.add(
        observerGroup
    );



    observerGroup.visible =
    false;







    const time =
    createTimeController();




    const timeDisplay =
    createTimeDisplay(
        time
    );





    const observer =
    createObserver();





    const localSky =
    createLocalSky(
        observer,
        time
    );







    const {camera, controls} =
    createCamera();







    const observerCamera =
    createObserverCamera(
        camera,
        controls,
        observerGroup
    );








    // =========================
    // Observer View
    // =========================


    const observerSphere =
    createObserverSphere();



    observerGroup.add(
        observerSphere.group
    );





    const observerHorizon =
    createObserverHorizon();



    observerGroup.add(
        observerHorizon.group
    );









    // =========================
    // Renderers
    // =========================


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
            0.8
        )
    );









    // =========================
    // 3D Space Model
    // =========================


    createAxes(worldGroup);


    createEarth(worldGroup);


    createCelestialSphere(worldGroup);


    createCelestialPlanes(worldGroup);


    createSeasonPoints(worldGroup);







    const sun =
    createSun(worldGroup);







    const sunMotion =
    createSunMotion(
        sun,
        time
    );







    const sunTrail =
    createSunTrail();



    worldGroup.add(
        sunTrail.line
    );








    createTimeControls(
        time,
        sunTrail,
        localSky,
        observerCamera
    );








    const sunWorldPosition =
    new THREE.Vector3();









    function animate(){



        requestAnimationFrame(
            animate
        );





        time.update();



        timeDisplay.update();





        sunMotion.update();






        sun.getWorldPosition(
            sunWorldPosition
        );







        localSky.setSunPosition(

            sunWorldPosition,

            Math.floor(
                time.getTotalMinutes()
            )

        );






        localSky.draw();







        sunTrail.addPoint(

            sunWorldPosition,

            Math.floor(
                time.getTotalMinutes()
            )

        );








        // =========================
        // Observer State
        // =========================


        if(
            observerCamera.isActive()
        ){

            observerGroup.visible =
            true;


            controls.enabled =
            false;


        }
        else{


            observerGroup.visible =
            false;


            controls.enabled =
            true;


        }







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
