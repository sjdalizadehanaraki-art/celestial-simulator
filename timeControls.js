export function createTimeControls(
    time,
    trail,
    localSky,
    observerCamera
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





    const row =
    document.createElement("div");


    row.style.display =
    "flex";


    row.style.flexWrap =
    "wrap";


    row.style.gap =
    "5px";







    // Play

    const play =
    document.createElement("button");


    play.textContent =
    "▶ Play";


    play.onclick = ()=>{

        time.play();

    };


    row.appendChild(play);







    // Pause

    const pause =
    document.createElement("button");


    pause.textContent =
    "⏸ Pause";


    pause.onclick = ()=>{

        time.pause();

    };


    row.appendChild(pause);








    // Speed

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



        row.appendChild(button);


    });







    panel.appendChild(row);









    // =========================
    // Show Sun Path
    // =========================


    const pathButton =
    document.createElement("button");


    pathButton.textContent =
    "☑ Show Sun Path";



    pathButton.onclick = ()=>{


        if(trail){

            trail.toggle();

        }



        if(localSky){

            localSky.togglePath();

        }


    };



    panel.appendChild(
        pathButton
    );








    // =========================
    // Clear Path
    // =========================


    const clearButton =
    document.createElement("button");


    clearButton.textContent =
    "🗑 Clear Path";



    clearButton.onclick = ()=>{


        if(trail){

            trail.clear();

        }



        if(localSky){

            localSky.clearPath();

        }


    };



    panel.appendChild(
        clearButton
    );









    // =========================
    // Local Sky
    // =========================


    const localButton =
    document.createElement("button");


    let localVisible = false;



    localButton.textContent =
    "☀ Local Sky";



    localButton.onclick = ()=>{


        localVisible =
        !localVisible;



        if(localVisible){


            localSky.show();


            localButton.textContent =
            "🌍 3D View";


        }
        else{


            localSky.hide();


            localButton.textContent =
            "☀ Local Sky";


        }


    };



    panel.appendChild(
        localButton
    );









    // =========================
    // Observer View
    // =========================


    const observerButton =
    document.createElement("button");


    let observerVisible = false;



    observerButton.textContent =
    "👁 Observer View";



    observerButton.onclick = ()=>{


        observerVisible =
        !observerVisible;



        if(observerVisible){


            observerCamera.enter();



            observerButton.textContent =
            "🌍 3D View";


        }
        else{


            observerCamera.exit();



            observerButton.textContent =
            "👁 Observer View";


        }


    };



    panel.appendChild(
        observerButton
    );








    document.body.appendChild(
        panel
    );


}
