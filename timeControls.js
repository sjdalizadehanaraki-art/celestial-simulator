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

    row2.style.flexWrap =
    "wrap";

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
    // Speed
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
        "×"+value;


        button.onclick = ()=>{

            time.setSpeed(value);

        };


        row1.appendChild(button);


    });









    // -------------------------
    // Sun Path
    // -------------------------


    const pathButton =
    document.createElement("button");


    let pathVisible = true;



    pathButton.textContent =
    "☑ Show Sun Path";



    pathButton.onclick = ()=>{


        pathVisible =
        !pathVisible;



        if(pathVisible){

            trail.show();

        }
        else{

            trail.hide();

        }



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



    row2.appendChild(
        pathButton
    );







    // -------------------------
    // Clear Path
    // -------------------------


    const clearButton =
    document.createElement("button");


    clearButton.textContent =
    "🗑 Clear Path";



    clearButton.onclick = ()=>{


        trail.clear();


        localSky.clearPath();


    };


    row2.appendChild(
        clearButton
    );









    // -------------------------
    // Local Sky
    // -------------------------


    const localButton =
    document.createElement("button");


    localButton.textContent =
    "☀ Local Sky";


    let localVisible =
    false;



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



    row2.appendChild(
        localButton
    );








    // -------------------------
    // Observer View
    // -------------------------


    const observerButton =
    document.createElement("button");


    observerButton.textContent =
    "👁 Observer View";


    let observerActive =
    false;



    observerButton.onclick = ()=>{


        observerActive =
        !observerActive;



        if(observerActive){


            observerCamera.enter();



            observerButton.textContent =
            "🌍 Earth View";


        }

        else{


            observerCamera.exit();



            observerButton.textContent =
            "👁 Observer View";


        }



    };



    row2.appendChild(
        observerButton
    );







    panel.appendChild(
        row1
    );


    panel.appendChild(
        row2
    );



    document.body.appendChild(
        panel
    );


}
