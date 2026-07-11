import * as THREE from "three";


export function createObserverFrame(
    scene,
    observer
){


    const group =
    new THREE.Group();



    // خیلی مهم:
    // فعلاً خاموش باشد
    group.visible = false;



    scene.add(
        group
    );







    // زمین ناظر

    const groundGeometry =
    new THREE.CircleGeometry(
        5,
        128
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



    ground.rotation.x =
    -Math.PI / 2;



    group.add(
        ground
    );







    // خط افق

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
    -Math.PI / 2;



    group.add(
        horizon
    );







    function update(){



    }







    function show(){


        group.visible = true;


    }





    function hide(){


        group.visible = false;


    }







    return {


        group,

        update,

        show,

        hide


    };


}
