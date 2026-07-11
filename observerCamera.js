import * as THREE from "three";


export function createObserverCamera(
    camera,
    controls,
    observerGroup
){


    let observerMode = false;


    const normalPosition =
    new THREE.Vector3();


    const normalTarget =
    new THREE.Vector3();



    function enter(){


        if(observerMode)
        return;



        observerMode=true;



        normalPosition.copy(
            camera.position
        );


        normalTarget.copy(
            controls.target
        );




        observerGroup.visible=true;






        camera.position.set(
            0,
            0,
            0
        );



        camera.rotation.set(
            0,
            0,
            0
        );



        camera.lookAt(
            0,
            0,
            -10
        );



        controls.enabled=false;


    }







    function exit(){


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
