//alert('this is a test')

function askQuestion() {
    var p = prompt('what\'s your favorite food?');
    if (p != null) {
        document.getElementById('question').innerHTML = 'nice! ' + p + ' sounds yummy'
    }
}