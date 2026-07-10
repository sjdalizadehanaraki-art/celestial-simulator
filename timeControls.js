alert("TIME CONTROLS OK");

export function createTimeControls(
    time,
    trail
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
    panel.style.gap = "5px";



    // Play

    const play =
    document.createElement("button");

    play.textContent =
    "▶ Play";


    play.onclick = ()=>{

        time.play();

    };



    // Pause

    const pause =
    document.createElement("button");

    pause.textContent =
    "⏸ Pause";


    pause.onclick = ()=>{

        time.pause();

    };



    panel.appendChild(play);

    panel.appendChild(pause);



    // Speed

    const label =
    document.createElement("div");

    label.textContent =
    "Speed";


    panel.appendChild(label);



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


        panel.appendChild(button);


    });



    // Show / Hide Path

    const pathButton =
    document.createElement("button");


    pathButton.textContent =
    "☑ Show Sun Path";


    pathButton.onclick = ()=>{


        trail.toggle();


        if(trail.isVisible()){

            pathButton.textContent =
            "☑ Show Sun Path";

        }
        else{

            pathButton.textContent =
            "☐ Show Sun Path";

        }


    };


    panel.appendChild(pathButton);




    // Clear Path

    const clearButton =
    document.createElement("button");


    clearButton.textContent =
    "🗑 Clear Path";


    clearButton.onclick = ()=>{


        trail.clear();


    };


    panel.appendChild(clearButton);



    document.body.appendChild(
        panel
    );


}
