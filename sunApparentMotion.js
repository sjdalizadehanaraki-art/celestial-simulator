import * as THREE from "three";


export function createSunMotion(
    sun,
    time
){


    const radius = 5;


    const dailyPeriod = 5; 
    // یک روز شبیه‌سازی = 5 ثانیه


    const yearlyPeriod = 1825;
    // یک سال شبیه‌سازی = 1825 ثانیه


    const obliquity =
    THREE.MathUtils.degToRad(23.44);



    function update(){


        const t =
        time.getTime();



        // زاویه حرکت روزانه

        const dailyAngle =
        (t / dailyPeriod) *
        Math.PI *
        2;



        // زاویه حرکت سالانه

        const yearlyAngle =
        (t / yearlyPeriod) *
        Math.PI *
        2;



        // میل خورشید

        const declination =
        obliquity *
        Math.sin(yearlyAngle);



        const x =
        radius *
        Math.cos(declination) *
        Math.cos(dailyAngle);



        const y =
        radius *
        Math.cos(declination) *
        Math.sin(dailyAngle);



        const z =
        radius *
        Math.sin(declination);



        sun.position.set(
            x,
            y,
            z
        );


    }



    return {

        update

    };


}
