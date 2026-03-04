const sliders = document.querySelectorAll(".movie-slider");

sliders.forEach(slider => {

const row = slider.querySelector(".movie-row");
const left = slider.querySelector(".left");
const right = slider.querySelector(".right");

const scrollAmount = 420;

right.addEventListener("click", () => {
row.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

left.addEventListener("click", () => {
row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

});