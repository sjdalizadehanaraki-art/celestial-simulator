export function createTimeController(){


    let totalMinutes = 0;


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
        (now-lastTime)/1000;


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

        speed=value;

    }





    function getTotalMinutes(){

        return totalMinutes;

    }






    function getDailyAngle(){

        return (
            totalMinutes *
            360 /
            1440
        );

    }





    function getEclipticAngle(){

        return (
            totalMinutes *
            360 /
            YEAR_MINUTES
        );

    }







    // سازگاری با فایل های قبلی

    function getDay(){

        return Math.floor(
            totalMinutes / 1440
        );

    }




    function getDayFraction(){

        return (
            totalMinutes % 1440
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


        getTotalMinutes,

        getDailyAngle,

        getEclipticAngle,


        getDay,

        getDayFraction,

        getYearFraction,

        getSiderealAngle


    };


}
