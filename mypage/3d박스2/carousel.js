const carousel = document.getElementsByClassName('panel');

let size = 200;
console.log(carousel.length);
for(let i =0; i < carousel.length-1; i++){
   
    carousel[i].addEventListener('click', check);
}

/*translateZ 값 알기위한것*/
console.log(100/Math.tan(Math.PI/4));
let tan = 100/Math.tan(Math.PI/4);

console.log(carousel.length);

function check(e) {
    tan += 10;
    for(let i =0; i < carousel.length-1; i++){
        // carousel[i].style.transform = `rotateY: ${i*45} translate: ${tan}`
        
    //    carousel[i].setAttribute("transform", `rotateY(${i*45}) translateZ(${tan})`);
    //    carousel[i].style.transform.match(rotateY(`${i*45}`));
    //    carousel[i].transform.translateZ = `${tan}`;

    //    carousel[i].setAttribute("style", "background-color: 'red'");
    //    carousel[i].style.background = 'red';
    //    carousel[i].style.transform = `rotateY(${i*45}) translate(${tan});`
    //   console.log(carousel[i].getAttribute("transform"));
    }
}
