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



        // رفتن به مرکز ناظر


        camera.position.set(

            0,
            0,
            0.1

        );



        camera.lookAt(

            0,
            5,
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
