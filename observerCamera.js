import * as THREE from "three";


export function createObserverCamera(
    camera,
    controls,
    worldGroup,
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


        observerMode = true;



        normalPosition.copy(
            camera.position
        );


        normalTarget.copy(
            controls.target
        );



        worldGroup.visible = true;


        observerGroup.visible = false;



        camera.position.set(
            0,
            0,
            0
        );



        camera.lookAt(
            0,
            1,
            0
        );



        camera.updateMatrixWorld();



        controls.enabled = false;


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



        camera.updateMatrixWorld();



        controls.enabled = true;


        controls.update();


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
