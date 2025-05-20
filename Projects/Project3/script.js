document.getElementById("playButton").addEventListener("click", function () {
    var textElement = document.getElementById("text");
    if (textElement.classList.contains("hidden")) {
        textElement.classList.remove("hidden");
    } else {
        textElement.classList.add("hidden");
    }
});
