const button = document.querySelector("#btn");
const display = document.querySelector("#result");
const headSide = document.querySelector("#head");
const tailSide = document.querySelector("#tail");
const coinContainer = headSide.parentElement; // the container holding both sides

head.classList.remove("hidden");
tail.classList.add("hidden");

// Add flip animation class to the coin container
coinContainer.style.perspective = "1000px"; // for 3D effect

button.addEventListener('click', () => {
    // Add flipping animation
    coinContainer.classList.add('-rotate-360');

    // Randomly choose heads or tails
    const isHeads = Math.random() < 0.5;

    setTimeout(() => {
        if (isHeads) {
            headSide.classList.remove('hidden');
            tailSide.classList.add('hidden');
            display.textContent = "Heads!";
        } else {
            tailSide.classList.remove('hidden');
            headSide.classList.add('hidden');
            display.textContent = "Tails!";
        }

        // Remove animation class so it can trigger again next click
        coinContainer.classList.remove('-rotate-360');
    }, 600); // match animation duration
});

// flip when clicking the coin itself
coinContainer.addEventListener('click', () => button.click());