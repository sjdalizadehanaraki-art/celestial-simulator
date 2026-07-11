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


    document.body.appendChild(canvas);



    const ctx =
    canvas.getContext("2d");



    let visible = false;


    let altitude = 0;

    let azimuth = 180;



    const pathPoints = [];


    let showPath = true;


    let lastMinute = -1;





    const projection =
    createHorizontalProjection({

        width:
        canvas.width,

        height:
        canvas.height,

        latitude:
        observer.getLatitude()

    });








    function setSunPosition(
        position,
        minute
    ){


        const r =
        position.length();



        const x =
        position.x / r;

        const y =
        position.y / r;

        const z =
        position.z / r;





        const lat =
        observer.getLatitude()
        *
        Math.PI /
        180;







        // ارتفاع

        const up =
        Math.cos(lat)*x
        +
        Math.sin(lat)*z;



        altitude =
        Math.asin(up)
        *
        180 /
        Math.PI;







        // شرق

        const east =
        -y;





        // شمال

        const north =
        -Math.sin(lat)*x
        +
        Math.cos(lat)*z;






        azimuth =
        Math.atan2(
            east,
            north
        )
        *
        180 /
        Math.PI;



        if(azimuth < 0)
            azimuth += 360;








        if(minute !== lastMinute){


            lastMinute = minute;


            pathPoints.push({

                altitude,

                azimuth

            });


        }



    }









    function draw(){


        if(!visible)
            return;



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







        // افق

        ctx.strokeStyle =
        "red";


        ctx.beginPath();


        ctx.moveTo(

            left,

            projection.bottomY

        );


        ctx.lineTo(

            left + projection.viewWidth,

            projection.bottomY

        );


        ctx.stroke();








        // مسیر

        if(showPath){


            ctx.strokeStyle =
            "yellow";


            ctx.beginPath();



            pathPoints.forEach(
                (p,i)=>{


                    const point =
                    projection.project(

                        p.altitude,

                        p.azimuth

                    );



                    if(i===0)

                        ctx.moveTo(
                            point.x,
                            point.y
                        );

                    else

                        ctx.lineTo(
                            point.x,
                            point.y
                        );

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

            7,

            0,

            Math.PI*2

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

        setSunPosition,

        clearPath,

        togglePath


    };


}
