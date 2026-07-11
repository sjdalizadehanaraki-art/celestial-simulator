export function createHorizontalScene(){


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



    function show(){

        visible = true;

        canvas.style.display =
        "block";

    }



    function hide(){

        visible = false;

        canvas.style.display =
        "none";

    }



    function clear(){


        ctx.fillStyle =
        "black";


        ctx.fillRect(

            0,

            0,

            canvas.width,

            canvas.height

        );

    }



    return{

        canvas,

        ctx,

        show,

        hide,

        clear,

        get visible(){

            return visible;

        }

    };

}
