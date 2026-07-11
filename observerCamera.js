import * as THREE from "three";


export function createObserverCamera(
    camera,
    controls
){


    let enabled = false;



    function enter(){


        enabled = true;


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


        controls.enabled = false;


    }





    function exit(){


        enabled = false;


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


        controls.enabled = true;


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
