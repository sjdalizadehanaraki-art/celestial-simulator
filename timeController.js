export function createTimeController(){


    const DAY_SECONDS = 5;
    const YEAR_DAYS = 365;


    let playing = true;

    let speed = 1;


    let lastRealTime =
    performance.now();



    // روز 0 = اعتدال بهاری
    // شروع: 29 اسفند ساعت 18:16

    let dayOfYear = 0;



    let timeOfDay =
    DAY_SECONDS *
    (18.2666666667 / 24);







    function update(){


        const now =
        performance.now();



        const delta =
        (now - lastRealTime) / 1000;



        lastRealTime = now;



        if(!playing)
            return;





        timeOfDay +=
        delta * speed;






        while(
            timeOfDay >= DAY_SECONDS
        ){

            timeOfDay -= DAY_SECONDS;

            dayOfYear++;

        }






        while(
            timeOfDay < 0
        ){

            timeOfDay += DAY_SECONDS;

            dayOfYear--;

        }






        while(
            dayOfYear >= YEAR_DAYS
        ){

            dayOfYear -= YEAR_DAYS;

        }






        while(
            dayOfYear < 0
        ){

            dayOfYear += YEAR_DAYS;

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







    function getDay(){

        return dayOfYear;

    }







    function getDayFraction(){


        return (

            timeOfDay /
            DAY_SECONDS

        );


    }







    function getYearFraction(){


        return (

            dayOfYear +
            getDayFraction()

        )
        /
        YEAR_DAYS;


    }








    function getSolarHour(){


        return (

            getDayFraction()
            *
            24

        );


    }









    // زاویه حرکت روزانه کره سماوی
    // لحظه شروع = اعتدال بهاری = صفر درجه

    function getSiderealAngle(){



        const startFraction =
        18.2666666667 / 24;




        let angle =

        (

            getDayFraction()
            -
            startFraction

        )
        *
        360;






        while(angle < 0){

            angle += 360;

        }





        while(angle >= 360){

            angle -= 360;

        }





        return angle;


    }







    return {


        update,


        play,


        pause,


        setSpeed,


        getDay,


        getDayFraction,


        getYearFraction,


        getSolarHour,


        getSiderealAngle


    };


}
