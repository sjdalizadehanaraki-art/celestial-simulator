import * as THREE from "three";


export function createSolarPosition(
    time,
    observer
){


    const obliquity =
    THREE.MathUtils.degToRad(23.44);



    function update(){


        const year =
        time.getYearFraction();



        const day =
        time.getDayFraction();



        // میل خورشید

        const declination =
        obliquity *
        Math.sin(
            year *
            Math.PI *
            2
        );



        // زاویه ساعتی
        // ظهر = صفر

        const hourAngle =
        (
            day * 360 - 180
        )
        *
        Math.PI/180;



        const latitude =
        observer.getLatitude()
        *
        Math.PI/180;




        // ارتفاع

        const sinAlt =
        Math.sin(latitude)
        *
        Math.sin(declination)

        +

        Math.cos(latitude)
        *
        Math.cos(declination)
        *
        Math.cos(hourAngle);



        const altitude =
        Math.asin(
            sinAlt
        );





        // آزیموت واقعی

        const azimuth =
        Math.atan2(

            Math.sin(hourAngle),

            Math.cos(hourAngle)
            *
            Math.sin(latitude)
            -
            Math.tan(declination)
            *
            Math.cos(latitude)

        )
        +
        Math.PI;



        return {

            altitude,

            azimuth

        };


    }



    return {

        update

    };


}
