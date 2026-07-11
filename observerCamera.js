import * as THREE from "three";


export function createObserverCamera(
    camera,
    controls
){


    let observerMode = false;


    const normalPosition =
    new THREE.Vector3();


    const normalTarget =
    new THREE.Vector3();


    const normalRotation =
    new THREE.Euler();





    function enter(){


        if(observerMode)
        return;



        observerMode = true;



        // ذخیره حالت قبلی

        normalPosition.copy(
            camera.position
        );


        normalTarget.copy(
            controls.target
        );


        normalRotation.copy(
            camera.rotation
        );





        // ورود به مرکز کره سماوی

        camera.position.set(
            0,
            0,
            0
        );



        // نگاه به سمت جنوب

        camera.rotation.set(
            0,
            0,
            0
        );



        camera.lookAt(
            0,
            -5,
            0
        );



        controls.enabled =
        false;


    }








    function exit(){


        if(!observerMode)
        return;



        observerMode = false;



        camera.position.copy(
            normalPosition
        );


        camera.rotation.copy(
            normalRotation
        );


        controls.target.copy(
            normalTarget
        );


        controls.enabled =
        true;


        controls.update();


    }








    function toggle(){


        if(observerMode){

            exit();

        }
        else{

            enter();

        }


    }








    function isActive(){

        return observerMode;

    }







    return {


        enter,

        exit,

        toggle,

        isActive


    };


}
