/*
if hey.offsetTop < scrollY > hey.offsetTop + hey.offsetHeight
choose flower 1, make imgNo inc from 0 to 4 if less than 4



*/

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
}

// console.log('working');

let flowers = [
    "./resources/flower1.PNG",
    "./resources/flower2.PNG",
    "./resources/flower3.PNG",
    "./resources/flower4.PNG",
    "./resources/flower5.PNG",
];

let bloomTracker = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
}


// imgNo = 0;

function bloom(flowerNo, hasBloom) {
    leftFlower = document.getElementsByClassName("bloomingL")[flowerNo]
    rightFlower = document.getElementsByClassName("bloomingR")[flowerNo]

    if (hasBloom == false) {
        var counter = 0;
        timeout([1, 5], 0.15, function (i) {
            if (hasBloom == false) {
                leftFlower.src = flowers[i];
                rightFlower.src = flowers[i];
            }
            if (counter == 3) {
                bloomTracker[flowerNo] = true;
            }
            counter++;
        });
    };
    console.log(bloomTracker);
}


function debloom(flowerNo, hasDebloom) {
    leftFlower = document.getElementsByClassName("bloomingL")[flowerNo]
    rightFlower = document.getElementsByClassName("bloomingR")[flowerNo]

    if (hasDebloom == false) {
        var i = 5;
        while (i > 1) {
            setTimeout(function () {
                leftFlower.src = flowers[i];
                rightFlower.src = flowers[i];
                i--;
            }, 100)
        }
    }
}

// function bloom(flowerNo, imgNo) {
//     document.getElementsByClassName("bloomingL")[flowerNo].src = flowers[imgNo];
//     document.getElementsByClassName("bloomingR")[flowerNo].src = flowers[imgNo];
//     if (imgNo < (flowers.length - 1)) {
//         imgNo++;
//     }
//     console.log(imgNo);
//     console.log(flowers.length - 1);
//     if (imgNo = (flowers.length - 1)) {
//         imgNo = 4;
//     }
// }

// function close(flowerNo, imgNo) {
//     document.getElementsByClassName("bloomingL")[flowerNo].src = flowers[imgNo];
//     document.getElementsByClassName("bloomingR")[flowerNo].src = flowers[imgNo];
//     if (imgNo > 0) {
//         imgNo--;
//     }
// }

window.addEventListener("scroll", function () {
    var hey = document.getElementById("hey");
    var about = document.getElementById("about");
    var skills = document.getElementById("skills");
    var port = document.getElementById("portfolio");
    var contact = document.getElementById("contact");

    console.log(bloomTracker);

    if (window.scrollY >= (hey.offsetTop) && window.scrollY < (hey.offsetTop + hey.offsetHeight) && bloomTracker[0] == false) {
        console.log('bloom 1');
        bloom(0, bloomTracker[0]);
    }

    if (window.scrollY > (about.offsetTop) && window.scrollY < (about.offsetTop + about.offsetHeight)) {
        console.log('bloom 2');
        bloom(1, bloomTracker[1]);
    }

    if (window.scrollY > (skills.offsetTop) && window.scrollY < (skills.offsetTop + skills.offsetHeight)) {
        console.log('bloom 3');
        bloom(2, bloomTracker[2]);
        bloomTracker['three'] = true;
    }

    if (window.scrollY > (port.offsetTop) && window.scrollY < (port.offsetTop + port.offsetHeight)) {
        console.log('bloom 4');
        bloom(3, bloomTracker[3]);
        bloomTracker['four'] = true;
    }

    if (window.scrollY > (contact.offsetTop) && window.scrollY < (contact.offsetTop + contact.offsetHeight)) {
        console.log('bloom 5');
        bloom(4, bloomTracker[4]);
        bloomTracker['five'] = true;
    }
})