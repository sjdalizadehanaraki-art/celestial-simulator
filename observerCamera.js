import * as THREE from "three";


export function createObserverCamera(
    camera,
    controls
){


    let enabled = false;



    function enter(){


        enabled = true;


        controls.enabled = false;



        camera.position.set(
            0,
            0,
            0.01
        );



        camera.rotation.set(
            0,
            0,
            0
        );



        camera.lookAt(
            0,
            -1,
            0
        );


    }





    function exit(){


        enabled = false;


        controls.enabled = true;



        camera.position.set(
            15,
            15,
            15
        );



        camera.lookAt(
            0,
            0,
            0
        );


    }





    function isActive(){

        return enabled;

    }





    return {


        enter,

        exit,

        isActive


    };


}
