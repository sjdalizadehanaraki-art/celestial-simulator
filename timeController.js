export function createTimeController() {

    let simulationTime = 0;

    let lastRealTime = performance.now();

    let speed = 1;

    let playing = true;

    const YEAR_SECONDS = 1825;


    function update() {

        const now = performance.now();

        const delta =
            (now - lastRealTime) / 1000;

        lastRealTime = now;

        if (playing) {

            simulationTime +=
                delta * speed / YEAR_SECONDS;

            simulationTime =
                simulationTime % 1;

        }

    }


    function play() {

        playing = true;

    }


    function pause() {

        playing = false;

    }


    function setSpeed(value) {

        speed = value;

    }


    function getTime() {

        return simulationTime;

    }


    return {

        update,

        play,

        pause,

        setSpeed,

        getTime

    };

}
