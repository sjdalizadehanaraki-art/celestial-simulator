import * as THREE from "three";


export function createObserverHorizon(){


    const group =
    new THREE.Group();



    const groundGeometry =
    new THREE.PlaneGeometry(
        50,
        50
    );


    const groundMaterial =
    new THREE.MeshBasicMaterial({

        color:0x8b4513,

        side:THREE.DoubleSide,

        transparent:true,

        opacity:0.8,

        depthWrite:false

    });



    const ground =
    new THREE.Mesh(
        groundGeometry,
        groundMaterial
    );



    ground.rotation.x =
    -Math.PI / 2;



    ground.position.set(
        0,
        0,
        0
    );



    group.add(
        ground
    );



    return {

        group

    };

}
