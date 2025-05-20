document.getElementById("playButton").addEventListener("click", function () {
    let sound = document.getElementById("sound");
    let image = document.getElementById("image");
    sound.play();
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            let shock = new Audio("shock.mp3");
            shock.play();
        }, i * 200); 
    }
    image.style.display = "block";
    image.style.opacity = "1";
    setTimeout(() => {
        image.style.opacity = "0";
        setTimeout(() => {
            image.style.display = "none";
        }, 1000);
    }, 1000);
});
