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


    const normalQuaternion =
    new THREE.Quaternion();







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


        normalQuaternion.copy(
            camera.quaternion
        );






        // مرکز کره سماوی

        camera.position.set(
            0,
            0,
            0
        );



        // نگاه به سمت +Z

        camera.lookAt(
            0,
            0,
            5
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


        camera.quaternion.copy(
            normalQuaternion
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
