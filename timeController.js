export function createTimeControls(time, trail){


    const panel =
    document.createElement("div");


    panel.style.position =
    "absolute";

    panel.style.top =
    "20px";

    panel.style.left =
    "20px";

    panel.style.zIndex =
    "100";


    panel.style.display =
    "flex";

    panel.style.flexDirection =
    "column";


    panel.style.gap =
    "5px";



    const play =
    document.createElement("button");

    play.textContent =
    "▶ Play";


    play.onclick = ()=>{

        time.play();

    };



    const pause =
    document.createElement("button");

    pause.textContent =
    "⏸ Pause";


    pause.onclick = ()=>{

        time.pause();

    };



    panel.appendChild(play);

    panel.appendChild(pause);



    const speeds =
    [
        0.1,
        0.5,
        1,
        2,
        5,
        10
    ];



    speeds.forEach(speed=>{


        const button =
        document.createElement("button");


        button.textContent =
        "×" + speed;


        button.onclick = ()=>{

            time.setSpeed(speed);

        };


        panel.appendChild(button);


    });





    // نمایش مسیر خورشید

    const pathButton =
    document.createElement("button");


    pathButton.textContent =
    "☑ Show Path";


    pathButton.onclick = ()=>{


        trail.toggle();


        if(trail.isVisible()){

            pathButton.textContent =
            "☑ Show Path";

        }
        else{

            pathButton.textContent =
            "☐ Show Path";

        }

    };



    panel.appendChild(
        pathButton
    );




    // پاک کردن مسیر

    const clearButton =
    document.createElement("button");


    clearButton.textContent =
    "🗑 Clear Path";


    clearButton.onclick = ()=>{


        trail.clear();


    };


    panel.appendChild(
        clearButton
    );



    document.body.appendChild(
        panel
    );


}
