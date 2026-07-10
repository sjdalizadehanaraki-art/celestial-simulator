import * as THREE from "three";


export function createCelestialSphere(scene){


    const geometry =
    new THREE.SphereGeometry(
        5,
        64,
        64
    );


    const material =
    new THREE.MeshBasicMaterial({

        color: 0xffffff,

        transparent: true,

        opacity: 0.1,

        side: THREE.BackSide,

        depthWrite: false

    });



    const sphere =
    new THREE.Mesh(
        geometry,
        material
    );


    scene.add(sphere);


}
