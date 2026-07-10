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



        const dayFraction =
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
            dayFraction * 360
            -180
        )
        *
        Math.PI/180;



        const lat =
        observer.getLatitude()
        *
        Math.PI/180;



        // ارتفاع خورشید

        const sinAltitude =
        Math.sin(lat)
        *
        Math.sin(declination)

        +

        Math.cos(lat)
        *
        Math.cos(declination)
        *
        Math.cos(hourAngle);



        const altitude =
        Math.asin(
            sinAltitude
        );



        // سمت خورشید

        const azimuth =
        Math.atan2(

            Math.sin(hourAngle),

            Math.cos(hourAngle)
            *
            Math.sin(lat)

            -

            Math.tan(declination)
            *
            Math.cos(lat)

        );



        return {

            altitude,

            azimuth

        };


    }



    return {

        update

    };


}
