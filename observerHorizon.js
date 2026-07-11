import * as THREE from "three";


export function createObserverHorizon(){


    const group =
    new THREE.Group();




    const groundGeometry =
    new THREE.PlaneGeometry(
        40,
        40
    );



    const groundMaterial =
    new THREE.MeshBasicMaterial({

        color:0x8b4513,

        side:THREE.DoubleSide

    });



    const ground =
    new THREE.Mesh(
        groundGeometry,
        groundMaterial
    );



    ground.rotation.x =
    -Math.PI / 2;



    ground.position.y =
    -1;



    group.add(
        ground
    );




    return {

        group

    };

}
