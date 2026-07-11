import * as THREE from "three";


export function createObserverControls(
    camera,
    canvas
){

    let active = false;


    let yaw = 0;

    let pitch = 0;


    let dragging = false;


    let lastX = 0;

    let lastY = 0;



    const sensitivity = 0.003;







    function update(){

        if(!active)
            return;



        const direction =
        new THREE.Vector3();



        direction.set(

            Math.sin(yaw)
            *
            Math.cos(pitch),


            Math.sin(pitch),


            Math.cos(yaw)
            *
            Math.cos(pitch)

        );



        camera.lookAt(

            camera.position.clone()
            .add(direction)

        );


    }









    function pointerDown(e){


        if(!active)
        return;


        dragging = true;


        lastX = e.clientX;

        lastY = e.clientY;


    }







    function pointerMove(e){


        if(
            !active ||
            !dragging
        )
        return;



        const dx =
        e.clientX - lastX;


        const dy =
        e.clientY - lastY;



        lastX =
        e.clientX;


        lastY =
        e.clientY;




        yaw -=
        dx *
        sensitivity;



        pitch -=
        dy *
        sensitivity;



        const limit =
        Math.PI/2 - 0.05;



        pitch =
        Math.max(
            -limit,
            Math.min(
                limit,
                pitch
            )
        );



    }








    function pointerUp(){


        dragging = false;


    }







    function enter(){


        active = true;


    }







    function exit(){


        active = false;


    }







    canvas.addEventListener(
        "pointerdown",
        pointerDown
    );


    canvas.addEventListener(
        "pointermove",
        pointerMove
    );


    canvas.addEventListener(
        "pointerup",
        pointerUp
    );







    return {


        update,

        enter,

        exit


    };


}
