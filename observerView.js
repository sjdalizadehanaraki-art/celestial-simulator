import * as THREE from "three";


export function createObserverView(
    scene,
    observer
){


    const group =
    new THREE.Group();



    scene.add(group);





    // کره سماوی ناظر

    const sphere =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            5,
            64,
            64
        ),

        new THREE.MeshBasicMaterial({

            color:0xffffff,

            transparent:true,

            opacity:0.05,

            side:THREE.BackSide,

            depthWrite:false

        })

    );


    group.add(
        sphere
    );




    return {

        group

    };


}
