import * as THREE from "three";


export function createObserverCamera(
    camera,
    controls,
    scene
){


    let observerMode = false;


    const normalPosition =
    new THREE.Vector3();


    const normalTarget =
    new THREE.Vector3();



    const observerGroup =
    new THREE.Group();


    scene.add(
        observerGroup
    );



    // خط افق

    const horizonGeometry =
    new THREE.CircleGeometry(
        5,
        128
    );


    const horizonMaterial =
    new THREE.MeshBasicMaterial({

        color:0x00ff00,

        transparent:true,

        opacity:0.25,

        side:THREE.DoubleSide

    });



    const horizon =
    new THREE.Mesh(
        horizonGeometry,
        horizonMaterial
    );


    horizon.rotation.x =
    Math.PI / 2;


    observerGroup.add(
        horizon
    );




    // محور شمال

    const northGeometry =
    new THREE.BufferGeometry()
    .setFromPoints([

        new THREE.Vector3(
            0,
            0,
            0
        ),

        new THREE.Vector3(
            0,
            0,
            -5
        )

    ]);



    const northLine =
    new THREE.Line(

        northGeometry,

        new THREE.LineBasicMaterial({

            color:0xff0000

        })

    );



    observerGroup.add(
        northLine
    );




    function enter(){


        if(observerMode)
        return;


        observerMode = true;



        normalPosition.copy(
            camera.position
        );


        normalTarget.copy(
            controls.target
        );



        camera.position.set(
            0,
            0,
            0
        );


        camera.lookAt(
            0,
            0,
            -1
        );


        controls.enabled =
        false;


        observerGroup.visible =
        true;


    }




    function exit(){


        if(!observerMode)
        return;



        observerMode=false;



        camera.position.copy(
            normalPosition
        );


        controls.target.copy(
            normalTarget
        );


        controls.enabled=true;


        controls.update();


        observerGroup.visible=false;


    }




    function toggle(){


        if(observerMode)
            exit();

        else
            enter();


    }




    return {

        enter,

        exit,

        toggle,

        isActive(){

            return observerMode;

        }

    };


}
