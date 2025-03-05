function askQuestion() {
    var p = prompt('hi what\'s your name?');
    if (p != null) {
        document.getElementById('thanks').innerHTML = 'thanks for visiting my site, ' + p + '!'
    }
}

function confirmLeave() {
    return confirm("are you sure you want to leave?");
}

function reveal(type) {
    var allReveals = document.querySelectorAll(".reveal");
    allReveals.forEach(function(element) {
        element.style.display = "none";
    });
    var specificElement = document.getElementById(type);
    if (specificElement) {
        specificElement.style.display = "block";
    }
}