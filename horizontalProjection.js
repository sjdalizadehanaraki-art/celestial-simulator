// horizontalProjection.js
//
// تبدیل altitude / azimuth به مختصات پیکسلی
//
// Azimuth:
// 0 = شمال
// 90 = شرق
// 180 = جنوب
// 270 = غرب
//
// Altitude:
// درجه بالای افق


export function createHorizontalProjection({

    width,

    height,

    latitude,

    longitude

}){


    // -------------------------
    // محدوده دید ناظر
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








    // مرکز میدان دید آزیموت

    const centerAzimuth =
    (
        minAzimuth +
        maxAzimuth
    )
    /
    2;







    function project(

        altitude,

        azimuth

    ){



        // -------------------------
        // تبدیل آزیموت
        // -------------------------


        let relativeAzimuth =
        azimuth -
        centerAzimuth;




        // جلوگیری از پرش 360 درجه


        if(relativeAzimuth > 180){

            relativeAzimuth -= 360;

        }



        if(relativeAzimuth < -180){

            relativeAzimuth += 360;

        }





        const x =
        centerX
        +
        relativeAzimuth *
        scale;







        // -------------------------
        // ارتفاع
        // -------------------------


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
