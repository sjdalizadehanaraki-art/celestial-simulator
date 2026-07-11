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
    // صفحه افق
    // -------------------------


    const horizonGeometry =
    new THREE.CircleGeometry(
        5,
        128
    );



    const horizonMaterial =
    new THREE.MeshBasicMaterial({

        color:0xff0000,

        transparent:true,

        opacity:0.15,

        side:THREE.DoubleSide,

        depthWrite:false

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







    function update(){


        // فعلاً اینجا هیچ چرخشی نداریم
        // فقط فریم هندسی ناظر است



    }





    return {


        group,

        update


    };


}
