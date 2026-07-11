// horizontalProjection.js
//
// نمایش آسمان از دید ناظر
//
// محور افقی:
// چپ  = شرق
// وسط = جنوب
// راست = غرب
//
// محور عمودی:
// پایین = افق
// بالا = سمت‌الرأس


export function createHorizontalProjection({

    width,

    height,

    latitude

}){



    // محدوده دید افقی
    const minAzimuth = 90;   // شرق

    const maxAzimuth = 270;  // غرب






    // ارتفاع
    //
    // افق = 0
    // سمت الرأس = 90


    const minAltitude = 0;


    const maxAltitude = 90;







    const azimuthRange =
    maxAzimuth -
    minAzimuth;



    const altitudeRange =
    maxAltitude -
    minAltitude;







    const squareSize =
    Math.min(
        width,
        height
    )
    *
    0.75;







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



        // --------------------
        // محور افقی
        // --------------------
        //
        // شرق 90
        // جنوب 180
        // غرب 270


        const relativeAzimuth =

        azimuth -
        180;





        const x =

        centerX +

        relativeAzimuth *
        scale;








        // --------------------
        // ارتفاع
        // --------------------


        const y =

        bottomY -

        altitude *
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
