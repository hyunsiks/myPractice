const check = document.getElementsByClassName("checkbar");
const arrow1 = document.getElementById("arrow1");
const searchbutton = document.getElementsByClassName("searchbutton");

for(var i=0; i<check.length; i++){

    check[i].addEventListener("mouseover", function(e){
        e.target.style.opacity = "1.0";
    });
    check[i].addEventListener("mouseout", function(e){

        if(e.target.dataset.value != 2){

            console.log(e.target.style);
            e.target.style.opacity = "0.5";
        }

    });

    check[i].addEventListener("click", function(e){
        console.log(e.target.dataset.value);
        for(var j=0; j<check.length; j++){
            check[j].dataset.value = "1";
            check[j].style = "opacity : 0.5; text-shadow : none;"
        }
        e.target.dataset.value = "2";
        e.target.style.opacity = "1.0";
        e.target.style.color = "red";
        e.target.style = "opacity : 1.0; text-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px yellow;"
    });

}

for(var i=0; i<searchbutton.length; i++){

    searchbutton[i].addEventListener("mouseover", function(e){
        e.target.style.opacity = "1.0";
    });
    searchbutton[i].addEventListener("mouseout", function(e){

        if(e.target.dataset.value != 2){

            console.log(e.target.style);
            e.target.style.opacity = "0.5";
        }
    });

    searchbutton[i].addEventListener("click", function(e){
        console.log("과연 : ", e.target.dataset.value);
        for(var j=0; j<searchbutton.length; j++){
            searchbutton[j].dataset.value = "1";
            searchbutton[j].style = "opacity : 0.5; text-shadow : none;"
        }
        e.target.dataset.value = "2";
        e.target.style.opacity = "1.0";;
        e.target.style.color = "red";
        e.target.style = "opacity : 1.0; text-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px yellow;"
    });

}
