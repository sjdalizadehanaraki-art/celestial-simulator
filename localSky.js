// localSky.js

import { createHorizontalProjection } from "./horizontalProjection.js";
import { createHorizontalRenderer } from "./horizontalRenderer.js";



export function createLocalSky(
    observer
){



    const canvas =
    document.createElement("canvas");



    canvas.width =
    window.innerWidth;


    canvas.height =
    window.innerHeight;



    canvas.style.position =
    "absolute";


    canvas.style.left =
    "0";


    canvas.style.top =
    "0";


    canvas.style.display =
    "none";


    canvas.style.zIndex =
    "5";



    document.body.appendChild(
        canvas
    );





    let projection;


    let renderer;





    function rebuild(){



        projection =
        createHorizontalProjection({

            width:
            canvas.width,

            height:
            canvas.height,

            latitude:
            observer.getLatitude(),

            longitude:
            observer.getLongitude()

        });




        renderer =
        createHorizontalRenderer(

            canvas,

            projection

        );



    }





    rebuild();







    let visible =
    false;





    let sun = {

        altitude:0,

        azimuth:0

    };





    const path = [];








    function setSunPosition(

        altitude,

        azimuth

    ){



        sun.altitude =
        altitude;


        sun.azimuth =
        azimuth;



        path.push({

            altitude,

            azimuth

        });


    }








    function draw(){


        if(!visible)
        return;



        renderer.render({

            sun,

            path

        });


    }








    function clearPath(){


        path.length = 0;


    }







    function show(){


        visible = true;


        canvas.style.display =
        "block";


        rebuild();


        draw();


    }







    function hide(){


        visible = false;


        canvas.style.display =
        "none";


    }






    window.addEventListener(

        "resize",

        ()=>{


            canvas.width =
            window.innerWidth;


            canvas.height =
            window.innerHeight;


            rebuild();


            draw();


        }

    );






    return{


        show,


        hide,


        draw,


        setSunPosition,


        clearPath


    };

}
