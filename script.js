document.getElementById("magicButton").addEventListener("click", function() {
    // Shake effect
    document.body.style.animation = "shake 0.5s";

    // Show love message
    let message = document.getElementById("message");
    message.classList.remove("hidden");
    setTimeout(() => message.style.opacity = 1, 100);

    // Generate floating hearts
    for (let i = 0; i < 10; i++) {
        createFloatingElement("heart", "??");
    }

    // Generate floating balloons
    for (let i = 0; i < 6; i++) {
        createFloatingElement("balloon");
    }

    // Remove shake after animation
    setTimeout(() => { document.body.style.animation = ""; }, 500);
});

// Function to create floating hearts and balloons
function createFloatingElement(className, emoji = null) {
    let element = document.createElement("div");
    element.classList.add(className);

    if (emoji) {
        element.innerText = emoji; // Heart emoji
    }

    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.bottom = "0px";

    document.body.appendChild(element);

    setTimeout(() => element.remove(), 4000);
}
