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









/*==================================================
SCRIPT.JS PART 3.8
BUTTERFLY + SHOOTING STAR + SKY
==================================================*/


/*==========================
BUTTERFLY
==========================*/

const butterflyIcons=["🦋","🦋","🦋","💜"];

function createButterfly(){

const b=document.createElement("div");

b.className="butterfly";

b.innerHTML=
butterflyIcons[Math.floor(Math.random()*butterflyIcons.length)];

b.style.left=Math.random()*100+"vw";

b.style.bottom="-40px";

b.style.fontSize=(18+Math.random()*16)+"px";

b.style.animationDuration=
(12+Math.random()*6)+"s";

document.body.appendChild(b);

setTimeout(()=>{

b.remove();

},19000);

}

setInterval(createButterfly,2200);



/*==========================
SHOOTING STAR
==========================*/

function shootingStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.left=(Math.random()*80)+"vw";

star.style.top=(Math.random()*25)+"vh";

star.style.width="3px";

star.style.height="3px";

star.style.background="#fff";

star.style.borderRadius="50%";

star.style.boxShadow="0 0 18px #fff";

star.style.pointerEvents="none";

document.body.appendChild(star);

star.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:"translate(-350px,220px) scale(.2)",

opacity:0

}

],{

duration:1800,

iterations:1

});

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(shootingStar,6500);



/*==========================
PURPLE SKY FLASH
==========================*/

setInterval(()=>{

document.body.animate([

{

filter:"brightness(1)"

},

{

filter:"brightness(1.05)"

},

{

filter:"brightness(1)"

}

],{

duration:3500

});

},5000);



/*==========================
TREE BREATH EFFECT
==========================*/

setInterval(()=>{

if(!tree) return;

tree.animate([

{

transform:"scaleY(1)"

},

{

transform:"scaleY(1.02)"

},

{

transform:"scaleY(1)"

}

],{

duration:3000

});

},3200);



/*==========================
LOVE PARTICLES
==========================*/

function loveParticle(){

const p=document.createElement("div");

p.innerHTML="💗";

p.style.position="fixed";

p.style.left=(45+Math.random()*10)+"vw";

p.style.top=(40+Math.random()*15)+"vh";

p.style.fontSize=(10+Math.random()*14)+"px";

p.style.pointerEvents="none";

document.body.appendChild(p);

p.animate([

{

transform:"translateY(0)",

opacity:1

},

{

transform:"translateY(-180px)",

opacity:0

}

],{

duration:4000,

iterations:1

});

setTimeout(()=>{

p.remove();

},4200);

}

setInterval(loveParticle,500);




/*==================================================
SCRIPT.JS PART 3.9
ROMANTIC AMBIENT EFFECTS
==================================================*/

/* Floating Glow Rings */

function createGlowRing(){

const ring=document.createElement("div");

ring.style.position="fixed";
ring.style.width="20px";
ring.style.height="20px";
ring.style.border="2px solid rgba(255,120,220,.4)";
ring.style.borderRadius="50%";
ring.style.pointerEvents="none";
ring.style.left=Math.random()*100+"vw";
ring.style.top=Math.random()*100+"vh";
ring.style.opacity=".8";

document.body.appendChild(ring);

ring.animate([

{
transform:"scale(.2)",
opacity:.8
},

{
transform:"scale(6)",
opacity:0
}

],{

duration:5000,
iterations:1

});

setTimeout(()=>{

ring.remove();

},5200);

}

setInterval(createGlowRing,1800);



/* Floating Romantic Emojis */

const romanticIcons=[
"💖",
"💕",
"💗",
"✨",
"🌸",
"🤍"
];

function floatingIcon(){

const icon=document.createElement("div");

icon.innerHTML=
romanticIcons[
Math.floor(Math.random()*romanticIcons.length)
];

icon.style.position="fixed";
icon.style.left=Math.random()*100+"vw";
icon.style.bottom="-30px";
icon.style.fontSize=(18+Math.random()*15)+"px";
icon.style.pointerEvents="none";

document.body.appendChild(icon);

icon.animate([

{
transform:"translateY(0)",
opacity:0
},

{
opacity:1,
offset:.2
},

{
transform:`translateY(-120vh) translateX(${(Math.random()-.5)*120}px) rotate(360deg)`,
opacity:0
}

],{

duration:9000+Math.random()*3000,
iterations:1

});

setTimeout(()=>{

icon.remove();

},13000);

}

setInterval(floatingIcon,1200);



/* Small Random Glow */

setInterval(()=>{

document.body.animate([

{
opacity:1
},

{
opacity:.98
},

{
opacity:1
}

],{

duration:1200

});

},4000);




/*==================================================
SCRIPT.JS PART 4.0
CINEMATIC CAMERA + LOVE ENERGY
==================================================*/


/*==============================
CAMERA BREATH
==============================*/

setInterval(()=>{

document.body.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.005)"
},

{
transform:"scale(1)"
}

],{

duration:6000,
easing:"ease-in-out"

});

},6500);



/*==============================
LOVE ENERGY
==============================*/

function createEnergy(){

const e=document.createElement("div");

e.innerHTML="✨";

e.style.position="fixed";

e.style.left=(48+Math.random()*4)+"vw";

e.style.bottom="15vh";

e.style.fontSize=(10+Math.random()*18)+"px";

e.style.pointerEvents="none";

e.style.filter="drop-shadow(0 0 15px #fff)";

document.body.appendChild(e);

e.animate([

{
transform:"translateY(0) scale(.3)",
opacity:0
},

{
opacity:1,
offset:.2
},

{
transform:`translate(${(Math.random()-.5)*220}px,-420px) scale(1.5)`,
opacity:0

}

],{

duration:4200,
iterations:1

});

setTimeout(()=>{

e.remove();

},4500);

}

setInterval(createEnergy,180);





/*==============================
HEART TWINKLE
==============================*/

setInterval(()=>{

document.querySelectorAll(".leaf,.crownLeaf").forEach((item)=>{

item.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.12)"
},

{
transform:"scale(1)"
}

],{

duration:1800+Math.random()*800

});

});

},2000);





/*==============================
LOVE PULSE
==============================*/

const title=document.querySelector(".mainTitle");

if(title){

setInterval(()=>{

title.animate([

{
letterSpacing:"2px"
},

{
letterSpacing:"6px"
},

{
letterSpacing:"2px"
}

],{

duration:3000

});

},3500);

}





/*==============================
BACKGROUND FLASH
==============================*/

setInterval(()=>{

bgGradient.animate([

{
opacity:1
},

{
opacity:.92
},

{
opacity:1
}

],{

duration:2500

});

},7000);





/*==============================
SMOOTH FPS LOOP
==============================*/

let last=performance.now();

function smoothLoop(now){

const delta=now-last;

last=now;

requestAnimationFrame(smoothLoop);

}

requestAnimationFrame(smoothLoop);




/*==================================================
SCRIPT.JS PART 4.1
LOVE WAVE + HEART AURA
==================================================*/


/* LOVE WAVE */

function createWave(){

const wave=document.createElement("div");

wave.style.position="fixed";

wave.style.left="50%";

wave.style.top="50%";

wave.style.width="30px";

wave.style.height="30px";

wave.style.borderRadius="50%";

wave.style.border="2px solid rgba(255,120,220,.5)";

wave.style.transform="translate(-50%,-50%)";

wave.style.pointerEvents="none";

wave.style.zIndex="999";

document.body.appendChild(wave);

wave.animate([

{

transform:"translate(-50%,-50%) scale(.3)",

opacity:.8

},

{

transform:"translate(-50%,-50%) scale(18)",

opacity:0

}

],{

duration:6000,

iterations:1

});

setTimeout(()=>{

wave.remove();

},6100);

}

setInterval(createWave,5500);





/* HEART AURA */

function auraHeart(){

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=(50+(Math.random()-.5)*12)+"vw";

h.style.top=(50+(Math.random()-.5)*12)+"vh";

h.style.fontSize=(16+Math.random()*18)+"px";

h.style.pointerEvents="none";

h.style.filter="drop-shadow(0 0 15px #ff66cc)";

document.body.appendChild(h);

h.animate([

{

transform:"scale(.3)",

opacity:0

},

{

opacity:1,

offset:.2

},

{

transform:`translate(${(Math.random()-.5)*250}px,${-250-Math.random()*180}px) rotate(360deg) scale(1.8)`,

opacity:0

}

],{

duration:5000,

iterations:1

});

setTimeout(()=>{

h.remove();

},5200);

}

setInterval(auraHeart,320);





/* LOVE SPARK */

function loveSpark(){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(8+Math.random()*12)+"px";

s.style.pointerEvents="none";

document.body.appendChild(s);

s.animate([

{

opacity:0,

transform:"scale(.3)"

},

{

opacity:1,

transform:"scale(1.4)"

},

{

opacity:0,

transform:"scale(.2)"

}

],{

duration:1800,

iterations:1

});

setTimeout(()=>{

s.remove();

},2000);

}

setInterval(loveSpark,150);





/* TREE SHAKE */

setInterval(()=>{

if(typeof tree!=="undefined"){

tree.animate([

{

transform:"scaleY(1) rotate(-1deg)"

},

{

transform:"scaleY(1.02) rotate(1deg)"

},

{

transform:"scaleY(1) rotate(-1deg)"

}

],{

duration:2600

});

}

},4200);





/* FINAL PAGE GLOW */

setInterval(()=>{

if(page3.classList.contains("active")){

document.body.animate([

{

filter:"brightness(1)"

},

{

filter:"brightness(1.08)"

},

{

filter:"brightness(1)"

}

],{

duration:2200

});

}

},2600);




/*==================================================
SCRIPT.JS PART 4.2
GALAXY HEARTS + MAGIC RAIN
==================================================*/


/*==============================
GALAXY HEARTS
==============================*/

const galaxyHearts=[
"💜",
"💖",
"💕",
"💗",
"💘",
"❤️"
];

function galaxyHeart(){

const h=document.createElement("div");

h.innerHTML=
galaxyHearts[
Math.floor(Math.random()*galaxyHearts.length)
];

h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.top="-50px";
h.style.fontSize=(12+Math.random()*24)+"px";
h.style.pointerEvents="none";
h.style.zIndex="5";

document.body.appendChild(h);

h.animate([

{

transform:"translateY(0) rotate(0deg)",

opacity:0

},

{

opacity:1,

offset:.1

},

{

transform:
`translate(${(Math.random()-.5)*180}px,120vh) rotate(${720+Math.random()*360}deg)`,

opacity:0

}

],{

duration:8000+Math.random()*5000,

iterations:1,

easing:"linear"

});

setTimeout(()=>{

h.remove();

},14000);

}

setInterval(galaxyHeart,220);





/*==============================
MAGIC RAIN
==============================*/

function magicRain(){

const p=document.createElement("div");

p.innerHTML="✦";

p.style.position="fixed";
p.style.left=Math.random()*100+"vw";
p.style.top="-10px";
p.style.fontSize=(6+Math.random()*10)+"px";
p.style.color="#ffffff";
p.style.pointerEvents="none";

document.body.appendChild(p);

p.animate([

{

transform:"translateY(0)",

opacity:0

},

{

opacity:1,

offset:.15

},

{

transform:
`translateY(${window.innerHeight+80}px)`,

opacity:0

}

],{

duration:5000+Math.random()*2500,

iterations:1,

easing:"linear"

});

setTimeout(()=>{

p.remove();

},8000);

}

setInterval(magicRain,80);





/*==============================
CENTER LOVE GLOW
==============================*/

setInterval(()=>{

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.left="50%";
glow.style.top="50%";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.background="rgba(255,120,220,.45)";
glow.style.filter="blur(10px)";
glow.style.transform="translate(-50%,-50%)";
glow.style.pointerEvents="none";

document.body.appendChild(glow);

glow.animate([

{

transform:"translate(-50%,-50%) scale(.2)",

opacity:.8

},

{

transform:"translate(-50%,-50%) scale(12)",

opacity:0

}

],{

duration:2500,

iterations:1

});

setTimeout(()=>{

glow.remove();

},2600);

},2000);





/*==============================
HEART ROTATION
==============================*/

setInterval(()=>{

document.querySelectorAll(".leaf,.crownLeaf").forEach((heart)=>{

heart.style.transform=

`rotate(${Math.random()*16-8}deg) scale(${0.9+Math.random()*0.3})`;

});

},900);





/*==============================
ENDING LOVE BURST
==============================*/

function endingBurst(){

if(!page3.classList.contains("active")) return;

for(let i=0;i<8;i++){

const b=document.createElement("div");

b.innerHTML="💖";

b.style.position="fixed";
b.style.left="50%";
b.style.top="50%";
b.style.fontSize=(16+Math.random()*18)+"px";
b.style.pointerEvents="none";

document.body.appendChild(b);

const x=(Math.random()-.5)*500;
const y=(Math.random()-.5)*500;

b.animate([

{

transform:"translate(-50%,-50%) scale(.3)",

opacity:1

},

{

transform:`translate(${x}px,${y}px) scale(1.8) rotate(360deg)`,

opacity:0

}

],{

duration:1800,

iterations:1

});

setTimeout(()=>{

b.remove();

},1900);

}

}

setInterval(endingBurst,2600);



/*==================================================
SCRIPT.JS PART 4.3
3D PARALLAX + COMET + FINAL CINEMATIC
==================================================*/


/*==============================
3D PARALLAX
==============================*/

let mouseX=0;
let mouseY=0;

document.addEventListener("mousemove",(e)=>{

mouseX=(e.clientX/window.innerWidth)-0.5;
mouseY=(e.clientY/window.innerHeight)-0.5;

const world=document.querySelector(".loveWorld");

if(world){

world.style.transform=
`perspective(1400px)
rotateY(${mouseX*6}deg)
rotateX(${-mouseY*6}deg)`;

}

});





/*==============================
COMET
==============================*/

function createComet(){

const comet=document.createElement("div");

comet.style.position="fixed";
comet.style.width="4px";
comet.style.height="4px";
comet.style.borderRadius="50%";
comet.style.background="#ffffff";
comet.style.boxShadow="0 0 25px #fff";

comet.style.left=(Math.random()*100)+"vw";
comet.style.top="-30px";

comet.style.pointerEvents="none";
comet.style.zIndex="3";

document.body.appendChild(comet);

comet.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:
`translate(${-250-Math.random()*300}px,
${window.innerHeight+200}px)`,

opacity:0

}

],{

duration:3000+Math.random()*2500,

iterations:1,

easing:"linear"

});

setTimeout(()=>{

comet.remove();

},6000);

}

setInterval(createComet,8000);





/*==============================
HEART ENGINE
==============================*/

function engineHeart(){

const heart=document.createElement("div");

heart.innerHTML="💜";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.fontSize=(10+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.filter=
"drop-shadow(0 0 10px #ff4fcf)";

document.body.appendChild(heart);

heart.animate([

{

transform:"translateY(0) scale(.5)",

opacity:0

},

{

opacity:1,

offset:.15

},

{

transform:
`translate(${(Math.random()-.5)*150}px,-120vh)
rotate(${360+Math.random()*360}deg)
scale(1.3)`,

opacity:0

}

],{

duration:9000,

iterations:1,

easing:"linear"

});

setTimeout(()=>{

heart.remove();

},9500);

}

setInterval(engineHeart,160);





/*==============================
LOVE FLASH
==============================*/

function loveFlash(){

document.body.animate([

{

filter:"brightness(1)"

},

{

filter:"brightness(1.12)"

},

{

filter:"brightness(1)"

}

],{

duration:900,

iterations:1

});

}

setInterval(loveFlash,12000);





/*==============================
ENDING CAMERA
==============================*/

function endingCamera(){

if(!page3.classList.contains("active")) return;

document.body.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.02)"

},

{

transform:"scale(1)"

}

],{

duration:3500,

iterations:1,

easing:"ease-in-out"

});

}

setInterval(endingCamera,5000);





/*==============================
PREMIUM LOOP
==============================*/

(function premiumLoop(){

requestAnimationFrame(premiumLoop);

})();



/*==================================================
SCRIPT.JS PART 4.4
ROMANTIC SKY + LOVE ENERGY V2
==================================================*/


/*==============================
PURPLE STARS
==============================*/

function createPurpleStar(){

const star=document.createElement("div");

star.innerHTML="✦";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(6+Math.random()*8)+"px";

star.style.color="#ffd9ff";

star.style.pointerEvents="none";

star.style.opacity=".8";

document.body.appendChild(star);

star.animate([

{

transform:"scale(.2)",

opacity:0

},

{

opacity:1,

offset:.3

},

{

transform:"scale(1.6)",

opacity:0

}

],{

duration:3500+Math.random()*2500,

iterations:1

});

setTimeout(()=>{

star.remove();

},6500);

}

setInterval(createPurpleStar,180);





/*==============================
LOVE ORBS
==============================*/

function createLoveOrb(){

const orb=document.createElement("div");

orb.style.position="fixed";

orb.style.width=(20+Math.random()*35)+"px";

orb.style.height=orb.style.width;

orb.style.borderRadius="50%";

orb.style.background="rgba(255,80,180,.18)";

orb.style.filter="blur(10px)";

orb.style.left=Math.random()*100+"vw";

orb.style.top=Math.random()*100+"vh";

orb.style.pointerEvents="none";

document.body.appendChild(orb);

orb.animate([

{

transform:"scale(.4)",

opacity:.2

},

{

transform:"scale(1.6)",

opacity:.7

},

{

transform:"scale(.2)",

opacity:0

}

],{

duration:7000,

iterations:1

});

setTimeout(()=>{

orb.remove();

},7200);

}

setInterval(createLoveOrb,1200);





/*==============================
CENTER HEART BEAT
==============================*/

const centerHeart=document.querySelector(".heartMiddle");

if(centerHeart){

setInterval(()=>{

centerHeart.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.25)"

},

{

transform:"scale(1)"

}

],{

duration:900

});

},1600);

}





/*==============================
LOVE MESSAGE GLOW
==============================*/

const finalTitle=document.querySelector(".finalTitle");

if(finalTitle){

setInterval(()=>{

finalTitle.animate([

{

opacity:.8,

letterSpacing:"2px"

},

{

opacity:1,

letterSpacing:"8px"

},

{

opacity:.8,

letterSpacing:"2px"

}

],{

duration:2600

});

},3000);

}





/*==============================
HEART EXPLOSION
==============================*/

function randomExplosion(){

const total=12;

for(let i=0;i<total;i++){

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=(45+Math.random()*10)+"vw";

h.style.top=(45+Math.random()*10)+"vh";

h.style.fontSize=(18+Math.random()*15)+"px";

h.style.pointerEvents="none";

document.body.appendChild(h);

const x=(Math.random()-.5)*700;

const y=(Math.random()-.5)*700;

h.animate([

{

transform:"translate(0,0) scale(.3)",

opacity:1

},

{

transform:`translate(${x}px,${y}px) rotate(720deg) scale(2)`,

opacity:0

}

],{

duration:2200,

iterations:1

});

setTimeout(()=>{

h.remove();

},2300);

}

}

setInterval(randomExplosion,9000);




/*==================================================
SCRIPT.JS PART 4.5
BACKGROUND PARTICLES + TREE AMBIENT
==================================================*/


/*==============================
BACKGROUND PARTICLES
==============================*/

function createBgParticle(){

const p=document.createElement("div");

p.className="bgParticle";

p.style.left=Math.random()*100+"vw";

p.style.bottom="-20px";

const size=3+Math.random()*8;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.animationDuration=
(10+Math.random()*8)+"s";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},19000);

}

setInterval(createBgParticle,180);




/*==============================
TREE AMBIENT
==============================*/

const ambient=document.createElement("div");

ambient.className="treeAmbient";

if(typeof loveTree!=="undefined"){

loveTree.appendChild(ambient);

}




/*==============================
RANDOM HEART GLOW
==============================*/

setInterval(()=>{

const hearts=document.querySelectorAll(".leaf,.crownLeaf");

if(!hearts.length) return;

const randomHeart=

hearts[Math.floor(Math.random()*hearts.length)];

randomHeart.animate([

{

filter:"drop-shadow(0 0 8px #ff4fcf)"

},

{

filter:"drop-shadow(0 0 30px #ffffff)"

},

{

filter:"drop-shadow(0 0 8px #ff4fcf)"

}

],{

duration:1600

});

},700);




/*==============================
SOFT CAMERA FLOAT
==============================*/

setInterval(()=>{

const world=document.querySelector(".loveWorld");

if(!world) return;

world.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-6px)"

},

{

transform:"translateY(0px)"

}

],{

duration:6000,

easing:"ease-in-out"

});

},6200);




/*==============================
ENDING MAGIC
==============================*/

function endingMagic(){

if(!page3.classList.contains("active")) return;

const e=document.createElement("div");

e.innerHTML="🤍";

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.bottom="-20px";

e.style.fontSize=(18+Math.random()*12)+"px";

e.style.pointerEvents="none";

document.body.appendChild(e);

e.animate([

{

transform:"translateY(0)",

opacity:0

},

{

opacity:1,

offset:.15

},

{

transform:"translateY(-120vh) rotate(360deg)",

opacity:0

}

],{

duration:8500,

iterations:1

});

setTimeout(()=>{

e.remove();

},9000);

}

setInterval(endingMagic,450);





/*==================================================
SCRIPT.JS PART 4.6
HEART SPIRAL + LOVE FIREWORKS
==================================================*/


/*==============================
HEART SPIRAL
==============================*/

function heartSpiral(){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left="50%";

heart.style.top="50%";

heart.style.fontSize=(14+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

document.body.appendChild(heart);

const angle=Math.random()*Math.PI*2;

const distance=250+Math.random()*250;

const x=Math.cos(angle)*distance;

const y=Math.sin(angle)*distance;

heart.animate([

{
transform:"translate(-50%,-50%) scale(.2) rotate(0deg)",
opacity:1
},

{
transform:`translate(${x}px,${y}px) scale(2) rotate(720deg)`,
opacity:0
}

],{

duration:2200+Math.random()*1200,
iterations:1,
easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},3600);

}

setInterval(heartSpiral,900);





/*==============================
LOVE FIREWORK
==============================*/

function loveFirework(x,y){

for(let i=0;i<18;i++){

const p=document.createElement("div");

p.innerHTML="✨";

p.style.position="fixed";

p.style.left=x+"px";

p.style.top=y+"px";

p.style.fontSize=(8+Math.random()*10)+"px";

p.style.pointerEvents="none";

document.body.appendChild(p);

const angle=(Math.PI*2/18)*i;

const power=100+Math.random()*80;

const tx=Math.cos(angle)*power;

const ty=Math.sin(angle)*power;

p.animate([

{

transform:"translate(0,0) scale(.5)",

opacity:1

},

{

transform:`translate(${tx}px,${ty}px) scale(1.5)`,

opacity:0

}

],{

duration:1500,
iterations:1

});

setTimeout(()=>{

p.remove();

},1700);

}

}





/*==============================
CLICK EFFECT
==============================*/

document.addEventListener("click",(e)=>{

loveFirework(e.clientX,e.clientY);

});





/*==============================
FLOATING LOVE
==============================*/

function floatingLove(){

const text=document.createElement("div");

text.innerHTML="Love 💜";

text.style.position="fixed";

text.style.left=Math.random()*100+"vw";

text.style.bottom="-30px";

text.style.fontWeight="700";

text.style.color="#ffd8ff";

text.style.pointerEvents="none";

document.body.appendChild(text);

text.animate([

{

transform:"translateY(0)",

opacity:0

},

{

opacity:1,

offset:.2

},

{

transform:"translateY(-120vh)",

opacity:0

}

],{

duration:9000,
iterations:1

});

setTimeout(()=>{

text.remove();

},9500);

}

setInterval(floatingLove,2500);
