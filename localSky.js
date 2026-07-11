import { createHorizontalProjection } from "./horizontalProjection.js";


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



    let altitude = 0;

    let azimuth = 0;



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


        const length =
        position.length();



        const X =
        position.x / length;


        const Y =
        position.y / length;


        const Z =
        position.z / length;





        const lat =
        observer.getLatitude()
        *
        Math.PI /
        180;





        // محور بالا (ارتفاع)

        const up =

        Math.cos(lat) * X
        +
        Math.sin(lat) * Z;





        altitude =

        Math.asin(
            up
        )
        *
        180 /
        Math.PI;







        // شرق

        const east =

        -Y;






        // شمال

        const north =

        -Math.sin(lat) * X
        +
        Math.cos(lat) * Z;







        azimuth =

        Math.atan2(
            east,
            north
        )
        *
        180 /
        Math.PI;






        if(azimuth < 0){

            azimuth += 360;

        }






        if(minute !== lastMinute){


            lastMinute =
            minute;



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







        // خط افق

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







        // محور ارتفاع

        ctx.strokeStyle =
        "lime";


        ctx.beginPath();



        ctx.moveTo(

            projection.centerX,

            projection.topY

        );



        ctx.lineTo(

            projection.centerX,

            projection.bottomY

        );



        ctx.stroke();








        if(showPath){



            ctx.strokeStyle =
            "yellow";



            ctx.lineWidth = 2;



            ctx.beginPath();



            pathPoints.forEach(
                (p,index)=>{


                    const point =
                    projection.project(

                        p.altitude,

                        p.azimuth

                    );



                    if(index===0){

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
