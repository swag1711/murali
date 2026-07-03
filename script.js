// ===============================
// ROYAL INVITATION SCRIPT
// ===============================

// Hide Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// ===============================
// COUNTDOWN
// ===============================

const targetDate = new Date("July 05, 2026 11:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) {

        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

// ===============================
// MUSIC BUTTON
// ===============================

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

        playing=true;

    }

    else{

        music.pause();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';

        playing=false;

    }

});

// ===============================
// FLOATING FLOWERS
// ===============================

const flowerContainer = document.getElementById("flowers");

const flowers = [
    "🌸",
    "🌺",
    "🌼",
    "💮",
    "🌷"
];

const MAX_FLOWERS = 8; // Maximum flowers visible

function createFlower() {

    // Don't create more than the limit
    if (flowerContainer.children.length >= MAX_FLOWERS) return;

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    // Smaller flower size
    flower.style.fontSize =
        (18 + Math.random() * 12) + "px";

    // Slower falling
    flower.style.animationDuration =
        (10 + Math.random() * 6) + "s";

    // Light opacity
    flower.style.opacity =
        (0.4 + Math.random() * 0.3);

    flowerContainer.appendChild(flower);

    flower.addEventListener("animationend", () => {
        flower.remove();
    });
}

// Create only ONE flower every 2.5 seconds
setInterval(createFlower, 2500);

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll("a").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

// ===============================
// CARD ANIMATION
// ===============================

const cards=document.querySelectorAll(
".detail-card,.venue-card,.invitation-card"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// ===============================
// PARALLAX HERO
// ===============================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=
window.pageYOffset*0.5+"px";

});

// ===============================
// GOLDEN SPARKLES
// ===============================

function sparkle(){

    const s=document.createElement("div");

    s.style.position="fixed";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    s.style.width="6px";

    s.style.height="6px";

    s.style.background="gold";

    s.style.borderRadius="50%";

    s.style.boxShadow="0 0 15px gold";

    s.style.pointerEvents="none";

    s.style.opacity="1";

    s.style.transition="1.5s";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.style.opacity="0";

        s.style.transform="scale(5)";

    },100);

    setTimeout(()=>{

        s.remove();

    },1800);

}

setInterval(sparkle,600);

console.log("✨ Royal Invitation Loaded Successfully");