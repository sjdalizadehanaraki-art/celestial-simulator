// horizontalProjection.js
//
// تبدیل مختصات افقی خورشید به پیکسل
//
// سیستم دید ناظر:
// سمت چپ  = شرق (Azimuth 90)
// وسط     = جنوب (Azimuth 180)
// سمت راست= غرب (Azimuth 270)


export function createHorizontalProjection({

    width,

    height,

    latitude

}){


    // -------------------------
    // محدوده آزیموت
    // -------------------------

    const minAzimuth = 90;

    const maxAzimuth = 270;



    // -------------------------
    // محدوده ارتفاع
    // -------------------------

    const minAltitude =
    latitude;


    const maxAltitude =
    Math.min(
        180,
        latitude + 90
    );





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
    // محل کادر
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



        // -------------------------
        // آزیموت
        //
        // شرق = چپ
        // جنوب = وسط
        // غرب = راست
        // -------------------------


        let relativeAzimuth =
        azimuth - 180;



        if(relativeAzimuth > 180){

            relativeAzimuth -= 360;

        }



        if(relativeAzimuth < -180){

            relativeAzimuth += 360;

        }




        const x =
        centerX
        -
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
