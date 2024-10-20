let score = 0;
const sounds = [
    { id: "sound1", soundFile: "birdSound", img: "images/sound1.png", name: "Bird chemring" },
    { id: "sound2", soundFile: "dogSound", img: "images/sound2.png", name: "Fire sound" },
    { id: "sound3", soundFile: "carSound", img: "images/sound3.png", name: "Thunder scare" },
    { id: "sound4", soundFile: "bellSound", img: "images/sound4.png", name: "Rainy Day" },
    { id: "sound5", soundFile: "windSound", img: "images/sound4.png", name: "Windy Wheather" },
    { id: "sound6", soundFile: "oceanSound", img: "images/sound4.png", name: "Ocean Sour" }
];

let currentRandomSound = null;

// Start Game Button Event Listener
document.getElementById("startGameBtn").addEventListener("click", function () {
    currentRandomSound = getRandomSound();
    document.getElementById("randomSoundIcon").src = currentRandomSound.img;
});

// Function to get random sound
function getRandomSound() {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    return sounds[randomIndex];
}

// Event Listeners for sound buttons
document.querySelectorAll(".sound-btn").forEach(button => {
    button.addEventListener("click", function () {
        const clickedSoundId = this.id;
        const clickedSound = sounds.find(sound => sound.id === clickedSoundId);
        playSound(clickedSoundId);

        showPopup(clickedSound.name);

        if (clickedSoundId === currentRandomSound.id) {
            score++;
            alert("Correct Match! 🎉 You earned 1 point.");
        } else {
            alert("Wrong Match. Try again! 😞");
        }

        updateScore();
    });
});

// Function to play sound
function playSound(soundId) {
    const soundObj = sounds.find(sound => sound.id === soundId);
    const audioElement = document.getElementById(soundObj.soundFile);
    audioElement.play();
}

// Function to update the score
function updateScore() {
    document.getElementById("score").textContent = score;
}

// Function to show the popup with the sound name
function showPopup(soundName) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");

    popupText.textContent = soundName;
    popup.classList.remove("hidden");
}

// Close the popup when the close button is clicked
document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
});
