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




/*==================================================
SCRIPT.JS PART 3.5
TREE CROWN + MAGIC FOG + BIG STARS
==================================================*/


/*==========================
TREE CROWN
==========================*/

const crown=document.createElement("div");

crown.className="treeCrown";

document.getElementById("loveTree").appendChild(crown);



const crownHearts=[
"❤️",
"💖",
"💕",
"💗",
"💘",
"💝",
"💞"
];



for(let i=0;i<300;i++){

const leaf=document.createElement("div");

leaf.className="crownLeaf";



leaf.innerHTML=

crownHearts[
Math.floor(Math.random()*crownHearts.length)
];



const angle=

Math.random()*Math.PI*2;



const radius=

90+Math.random()*80;



const x=Math.cos(angle)*radius;

const y=Math.sin(angle)*radius;



leaf.style.left=

160+x+"px";



leaf.style.top=

140+y+"px";



leaf.style.fontSize=

(15+Math.random()*18)+"px";



leaf.style.animationDuration=

(3+Math.random()*4)+"s";



leaf.style.animationDelay=

Math.random()*3+"s";



crown.appendChild(leaf);

}



/*==========================
MAGIC FOG
==========================*/

const fog=document.createElement("div");

fog.className="magicFog";

document.body.appendChild(fog);



/*==========================
BIG STARS
==========================*/

for(let i=0;i<40;i++){

const s=document.createElement("div");



s.className="bigStar";



s.innerHTML="✦";



s.style.left=

Math.random()*100+"vw";



s.style.top=

Math.random()*45+"vh";



s.style.animationDuration=

(8+Math.random()*10)+"s";



s.style.fontSize=

(14+Math.random()*20)+"px";



document.body.appendChild(s);

}



/*==========================
TREE HEART PULSE
==========================*/

setInterval(()=>{

const hearts=

document.querySelectorAll(".crownLeaf");



hearts.forEach(h=>{

h.style.transform=

`scale(${0.9+Math.random()*0.4}) rotate(${Math.random()*20-10}deg)`;

});



},900);





/*==========================
ROMANTIC FLOATING LIGHT
==========================*/

function romanticLight(){

const light=document.createElement("div");



light.style.position="fixed";

light.style.width="8px";

light.style.height="8px";

light.style.borderRadius="50%";

light.style.background="white";

light.style.boxShadow="0 0 18px white";



light.style.left=

Math.random()*100+"vw";



light.style.bottom="-20px";



document.body.appendChild(light);



const moveX=

(Math.random()-0.5)*200;



light.animate([

{

transform:"translate(0,0)",

opacity:.1

},

{

transform:`translate(${moveX}px,-120vh)`,

opacity:1

},

{

transform:`translate(${moveX}px,-140vh)`,

opacity:0

}

],{

duration:7000+Math.random()*4000,

iterations:1

});



setTimeout(()=>{

light.remove();

},11000);

}



setInterval(romanticLight,250);





/*==================================================
SCRIPT.JS PART 3.6
AURORA + HEART PETALS + MOUSE GLOW
==================================================*/


/*==========================
CREATE AURORA
==========================*/

const aurora=document.createElement("div");

aurora.className="aurora";

document.body.appendChild(aurora);



/*==========================
HEART PETALS
==========================*/

const petals=[
"💖",
"💕",
"💗",
"💘",
"💝",
"❤️"
];



function createPetal(){

const petal=document.createElement("div");

petal.className="heartPetal";

petal.innerHTML=

petals[Math.floor(Math.random()*petals.length)];



petal.style.left=

Math.random()*100+"vw";



petal.style.top="-40px";



petal.style.fontSize=

(14+Math.random()*20)+"px";



petal.style.animationDuration=

(8+Math.random()*6)+"s";



document.body.appendChild(petal);



setTimeout(()=>{

petal.remove();

},15000);



}



setInterval(createPetal,350);





/*==========================
MOUSE HEART GLOW
==========================*/

document.addEventListener("mousemove",(e)=>{

const glow=document.createElement("div");



glow.innerHTML="✨";



glow.style.position="fixed";



glow.style.left=e.clientX+"px";



glow.style.top=e.clientY+"px";



glow.style.pointerEvents="none";



glow.style.fontSize="16px";



glow.style.transition="1.5s";



document.body.appendChild(glow);



setTimeout(()=>{

glow.style.transform=

"translateY(-70px) scale(2)";



glow.style.opacity="0";

},30);



setTimeout(()=>{

glow.remove();

},1600);



});





/*==========================
HEART WIND
==========================*/

setInterval(()=>{

document.querySelectorAll(".leaf").forEach((leaf)=>{

const x=(Math.random()-0.5)*8;

const r=(Math.random()-0.5)*12;



leaf.style.transform=

`translateX(${x}px) rotate(${r}deg)`;



});

},700);





/*==========================
BUTTON SHINE
==========================*/

setInterval(()=>{

touchButton.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.05)"

},

{

transform:"scale(1)"

}

],{

duration:1200

});

},3500);





/*==========================
ENDING HEART SHOWER
==========================*/

function endingRain(){

if(!page3.classList.contains("active")) return;



const h=document.createElement("div");



h.innerHTML="💖";



h.style.position="fixed";



h.style.left=

Math.random()*100+"vw";



h.style.top="-30px";



h.style.fontSize=

(16+Math.random()*25)+"px";



h.style.transition="8s linear";



document.body.appendChild(h);



setTimeout(()=>{

h.style.transform=

`translateY(120vh) rotate(360deg)`;



h.style.opacity="0";

},50);



setTimeout(()=>{

h.remove();

},9000);



}



setInterval(endingRain,250);





/*==================================================
SCRIPT.JS PART 3.7
HEART ORBIT + TREE MAGIC + LOVE DUST
==================================================*/


/*==============================
LOVE DUST
==============================*/

function createLoveDust(){

const dust=document.createElement("div");

dust.innerHTML="•";

dust.style.position="fixed";

dust.style.left=Math.random()*100+"vw";

dust.style.top=Math.random()*100+"vh";

dust.style.color="rgba(255,255,255,.45)";

dust.style.fontSize=(2+Math.random()*5)+"px";

dust.style.pointerEvents="none";

dust.style.transition="7s linear";

document.body.appendChild(dust);

setTimeout(()=>{

dust.style.transform=
`translateY(-120px) translateX(${(Math.random()-.5)*60}px)`;

dust.style.opacity="0";

},30);

setTimeout(()=>{

dust.remove();

},7000);

}

setInterval(createLoveDust,120);





/*==============================
TREE MAGIC GLOW
==============================*/

function treeMagic(){

const glow=document.createElement("div");

glow.style.position="absolute";

glow.style.width="10px";

glow.style.height="10px";

glow.style.borderRadius="50%";

glow.style.background="#ffd8ff";

glow.style.boxShadow="0 0 20px #ff5fc4";

glow.style.left=(100+Math.random()*220)+"px";

glow.style.top=(60+Math.random()*260)+"px";

glow.style.pointerEvents="none";

glow.style.transition="4s linear";

loveTree.appendChild(glow);

setTimeout(()=>{

glow.style.transform=
`translateY(-150px) scale(0)`;

glow.style.opacity="0";

},50);

setTimeout(()=>{

glow.remove();

},4200);

}

setInterval(treeMagic,180);





/*==============================
HEART ORBIT
==============================*/

const orbit=document.createElement("div");

orbit.style.position="fixed";

orbit.style.left="50%";

orbit.style.top="50%";

orbit.style.width="0";

orbit.style.height="0";

orbit.style.pointerEvents="none";

document.body.appendChild(orbit);



for(let i=0;i<20;i++){

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="absolute";

h.style.fontSize="18px";

orbit.appendChild(h);

}



let angle=0;

setInterval(()=>{

angle+=0.02;

const items=orbit.children;

for(let i=0;i<items.length;i++){

const a=angle+(i*18)*Math.PI/180;

const r=90;

items[i].style.left=Math.cos(a)*r+"px";

items[i].style.top=Math.sin(a)*r+"px";

}

},16);





/*==============================
LETTER GLOW
==============================*/

setInterval(()=>{

typing.animate([

{opacity:.6},

{opacity:1},

{opacity:.6}

],{

duration:2500

});

},2600);





/*==============================
PAGE 3 TITLE EFFECT
==============================*/

const endTitle=document.querySelector(".ending h1");

if(endTitle){

setInterval(()=>{

endTitle.animate([

{transform:"scale(1)"},

{transform:"scale(1.04)"},

{transform:"scale(1)"}

],{

duration:2200

});

},2500);

}
