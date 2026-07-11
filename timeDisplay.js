export function createTimeDisplay(
    time
){


    const display =
    document.createElement("div");



    display.style.position =
    "absolute";


    display.style.top =
    "10px";


    display.style.right =
    "10px";


    display.style.zIndex =
    "30";


    display.style.color =
    "white";


    display.style.fontSize =
    "18px";


    display.style.fontFamily =
    "Arial";


    display.style.background =
    "rgba(0,0,0,0.5)";


    display.style.padding =
    "8px";


    display.style.borderRadius =
    "8px";



    document.body.appendChild(
        display
    );






    // شروع مدل
    // 29 اسفند 1405 - 18:16

    const START_MINUTES =
    18 * 60 + 16;







    function update(){



        const total =

        START_MINUTES
        +
        Math.floor(
            time.getTotalMinutes()
        );





        const minutesOfDay =

        total %
        1440;





        const hour =

        Math.floor(
            minutesOfDay / 60
        );





        const minute =

        minutesOfDay %
        60;







        const day =

        Math.floor(
            total / 1440
        );






        display.textContent =

        "Day "
        +
        day
        +
        "   "
        +
        hour
        .toString()
        .padStart(2,"0")
        +
        ":"
        +
        minute
        .toString()
        .padStart(2,"0");



    }








    return {


        update


    };


}
