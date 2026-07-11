export function createTimeController(){


    // مبدأ مدل
    // اعتدال بهاری ۱۴۰۵
    // ۲۹ اسفند ۱۴۰۴ - ساعت ۱۸:۱۶

    const START_HOUR = 18;

    const START_MINUTE = 16;


    const START_TOTAL_MINUTES =

    START_HOUR * 60 +
    START_MINUTE;



    let totalMinutes =
    START_TOTAL_MINUTES;



    let speed = 1;


    let playing = true;


    let lastTime =
    performance.now();




    const YEAR_MINUTES =
    365.2422 * 1440;









    function update(){


        const now =
        performance.now();



        const delta =
        (now - lastTime) / 1000;



        lastTime = now;



        if(!playing)
            return;



        totalMinutes +=
        delta *
        speed;



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








    function reset(){


        totalMinutes =
        START_TOTAL_MINUTES;


    }









    // زمان سپری شده از اعتدال

    function getElapsedMinutes(){


        return (

            totalMinutes -
            START_TOTAL_MINUTES

        );


    }









    // حرکت روزانه خورشید
    // هر ۲۴ ساعت یک دور

    function getDailyAngle(){


        return (

            getElapsedMinutes()
            *
            360 /
            1440

        ) % 360;


    }









    // حرکت سالانه روی دایره البروج
    // صفر = اعتدال بهاری

    function getEclipticAngle(){


        return (

            getElapsedMinutes()
            *
            360 /
            YEAR_MINUTES

        ) % 360;


    }









    function getTotalMinutes(){

        return totalMinutes;

    }









    function getDay(){


        return Math.floor(

            getElapsedMinutes()
            /
            1440

        );


    }









    function getDayFraction(){


        return (

            getElapsedMinutes()
            %
            1440

        )
        /
        1440;


    }









    function getYearFraction(){


        return (

            getElapsedMinutes()
            /
            YEAR_MINUTES

        );


    }









    function getSiderealAngle(){


        return getDailyAngle();


    }









    return {


        update,

        play,

        pause,

        setSpeed,

        reset,


        getTotalMinutes,

        getElapsedMinutes,


        getDailyAngle,

        getEclipticAngle,


        getDay,

        getDayFraction,

        getYearFraction,


        getSiderealAngle


    };


}
