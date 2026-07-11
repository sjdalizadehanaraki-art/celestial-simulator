// localSky.js

import { createHorizontalProjection } from "./horizontalProjection.js";
import { createHorizontalRenderer } from "./horizontalRenderer.js";


export function createLocalSky(){


    const canvas =
    document.createElement("canvas");



    canvas.width =
    window.innerWidth;


    canvas.height =
    window.innerHeight;



    canvas.style.position =
    "absolute";


    canvas.style.top =
    "0";


    canvas.style.left =
    "0";


    canvas.style.display =
    "none";


    canvas.style.zIndex =
    "5";



    document.body.appendChild(
        canvas
    );





    const projection =
    createHorizontalProjection(
        canvas.width,
        canvas.height
    );




    const renderer =
    createHorizontalRenderer(
        canvas,
        projection
    );






    let visible = false;



    let sun = {

        altitude:0,

        azimuth:180

    };



    const pathPoints = [];






    function setSunPosition(
        altitude,
        azimuth
    ){


        sun.altitude =
        altitude;


        sun.azimuth =
        azimuth;




        pathPoints.push({

            altitude,

            azimuth

        });


    }







    function draw(){


        if(!visible)
        return;



        renderer.render({

            sun,

            path:pathPoints

        });


    }








    function clearPath(){


        pathPoints.length = 0;


    }







    function show(){


        visible = true;


        canvas.style.display =
        "block";


        draw();


    }







    function hide(){


        visible = false;


        canvas.style.display =
        "none";


    }






    return {


        show,

        hide,

        draw,

        setSunPosition,

        clearPath


    };


}
