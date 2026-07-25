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
