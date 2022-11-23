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


///////// console.log typing animation /////////

const typingCode = [
    "console.log(myPortfolio)"
];

var typedCode = document.querySelector('.typing-code');
var smalltypedCode = document.querySelector('.small-typing-code');
let charIndex1 = 0;
let charIndex2 = 0;
var finishedType = false;
hidden = document.querySelectorAll(".hidden");
var hiddenElIndex = 0;
var typingNow = false;

function typeCode() {
    if (charIndex1 < typingCode[0].length) {
        finishedType = false;
        typedCode.textContent += typingCode[0].charAt(charIndex1);
        charIndex1++;
    }

    if (charIndex1 >= typingCode[0].length) {
        finishedType = true;
        
        timeout([0, 8], 0.2, function(i){
            hidden[i].classList.add("show");
        })
    }
};

window.addEventListener("scroll", function () {
    var skills = document.getElementById("skills");
    console.log(finishedType);

    if (scrollY >= skills.offsetTop + skills.offsetHeight) {
        this.setTimeout(typeCode(), typingDelay);
    }
});


function timeout(range, time, callback) {
    var i = range[0];
    callback(i);
    Loop();
    function Loop() {
        setTimeout(function () {
            i++;
            if (i < range[1]) {
                callback(i);
                Loop();
            }
        }, time * 1000)
    }
};


var blur = document.getElementById('blurred');
var popup = document.getElementById('popup');
var blockIndex = document.getElementsByClassName('block');
var popupHeader = document.querySelector('.big-project-name');
var popupImgIndex = document.querySelector('.popup-img');

const popupContent = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Butterfly Girl Painting",
    "UFO Painting",
    "Rose-Tinted Lenses Painting"
];

const popupImg = [
    "",
    "",
    "",
    "",
    "",
    "./project-img/butterfly-girl.png",
    "./project-img/UFO\ Painting.png",
    "./project-img/rose.jpg"
];

function toggle() {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
};

blockIndex[0].onclick = function() {
    popupHeader.textContent = popupContent[0];
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popupImgIndex.src = popupImg[0];
};

blockIndex[1].onclick = function() {
    popupHeader.textContent = popupContent[1];
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popupImgIndex.src = popupImg[1];
};

blockIndex[2].onclick = function() {
    popupHeader.textContent = popupContent[2];
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popupImgIndex.src = popupImg[2];
};

blockIndex[3].onclick = function() {
    popupHeader.textContent = popupContent[3];
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popupImgIndex.src = popupImg[3];
};

blockIndex[4].onclick = function() {
    popupHeader.textContent = popupContent[4];
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popupImgIndex.src = popupImg[4];
};

blockIndex[5].onclick = function() {
    popupHeader.textContent = popupContent[5];
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popupImgIndex.src = popupImg[5];
};

blockIndex[6].onclick = function() {
    popupHeader.textContent = popupContent[6];
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popupImgIndex.src = popupImg[6];
};

blockIndex[7].onclick = function() {
    popupHeader.textContent = popupContent[7];
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popupImgIndex.src = popupImg[7];
};


















// let options = {
//     root: null,
//     rootMargin: '0vh',
//     threshold: 1.0
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             setTimeout(typeCode(), 5000);
//         }
//     })
// });

// var typedCode = document.querySelector('.typing-code');

// typedCode.forEach((el) => observer.observe(el));

