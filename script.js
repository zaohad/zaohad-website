// ===============================
// Md Zaohad - Premium Script
// ===============================

// Fade-in animation
window.addEventListener("load", () => {
    document.querySelector(".card").animate(
        [
            { opacity: 0, transform: "translateY(40px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 900,
            easing: "ease-out",
            fill: "forwards"
        }
    );
});

// Ripple click effect
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.position = "absolute";
        circle.style.borderRadius = "50%";
        circle.style.background = "rgba(255,255,255,.35)";
        circle.style.left = e.offsetX - size / 2 + "px";
        circle.style.top = e.offsetY - size / 2 + "px";
        circle.style.pointerEvents = "none";
        circle.style.transform = "scale(0)";
        circle.style.transition = "0.6s";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(circle);

        requestAnimationFrame(() => {
            circle.style.transform = "scale(3)";
            circle.style.opacity = "0";
        });

        setTimeout(() => {
            circle.remove();
        }, 600);

    });
});

// Visitor Counter
let views = Number(localStorage.getItem("zaohad_views") || 0);
views++;
localStorage.setItem("zaohad_views", views);

// Create counter
const counter = document.createElement("p");
counter.style.marginTop = "20px";
counter.style.color = "#94a3b8";
counter.style.fontSize = "14px";
counter.innerHTML = "👁 Visitor: " + views;

document.querySelector("footer").prepend(counter);

// Dynamic Year
document.querySelector("footer p").innerHTML =
"© " + new Date().getFullYear() + " Md Zaohad";

// Copy email
document.querySelector(".email").style.cursor = "pointer";

document.querySelector(".email").addEventListener("click", () => {

    navigator.clipboard.writeText("mdzaohad@gmail.com");

    alert("Email copied!");

});
