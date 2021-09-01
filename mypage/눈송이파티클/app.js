
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let snowflakes = []; // 눈송이 객체를 담는 배열


// function setup() {
//   createCanvas(400, 600);
//   fill(240);
//   noStroke();
// }
let frameCount = 0;

function draw() {

  context.clearRect(0, 0, canvas.width, canvas.height);
  // background('brown');
  let t = frameCount++ / 60; // 시간 업데이트

  // 매 프라임마다 무작위 개수의 눈송이 생성
  for (let i = 0; i < Math.random()*+1; i++) {
    snowflakes.push(new snowflake()); // 눈송이 객체 추가
  }
  snowflakes.push(new snowflake());
  // for 반복문을 사용하여 눈송이 반복
  for (let flake of snowflakes) {
    // console.log("나옵니다1");
    flake.update(t); // 눈송이 위치 업데이트
    flake.display(); // 눈송이 그리기
    
  }
  
  requestAnimationFrame(draw);
}
draw();

// snowflake 클래스
function snowflake() {
  // 좌표값 초기화
  this.posX = 0;
  this.posY = Math.random()*-50+1;
  this.initialangle = Math.random()*(2 * Math.PI);
  this.size = Math.random()*4+2;

  // 방사형 눈송이의 반지름
  // 눈송이를 화면에 고루 퍼뜨리기 위해 선택
  this.radius = Math.sqrt(Math.random()*(Math.pow(canvas.width / 2, 2)));
  this.update = function(time) {
    // 원형을 따라다니는 x 위치
    let w = 0.2; // 각속도
    let angle = w * time + this.initialangle;
    this.posX = canvas.width / 2 + this.radius * Math.sin(angle);

    // 크기가 다른 눈송이가 미묘하게 다른 y 속도로 떨어집니다.
    this.posY += Math.pow(this.size, 0.7);
    // this.posY += 1;

    // 화면 하단을 지나친 눈송이는 삭제
    if (this.posY > canvas.height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };
  let count = 0;
  this.display = function() {

    context.beginPath();
    context.fillStyle = 'white';
    context.arc(this.posX, this.posY, this.size, 0, Math.PI*2);
    context.fill();
    context.closePath();
    
    
  };
}
