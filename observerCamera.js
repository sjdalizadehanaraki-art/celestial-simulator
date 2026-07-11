export function createObserverCamera(
    camera,
    controls
){


    let observerMode = false;



    function enter(){


        observerMode = true;


    }





    function exit(){


        observerMode = false;


        controls.enabled = true;


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
