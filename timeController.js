export function createTimeController(){


    const DAY_SECONDS = 5;
    const YEAR_DAYS = 365;


    let playing = true;

    let speed = 1;


    let lastRealTime =
    performance.now();



    let dayOfYear = 0;


    // شروع از ساعت 18:16 اعتدال بهاری
    let timeOfDay =
    DAY_SECONDS * (18.266 / 24);



    function update(){


        const now =
        performance.now();



        const delta =
        (now - lastRealTime) / 1000;


        lastRealTime = now;



        if(!playing) return;



        timeOfDay +=
        delta * speed;



        while(
            timeOfDay >= DAY_SECONDS
        ){

            timeOfDay -= DAY_SECONDS;

            dayOfYear++;

        }



        dayOfYear =
        dayOfYear % YEAR_DAYS;



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



    return {


        update,

        play,

        pause,

        setSpeed,

        getDay,

        getDayFraction,

        getYearFraction


    };


}
