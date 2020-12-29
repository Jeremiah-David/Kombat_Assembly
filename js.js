document.addEventListener('DOMContentLoaded', () => {
    console.log("Hellyah Domloaded!")
})

// let p1Health =document.querySelector(".player1Health")
// // let p2Health =document.querySelector(".player2Health")
// // let p1Profile =document.querySelector(".player1Profile")
// // let p2Profile =document.querySelector(".player2Profile")
// // // let p2Sprite =document.querySelector("#p2Sprite")
// // // let sprite =document.querySelector(".sprite")
// let playerPic = document.querySelector(".whoTurn");
// let p1SpriteStart = document.querySelector(".sprite1");
const p1Stand = "images/cat/felicia-gem-run.gif";
let p1hit = "images/cat/felicia-gem-dizzy.gif"
let player1Sprite =document.getElementById("p1Sprite");
let health1image =document.querySelector(".p1Health")
let p1bar = "/home/jj/Desktop/general_assembly/FightTurn!/images/healthbar.png"
const p2Stand = "images/Chunlie/chunchill.gif";
let p2hit = "images/Chunlie/chunli-gem-dizzy.gif"
let player2Sprite =document.getElementById("p2Sprite");
let health1img =document.querySelector(".p1Healthimg")
let health2img =document.querySelector(".p2Healthimg")
let p2bar = "/home/jj/Desktop/general_assembly/FightTurn!/images/healthbar.png"
// let p1A1 = document.querySelector("#p1a1button") 
//my buttons player 1
let p1A1img = "images/cat/felicia-gem-specialcombo4.gif"
let p1a1but = document.querySelector("#p1a1button")
let p1A2img =  "images/cat/felicia-goldhammer.gif"
let p1a2but = document.querySelector("#p1a2button")
let p1A3img = "images/cat/felicia-megaman.gif"
let p1a3but = document.querySelector("#p1a3button")
let p1A4img =  "images/cat/felicia-rolling.gif"
let p1a4but = document.querySelector("#p1a4button")
let p1A5img =  "images/cat/multicat.gif"
let p1a5but = document.querySelector("#p1a5button")
let p1WinSprite = "images/cat/felicatransform.gif"
let p2WinSprite ="images/Chunlie/chunWIN.gif"
let p1LoseSprite = "images/cat/felicia-kittybox.gif"
let p2LoseSprite = "images/Chunlie/chunli-gem-down.gif"


//player 2 buttons

let p2A1img = "images/Chunlie/chunball2.gif"
let p2a1but = document.querySelector("#p2a1button")
let p2A2img =  "images/Chunlie/chunfireball4.gif"
let p2a2but = document.querySelector("#p2a2button")
let p2A3img = "images/Chunlie/chungGun3.gif"
let p2a3but = document.querySelector("#p2a3button")
let p2A4img =  "images/Chunlie/chunli-gem-stomp.gif"
let p2a4but = document.querySelector("#p2a4button")
let p2A5img =  "images/Chunlie/chunSpin1.gif"
let p2a5but = document.querySelector("#p2a5button")
// Fight button!!!
let fightb = document.querySelector(".fightb")
// Health
let p1Health = 100
let p2Health = 100
let health100 = "images/fullheart.jpg"
let health75 = "images/2heart.jpg"
let health50 = "images/halfheart.jpg"
let health25 = "images/almostdead.jpg"
let health0 = "images/deadheart.jpg" 

// ?? debugger
let p1aa1

// Win Screen
let winScreen = document.querySelector(".winner")
// let p1WIN = "images/p1wins.jpg"
// let p2WIN = "images/player2wins.jpeg"
// // create characters


let player1 = {
    sprite: player1Sprite,
    healthbar: health100,
    health: 100,
}

let player2 = {
    sprite: player2Sprite,
    healthbar2: health2img,
    p2Health: 100,
}
function test () {
    player1Sprite.src = p1Stand
   
    player2Sprite.src = p2Stand
    // health21image.src = p2bar
  console.log(player1)
}



p1a1but.addEventListener("click", (e) => {
    player1Attack = p1a1but.getAttribute("data-value")
    player1Sprite.src = p1A1img
    p1aa1 = setTimeout(p1returnNormal,5000);

})

p1a2but.addEventListener("click", (e) => {
    player1Attack = p1a2but.getAttribute("data-value")
    player1Sprite.src = p1A2img
    setTimeout(p1returnNormal,1500);
})

p1a3but.addEventListener("click", (e) => {
    player1Attack = p1a3but.getAttribute("data-value")
    player1Sprite.src = p1A3img
    setTimeout(p1returnNormal,1800);
})

p1a4but.addEventListener("click", (e) => {
    player1Attack = p1a4but.getAttribute("data-value")
    player1Sprite.src = p1A4img
    setTimeout(p1returnNormal,4000);
})

p1a5but.addEventListener("click", (e) => {
    player1Attack = p1a5but.getAttribute("data-value")
    player1Sprite.src = p1A5img
    setTimeout(p1returnNormal,3500);
})

p2a1but.addEventListener("click", (e) => {
    player2Attack = p2a1but.getAttribute("data-value")
    player2Sprite.src = p2A1img
    setTimeout(p2returnNormal,4000);
})

p2a2but.addEventListener("click", (e) => {
    player2Attack = p2a2but.getAttribute("data-value")
    player2Sprite.src = p2A2img
    setTimeout(p2returnNormal,1500);
})

p2a3but.addEventListener("click", (e) => {
    player2Attack = p2a3but.getAttribute("data-value")
    player2Sprite.src = p2A3img
    setTimeout(p2returnNormal,4000);
})

p2a4but.addEventListener("click", (e) => {
    player2Attack = p2a4but.getAttribute("data-value")
    player2Sprite.src = p2A4img
    setTimeout(p2returnNormal,4000);
})
p2a5but.addEventListener("click", (e) => {
    player2Attack = p2a5but.getAttribute("data-value")
    player2Sprite.src = p2A5img
    setTimeout(p2returnNormal,4500);
})
fightb.addEventListener("click", 
() => {
    if (player1Attack == player2Attack) {
        console.log("Block");
    } else if (player1Attack == 0 && player2Attack == 1 ||player1Attack == 0 && player2Attack == 2)  {
        p2Health = p2Health-25 
        onHitp2 () 
        p2healhb ()
        p1healhb ()
    } else if (player1Attack == 0 && player2Attack == 3 ||player1Attack == 0 && player2Attack == 4)  {
        p1Health = p1Health-25 
        onHitp1 ()
        p2healhb ()
        p1healhb ()
    } else if (player1Attack == 1 && player2Attack == 2 ||player1Attack == 1 && player2Attack == 3)  {
        p2Health = p2Health-25 
        onHitp2 () 
        p2healhb ()
        p1healhb ()
    } else if (player1Attack == 1 && player2Attack == 4 ||player1Attack == 1 && player2Attack == 0)  {
        p1Health = p1Health-25 
        onHitp1 ()
        p2healhb ()
        p1healhb ()
    } else if (player1Attack == 2 && player2Attack == 3 ||player1Attack == 2 && player2Attack == 4)  {
        p2Health = p2Health-25 
        onHitp2 () 
        p2healhb ()
        p1healhb ()
    } else if (player1Attack == 2 && player2Attack == 0 ||player1Attack == 2 && player2Attack == 1)  {
        console.log ("workds")
        p1Health = p1Health-25 
        onHitp1 ()
        p2healhb ()
        p1healhb ()
    } else if (player1Attack == 3 && player2Attack == 4 ||player1Attack == 3 && player2Attack == 0)  {
        p2Health = p2Health-25 
        onHitp2 () 
        p2healhb ()
        p1healhb ()
    } else if (player1Attack == 3 && player2Attack == 1 ||player1Attack == 3 && player2Attack == 2)  {
        p1Health = p1Health-25 
        onHitp1 ()
        onHitp2 () 
        p2healhb ()
        p1healhb ()
    } else if (player1Attack == 4 && player2Attack == 0 ||player1Attack == 4 && player2Attack == 1)  {
        p2Health = p2Health-25 
        onHitp2 () 
        p2healhb ()
        p1healhb ()
    } else if (player1Attack == 4 && player2Attack == 2 ||player1Attack == 4 && player2Attack == 3)  {
        p1Health = p1Health-25 
        onHitp1 ()
        p2healhb ()
        p1healhb ()
    }
})

function p2healhb () {
    if (p2Health == 75) { 
    health2img.src = health75
    console.log("Healthbarworks")
    } else if (p2Health == 50) {
        health2img.src = health50
    } else if (p2Health == 25) {
        health2img.src = health25
        console.log("healthat25")
    } else if (p2Health == 0) {
        health2img.src = health0
        // player2Sprite.src = p2LoseSprite
        // player1Sprite.src = p1winSprite
    }}

function p1healhb () {
    if (p1Health == 75) { 
    health1img.src = health75
    console.log("player1Healthbarworks")
    } else if (p1Health == 50) {
        health1img.src = health50
    } else if (p1Health == 25) {
        health1img.src = health25
        console.log("healthat25")
    } else if (p1Health == 0) {
        health1img.src = health0
    }}

function onHitp1 () {
    if (p1Health == 75 || p1Health == 50 || p1Health == 25){
    player1Sprite.src = p1hit
    
        

    setTimeout(p1returnNormal,5000);
} else if (p1Health == 0) {
    player1Sprite.src = p1LoseSprite
    player2Sprite.src = p2WinSprite
    clearTimeout(p1returnNormal)
    clearTimeout(p2returnNormal)
}}

function p1returnNormal () {
    player1Sprite.src = p1Stand
}

function onHitp2 () {
    if (p2Health == 75 || p2Health == 50 || p2Health == 25) {
    player2Sprite.src = p2hit
    setTimeout(p2returnNormal,1000);
} else if (p2Health == 0) {
    player2Sprite.src = p2LoseSprite
    player1Sprite.src = p1WinSprite
}
}
function p2returnNormal () {
    player2Sprite.src = p2Stand

}






  //   console.log()
test ()
