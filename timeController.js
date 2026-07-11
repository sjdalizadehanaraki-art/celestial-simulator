export function createTimeController(){


    // شروع مدل:
    // 29 اسفند 1404
    // ساعت 18:16
    // اعتدال بهاری 1405


    const START_HOUR = 18;

    const START_MINUTE = 16;



    let totalMinutes =
    START_HOUR * 60 +
    START_MINUTE;



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
        START_HOUR * 60 +
        START_MINUTE;

    }








    function getTotalMinutes(){

        return totalMinutes;

    }








    function getDailyAngle(){


        return (

            totalMinutes *
            360 /
            1440

        ) % 360;


    }








    function getEclipticAngle(){


        return (

            totalMinutes *
            360 /
            YEAR_MINUTES

        ) % 360;


    }








    function getDay(){


        return Math.floor(

            totalMinutes /
            1440

        );


    }








    function getDayFraction(){


        return (

            totalMinutes %
            1440

        )
        /
        1440;


    }








    function getYearFraction(){


        return (

            totalMinutes /
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

        getDailyAngle,

        getEclipticAngle,


        getDay,

        getDayFraction,

        getYearFraction,


        getSiderealAngle


    };


}
