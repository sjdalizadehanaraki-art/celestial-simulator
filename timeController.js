export function createTimeController(){


    let totalMinutes = 0;


    let speed = 1;


    let playing = true;


    let lastTime =
    performance.now();




    const YEAR_MINUTES =
    365.2422 * 1440;




    // ساعت شروع مدل
    // 29 اسفند 1405 - 18:16

    const START_HOUR =
    18.266;




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

        speed = value;

    }







    function getTotalMinutes(){

        return totalMinutes;

    }







    // زاویه روزانه نسبت به لحظه شروع

    function getDailyAngle(){


        return (

            totalMinutes *
            360 /
            1440

        );


    }






    // زاویه روزانه مطلق شروع مدل

    function getStartDailyAngle(){


        return (

            START_HOUR *
            360 /
            24

        );


    }







    function getEclipticAngle(){


        return (

            totalMinutes *
            360 /
            YEAR_MINUTES

        );


    }






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

        getStartDailyAngle,


        getEclipticAngle,


        getDay,

        getDayFraction,

        getYearFraction,


        getSiderealAngle


    };

}
