export function createTimeController(){


    let running = false;


    let speed = 1;


    let simTime = 0;


    let lastTime = performance.now();



    function update(){

        const now =
        performance.now();


        const realDelta =
        (now - lastTime) / 1000;


        lastTime = now;



        if(running){

            simTime +=
            realDelta * speed;

        }


    }



    function play(){

        running = true;

    }



    function pause(){

        running = false;

    }



    function setSpeed(value){

        speed = value;

    }



    function getTime(){

        return simTime;

    }



    function reset(){

        simTime = 0;

    }



    return {

        update,

        play,

        pause,

        setSpeed,

        getTime,

        reset

    };


}
