// horizontalProjection.js
//
// تبدیل مختصات افقی آسمان به پیکسل
// Azimuth : محور افقی
// Altitude: محور عمودی


export function createHorizontalProjection({

    width,

    height,

    latitude,

    longitude

}){


    // -------------------------
    // محدوده دید
    // -------------------------


    const minAzimuth =
    longitude - 90;


    const maxAzimuth =
    longitude + 90;



    const minAltitude =
    latitude;


    const maxAltitude =
    latitude + 90;





    const azimuthRange =
    maxAzimuth -
    minAzimuth;



    const altitudeRange =
    maxAltitude -
    minAltitude;





    // -------------------------
    // مقیاس یکسان
    // -------------------------


    const squareSize =
    Math.min(
        width,
        height
    )
    *
    0.8;



    const scale =
    squareSize /
    Math.max(
        azimuthRange,
        altitudeRange
    );





    const viewWidth =
    azimuthRange *
    scale;



    const viewHeight =
    altitudeRange *
    scale;





    // -------------------------
    // موقعیت کادر
    // -------------------------


    const centerX =
    width / 2;



    const bottomY =
    (
        height +
        viewHeight
    )
    /
    2;



    const topY =
    bottomY -
    viewHeight;







    function project(

        altitude,

        azimuth

    ){



        const x =
        centerX
        +
        (
            azimuth -
            (
                (
                    minAzimuth +
                    maxAzimuth
                )
                /
                2
            )
        )
        *
        scale;





        const y =
        bottomY
        -
        (
            altitude -
            minAltitude
        )
        *
        scale;





        return {

            x,

            y

        };


    }







    return {


        project,


        minAzimuth,

        maxAzimuth,


        minAltitude,

        maxAltitude,


        scale,


        centerX,


        topY,

        bottomY,


        viewWidth,

        viewHeight


    };


}
