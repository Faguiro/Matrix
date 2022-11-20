var c = document.getElementById("c");
var content_wrapper = document.getElementById("content-wrapper");

var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
//var matrix = "תרגם טקסט ומסמכים באופן מיידי. תרגומים מדויקים למשתמשים בודדים או לצוותים. מיליוני אנשים מתרגמים עם המילון מדי יוםabcdefghijklmnopqrstyvxz@#$%&*!即時翻譯文本和文檔。為單個用戶或團隊提供準確的翻譯。每天有數百萬人用字典翻譯";
var matrix = "abfnhkyirASDF"
var font_size = 44;
var columns = c.width / font_size;
var drops = [];

for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "purple";
    ctx.font = font_size + "px DevilEmoji";
    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 65);
