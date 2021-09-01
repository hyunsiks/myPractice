class Particle{
    
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.radius = Math.random() + 0.3;
        this.speed = Math.random() * 3 + 0.5;

    }
    draw() {
        // console.log("확인");
        cm.context.beginPath();
        cm.context.fillStyle='red';
        cm.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        cm.context.fill();
        
    }
}

class Line{

    constructor(x, y){
        this.x = x;
        this.y = y;

        this.height = 200;

        this.particles = [];
        for(let i = 0; i < 30; i++){
            this.particles.push(new Particle(this.x, this.y));
        }
    }

    draw(){
        cm.context.beginPath();
        cm.context.moveTo(this.x, this.y);
        cm.context.lineTo(this.x, this.y - this.height);
        cm.context.stroke();
        
        let particle;

        for(let i =0; i < this.particles.length; i++){
           
            particle = this.particles[i];
            particle.y -= particle.speed;
            if(particle.y < this.y - this.height){
                particle.y = this.y;
            }
            particle.draw();
        }
    }
}

class Light{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.height = 300;
        this.width = 20;
        
        this.lines = [];
        for(let i = 0; i < 5; i++){
            console.log("확인");
            console.log(this.y);
            this.lines.push(new Line(
                this.x + (Math.random()*this.width - this.width*0.5), 
                this.y
            ));
         }
           
        cm.y = canvasContainer.clientHeight;
        this.gradient = cm.context.createLinearGradient(0, (cm.y - (this.height + (cm.y - this.y))), 0, this.y);
        this.gradient.addColorStop(0, 'red');
        
        
    }

    draw(){

        cm.context.save();
        cm.context.filter = 'blur(20px)';
        cm.context.fillStyle = this.gradient;
        cm.context.beginPath();
        cm.context.ellipse(
            this.x,
            this.y,
            this.width*2,
            this.width*0.5,
            0,
            0,
            Math.PI*2
        );
        cm.context.fill();
       

        cm.context.beginPath();
        cm.context.filter = 'blur(5px)';
        cm.context.ellipse(
            this.x,
            this.y,
            this.width,
            this.width*0.25,
            0,
            0,
            Math.PI*2
        );
        cm.context.fill();
        cm.context.restore();

        let line;
        for(let i =0; i < this.lines.length; i++){

            line = this.lines[i];         
            line.draw();
        }
    }
}
