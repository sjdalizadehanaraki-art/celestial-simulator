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



        observerMode = true;





        // ذخیره وضعیت قبلی

        normalPosition.copy(
            camera.position
        );


        normalTarget.copy(
            controls.target
        );






        // انتقال گروه Observer

        observerGroup.position.set(
            0,
            0,
            -5
        );



        observerGroup.visible =
        true;







        // ورود دوربین به حالت ناظر

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
            -1

        );





        controls.enabled =
        false;



    }









    function exit(){


        if(!observerMode)
        return;



        observerMode =
        false;





        camera.position.copy(
            normalPosition
        );


        controls.target.copy(
            normalTarget
        );



        controls.enabled =
        true;



        controls.update();







        observerGroup.visible =
        false;


        observerGroup.position.set(
            0,
            0,
            0
        );



    }








    function toggle(){


        if(observerMode){


            exit();


        }
        else{


            enter();


        }


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
