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
    // افق ناظر
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



    // صفحه افق عمود بر Zenith
    horizon.rotation.x =
    Math.PI / 2;



    group.add(
        horizon
    );







    // -------------------------
    // محور Zenith
    // -------------------------


    const zenithLine =
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
        zenithLine
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







    // -------------------------
    // بروزرسانی بر اساس عرض
    // -------------------------


    function update(){


        const latitude =
        observer.getLatitude();



        const latRad =
        THREE.MathUtils.degToRad(
            latitude
        );



        /*
        
        در این مرحله فقط شیب سیستم افقی
        نسبت به محور سماوی را تنظیم می‌کنیم
        
        */


        group.rotation.x =
        -latRad;


    }







    update();





    return {


        group,

        update


    };


}
