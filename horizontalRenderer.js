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

        ctx.fillStyle =
        "black";


        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

    }





    function drawHorizon(){


        const center =
        projection.project(
            0,
            180
        );


        const radius =
        canvas.width * 0.35;



        ctx.strokeStyle =
        "rgba(255,255,255,0.8)";


        ctx.lineWidth = 2;



        ctx.beginPath();


        ctx.arc(
            canvas.width/2,
            center.y,
            radius,
            0,
            Math.PI*2
        );


        ctx.stroke();


    }







    function drawAltitudeLines(){


        const levels =
        [
            30,
            60
        ];



        levels.forEach(
            altitude=>{


                const center =
                projection.project(
                    altitude,
                    180
                );



                const radius =
                canvas.width *
                0.35 *
                (
                    1 -
                    altitude/100
                );



                ctx.strokeStyle =
                "rgba(255,255,255,0.25)";


                ctx.beginPath();


                ctx.arc(
                    canvas.width/2,
                    center.y,
                    radius,
                    0,
                    Math.PI*2
                );


                ctx.stroke();



                // برچسب ارتفاع

                ctx.fillStyle =
                "rgba(255,255,255,0.7)";


                ctx.font =
                "14px Arial";


                ctx.fillText(

                    altitude+"°",

                    canvas.width/2 + radius,

                    center.y

                );


            }
        );




        // سمت الرأس

        const zenith =
        projection.project(
            90,
            180
        );


        ctx.fillStyle =
        "white";


        ctx.font =
        "16px Arial";


        ctx.fillText(
            "90° Zenith",
            zenith.x-35,
            zenith.y-10
        );


    }







    function drawAzimuthLines(){



        ctx.strokeStyle =
        "rgba(255,255,255,0.15)";


        ctx.fillStyle =
        "rgba(255,255,255,0.5)";


        ctx.font =
        "12px Arial";



        for(
            let azimuth=0;
            azimuth<360;
            azimuth+=30
        ){



            const start =
            projection.project(
                0,
                azimuth
            );


            const end =
            projection.project(
                90,
                azimuth
            );



            ctx.beginPath();


            ctx.moveTo(
                start.x,
                start.y
            );


            ctx.lineTo(
                end.x,
                end.y
            );


            ctx.stroke();




            // درجه آزیموت

            ctx.fillText(

                azimuth+"°",

                start.x-10,

                start.y-10

            );



        }


    }







    function drawDirections(){


        const points =
        [
            ["شمال",0],
            ["شرق",90],
            ["جنوب",180],
            ["غرب",270]
        ];



        ctx.fillStyle =
        "white";


        ctx.font =
        "20px Arial";



        points.forEach(
            p=>{


                const pos =
                projection.project(
                    0,
                    p[1]
                );


                ctx.fillText(
                    p[0],
                    pos.x-20,
                    pos.y+35
                );


            }
        );


    }







    function drawSun(
        sun
    ){


        const pos =
        projection.project(
            sun.altitude,
            sun.azimuth
        );


        ctx.fillStyle =
        "yellow";


        ctx.beginPath();


        ctx.arc(
            pos.x,
            pos.y,
            6,
            0,
            Math.PI*2
        );


        ctx.fill();


    }








    function drawPath(
        path
    ){


        if(path.length<2)
        return;



        ctx.strokeStyle =
        "rgba(255,255,0,0.8)";


        ctx.lineWidth = 2;



        ctx.beginPath();



        path.forEach(
            (point,index)=>{


                const pos =
                projection.project(
                    point.altitude,
                    point.azimuth
                );


                if(index===0){

                    ctx.moveTo(
                        pos.x,
                        pos.y
                    );

                }
                else{

                    ctx.lineTo(
                        pos.x,
                        pos.y
                    );

                }

            }
        );



        ctx.stroke();


    }







    function render({

        sun,

        path=[]

    }){


        clear();


        drawBackground();

        drawHorizon();

        drawAltitudeLines();

        drawAzimuthLines();

        drawDirections();



        if(sun){

            drawSun(
                sun
            );

        }


        drawPath(
            path
        );


    }







    return{

        render,

        clear

    };


}
