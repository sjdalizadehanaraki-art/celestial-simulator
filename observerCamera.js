import * as THREE from "three";


export function createObserverCamera(
    camera,
    controls,
    observer
){


    let observerMode = false;



    const normalPosition =
    camera.position.clone();



    const normalTarget =
    controls.target.clone();





    function enter(){



        if(observerMode)
        return;



        observerMode = true;



        controls.enabled =
        false;





        // موقعیت ناظر روی کره زمین
        // فعلاً نزدیک مرکز برای تست سیستم دید


        camera.position.set(
            0,
            0,
            1.05
        );





        camera.up.set(
            0,
            0,
            1
        );





        camera.lookAt(
            0,
            1,
            1
        );



    }








    function exit(){



        if(!observerMode)
        return;



        observerMode = false;



        controls.enabled =
        true;



        camera.position.copy(
            normalPosition
        );



        controls.target.copy(
            normalTarget
        );



        camera.up.set(
            0,
            0,
            1
        );



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
