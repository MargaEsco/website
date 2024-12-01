document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
const descriptionElement = document.getElementById("description");

const textArray = [
    "Explore the world of endless possibilities.",
    "Where innovation meets creativity.",
    "Discover our features, services, and much more.",
    "We're here to make your experience unforgettable!",
    "Join us in transforming the future."
];

let currentIndex = 0;

function changeText() {
    descriptionElement.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

function startTyping() {
    setInterval(() => {
        changeText();
        descriptionElement.classList.remove("typing");
        void descriptionElement.offsetWidth; // trigger reflow to restart animation
        descriptionElement.classList.add("typing");
    }, 4000); // Change the text every 4 seconds
}

window.onload = startTyping;
