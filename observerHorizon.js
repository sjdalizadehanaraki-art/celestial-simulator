import * as THREE from "three";


export function createObserverHorizon(){


    const group =
    new THREE.Group();





    // نیمه آسمان (بالا)

    const skyGeometry =
    new THREE.CircleGeometry(
        10,
        128,
        0,
        Math.PI
    );



    const skyMaterial =
    new THREE.MeshBasicMaterial({

        color:0x4488ff,

        transparent:true,

        opacity:0.25,

        side:THREE.DoubleSide,

        depthWrite:false

    });



    const sky =
    new THREE.Mesh(

        skyGeometry,

        skyMaterial

    );



    sky.rotation.x =
    Math.PI / 2;



    group.add(
        sky
    );









    // نیمه زمین (پایین)

    const groundGeometry =
    new THREE.CircleGeometry(
        10,
        128,
        0,
        Math.PI
    );



    const groundMaterial =
    new THREE.MeshBasicMaterial({

        color:0x8b4513,

        transparent:true,

        opacity:0.45,

        side:THREE.DoubleSide,

        depthWrite:false

    });



    const ground =
    new THREE.Mesh(

        groundGeometry,

        groundMaterial

    );



    ground.rotation.x =
    -Math.PI / 2;



    group.add(
        ground
    );







    return {

        group,

        sky,

        ground

    };


}
