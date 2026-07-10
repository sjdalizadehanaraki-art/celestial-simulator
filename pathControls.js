alert("PATH CONTROL LOADED");
export function createPathControls(trail){


    const container =
    document.createElement("div");


    container.style.marginTop =
    "10px";



    const toggleButton =
    document.createElement("button");


    toggleButton.textContent =
    "☑ Show Sun Path";



    toggleButton.onclick = ()=>{


        trail.toggle();



        if(trail.isVisible()){

            toggleButton.textContent =
            "☑ Show Sun Path";

        }
        else{

            toggleButton.textContent =
            "☐ Show Sun Path";

        }


    };




    const clearButton =
    document.createElement("button");


    clearButton.textContent =
    "🗑 Clear Path";



    clearButton.onclick = ()=>{


        trail.clear();


    };



    container.appendChild(
        toggleButton
    );


    container.appendChild(
        clearButton
    );



    document.body.appendChild(
        container
    );


}
