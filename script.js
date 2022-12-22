class Animal {
    constructor(id, nome, variation){
        this.nome = nome;
        this.variation = variation;
        this.id = id;
    }

    falar() {
        console.log(this.nome + ' emite um barulho.');
    }
}

class Pokemon extends Animal {
    render() {
        $("#pokemon")[0].setAttribute('src', `pokemons/${this.nome}/${this.nome}_${this.variation}.gif`);       
        $('#c').show() 
    }
    r() {
        $("#pokemon")[0].setAttribute('src', `pokemons/${this.nome}.gif`);  
        $('#c').show()     
    }
}


function Matrix() {

    var c = document.getElementById("c");
    var content_wrapper = document.getElementById("content-wrapper");

    var ctx = c.getContext("2d");
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    var matrix = "תרגם טקסט ומסמכים באופן מיידי. תרגומים מדויקים למשתמשים בודדים או לצוותים. מיליוני אנשים מתרגמים עם המילון מדי יוםabcdefghijklmnopqrstyvxz@#$%&*!即時翻譯文本和文檔。為單個用戶或團隊提供準確的翻譯。每天有數百萬人用字典翻譯";
    //matrix = matrix.split("");
    var font_size = 10;
    var columns = c.width / font_size;
    var drops = [];

    for (var x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#0F0";
        ctx.font = font_size + "px arial";
        for (var i = 0; i < drops.length; i++) {
            var text = matrix[Math.floor(Math.random() * matrix.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);
            if (drops[i] * font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(draw, 35);
    setTimeout(function () {
        clearInterval(draw);
    }, 15000);
}

/* function togglePokemon(variation){
    $("#pokemon")[0].setAttribute('src', `pokemons/pikachu/pikachu_${variation}.gif`);
} */

$(document).ready(function () {
    Matrix();
    let variation = 1
    let nome = "pikachu";
    let id = 25;
    let pokemon = new Pokemon(id, nome, variation);
    let index=1
    let i=0
    $(".button.next").click(function (event) {
        event.preventDefault();
        $('#c').slideToggle()
        index++;
        event.preventDefault();
       
        pokemon= new Pokemon(id, `giphy (${index})` , variation);
        $('#c').slideToggle()
        pokemon.r()

    })

    $(".button.prev").click(function (event) {
        event.preventDefault();
        variation=1
         $('#c').slideToggle()

        let cards = ['charmander',"blastoise","rhydon","pikachu"]
        i++

        if (i>cards.length-1){
            i=0
        }
       
        $('#c').slideToggle()
        nome=cards[i]
        pokemon= new Pokemon(id, nome , variation);
        pokemon.render()
    })

    $("#pokemon").click(function (event) {
        event.preventDefault();
        
        variation++
        if (variation > 3) {
            variation = 1
        }
        $('#c').show()
        pokemon= new Pokemon(id, nome , variation);
        pokemon.render();

    })
});


