import * as THREE from "three";


export function createAxes(scene){


    const length = 5;



    // X قرمز

    scene.add(
        new THREE.ArrowHelper(
            new THREE.Vector3(1,0,0),
            new THREE.Vector3(0,0,0),
            length,
            0xff0000
        )
    );



    // Y سبز

    scene.add(
        new THREE.ArrowHelper(
            new THREE.Vector3(0,1,0),
            new THREE.Vector3(0,0,0),
            length,
            0x00ff00
        )
    );



    // Z آبی

    scene.add(
        new THREE.ArrowHelper(
            new THREE.Vector3(0,0,1),
            new THREE.Vector3(0,0,0),
            length,
            0x0088ff
        )
    );

}
