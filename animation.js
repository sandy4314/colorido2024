document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.particles span');

    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`; // Delay each letter's animation
    });

    // Set a timeout to trigger the fade-out effect and then navigate
    setTimeout(() => {
        document.body.classList.add('fade-out'); // Add the fade-out class
        setTimeout(() => {
            window.location.href = 'index.html'; // Navigate to the next webpage
        }, 1000); // Wait for the fade-out animation to complete (1 second)
    }, 3000); // Duration of the wave animation before fading out (3 seconds)
});