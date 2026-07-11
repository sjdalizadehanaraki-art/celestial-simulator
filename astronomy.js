const OBLIQUITY = 23.43928;



export function getSolarCoordinates(day){

    const lambda =
    degToRad(
        (day / 365) * 360
    );



    const epsilon =
    degToRad(
        OBLIQUITY
    );



    const rightAscension =
    Math.atan2(

        Math.cos(epsilon) *
        Math.sin(lambda),

        Math.cos(lambda)

    );



    const declination =
    Math.asin(

        Math.sin(epsilon) *
        Math.sin(lambda)

    );



    return{

        longitude:
        radToDeg(lambda),

        rightAscension:
        normalize360(
            radToDeg(rightAscension)
        ),

        declination:
        radToDeg(declination)

    };

}



function degToRad(value){

    return value * Math.PI / 180;

}



function radToDeg(value){

    return value * 180 / Math.PI;

}



function normalize360(value){

    while(value < 0)
        value += 360;

    while(value >= 360)
        value -= 360;

    return value;

}
