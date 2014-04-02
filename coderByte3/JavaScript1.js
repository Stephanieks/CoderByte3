/*function text() {
    "use strict";
    var ab = "axxxb";
    return ab;
}
function aBCheck(str) {
    var text = str();
    var arrText = text.split("");
    var result = false; 
    for (var i = 0; i < arrText.length; i++) {
        if (arrText[i] === "a" && arrText[i+4] === "b") {
           result = true;
        }
        document.getElementById("output").innerHTML = result;
    }
}
aBCheck(text);*/

//Q12 Vowel Count
/*function sentence() {
    "use strict";
    var text = "All cows eat grass";
    return text;
}

function vowelCount(str) {
    "use strict";
    var text = str().toLowerCase();
    var lilVowels = ["a","e","i","o","u"];
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < text.length; j++) {
            if (text[i] === lilVowels[j]) {
                count += 1;
            }
        }
    }
    document.getElementById("output").innerHTML = count;
}
vowelCount(sentence);*/

//Q13 Word Count
/*function sentence() {
    "use strict";
    var text = "All cows eat grass";
    return text;
}
function wordCount(str) {
    "use strict";
    var text = str();
    var textArr = text.split(" ");
    var count = 0;
    for (var i = 0; i < textArr.length; i++) {
        count += 1;
    }
    document.getElementById("output").innerHTML = count;
}
wordCount(sentence);*/


//Q14 XO
/*function sentence() {
    "use strict";
    var text = "xxxhudsifoo";
    return text;
}
function letterCount(str) {
    "use strict";
    var text = str().toLowerCase();
    var xCount = 0;
    var yCount = 0;
    var result = false;


    for (var i = 0; i < text.length; i++) {
        if (text[i] === "x") {
            xCount += 1;
        }

    }
    for (var j = 0; j < text.length; j++) {
        if (text[j] === "o") {
            yCount += 1;
        }

        if (xCount === yCount) {
            result = true;

        }
        document.getElementById("output").innerHTML = result;
    }
}
letterCount (sentence);*/

//Q15 Palindrome
/*function palidrome() {
    var text = "racecar";
    return text;
}
function checker(str) {
    var text = str().toLowerCase("");
    var backwards = text.split("").reverse().join("");
    var container = false;
    if (text === backwards) {
        container = true;
    }
    document.getElementById("output").innerHTML = container;
}
checker(palidrome);*/