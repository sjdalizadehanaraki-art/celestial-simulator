export function createPathControls(trail){


    const button =
    document.createElement("button");


    button.textContent =
    "☑ Show Sun Path";


    button.style.marginTop =
    "10px";


    button.onclick = ()=>{


        trail.toggle();


        if(trail.isVisible()){

            button.textContent =
            "☑ Show Sun Path";

        }

        else{

            button.textContent =
            "☐ Show Sun Path";

        }


    };



    document.body.appendChild(
        button
    );


}
