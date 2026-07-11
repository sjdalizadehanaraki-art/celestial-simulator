import * as THREE from "three";


export function createObserverSphere(){


    const group =
    new THREE.Group();



    const geometry =
    new THREE.SphereGeometry(
        20,
        64,
        64
    );


    const material =
    new THREE.MeshBasicMaterial({

        color:0x888888,

        transparent:true,

        opacity:0.15,

        side:THREE.BackSide,

        depthWrite:false

    });



    const sphere =
    new THREE.Mesh(
        geometry,
        material
    );



    group.add(
        sphere
    );



    return {

        group

    };

}
