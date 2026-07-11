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




        // ذخیره حالت قبلی دوربین

        normalPosition.copy(
            camera.position
        );


        normalTarget.copy(
            controls.target
        );





        // خاموش کردن مدل اصلی

        if(worldGroup){

            worldGroup.visible = false;

        }





        // روشن کردن محیط ناظر

        if(observerGroup){

            observerGroup.visible = true;

        }







        // قرار گرفتن چشم ناظر

        camera.position.set(
            0,
            1.7,
            0
        );



        camera.rotation.set(
            0,
            0,
            0
        );



        camera.lookAt(
            0,
            1.7,
            -1
        );



        camera.updateMatrixWorld(true);





        controls.enabled =
        false;


    }








    function exit(){


        if(!observerMode)
        return;



        observerMode = false;






        // برگرداندن دوربین

        camera.position.copy(
            normalPosition
        );


        controls.target.copy(
            normalTarget
        );





        camera.updateMatrixWorld(true);





        // روشن کردن مدل اصلی

        if(worldGroup){

            worldGroup.visible = true;

        }





        // خاموش کردن محیط ناظر

        if(observerGroup){

            observerGroup.visible = false;

        }





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








    return {


        enter,

        exit,

        toggle,


        isActive(){

            return observerMode;

        }


    };


}
