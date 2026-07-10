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



    function update(){


        const year =
        time.getYearFraction();


        const day =
        Math.floor(
            year * 365
        ) + 1;



        display.textContent =
        "Day " + day + " / 365";


    }



    return {

        update

    };


}
