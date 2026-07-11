export function createTimeDisplay(time){



    const div =
    document.createElement("div");



    div.style.position =
    "absolute";


    div.style.top =
    "20px";


    div.style.right =
    "20px";


    div.style.zIndex =
    "20";


    div.style.color =
    "white";


    div.style.fontFamily =
    "Arial";


    div.style.fontSize =
    "18px";


    div.style.background =
    "rgba(0,0,0,0.5)";


    div.style.padding =
    "10px";


    div.style.borderRadius =
    "10px";



    document.body.appendChild(
        div
    );






    // مبدا شبیه سازی

    const startYear =
    1405;


    const startMonth =
    12;


    const startDay =
    29;


    const startHour =
    18;


    const startMinute =
    16;








    function update(){



        const totalMinutes =
        time.getTotalMinutes();





        const date =
        calculateDate(
            totalMinutes
        );





        div.innerHTML =

        `
        تاریخ:
        ${date.year}/${date.month}/${date.day}
        <br>

        ساعت:
        ${pad(date.hour)}:${pad(date.minute)}

        <br>

        دقیقه شبیه سازی:
        ${Math.floor(totalMinutes)}

        `;



    }








    function pad(value){

        return String(value)
        .padStart(2,"0");

    }









    function calculateDate(minutes){



        let remaining =
        minutes;





        let hour =
        startHour;


        let minute =
        startMinute;



        minute +=
        Math.floor(remaining % 60);



        hour +=
        Math.floor(
            remaining / 60
        );






        let extraDays =
        Math.floor(
            hour / 24
        );


        hour =
        hour % 24;







        let year =
        startYear;


        let month =
        startMonth;


        let day =
        startDay;





        day +=
        extraDays;







        // تقویم ساده 365 روزه
        // برای مدل نجومی کافی است

        const monthDays =
        [
            31,
            31,
            31,
            31,
            31,
            31,
            30,
            30,
            30,
            30,
            30,
            29
        ];







        while(
            day >
            monthDays[month-1]
        ){


            day -=
            monthDays[month-1];


            month++;



            if(month > 12){


                month = 1;


                year++;


            }


        }







        return {


            year,

            month,

            day,

            hour,

            minute


        };



    }







    return {


        update


    };


}
