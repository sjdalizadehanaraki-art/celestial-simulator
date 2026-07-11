import * as THREE from "three";


export function createObserverView(
    scene,
    observer
){


    const group =
    new THREE.Group();



    scene.add(group);





    // -------------------------
    // کره سماوی
    // -------------------------


    const sphere =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            20,
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







    // -------------------------
    // افق ناظر
    // -------------------------


    const horizonGeometry =
    new THREE.CircleGeometry(
        20,
        128
    );


    const horizonMaterial =
    new THREE.MeshBasicMaterial({

        color:0x4444ff,

        transparent:true,

        opacity:0.15,

        side:THREE.DoubleSide

    });



    const horizon =
    new THREE.Mesh(

        horizonGeometry,

        horizonMaterial

    );


    group.add(
        horizon
    );





    return {

        group

    };


}
