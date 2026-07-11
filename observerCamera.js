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



        // ذخیره وضعیت قبلی دوربین

        normalPosition.copy(
            camera.position
        );


        normalTarget.copy(
            controls.target
        );





        // ورود به نقطه دید ناظر

        camera.position.set(

            0,
            0,
            0.01

        );



        camera.lookAt(

            0,
            0,
            -1

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
