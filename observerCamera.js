export function createObserverCamera(
    camera,
    controls
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
