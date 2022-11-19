
var isRunning = false;



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


function bloom(flowerNo, hasBloomed) {
    leftFlower = document.getElementsByClassName("bloomingL")[flowerNo]
    rightFlower = document.getElementsByClassName("bloomingR")[flowerNo]

    if (hasBloomed == false && isRunning == false) {
        isRunning = true;
        var counter = 0;
        timeout([1, 5], 0.1, function (i) {
            if (hasBloomed == false) {
                leftFlower.src = flowers[i];
                rightFlower.src = flowers[i];
            }
            if (counter == 3) {
                bloomTracker[flowerNo] = true;
                isRunning= false;
            }
            counter++;
        });
    };
    // console.log(bloomTracker);
}

function deBloom(flowerNo) {
        document.getElementsByClassName("bloomingL")[flowerNo].src = flowers[0];
        document.getElementsByClassName("bloomingR")[flowerNo].src = flowers[0];
        bloomTracker[flowerNo] = false;
    };


window.addEventListener("scroll", function () {
    var hey = document.getElementById("hey");
    var about = document.getElementById("about");
    var skills = document.getElementById("skills");
    var port = document.getElementById("portfolio");
    var contact = document.getElementById("contact");

    // console.log(bloomTracker);

    if (window.scrollY >= (hey.offsetTop) && window.scrollY < (hey.offsetTop + hey.offsetHeight) && bloomTracker[0] == false) {
        // console.log('bloom 1');
        bloom(0, bloomTracker[0]);
        deBloom(3);
        deBloom(1);
        deBloom(2);
        deBloom(4);
    }

    if (window.scrollY > (about.offsetTop) && window.scrollY < (about.offsetTop + about.offsetHeight)) {
        // console.log('bloom 2');
        bloom(1, bloomTracker[1]);
        deBloom(0);
        deBloom(2);
        deBloom(3);
        deBloom(4);

    }

    if (window.scrollY > (skills.offsetTop) && window.scrollY < (skills.offsetTop + skills.offsetHeight)) {
        // console.log('bloom 3');
        bloom(2, bloomTracker[2]);
        deBloom(0);
        deBloom(1);
        deBloom(3);
        deBloom(4);
    }

    if (window.scrollY > (port.offsetTop) && window.scrollY < (port.offsetTop + port.offsetHeight)) {
        // console.log('bloom 4');
        bloom(3, bloomTracker[3]);
        deBloom(0);
        deBloom(1);
        deBloom(2);
        deBloom(4);
    }

    if (window.scrollY > (port.offsetTop + port.offsetHeight) && window.scrollY < (contact.offsetTop + contact.offsetHeight)) {
        // console.log('bloom 5');
        bloom(4, bloomTracker[4]);
        deBloom(0);
        deBloom(1);
        deBloom(2);
        deBloom(3);
    }
})