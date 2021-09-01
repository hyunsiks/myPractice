const cm = {
 
    xxx: 0,
    yyy: 0,
    direction: 1,
    imgElem: new Image(),
    eventCount : 0,
    imgBirdArr : [],
    imgBirdArr2 : [],

};


cm.imgElem.src = './assets/image/snowboard.png';
const imgBird1 = new Image();
imgBird1.src = './assets/image/bird/벡터위3.png';
const imgBird2 = new Image();
imgBird2.src = './assets/image/bird/벡터중간3.png';
const imgBird3 = new Image();
imgBird3.src = './assets/image/bird/벡터중간아래3.png';
const imgBird4 = new Image();
imgBird4.src = './assets/image/bird/벡터아래3.png';
cm.imgBirdArr = [imgBird1, imgBird2, imgBird3, imgBird4];

const imgBird5 = new Image();
imgBird5.src = './assets/image/bird/벡터위3반대.png';
const imgBird6 = new Image();
imgBird6.src = './assets/image/bird/벡터중간3반대.png';
const imgBird7 = new Image();
imgBird7.src = './assets/image/bird/벡터중간아래3반대.png';
const imgBird8 = new Image();
imgBird8.src = './assets/image/bird/벡터아래3반대.png';
cm.imgBirdArr2 = [imgBird5, imgBird6, imgBird7, imgBird8];

const punchBirdImg = new Image();
punchBirdImg.src = './assets/image/bird/까악2.png'

let birdCount = 0;
let birdX = 0;
let birdY = 100;
let birdDirection = 1;
let punchBird = 0;
let punchBirdCount = 0;

const birdCanvas = document.querySelector('#birdCanvas');
const birdCtx = birdCanvas.getContext('2d');

//두번째 페이지 이벤트
//이벤트 위임(박스)
const flyingbox = document.querySelector('.flyingbox');
const frame2Main = document.querySelector('.frame2Main');

birdCanvas.onclick = birdClick;
flyingbox.onmouseover = boxesOver;
flyingbox.onmouseout = boxesOut;
flyingbox.onclick = boxesClick;


function birdClick(e){

    let bound =birdCanvas.getBoundingClientRect();
 
    let valueX = (e.clientX - bound.left) * (birdCanvas.width / bound.width);
    
    if((valueX-100 >= birdX-100 && valueX-100 <= birdX+100) && (e.clientY-70 < 130 && e.clientY-70 > 70)){
        punchBird = 1;
        if(birdDirection == 1){
            birdDirection = 2;
        }else{
            birdDirection = 1;
        }
        
    }
}

function boxesOver(e){

    let boxElem = e.target;
    while(!boxElem.classList.contains('flying')){
        boxElem = boxElem.parentNode;
        if(boxElem.nodeName == 'BODY'){
            boxElem == null;;
            return null;
        }
    }
    for(let i =0; i <boxElem.children.length; i++){
        boxElem.children[i].classList.add('mouseoverBoxes');
    }
}
function boxesOut(e){

    let boxElem = e.target;
    while(!boxElem.classList.contains('flying')){
        boxElem = boxElem.parentNode;
        if(boxElem.nodeName == 'BODY'){
            boxElem == null;;
            return null;
        }
    }
    for(let i =0; i <boxElem.children.length; i++){
        boxElem.children[i].classList.remove('mouseoverBoxes');
    }
}
function boxesClick(e){

    let boxElem = e.target;
    while(!boxElem.classList.contains('flying')){
        boxElem = boxElem.parentNode;
        if(boxElem.nodeName == 'BODY'){
            boxElem == null;;
            return null;
        }
    }

    for(let i =0; i <boxElem.children.length; i++){
        boxElem.children[i].classList.add('mouseoverBoxes');
    }

    if(e.target.classList.contains('flying')){
        let check = frame2Main.classList;
        if(check.contains('logocube') ||check.contains('logocube2') ||check.contains('logocube3') ||check.contains('logocube4') ||
            check.contains('logocube5') ||check.contains('logocube6') ||check.contains('logocube7') ){

            frame2Main.classList.remove('logocube');
            frame2Main.classList.remove('logocube2');
            frame2Main.classList.remove('logocube3');
            frame2Main.classList.remove('logocube4');
            frame2Main.classList.remove('logocube5');
            frame2Main.classList.remove('logocube6');
            frame2Main.classList.remove('logocube7');

            if(!boxElem.classList.contains('clickingBoxes')){

                frame2Main.classList.add(`logo${e.target.classList[0]}`);
            }
        }else{

            if(!boxElem.classList.contains('clickingBoxes')){

                frame2Main.classList.add(`logo${e.target.classList[0]}`);
            }
        }
        

        
    }else{
        let check = frame2Main.classList;

        if(check.contains('logocube') ||check.contains('logocube2') ||check.contains('logocube3') ||check.contains('logocube4') ||
            check.contains('logocube5') ||check.contains('logocube6') ||check.contains('logocube7') ){

            frame2Main.classList.remove('logocube');
            frame2Main.classList.remove('logocube2');
            frame2Main.classList.remove('logocube3');
            frame2Main.classList.remove('logocube4');
            frame2Main.classList.remove('logocube5');
            frame2Main.classList.remove('logocube6');
            frame2Main.classList.remove('logocube7');

            if(!boxElem.classList.contains('clickingBoxes')){

                frame2Main.classList.add(`logo${e.target.parentNode.classList[0]}`);
            }
        }else{

            if(!boxElem.classList.contains('clickingBoxes')){

                frame2Main.classList.add(`logo${e.target.parentNode.classList[0]}`);
            }
        }
    }
    
    boxElem.classList.toggle('clickingBoxes');
    
}

    
function draw(){
    
    birdCtx.clearRect(0, 0, birdCanvas.width, birdCanvas.height);

    if(birdDirection == 1){
        birdX += 1;

        if(birdCount < 10){
    
            // birdCtx.fillRect(50,50, 100,100);
            
            birdCtx.drawImage(cm.imgBirdArr[0], birdX, birdY);
        }else if(birdCount < 20 && birdCount >= 10){
            
            // birdCtx.fillRect(50,50, 100,100);
            birdCtx.drawImage(cm.imgBirdArr[1], birdX, birdY);
        }else if(birdCount < 30 && birdCount >= 20){
            
            // birdCtx.fillRect(50,50, 100,100);
            birdCtx.drawImage(cm.imgBirdArr[2], birdX, birdY);
        }else if(birdCount < 30 && birdCount >= 30){
            
            // birdCtx.fillRect(50,50, 100,100);
            birdCtx.drawImage(cm.imgBirdArr[3], birdX, birdY);
        }else{
            birdCount = 0;
        }

        if(birdX >= birdCanvas.width){
            birdDirection = 2;
        }

    }else{
        birdX -= 1;
        
        if(birdCount < 10){
            
            birdCtx.drawImage(cm.imgBirdArr2[0], birdX, birdY);
        }else if(birdCount < 20 && birdCount >= 10){
            
            birdCtx.drawImage(cm.imgBirdArr2[1], birdX, birdY);
        }else if(birdCount < 30 && birdCount >= 20){
            
            birdCtx.drawImage(cm.imgBirdArr2[2], birdX, birdY);
        }else if(birdCount < 30 && birdCount >= 30){
            
            birdCtx.drawImage(cm.imgBirdArr2[3], birdX, birdY);
        }else{
            birdCount = 0;
        }
        
        if(birdX <= -300){
            birdDirection = 1;
        }
    }

    if(punchBird == 1){
        birdCtx.drawImage(punchBirdImg, birdX + 20, birdY + 10);
        punchBirdCount++;
        if(punchBirdCount > 10){
            punchBirdCount = 0;
            punchBird = 0;
        }
    }


    birdCount++;
    requestAnimationFrame(draw)

}

draw();

    //새 끝========================================================================================
 
