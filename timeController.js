export function createTimeController(){



    // هر دقیقه شبیه سازی

    let totalMinutes = 0;



    // سرعت شبیه سازی

    let speed = 1;



    let playing = true;



    let lastTime =
    performance.now();





    // طول شبیه سازی
    // 5 سال

    const TOTAL_MINUTES =
    5 *
    365.2422 *
    1440;









    function update(){



        const now =
        performance.now();



        const delta =
        (now - lastTime)
        /
        1000;



        lastTime = now;




        if(!playing)
            return;






        // تبدیل ثانیه واقعی به دقیقه شبیه سازی

        totalMinutes +=
        delta *
        speed;







        if(totalMinutes >= TOTAL_MINUTES){

            totalMinutes = 0;

        }



    }









    function play(){

        playing = true;

    }






    function pause(){

        playing = false;

    }






    function setSpeed(value){

        speed = value;

    }








    // کل زمان گذشته از مبدا
    // بر حسب دقیقه

    function getTotalMinutes(){


        return totalMinutes;


    }









    // حرکت روزانه

    function getDailyAngle(){


        return (

            totalMinutes
            *
            360
            /
            1440

        );

    }








    // حرکت سالانه

    function getEclipticAngle(){



        return (

            totalMinutes
            *
            360
            /
            (365.2422 * 1440)

        );

    }









    return {


        update,


        play,


        pause,


        setSpeed,


        getTotalMinutes,


        getDailyAngle,


        getEclipticAngle



    };

}
