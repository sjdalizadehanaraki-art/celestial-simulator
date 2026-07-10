export function createTimeDisplay(time){


    const display =
    document.createElement("div");


    display.style.position = "absolute";
    display.style.bottom = "20px";
    display.style.left = "20px";
    display.style.zIndex = "20";

    display.style.background =
    "rgba(0,0,0,0.5)";

    display.style.padding =
    "10px";

    display.style.borderRadius =
    "10px";

    display.style.color =
    "white";

    display.style.fontFamily =
    "Arial";

    display.style.fontSize =
    "16px";



    document.body.appendChild(
        display
    );

    alert("TIME DISPLAY OK");



    function update(){


        const yearFraction =
        time.getYearFraction();



        const totalDays =
        yearFraction * 365;



        const day =
        Math.floor(totalDays) + 1;



        const dayFraction =
        totalDays -
        Math.floor(totalDays);



        const totalSeconds =
        dayFraction * 24 * 60 * 60;



        const hour =
        Math.floor(
            totalSeconds / 3600
        );


        const minute =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


        const second =
        Math.floor(
            totalSeconds % 60
        );



        display.textContent =
        `Day ${day} / 365   ` +
        `${hour.toString().padStart(2,"0")}:` +
        `${minute.toString().padStart(2,"0")}:` +
        `${second.toString().padStart(2,"0")}`;


    }



    return {

        update

    };


}
