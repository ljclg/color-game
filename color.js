// Generate a random RGB color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

var options = document.querySelectorAll(".option");
var pickedColor;

// Initialize the game
function init() {
    pickedColor = randomColor();
    document.getElementById("colorDisplay").textContent = pickedColor;
    var correctOption = Math.floor(Math.random() * 3);
    for (var i = 0; i < options.length; i++) {
        if (i === correctOption) {
            options[i].style.backgroundColor = pickedColor;
        } else {
            options[i].style.backgroundColor = randomColor();
        }
        options[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                document.getElementById("message").textContent = "Correct!";
                setTimeout(() => {
                    init();
                    document.getElementById("message").textContent = "";
                }, 1000);
            } else {
                this.style.backgroundColor = "#f0f0f0";
                document.getElementById("message").textContent = "Try Again";
            }
        });
    }
}

init(); // Start the game
