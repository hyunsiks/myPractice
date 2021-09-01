const cm = {
    canvas: undefined,
    context: undefined,
    x: 0,
    y: 0,
};

(function () {

    const canvasContainer = document.getElementById('canvasContainer');
    cm.canvas = document.getElementById('canvasRazer');
    cm.context = cm.canvas.getContext('2d');


    function resize(){
        cm.x = canvasContainer.clientWidth;
        cm.y = canvasContainer.clientHeight;
        cm.canvas.width = cm.x;
        cm.canvas.height = cm.y;
    }
    
    function setup(){
        resize();
        draw();
    }
    
    const light = new Light(100,200);
    function draw(){

        cm.context.clearRect(0, 0, cm.x, cm.y);
        

        light.draw();
        
        requestAnimationFrame(draw);
    }

    window.addEventListener('load', setup);
    window.addEventListener('resize', resize);

})();