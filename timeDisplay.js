export function createTimeDisplay(time){



    const div =
    document.createElement("div");



    div.style.position =
    "absolute";



    div.style.bottom =
    "10px";



    div.style.left =
    "50%";



    div.style.transform =
    "translateX(-50%)";



    div.style.zIndex =
    "20";



    div.style.color =
    "white";



    div.style.fontFamily =
    "Arial";



    div.style.fontSize =
    "14px";



    div.style.background =
    "rgba(0,0,0,0.6)";



    div.style.padding =
    "8px 20px";



    div.style.borderRadius =
    "10px";



    div.style.whiteSpace =
    "nowrap";



    div.style.textAlign =
    "center";



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
        ${date.year}/${pad(date.month)}/${pad(date.day)}
        &nbsp;&nbsp;
        ${pad(date.hour)}:${pad(date.minute)}
        `;



    }









    function pad(value){


        return String(value)
        .padStart(2,"0");


    }









    function calculateDate(minutes){



        let total =
        Math.floor(minutes);





        let minute =
        startMinute +
        (total % 60);





        let hour =
        startHour +
        Math.floor(total / 60);





        let extraDays =
        Math.floor(hour / 24);



        hour =
        hour % 24;







        let year =
        startYear;



        let month =
        startMonth;



        let day =
        startDay +
        extraDays;







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
