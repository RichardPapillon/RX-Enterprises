function displayRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById("sentenceDisplay").textContent = '"' + sentences[randomIndex] + ':';
}

displayRandomSentence();

setInterval(displayRandomSentence, 24 * 60 * 60 * 1000);

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time)

if (time == '16:57:0') {
     console.log("nigger")
} else 

for (let i = time; i=='17:1:50'; i++) {
    console.log("nigger")
}