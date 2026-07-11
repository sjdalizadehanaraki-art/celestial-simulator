// horizontalRenderer.js

export function createHorizontalRenderer(
    canvas,
    projection
){


    const ctx =
    canvas.getContext("2d");



    function clear(){


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


    }





    function drawBackground(){


        const w =
        canvas.width;


        const h =
        canvas.height;



        ctx.fillStyle =
        "black";


        ctx.fillRect(
            0,
            0,
            w,
            h
        );



    }





    function drawHorizon(){


        const horizon =
        canvas.height * 0.75;



        ctx.strokeStyle =
        "white";


        ctx.lineWidth = 1;



        ctx.beginPath();


        ctx.moveTo(
            0,
            horizon
        );


        ctx.lineTo(
            canvas.width,
            horizon
        );


        ctx.stroke();


    }





    function drawDirections(){


        const w =
        canvas.width;


        const h =
        canvas.height;



        const horizon =
        h * 0.75;



        ctx.fillStyle =
        "white";


        ctx.font =
        "20px Arial";



        ctx.fillText(
            "شرق",
            50,
            horizon + 40
        );



        ctx.fillText(
            "جنوب",
            w/2 - 30,
            horizon + 40
        );



        ctx.fillText(
            "غرب",
            w - 80,
            horizon + 40
        );



    }





    function drawSun(
        altitude,
        azimuth
    ){



        const position =
        projection.project(
            altitude,
            azimuth
        );



        ctx.fillStyle =
        "yellow";


        ctx.beginPath();


        ctx.arc(
            position.x,
            position.y,
            6,
            0,
            Math.PI * 2
        );


        ctx.fill();


    }






    function drawPath(
        points
    ){



        if(points.length === 0)
        return;



        ctx.strokeStyle =
        "rgba(255,255,0,0.8)";


        ctx.lineWidth = 2;



        ctx.beginPath();



        points.forEach(
            (point,index)=>{


                const position =
                projection.project(
                    point.altitude,
                    point.azimuth
                );



                if(index === 0){

                    ctx.moveTo(
                        position.x,
                        position.y
                    );

                }
                else{

                    ctx.lineTo(
                        position.x,
                        position.y
                    );

                }


            }
        );



        ctx.stroke();


    }






    function render({

        sun,

        path = []

    }){


        clear();


        drawBackground();


        drawHorizon();


        drawDirections();


        if(sun){

            drawSun(
                sun.altitude,
                sun.azimuth
            );

        }



        drawPath(
            path
        );


    }






    return {

        render,

        clear

    };


}
