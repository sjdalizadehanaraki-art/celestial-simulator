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



        return {


            altitude,

            azimuth:0


        };


    }



    return {

        update

    };


}
