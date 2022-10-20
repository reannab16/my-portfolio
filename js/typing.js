const typedTextSpan = document.querySelector("span.typed-text");
const cursorSpan = document.querySelector(".typed-text-cursor");

const textArray = [
    "who is looking for internships",
    "who loves art and illustration",
    "who loves to dance",
    "who loves creative, aesthetic web-design",
    "who is interested in game design",
    "who loves to animate",
    "who is always doodling",
    "who wants to travel the world"];

const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000;
let charIndex = 0;
let textArrayIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        // if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        // if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) { textArrayIndex = 0; }
        setTimeout(type, typingDelay + 1100);
    }
}


type();


// setInterval ("ChangeText()", 1000);
// let textArrayIndex = 0;


// function ChangeText() {
//     typedTextSpan.textContent = textArray[textArrayIndex];
//         textArrayIndex ++;

//     if (textArrayIndex >= textArray.length) {
//         textArrayIndex=0;
//     }
// }

