export function createTimeControls(
    time,
    trail,
    localSky
){


    const panel =
    document.createElement("div");


    panel.style.position = "absolute";
    panel.style.top = "20px";
    panel.style.left = "20px";
    panel.style.zIndex = "20";
    panel.style.background = "rgba(0,0,0,0.5)";
    panel.style.padding = "10px";
    panel.style.borderRadius = "10px";
    panel.style.color = "white";
    panel.style.fontFamily = "Arial";
    panel.style.display = "flex";
    panel.style.flexDirection = "column";
    panel.style.gap = "8px";





    const row1 =
    document.createElement("div");


    row1.style.display =
    "flex";


    row1.style.flexWrap =
    "wrap";


    row1.style.gap =
    "5px";






    const row2 =
    document.createElement("div");


    row2.style.display =
    "flex";


    row2.style.gap =
    "5px";







    // -------------------------
    // Play
    // -------------------------


    const play =
    document.createElement("button");


    play.textContent =
    "▶ Play";


    play.onclick = ()=>{

        time.play();

    };


    row1.appendChild(play);






    // -------------------------
    // Pause
    // -------------------------


    const pause =
    document.createElement("button");


    pause.textContent =
    "⏸ Pause";


    pause.onclick = ()=>{

        time.pause();

    };


    row1.appendChild(pause);







    // -------------------------
    // سرعت
    // -------------------------


    const speeds =
    [
        0.1,
        0.5,
        1,
        2,
        5,
        10
    ];



    speeds.forEach(value=>{


        const button =
        document.createElement("button");


        button.textContent =
        "×" + value;



        button.onclick = ()=>{

            time.setSpeed(value);

        };



        row1.appendChild(button);


    });









    // -------------------------
    // نمایش مسیر
    // -------------------------


    const pathButton =
    document.createElement("button");


    let pathVisible = true;



    pathButton.textContent =
    "☑ Show Sun Path";



    pathButton.onclick = ()=>{


        pathVisible =
        !pathVisible;



        // مسیر سه بعدی

        if(pathVisible){

            trail.show();

        }
        else{

            trail.hide();

        }





        // مسیر دو بعدی

        localSky.togglePath();





        if(pathVisible){

            pathButton.textContent =
            "☑ Show Sun Path";

        }
        else{

            pathButton.textContent =
            "☐ Show Sun Path";

        }



    };



    row2.appendChild(pathButton);







    // -------------------------
    // پاک کردن مسیر
    // -------------------------


    const clearButton =
    document.createElement("button");


    clearButton.textContent =
    "🗑 Clear Path";



    clearButton.onclick = ()=>{


        trail.clear();


        localSky.clearPath();



    };



    row2.appendChild(clearButton);







    // -------------------------
    // تغییر حالت نمایش
    // -------------------------


    const viewButton =
    document.createElement("button");



    viewButton.textContent =
    "☀ Local Sky";



    let localVisible = false;



    viewButton.onclick = ()=>{


        localVisible =
        !localVisible;



        if(localVisible){


            localSky.show();


            viewButton.textContent =
            "🌍 3D View";


        }
        else{


            localSky.hide();


            viewButton.textContent =
            "☀ Local Sky";


        }



    };



    row2.appendChild(viewButton);






    panel.appendChild(row1);


    panel.appendChild(row2);



    document.body.appendChild(
        panel
    );


}
