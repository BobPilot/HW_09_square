
var hedgehog = new animal(1, 1, 1, 1, "hedgehog");
var hare = new animal(200, 200, -1, 1, "hare");

setInterval(move,30, hedgehog);
setInterval(move,15, hare);
setInterval(check,15);


function animal(leftPoint, topPoint, a, b, id) {
    this.leftPoint = leftPoint;
    this.topPoint = topPoint;
    this.a = a;
    this.b = b;
    this.element = document.getElementById(id);
}

function move(animal) {

    if(animal.leftPoint >= 400 || animal.leftPoint <= 0){
        animal.a = -animal.a;
    }
    if(animal.topPoint >= 300 || animal.topPoint <= 0){
        animal.b = -animal.b;
    }

    animal.leftPoint += animal.a;
    animal.topPoint += animal.b;
    animal.element.style.left = animal.leftPoint + "px";
    animal.element.style.top = animal.topPoint + "px";

}

function check() {

    if( hedgehog.topPoint == hare.topPoint &&
        hedgehog.leftPoint == hare.leftPoint){
        alert("Заяц пойман!");
    }
}