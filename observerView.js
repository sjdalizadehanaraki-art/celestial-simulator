import * as THREE from "three";


export function createObserverView(
    scene,
    observer
){


    const group =
    new THREE.Group();


    scene.add(
        group
    );







    // -------------------------
    // آسمان نیم‌کره بالا
    // -------------------------

    const skyGeometry =
    new THREE.SphereGeometry(
        5,
        64,
        32,
        0,
        Math.PI * 2,
        0,
        Math.PI / 2
    );



    const skyMaterial =
    new THREE.MeshBasicMaterial({

        color:0x003366,

        transparent:true,

        opacity:0.25,

        side:THREE.BackSide,

        depthWrite:false

    });



    const sky =
    new THREE.Mesh(
        skyGeometry,
        skyMaterial
    );


    group.add(
        sky
    );









    // -------------------------
    // زمین نیم‌کره پایین
    // -------------------------

    const groundGeometry =
    new THREE.SphereGeometry(
        5,
        64,
        32,
        0,
        Math.PI * 2,
        Math.PI / 2,
        Math.PI / 2
    );



    const groundMaterial =
    new THREE.MeshBasicMaterial({

        color:0x5a3a1a,

        transparent:true,

        opacity:0.8,

        side:THREE.BackSide,

        depthWrite:false

    });



    const ground =
    new THREE.Mesh(
        groundGeometry,
        groundMaterial
    );


    group.add(
        ground
    );









    // -------------------------
    // خط افق
    // -------------------------

    const horizonGeometry =
    new THREE.RingGeometry(
        4.98,
        5.02,
        128
    );



    const horizonMaterial =
    new THREE.MeshBasicMaterial({

        color:0xffffff,

        transparent:true,

        opacity:0.4,

        side:THREE.DoubleSide

    });



    const horizon =
    new THREE.Mesh(
        horizonGeometry,
        horizonMaterial
    );


    horizon.rotation.x =
    Math.PI / 2;


    group.add(
        horizon
    );









    return {


        group


    };


}
