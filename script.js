/*==================================================
SCRIPT.JS PART 3.1
PREMIUM HEART RAIN + STARS + GLOW
==================================================*/

const heartRain = document.getElementById("heartRain");
const stars = document.getElementById("stars");
const floatingGlow = document.getElementById("floatingGlow");



/*==============================
HEART RAIN
==============================*/

const hearts = [
"❤",
"💖",
"💗",
"💕",
"💘",
"💝",
"💞",
"💓"
];



function createHeart(){

const heart=document.createElement("div");

heart.className="heart";



const size=Math.random();



if(size<0.33){

heart.classList.add("small");

}

else if(size<0.66){

heart.classList.add("medium");

}

else{

heart.classList.add("large");

}



heart.innerHTML=

hearts[Math.floor(Math.random()*hearts.length)];



heart.style.left=

Math.random()*100+"vw";



heart.style.animationDuration=

6+Math.random()*8+"s";



heart.style.animationDelay=

Math.random()*5+"s";



heart.style.opacity=

0.3+Math.random();



heart.style.filter=

`drop-shadow(0 0 ${8+Math.random()*15}px rgba(255,0,170,.7))`;



heartRain.appendChild(heart);

}



/* 150 HEART */

for(let i=0;i<150;i++){

createHeart();

}





/*==============================
STARS
==============================*/

function createStar(){

const star=document.createElement("div");



star.className="star";



const random=Math.random();



if(random<0.33){

star.classList.add("tiny");

}

else if(random<0.66){

star.classList.add("small");

}

else{

star.classList.add("big");

}



star.style.left=

Math.random()*100+"vw";



star.style.top=

Math.random()*100+"vh";



star.style.animationDuration=

1+Math.random()*4+"s";



star.style.animationDelay=

Math.random()*4+"s";



stars.appendChild(star);

}



for(let i=0;i<180;i++){

createStar();

}





/*==============================
GLOW PARTICLES
==============================*/

function glowParticle(){



const glow=document.createElement("div");



glow.className="glowParticle";



const s=

8+Math.random()*30;



glow.style.width=s+"px";

glow.style.height=s+"px";



glow.style.left=

Math.random()*100+"vw";



glow.style.animationDuration=

12+Math.random()*18+"s";



glow.style.animationDelay=

Math.random()*8+"s";



floatingGlow.appendChild(glow);

}



for(let i=0;i<80;i++){

glowParticle();

}




/*==================================================
SCRIPT.JS PART 3.2
LOVE TREE + HEART LEAVES
==================================================*/

const heartLeaves =
document.getElementById("heartLeaves");

const fallingLeaves =
document.getElementById("fallingLeaves");



const treeHearts=[
"❤️",
"💖",
"💕",
"💗",
"💘",
"💝"
];



function createLeaf(x,y,size){

const leaf=document.createElement("div");

leaf.className="leaf";

leaf.innerHTML=

treeHearts[
Math.floor(Math.random()*treeHearts.length)
];

leaf.style.left=x+"px";

leaf.style.top=y+"px";

leaf.style.fontSize=size+"px";

leaf.style.animationDuration=

(2+Math.random()*3)+"s";

heartLeaves.appendChild(leaf);

}



/*============================
TOP HEARTS
============================*/

for(let i=0;i<70;i++){

createLeaf(

150+Math.random()*120,

40+Math.random()*120,

20+Math.random()*18

);

}



/*============================
LEFT HEARTS
============================*/

for(let i=0;i<45;i++){

createLeaf(

60+Math.random()*110,

120+Math.random()*180,

18+Math.random()*15

);

}



/*============================
RIGHT HEARTS
============================*/

for(let i=0;i<45;i++){

createLeaf(

250+Math.random()*100,

120+Math.random()*180,

18+Math.random()*15

);

}



/*============================
CENTER HEARTS
============================*/

for(let i=0;i<60;i++){

createLeaf(

130+Math.random()*150,

160+Math.random()*220,

18+Math.random()*20

);

}



/*============================
FALLING HEART LEAF
============================*/

function fallingLeaf(){

const leaf=document.createElement("div");

leaf.className="fallLeaf";

leaf.innerHTML=

treeHearts[
Math.floor(Math.random()*treeHearts.length)
];

leaf.style.left=

(120+Math.random()*180)+"px";

leaf.style.top="120px";

leaf.style.fontSize=

(18+Math.random()*15)+"px";

leaf.style.animationDuration=

(6+Math.random()*5)+"s";

fallingLeaves.appendChild(leaf);

setTimeout(()=>{

leaf.remove();

},11000);

}



setInterval(fallingLeaf,700);



/*============================
TREE APPEAR
============================*/

setTimeout(()=>{

document.getElementById("loveTree").style.opacity="1";

document.getElementById("loveTree").style.transform="scaleY(1)";

},300);
