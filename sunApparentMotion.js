import * as THREE from "three";

export function createSunMotion(
    sun,
    time
){

    const radius = 5;

    const obliquity =
    THREE.MathUtils.degToRad(
        23.44
    );


    function update(){

        const yearAngle =
        time.getYearFraction() *
        Math.PI * 2;


        const dayAngle =
        time.getDayFraction() *
        Math.PI * 2;


        const declination =
        Math.asin(
            Math.sin(obliquity) *
            Math.sin(yearAngle)
        );


        const rightAscension =
        yearAngle;


        const hourAngle =
        rightAscension +
        dayAngle;


        const x =
        radius *
        Math.cos(declination) *
        Math.cos(hourAngle);


        const y =
        radius *
        Math.cos(declination) *
        Math.sin(hourAngle);


        const z =
        radius *
        Math.sin(declination);


        sun.position.set(
            x,
            y,
            z
        );

    }


    return{

        update

    };

}
