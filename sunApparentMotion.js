import * as THREE from "three";


import {
    getSolarVector
}
from "./astronomy.js";




export function createSunMotion(
    sun,
    time
){



    const radius = 5;





    const solarPosition =
    new THREE.Vector3();





    function update(){



        const day =
        time.getDay();





        // موقعیت سالانه خورشید
        // روی دایره البروج

        const solar =
        getSolarVector(
            day
        );





        solarPosition.set(

            solar.x,

            solar.y,

            solar.z

        );







        // زاویه حرکت روزانه

        const rotation =
        THREE.MathUtils.degToRad(

            time.getSiderealAngle()

        );







        // چرخش حول محور Z

        solarPosition.applyAxisAngle(

            new THREE.Vector3(
                0,
                0,
                1
            ),

            rotation

        );







        solarPosition.normalize();

        solarPosition.multiplyScalar(
            radius
        );







        sun.position.copy(

            solarPosition

        );



    }








    return {


        update


    };


}
