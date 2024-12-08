document.addEventListener("DOMContentLoaded", () => {
    // Select all circular progress elements
    let circularProgressBars = document.querySelectorAll(".circular-progress");

    // Set a fixed total animation duration (in milliseconds)
    const totalDuration = 2000; // 2 seconds

    circularProgressBars.forEach((circularProgress) => {
        let progressValue = circularProgress.querySelector(".progress-value");
        let progressEndValue = parseInt(circularProgress.getAttribute("data-progress")); // Get value from data-progress

        // Validate the progress value
        if (isNaN(progressEndValue) || progressEndValue < 0 || progressEndValue > 100) {
            console.warn(`Invalid data-progress value: ${progressEndValue}`);
            progressValue.textContent = "0%";
            return;
        }

        // Calculate interval timing based on the total duration and progress value
        const steps = 100; // Number of animation steps
        const stepDuration = totalDuration / steps; // Time per step
        const incrementPerStep = progressEndValue / steps; // Percentage increment per step

        let progressStartValue = 0;

        // Start the animation
        let progress = setInterval(() => {
            progressStartValue += incrementPerStep;

            // Update the progress text
            progressValue.textContent = `${Math.floor(progressStartValue)}%`;

            // Set the circular progress conic gradient
            circularProgress.style.background = `conic-gradient(
                #0A66C2 ${progressStartValue * 3.6}deg,  /* Converts percentage to degrees */
                #716d6d ${progressStartValue * 3.6}deg)`;

            // Stop when the animation is complete
            if (progressStartValue >= progressEndValue) {
                clearInterval(progress);
                progressValue.textContent = `${progressEndValue}%`; // Ensure final value is precise
            }
        }, stepDuration);
    });
});
