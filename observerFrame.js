import * as THREE from "three";


export function createObserverFrame(
    scene,
    observer
){


    const group =
    new THREE.Group();


    scene.add(
        group
    );







    // -------------------------
    // زمین زیر پای ناظر
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

        color:0x6b4a2b,

        side:THREE.DoubleSide

    });



    const ground =
    new THREE.Mesh(

        groundGeometry,

        groundMaterial

    );



    // نیمکره پایین

    ground.rotation.x =
    Math.PI;



    group.add(
        ground
    );








    // -------------------------
    // خط افق
    // -------------------------


    const horizonGeometry =
    new THREE.RingGeometry(

        4.95,

        5.05,

        128

    );



    const horizonMaterial =
    new THREE.MeshBasicMaterial({

        color:0xff0000,

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









    // -------------------------
    // Zenith
    // -------------------------


    const zenith =
    new THREE.ArrowHelper(

        new THREE.Vector3(
            0,
            1,
            0
        ),

        new THREE.Vector3(
            0,
            0,
            0
        ),

        3,

        0xffff00

    );



    group.add(
        zenith
    );









    // -------------------------
    // شمال
    // -------------------------


    const north =
    new THREE.ArrowHelper(

        new THREE.Vector3(
            0,
            0,
            -1
        ),

        new THREE.Vector3(
            0,
            0,
            0
        ),

        3,

        0x0088ff

    );



    group.add(
        north
    );









    // -------------------------
    // شرق
    // -------------------------


    const east =
    new THREE.ArrowHelper(

        new THREE.Vector3(
            1,
            0,
            0
        ),

        new THREE.Vector3(
            0,
            0,
            0
        ),

        3,

        0x00ff00

    );



    group.add(
        east
    );









    function update(){


    }






    return {


        group,

        update


    };


}
