import { createSeasonPoints } from "./seasonPoints.js";
alert("APP IMPORTS OK1");
import { createSunTrail } from "./sunTrail.js";
alert("APP IMPORTS OK2");
import { createTimeControls } from "./timeControls.js";
alert("APP IMPORTS OK3");
import { createTimeController } from "./timeController.js";
alert("APP IMPORTS OK4");
import { createSun } from "./sun.js";
alert("APP IMPORTS OK5");
import { createSunMotion } from "./sunApparentMotion.js";
alert("APP IMPORTS OK6");
import { createCelestialPlanes } from "./celestialPlanes.js";
alert("APP IMPORTS OK7");
import * as THREE from "three";
alert("APP IMPORTS OK8");
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";
alert("APP IMPORTS OK9");
import { createCamera } from "./camera.js";
alert("APP IMPORTS OK10");
import { createAxes } from "./axes.js";
alert("APP IMPORTS OK11");
import { createEarth } from "./earth.js";
alert("APP IMPORTS OK12");
import { createEarthEquator } from "./earthEquator.js";
alert("APP IMPORTS OK13");
import { createCelestialSphere } from "./celestialSphere.js";
alert("APP IMPORTS OK14");
export function createApp(){

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x000000);

    const time =
    createTimeController();

const {camera, controls} =
createCamera();


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
  //  createSeasonPoints(scene);
    //const sun =
   // createSun(scene);
   // const sunMotion =
   // createSunMotion(sun,time);
    const sunTrail =
createSunTrail();


scene.add(
    sunTrail.line
);


//createTimeControls(
//    time,
 //   sunTrail
//);



    function animate(){

        requestAnimationFrame(animate);

        time.update();

      //  sunMotion.update();

     //   sunTrail.addPoint(
   // sun.position,
  //  0
//);

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
