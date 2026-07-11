import * as THREE from "three";


export function createObserverTransform(
    observer
){



    const group =
    new THREE.Group();





    function equatorialToHorizontal(
        rightAscension,
        declination,
        hourAngle
    ){



        const lat =
        THREE.MathUtils.degToRad(
            observer.latitude
        );




        const dec =
        THREE.MathUtils.degToRad(
            declination
        );




        const H =
        THREE.MathUtils.degToRad(
            hourAngle
        );





        // ارتفاع

        const sinAlt =
        Math.sin(lat) *
        Math.sin(dec)
        +
        Math.cos(lat) *
        Math.cos(dec) *
        Math.cos(H);



        const altitude =
        Math.asin(
            sinAlt
        );






        // آزیموت

        const y =
        Math.sin(H);



        const x =
        Math.cos(H) *
        Math.sin(lat)
        -
        Math.tan(dec) *
        Math.cos(lat);




        let azimuth =
        Math.atan2(
            y,
            x
        );



        azimuth += Math.PI;






        const radius = 5;





        const position =
        new THREE.Vector3();





        position.x =
        radius *
        Math.cos(altitude) *
        Math.sin(azimuth);





        position.y =
        radius *
        Math.sin(altitude);





        position.z =
        radius *
        Math.cos(altitude) *
        Math.cos(azimuth);






        return position;



    }







    function update(){



    }







    return {


        group,

        update,

        equatorialToHorizontal


    };

}
