/* ==========================================
   ZAOHAD OFFICIAL WEBSITE V2
   Part 3A - Loader & Basic Effects
========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 600);

});

/* ==========================
   Smooth Scroll for Menu
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================
   Header Shadow on Scroll
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,10,25,.90)";
        header.style.boxShadow = "0 8px 30px rgba(0,170,255,.20)";

    } else {

        header.style.background = "rgba(10,15,30,.45)";
        header.style.boxShadow = "none";

    }

});

/* ==========================
   Reveal Animation
========================== */

const revealElements = document.querySelectorAll(
".hero, .info-box, .social-section, #contact, footer"
);

const revealOnScroll = () => {

    revealElements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* ==========================================
   Part 3B - Active Navigation & Back To Top
========================================== */

/* Active Navigation */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/* Back To Top Button */

const topButton = document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.cssText=`
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#0099ff;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 10px 30px rgba(0,170,255,.45);
transition:.35s;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* Button Hover */

topButton.addEventListener("mouseenter",()=>{

topButton.style.transform="scale(1.1)";

});

topButton.addEventListener("mouseleave",()=>{

topButton.style.transform="scale(1)";

});
/* ==========================================
   Part 3C - Scroll Progress & Hero Effects
========================================== */

/* Scroll Progress Bar */

const progressBar = document.createElement("div");
progressBar.id = "scrollProgress";

document.body.appendChild(progressBar);

progressBar.style.cssText = `
position:fixed;
top:0;
left:0;
width:0%;
height:4px;
background:linear-gradient(90deg,#00c6ff,#0072ff,#7b2cff);
z-index:99999;
transition:width .15s linear;
`;

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* Hero Parallax */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;

    const y = (window.innerHeight / 2 - e.clientY) / 35;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* Social Card Hover Glow */

const cards = document.querySelectorAll(".social-grid a");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `
radial-gradient(circle at ${x}px ${y}px,
rgba(0,170,255,.20),
rgba(255,255,255,.08))
`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,.08)";

    });

});


/* Console Signature */

console.log(
"%cMd Zaohad Official Website",
"color:#00c6ff;font-size:18px;font-weight:bold;"
);

console.log(
"%cContent Creator • Explorer",
"color:#ffffff;font-size:14px;"
);
/* ==========================================
   Part 3D - Dark Mode & Copy Email
========================================== */

/* Copy Email */

const emailBtn = document.querySelector(".mail-btn");

if (emailBtn) {

    emailBtn.addEventListener("click", function () {

        navigator.clipboard.writeText("mdzaohad@gmail.com");

        const original = this.innerHTML;

        this.innerHTML =
        '<i class="fa-solid fa-check"></i> Email Copied';

        setTimeout(() => {

            this.innerHTML = original;

        }, 2000);

    });

}

/* Dark / Light Toggle */

const modeBtn = document.createElement("button");

modeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

modeBtn.id = "modeBtn";

document.body.appendChild(modeBtn);

modeBtn.style.cssText = `
position:fixed;
bottom:100px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#111827;
color:#fff;
font-size:22px;
cursor:pointer;
z-index:9999;
box-shadow:0 10px 30px rgba(0,170,255,.35);
`;

let dark = true;

modeBtn.onclick = () => {

    if(dark){

        document.body.style.background="#f4f7fb";
        document.body.style.color="#111";

        modeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        document.body.style.background="#030712";
        document.body.style.color="#fff";

        modeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

    dark = !dark;

};
/* ==========================================
   Part 3E - Final Optimization
========================================== */

/* Save Theme */

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

document.body.classList.add("light-mode");

}

if(typeof modeBtn !== "undefined"){

modeBtn.addEventListener("click",()=>{

if(document.body.classList.contains("light-mode")){

document.body.classList.remove("light-mode");

localStorage.setItem("theme","dark");

}else{

document.body.classList.add("light-mode");

localStorage.setItem("theme","light");

}

});

}


/* Disable Right Click */

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});


/* Disable Drag */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});


/* Lazy Loading */

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});


/* Footer Year */

const year = new Date().getFullYear();

const copy = document.querySelector(".copyright");

if(copy){

copy.innerHTML = `© ${year} Md Zaohad. All Rights Reserved.`;

}


/* Welcome */

setTimeout(()=>{

console.log("Welcome to Zaohad Official Website");

},1000);
