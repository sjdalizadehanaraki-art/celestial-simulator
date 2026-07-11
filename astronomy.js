// astronomy.js


const OBLIQUITY =
23.43928;



// طول دایره البروج خورشید
// 0 درجه = اعتدال بهاری (+X)

export function getSolarLongitude(day){


    return (
        day /
        365
    )
    *
    360;


}







// تبدیل طول دایره البروج
// به مختصات استوایی

export function eclipticToEquatorial(
    longitude
){


    const lambda =
    degToRad(
        longitude
    );


    const epsilon =
    degToRad(
        OBLIQUITY
    );



    const x =
    Math.cos(lambda);



    const y =
    Math.cos(epsilon)
    *
    Math.sin(lambda);



    const z =
    Math.sin(epsilon)
    *
    Math.sin(lambda);





    return {

        x,

        y,

        z

    };


}







// خروجی کامل خورشید

export function getSolarVector(day){


    const longitude =
    getSolarLongitude(
        day
    );



    return eclipticToEquatorial(
        longitude
    );


}







function degToRad(value){


    return value *
    Math.PI /
    180;


}
