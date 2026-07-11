export function createHorizontalRenderer(scene){


    function render(observer){


        if(!scene.visible)
        return;



        scene.clear();



        const ctx =
        scene.ctx;



        const size =
        Math.min(

            scene.canvas.width,

            scene.canvas.height

        )*0.8;



        const left =
        (scene.canvas.width-size)/2;



        const top =
        (scene.canvas.height-size)/2;



        // مربع

        ctx.strokeStyle =
        "white";


        ctx.lineWidth = 2;


        ctx.strokeRect(

            left,

            top,

            size,

            size

        );



        // محور افقی

        ctx.beginPath();

        ctx.moveTo(

            left,

            top+size/2

        );

        ctx.lineTo(

            left+size,

            top+size/2

        );

        ctx.stroke();



        // محور عمودی

        ctx.beginPath();

        ctx.moveTo(

            left+size/2,

            top

        );

        ctx.lineTo(

            left+size/2,

            top+size

        );

        ctx.stroke();



        ctx.fillStyle =
        "white";


        ctx.font =
        "22px Arial";



        ctx.fillText(

            "E",

            left-30,

            top+size/2+8

        );



        ctx.fillText(

            "W",

            left+size+10,

            top+size/2+8

        );



        ctx.fillText(

            "H",

            left+size/2-8,

            top-15

        );



        ctx.font =
        "18px Arial";



        ctx.fillText(

            "Lat : "
            +
            observer.getLatitude()
            .toFixed(2)
            +
            "°",

            left,

            top+size+40

        );



        ctx.fillText(

            "Lon : "
            +
            observer.getLongitude()
            .toFixed(2)
            +
            "°",

            left,

            top+size+65

        );


    }



    return{

        render

    };

}
