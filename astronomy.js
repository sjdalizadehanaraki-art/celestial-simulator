// astronomy.js

const OBLIQUITY = 23.43928;



export function getSolarLongitude(day){

    return (day / 365) * 360;

}



export function getSolarDeclination(day){

    const lambda =
    degToRad(
        getSolarLongitude(day)
    );



    const epsilon =
    degToRad(
        OBLIQUITY
    );



    return radToDeg(

        Math.asin(

            Math.sin(epsilon) *
            Math.sin(lambda)

        )

    );

}



function degToRad(value){

    return value * Math.PI / 180;

}



function radToDeg(value){

    return value * 180 / Math.PI;

}
