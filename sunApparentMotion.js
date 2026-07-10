import * as THREE from "three";


export function createSunMotion(sun){


    const radius = 5;


    const dailySpeed =
    (Math.PI * 2) / 5;


    const yearlySpeed =
    (Math.PI * 2) / 1825;


    const obliquity =
    THREE.MathUtils.degToRad(23.44);



    const start =
    performance.now();



    function update(){


        const now =
        performance.now();


        const t =
        (now - start) / 1000;



        // حرکت روزانه زمین

        const dailyAngle =
        dailySpeed * t;



        // موقعیت سال در مدار

        const yearlyAngle =
        yearlySpeed * t;



        // میل خورشید

        const declination =
        obliquity *
        Math.sin(yearlyAngle);



        // مختصات روی کره سماوی

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


        requestAnimationFrame(
            update
        );


    }


    update();


}
