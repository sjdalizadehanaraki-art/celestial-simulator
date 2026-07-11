import { createHorizontalProjection } from "./horizontalProjection.js";


export function createLocalSky(
    observer,
    time
){


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



    const ctx =
    canvas.getContext("2d");



    let visible = false;



    const pathPoints = [];



    let showPath = true;



    let lastMinute = -1;





    // نقطه شروع
    // اعتدال بهاری ۱۴۰۵
    // ۲۹ اسفند ۱۴۰۴ - ۱۸:۱۶

    const START_ALTITUDE = -6.4;

    const START_AZIMUTH = 274;





    let altitude =
    START_ALTITUDE;


    let azimuth =
    START_AZIMUTH;







    const projection =
    createHorizontalProjection({

        width:
        canvas.width,


        height:
        canvas.height,


        latitude:
        observer.getLatitude()

    });









    function updatePosition(){


        const minutes =

        time.getElapsedMinutes();





        const dayAngle =

        minutes *
        360 /
        1440;







        azimuth =

        (
            START_AZIMUTH +
            dayAngle
        )
        % 360;








        const phase =

        dayAngle *
        Math.PI /
        180;








        altitude =

        57 *
        Math.sin(
            phase
        );









        const currentMinute =

        Math.floor(
            minutes
        );



        if(
            currentMinute !== lastMinute
        ){


            lastMinute =
            currentMinute;



            pathPoints.push({

                altitude,

                azimuth

            });


        }


    }









    function draw(){


        if(!visible)
            return;



        updatePosition();




        ctx.clearRect(

            0,

            0,

            canvas.width,

            canvas.height

        );



        ctx.fillStyle =
        "black";


        ctx.fillRect(

            0,

            0,

            canvas.width,

            canvas.height

        );







        const left =

        projection.centerX -
        projection.viewWidth/2;







        ctx.strokeStyle =
        "white";


        ctx.lineWidth = 2;


        ctx.strokeRect(

            left,

            projection.topY,

            projection.viewWidth,

            projection.viewHeight

        );







        // خط افق

        ctx.strokeStyle =
        "red";


        ctx.beginPath();



        ctx.moveTo(

            left,

            projection.bottomY

        );



        ctx.lineTo(

            left +
            projection.viewWidth,

            projection.bottomY

        );



        ctx.stroke();







        // مسیر خورشید

        if(showPath){


            ctx.strokeStyle =
            "yellow";


            ctx.beginPath();



            pathPoints.forEach(
                (p,index)=>{


                    const point =

                    projection.project(

                        p.altitude,

                        p.azimuth

                    );



                    if(index === 0){

                        ctx.moveTo(

                            point.x,

                            point.y

                        );

                    }
                    else{

                        ctx.lineTo(

                            point.x,

                            point.y

                        );

                    }


                }
            );



            ctx.stroke();


        }







        // خورشید فعلی


        const sun =

        projection.project(

            altitude,

            azimuth

        );



        ctx.fillStyle =
        "yellow";



        ctx.beginPath();



        ctx.arc(

            sun.x,

            sun.y,

            6,

            0,

            Math.PI * 2

        );



        ctx.fill();



    }









    function clearPath(){


        pathPoints.length = 0;


        lastMinute = -1;


    }








    function togglePath(){


        showPath =
        !showPath;


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

        clearPath,

        togglePath


    };


}
