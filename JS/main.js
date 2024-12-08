document.addEventListener("DOMContentLoaded", () => {
    window.onload = () => {
        // Delay for smoother transition (you can adjust this time)
        setTimeout(() => {
            const preloader = document.getElementById("preloader");
            const body = document.body;

            // Add 'loaded' class to body to trigger preloader disappearance
            body.classList.add("loaded");

            // Optionally, hide the preloader completely after the transition
            setTimeout(() => {
                preloader.style.display = "none"; // Remove from DOM after animation
            }, 1000); // Match the duration of the transition (1 second)
        }, 2500); // Preloader stays visible for 2 seconds (adjust as needed)
    };
});




AOS.init();

jQuery.noConflict();
jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});




let containerEl = document.querySelector('.project-section');

let mixer = mixitup(containerEl, {
    controls: {
        toggleLogic: 'and'
    }
});




