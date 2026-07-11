export function createHorizontalGrid(){


    const canvas =
    document.createElement("canvas");


    canvas.width =
    window.innerWidth;


    canvas.height =
    window.innerHeight;



    canvas.style.position =
    "absolute";


    canvas.style.left =
    "0";


    canvas.style.top =
    "0";


    canvas.style.display =
    "none";


    canvas.style.zIndex =
    "5";


    document.body.appendChild(
        canvas
    );



    const ctx =
    canvas.getContext("2d");



    let visible = false;



    function draw(observer){


        if(!visible)
        return;



        const w =
        canvas.width;


        const h =
        canvas.height;



        ctx.clearRect(
            0,
            0,
            w,
            h
        );



        ctx.fillStyle =
        "black";


        ctx.fillRect(
            0,
            0,
            w,
            h
        );



        // -----------------------
        // مربع مختصات
        // -----------------------

        const size =
        Math.min(
            w,
            h
        )*0.8;



        const left =
        (w-size)/2;


        const top =
        (h-size)/2;



        ctx.strokeStyle =
        "white";


        ctx.lineWidth = 2;


        ctx.strokeRect(
            left,
            top,
            size,
            size
        );



        // محور افقی

        ctx.beginPath();

        ctx.moveTo(
            left,
            top+size/2
        );
