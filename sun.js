import * as THREE from "three";


export function createSun(parent){


    const sun =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            0.12,
            32,
            32
        ),

        new THREE.MeshBasicMaterial({

            color:0xffff00

        })

    );



    sun.position.set(

        5,
        0,
        0

    );



    parent.add(
        sun
    );



    return sun;


}
