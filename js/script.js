var images = new Array()
images = [
    "./resources/one.PNG",
    "./resources/twotwo.avif",
    "./resources/one.PNG",
    "./resources/twotwo.avif",
    "./resources/one.PNG",
    "./resources/twotwo.avif",
    "./resources/one.PNG",
    "./resources/twotwo.avif",
    "./resources/one.PNG",
    "./resources/twotwo.avif",
    "./resources/one.PNG",
    "./resources/mid.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/peace.PNG",
    "./resources/mid.PNG",
    "./resources/one.PNG",
];

setInterval("Animate()", 90);
var x = 0;

function Animate() {
    document.getElementById("animation").src = images[x];

    x++;
    if (x == images.length) {
        x = 0;
    }
}




















// const typingCode = [
//     "console.log(myPortfolio)"
// ];

// const cursor = document.querySelector('.cursor')
// var typedCode = document.querySelector('.typing-code')

// let charIndex1 = 0;
// var isRunning= false;

// function typeCode() {
//     if (charIndex1 < typingCode[0].length && isRunning == false ) {
//         isRunning = true;
//         typedCode.textContent += typingCode[0].charAt(charIndex1);
//         charIndex1 ++;
//     }

//     if (charIndex = typingCode[0].length) {
//         isRunning = false;
//     }

// };


// window.addEventListener("scroll", function() {
//     var skills = document.getElementById("skills");
//     if (this.window.scrollY < (skills.offsetTop)) {
//     isRunning = false;
//     this.document.querySelector('.typing-code').textContent = '';
//     charIndex1=0;
// };
// });


// window.addEventListener("scroll", function() {
//     var skills = document.getElementById("skills");
//     if (this.window.scrollY >= (skills.offsetTop + skills.offsetHeight)) {
//         typedCode.classList.add("active");
//     };
// });

// if (typedCode.classList.contains("active")) {
//     setTimeout(typeCode(), 1000);
// }

// if (isRunning = false) {
//     cursor.classList.add("typing");
// }

// else {
//     cursor.classList.remove("typing")
// };


