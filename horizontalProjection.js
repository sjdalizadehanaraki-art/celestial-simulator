// horizontalProjection.js
//
// تبدیل مختصات افقی خورشید به پیکسل
//
// Azimuth:
// 90  = شرق
// 180 = جنوب
// 270 = غرب
//
// در صفحه:
// جنوب وسط
// شرق سمت راست
// غرب سمت چپ
//
// Altitude:
// از افق به بالا


export function createHorizontalProjection({

    width,

    height,

    latitude

}){


    // -------------------------
    // محدوده دید
    // -------------------------


    const minAzimuth = 90;

    const maxAzimuth = 270;



    const minAltitude = 0;



    // بیشترین ارتفاع ممکن آسمان
    // برای ناظر با عرض جغرافیایی latitude

    const maxAltitude =
    Math.min(
        90,
        latitude + 90
    );





    const azimuthRange =
    maxAzimuth -
    minAzimuth;



    const altitudeRange =
    maxAltitude -
    minAltitude;






    // -------------------------
    // مقیاس برابر
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
    // جای کادر
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
        // محور افقی
        // -------------------------


        const relativeAzimuth =
        azimuth - 180;



        const x =
        centerX
        +
        relativeAzimuth *
        scale;







        // -------------------------
        // محور ارتفاع
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
