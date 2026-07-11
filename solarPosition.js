// solarPosition.js
//
// مدل جدید:
// خورشید از اعتدال بهاری شروع می‌شود
// حرکت سالانه روی دایره البروج
// خروجی: مختصات کروی خورشید


export function createSolarPosition(
    time,
    observer
){



    const obliquity =
    23.44 *
    Math.PI /
    180;






    function update(){



        // زاویه سالانه خورشید

        const lambda =
        time.getEclipticAngle()
        *
        Math.PI /
        180;







        // مختصات دایره البروجی تبدیل شده
        // به استوایی

        const x =
        Math.cos(lambda);



        const y =
        Math.cos(obliquity)
        *
        Math.sin(lambda);



        const z =
        Math.sin(obliquity)
        *
        Math.sin(lambda);







        return {


            x,

            y,

            z


        };


    }







    return {


        update


    };


}
