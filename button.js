function answer() {
    var button = document.getElementById("button").value
    if (choseButton() == button) {
        alert("Congrats!");
    } else {
        alert("Maybe next time!");
    }
}

function choseButton() {
    var number = Math.floor((Math.random() * 3) + 1);
    return number;
}
