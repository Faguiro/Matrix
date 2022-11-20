var c = document.getElementById("c");
var content_wrapper = document.getElementById("content-wrapper");

var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var matrix = "BHYUMR";
//matrix = matrix.split("");
var font_size = 30;
var columns = c.width / font_size;
var drops = [];

for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    c.height -=1;
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);
    

    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px folha";
    for (var i = 0; i < drops.length; i++) {
        
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
            
        drops[i]++;
    }
    
}
setInterval(draw, 105);

            
