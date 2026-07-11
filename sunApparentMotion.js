import * as THREE from "three";


export function createSunMotion(
    sun,
    time
){


    const radius = 5;


    let startHour = null;



    function update(){



        const day =
        time.getDay();




        const hours =
        time.getDayFraction()
        *
        24;





        // اولین لحظه اجرا = محور X

        if(startHour === null){

            startHour = hours;

        }





        // میل خورشید
        // day=0 یعنی اعتدال بهاری

        const declination =
        23.44 *
        Math.sin(

            THREE.MathUtils.degToRad(
                day *
                360 /
                365
            )

        );



        const dec =
        THREE.MathUtils.degToRad(
            declination
        );






        // زاویه روزانه
        // چرخش حول محور Z

        const H =
        THREE.MathUtils.degToRad(

            (hours - startHour)
            *
            15

        );







        // دستگاه مختصات پروژه:
        //
        // X = اعتدال بهاری
        // Z = قطب شمال سماوی


        const x =
        radius *
        Math.cos(dec)
        *
        Math.cos(H);



        const y =
        radius *
        Math.cos(dec)
        *
        Math.sin(H);



        const z =
        radius *
        Math.sin(dec);







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
