export function createTimeDisplay(time){


    const display =
    document.createElement("div");


    display.style.position =
    "absolute";

    display.style.bottom =
    "20px";

    display.style.left =
    "20px";

    display.style.zIndex =
    "20";


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



    const months =
    [
        {
            name:"فروردین",
            days:31
        },
        {
            name:"اردیبهشت",
            days:31
        },
        {
            name:"خرداد",
            days:31
        },
        {
            name:"تیر",
            days:31
        },
        {
            name:"مرداد",
            days:31
        },
        {
            name:"شهریور",
            days:31
        },
        {
            name:"مهر",
            days:30
        },
        {
            name:"آبان",
            days:30
        },
        {
            name:"آذر",
            days:30
        },
        {
            name:"دی",
            days:30
        },
        {
            name:"بهمن",
            days:30
        },
        {
            name:"اسفند",
            days:29
        }

    ];




    function update(){


        const dayNumber =
        time.getDay();



        let remaining =
        dayNumber;



        let month =
        0;



        while(
            remaining >= months[month].days
        ){

            remaining -=
            months[month].days;


            month++;

        }



        const day =
        remaining + 1;



        const fraction =
        time.getDayFraction();



        const totalHours =
        fraction * 24;



        const hour =
        Math.floor(
            totalHours
        );



        const minute =
        Math.floor(
            (totalHours-hour)*60
        );



        const second =
        Math.floor(
            (
            (
            totalHours-hour
            )*60-minute
            )*60
        );



        display.textContent =


        "۱۴۰۵ / " +

        months[month].name +

        " / " +

        day +

        "   " +

        hour
        .toString()
        .padStart(2,"0")

        +

        ":" +

        minute
        .toString()
        .padStart(2,"0")

        +

        ":" +

        second
        .toString()
        .padStart(2,"0");


    }



    return {

        update

    };


}
