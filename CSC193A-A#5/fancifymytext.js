function makeBigger() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontSize = "24pt";
}

function handleFancyShmancy() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "bold"; // Set font weight to bold
    textInput.style.color = "blue"; // Set text color to blue
    textInput.style.textDecoration = "underline"; // Underline the text
     
}

function handleBoringBetty() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "normal"; // Set font weight to normal
    textInput.style.color = ""; // Reset text color
    textInput.style.textDecoration = ""; // Reset text decoration
}

function makeMoo() {
    var textInput = document.getElementById("textInput");
    textInput.value = textInput.value.toUpperCase();
    
    var sentences = textInput.value.split("."); // Split text into sentences

    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" "); // Split sentence into words
        // Add "-Moo" after every space
        for (var j = 0; j < words.length; j++) {
            words[j] += "-Moo";
        }
        sentences[i] = words.join(" "); // Join words back into a sentence
    }
    textInput.value = sentences.join(". "); // Join sentences back into text
}