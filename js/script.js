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


console.log('testing');

setInterval("Animate()", 90);
var x = 0;

function Animate() {
    document.getElementById("animation").src = images[x];

    x++;
    if (x == images.length) {
        x = 0;
    }
}

console.log('testing');

var flowers = new Array()
flowers= [
    "./resources/flower1.PNG",
    "./resources/flower2.PNG",
    "./resources/flower3.PNG",
    "./resources/flower4.PNG",
    "./resources/flower5.PNG",
];