var images = new Array()
images = [
    "./resources/one.PNG",
    "./resources/two.PNG",
    "./resources/one.PNG",
    "./resources/two.PNG",
    "./resources/one.PNG",
    "./resources/two.PNG",
    "./resources/one.PNG",
    "./resources/two.PNG",
    "./resources/one.PNG",
    "./resources/two.PNG",
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

// ========================================================
// FLOWER ANIMATIONS STUFF
// ========================================================
// flowers = [
//     "./resources/flower1.PNG",
//     "./resources/flower2.PNG",
//     "./resources/flower3.PNG",
//     "./resources/flower4.PNG",
//     "./resources/flower5.PNG",
// ];

// imgNo= 0























// function bloom(flowerNo, imgNo) {
//     // document.getElementsByClassName("bloomingL")[flowerNo].src = flowers[imgNo];
//     // document.getElementsByClassName("bloomingR")[flowerNo].src = flowers[imgNo];
//     // if (imgNo < flowers.length) {
//     //     imgNo++;
//     //     imgNo= 4;
//     // }
//     for (let imgNo=0; imgNo< (flowers.length - 1); imgNo++) {
//         document.getElementsByClassName("bloomingL")[flowerNo].src = flowers[imgNo];
//         document.getElementsByClassName("bloomingR")[flowerNo].src = flowers[imgNo];
//     }
//     imgNo= 4;
    
// }

// const blooming = setTimeout(bloom, 100, flowerNo, imgNo);

// function stopBlooming() {
//     clearTimeout(blooming)
// }

// function close(flowerNo, imgNo) {
//     // document.getElementsByClassName("bloomingL")[flowerNo].src = flowers[imgNo];
//     // document.getElementsByClassName("bloomingR")[flowerNo].src = flowers[imgNo];
//     // if (imgNo > 0) {
//     //     imgNo--;
//     //     imgNo=0;
//     // }
//     for (let imgNo=4; imgNo>0; imgNo--) {
//         document.getElementsByClassName("bloomingL")[flowerNo].src = flowers[imgNo];
//         document.getElementsByClassName("bloomingR")[flowerNo].src = flowers[imgNo];
//     }
//     imgNo=0;
// }



// window.addEventListener("scroll", function () {
//         var hey = document.getElementById("hey");
//         var about = document.getElementById("about");
//         var skills = document.getElementById("skills");
//         var port = document.getElementById("portfolio");
//         var contact = document.getElementById("contact");


// if (window.scrollY >= (hey.offsetTop) && < (hey.offsetTop + hey.offsetHeight))  {
//     console.log("hey flower should bloom");
//     // document.getElementsByClassName("bloomingL")[0].src = flowers[4];
//     // document.getElementsByClassName("bloomingR")[0].src = flowers[4];
//     // document.getElementsByClassName("bloomingL")[1].src = flowers[0];
//     // document.getElementsByClassName("bloomingR")[1].src = flowers[0];
//     setTimeout(bloom, 1000, 0, 0);
//     this.setTimeout(stopBlooming, 10001)
//     console.log(setTimeout(bloom, 100, 0, 0));

// }

// if (window.scrollY = (hey.offsetTop + hey.offsetHeight)) {
//     console.log("hey flower should close");
//     console.log("about flower should bloom");
//     // document.getElementsByClassName("bloomingL")[0].src = flowers[0];
//     // document.getElementsByClassName("bloomingR")[0].src = flowers[0];
//     // document.getElementsByClassName("bloomingL")[1].src = flowers[4];
//     // document.getElementsByClassName("bloomingR")[1].src = flowers[4];
//     // document.getElementsByClassName("bloomingL")[2].src = flowers[0];
//     // document.getElementsByClassName("bloomingR")[2].src = flowers[0];
//     setTimeout(close, 1000, 0, 4);
//     setTimeout(bloom, 1000, 1, 0);
//     setTimeout(close, 1000, 2, 4);

// }

// if (window.scrollY > (about.offsetTop + about.offsetHeight)) {
//     console.log("about flower should close");
//     console.log("skills flower should bloom");
//     document.getElementsByClassName("bloomingL")[1].src = flowers[0];
//     document.getElementsByClassName("bloomingR")[1].src = flowers[0];
//     document.getElementsByClassName("bloomingL")[2].src = flowers[4];
//     document.getElementsByClassName("bloomingR")[2].src = flowers[4];
//     document.getElementsByClassName("bloomingL")[3].src = flowers[0];
//     document.getElementsByClassName("bloomingR")[3].src = flowers[0];
// }

// if (window.scrollY > (skills.offsetTop + skills.offsetHeight)) {
//     console.log("skills flower should close");
//     console.log("portfolio flower should bloom");
//     document.getElementsByClassName("bloomingL")[2].src = flowers[0];
//     document.getElementsByClassName("bloomingR")[2].src = flowers[0];
//     document.getElementsByClassName("bloomingL")[3].src = flowers[4];
//     document.getElementsByClassName("bloomingR")[3].src = flowers[4];
//     document.getElementsByClassName("bloomingL")[4].src = flowers[0];
//     document.getElementsByClassName("bloomingR")[4].src = flowers[0];
// }

// if (window.scrollY > (port.offsetTop + port.offsetHeight)) {
//     console.log("portfolio flower should close");
//     console.log("contact flower should bloom");
//     document.getElementsByClassName("bloomingL")[3].src = flowers[0];
//     document.getElementsByClassName("bloomingR")[3].src = flowers[0];
//     document.getElementsByClassName("bloomingL")[4].src = flowers[4];
//     document.getElementsByClassName("bloomingR")[4].src = flowers[4];
// }

// if (window.scrollY > (contact.offsetTop + contact.offsetHeight)) {
//     console.log("contact flower should close");
//     document.getElementsByClassName("bloomingL")[4].src = flowers[0];
//     document.getElementsByClassName("bloomingR")[4].src = flowers[0];
// }
// });


