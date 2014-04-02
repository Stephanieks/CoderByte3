function text() {
    "use strict";
    var ab = "ad  b";
    return ab;
}
function aBCheck(str) {
    var text = str();
    var arrText = text.split("");
    var result = false; 
    for (var i = 0; i < arrText.length; i++) {
        if (arrText[i] === "a") {
        } if (arrText[i+3] === "b") {
            result = true;
        }
        document.getElementById("output").innerHTML = result;
    }
}
aBCheck(text);

