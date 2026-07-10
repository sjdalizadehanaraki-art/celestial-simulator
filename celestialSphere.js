import * as THREE from "three";

export function createCelestialSphere(scene){

    const sphere = new THREE.Mesh(

        new THREE.SphereGeometry(
            5,
            64,
            64
        ),

        new THREE.MeshBasicMaterial({

            color:0xffffff,

            transparent:true,

            opacity:0.10,

            side:THREE.BackSide,

            depthWrite:false

        })

    );

    scene.add(sphere);

}
