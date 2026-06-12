
// Modal Script
const modal = document.getElementById("myModal");
const buttons = document.querySelectorAll(".modalBtn");
const closeBtn = document.querySelector(".close");

console.log("Modal:", modal);
console.log("Buttons:", buttons);
console.log("Close button:", closeBtn);

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Button clicked!");
        modal.style.display = "block";
    });
});

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const exitBtn = document.getElementById('exit-btn');

exitBtn.addEventListener('click', () => {
    document.getElementById('bar-scene').classList.add('hidden');
    document.getElementById('landing').classList.remove('hidden');
});

