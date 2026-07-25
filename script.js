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



/*==================================================
SCRIPT.JS PART 3.3
PAGE CHANGE + TYPING + RESTART
==================================================*/

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");

const touchButton=document.getElementById("touchButton");
const restart=document.getElementById("restart");

const typing=document.getElementById("typingText");

const message=`I love you my forever person 💖

🫶, my daily happiness 🌞🤍,
my favorite notification 📱💕,
my emergency contact 😂❤️ &
my biggest flex 😌✨.

You're my peace ☁️🛋️,
my comfort 🥺💞 &
my loudest cheerleader 📣❤️.

Thank you for always believing in me 🌈🤍.

You're beautiful inside & out 🌸🤍,
kind ❤️💕 &
the strongest soul I've ever known 💪🥺.

Never stop smiling 😊🌻
because your smile is literally
my favorite place 🌍❤️.

Love you endlessly 💋∞🔵`;



let index=0;
let typingStarted=false;



function typeLetter(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(typeLetter,40);

}

}



touchButton.onclick=function(){



page1.classList.remove("active");



setTimeout(()=>{

page2.classList.add("active");



if(!typingStarted){

typingStarted=true;

typeLetter();

}

},900);





setTimeout(()=>{

page2.classList.remove("active");

page3.classList.add("active");

},30000);

};



restart.onclick=function(){

location.reload();

};





/*==============================
FINAL HEART EXPLOSION
==============================*/

const finalHearts=document.getElementById("finalHearts");



function createFinalHeart(){

const h=document.createElement("div");



h.innerHTML="❤️";



h.style.position="absolute";



h.style.left=Math.random()*100+"%";



h.style.bottom="-40px";



h.style.fontSize=(20+Math.random()*30)+"px";



h.style.animation=

"finalFly "+(5+Math.random()*4)+"s linear forwards";



finalHearts.appendChild(h);



setTimeout(()=>{

h.remove();

},9000);

}



setInterval(createFinalHeart,300);





/*==============================
HEART BURST
==============================*/

touchButton.addEventListener("click",()=>{

for(let i=0;i<40;i++){

let b=document.createElement("div");

b.innerHTML="💖";

b.style.position="fixed";

b.style.left="50%";

b.style.top="50%";

b.style.fontSize=(18+Math.random()*18)+"px";

b.style.pointerEvents="none";

b.style.transition="1.5s";

document.body.appendChild(b);



setTimeout(()=>{

b.style.left=(window.innerWidth/2+(Math.random()-0.5)*500)+"px";

b.style.top=(window.innerHeight/2+(Math.random()-0.5)*500)+"px";

b.style.opacity="0";

b.style.transform="scale(2) rotate(360deg)";

},20);



setTimeout(()=>{

b.remove();

},1700);

}

});


/*==================================================
SCRIPT.JS PART 3.4
FIREFLIES + SPARKLES + MOON
==================================================*/


/*==========================
CREATE MOON
==========================*/

const moon=document.createElement("div");

moon.className="moon";

document.body.appendChild(moon);



/*==========================
FIREFLIES
==========================*/

function createFirefly(){

const firefly=document.createElement("div");

firefly.className="spark";



firefly.style.left=Math.random()*100+"vw";

firefly.style.top=(40+Math.random()*60)+"vh";



const size=2+Math.random()*5;

firefly.style.width=size+"px";

firefly.style.height=size+"px";



firefly.style.animationDuration=

(3+Math.random()*5)+"s";



firefly.style.animationDelay=

Math.random()*5+"s";



document.body.appendChild(firefly);



setTimeout(()=>{

firefly.remove();

},9000);

}



setInterval(createFirefly,150);





/*==========================
MAGIC SPARKLES
==========================*/

function magicSpark(){



const s=document.createElement("div");



s.className="spark";



s.style.left=

(20+Math.random()*60)+"%";



s.style.top=

(10+Math.random()*70)+"%";



const size=

2+Math.random()*6;



s.style.width=size+"px";

s.style.height=size+"px";



s.style.animationDuration=

(2+Math.random()*4)+"s";



document.body.appendChild(s);



setTimeout(()=>{

s.remove();

},6000);



}



setInterval(magicSpark,220);





/*==========================
TREE GLOW PULSE
==========================*/

const tree=document.getElementById("loveTree");



let glow=true;



setInterval(()=>{

if(!tree) return;



if(glow){

tree.style.filter=

"drop-shadow(0 0 25px rgba(255,70,180,.8))";

}

else{

tree.style.filter=

"drop-shadow(0 0 8px rgba(255,70,180,.35))";

}



glow=!glow;



},1200);





/*==========================
FLOATING HEARTS
==========================*/

function floatingHeart(){



const h=document.createElement("div");



h.innerHTML="💖";



h.style.position="fixed";



h.style.left=Math.random()*100+"vw";



h.style.bottom="-50px";



h.style.fontSize=

(15+Math.random()*25)+"px";



h.style.transition="8s linear";



document.body.appendChild(h);



setTimeout(()=>{

h.style.transform=

`translateY(-120vh) translateX(${(Math.random()-0.5)*180}px) rotate(360deg)`;



h.style.opacity="0";



},30);



setTimeout(()=>{

h.remove();

},8500);



}



setInterval(floatingHeart,450);





/*==========================
LETTER CURSOR
==========================*/

setInterval(()=>{

typing.innerHTML=typing.innerHTML.replace("|","");

typing.innerHTML+="|";



setTimeout(()=>{

typing.innerHTML=

typing.innerHTML.replace("|","");



},500);



},1000);
