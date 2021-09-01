import {Visual} from './visual.js';

class App{
    constructor(){

        console.log("확인1");

        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        WebFont.load({
            
            google: {
              families: ['Hind:700']
            },
            fontactive: () =>{

                this.Visual = new Visual();

                window.addEventListener('resize', this.resize.bind(this), false);
                this.resize();

                requestAnimationFrame(this.animate.bind(this));
            }
          });
    }

    resize() {
  
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.Visual.show(this.stageWidth, this.stageHeight);
    }

    animate(){
        
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ctx.globalCompositeOperation = 'lighter';

        this.Visual.animate(this.ctx);
    }
}

window.onload = () =>{
    new App();
}