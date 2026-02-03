const yes=document.getElementById("yes");
const no=document.getElementById("no");
const bin=document.getElementById("bin");
const cheat=document.getElementById("cheatText");
const container=document.getElementById("container");
const fade=document.getElementById("fade");
const scene=document.getElementById("envelopeScene");
const envelope=document.getElementById("envelope");
const letterContent=document.getElementById("letterContent");
const notif=document.getElementById("mailNotif");

const V=new Date("Feb 14, 2026 00:00:00").getTime();
setInterval(()=>{
  const d=V-Date.now();
  if(d<=0)return;
  const days=Math.floor(d/86400000);
  const h=Math.floor((d%86400000)/3600000);
  const m=Math.floor((d%3600000)/60000);
  const s=Math.floor((d%60000)/1000);
  document.getElementById("countdown").innerHTML=
  `⏳ ${days}d ${h}h ${m}m ${s}s`;
},1000);

// RUNAWAY NO
document.addEventListener("mousemove",e=>{
  const r=no.getBoundingClientRect();
  const dx=e.clientX-(r.left+r.width/2);
  const dy=e.clientY-(r.top+r.height/2);
  if(Math.hypot(dx,dy)<120){
    no.style.transform=`translate(${-dx}px,${-dy}px)`;
  }
});

// NO CLICK → BIN
no.onclick=()=>{
  bin.style.opacity=1;
  cheat.style.opacity=1;
  no.style.transition=".5s";
  no.style.transform="translate(300px,300px) scale(0)";
  if(navigator.vibrate) navigator.vibrate([80,40,80]);
};

// LETTER TEXT
function letterText(){
  return "What kind of pie is Heerika?\nA cutie-pie. Obviously.";
}

// YES
function openEnvelope(){
  fade.classList.add("show");
  setTimeout(()=>{
    container.style.display="none";
    scene.classList.remove("hidden");
    fade.classList.remove("show");
    letterContent.innerText=letterText();
    envelope.classList.add("letter-open");
    if(navigator.vibrate) navigator.vibrate(60);
  },700);
}

yes.onclick=openEnvelope;
notif.onclick=openEnvelope;

// TOGGLE OPEN/CLOSE
envelope.onclick=()=>{
  envelope.classList.toggle("letter-open");
  if(navigator.vibrate) navigator.vibrate(30);
};
