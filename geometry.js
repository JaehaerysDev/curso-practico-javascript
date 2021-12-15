// Square
console.group("Square");
//const squareSide = 5;
//console.log("Los lados del cuadrado miden: " + squareSide);

function getSquarePerimeter(side) {
    return side * 4;
} 
//console.log("El perímetro del cuadrado es: " + squarePerimeter + "cm");//

function getSquareArea(side) {
    return side ** 2;
}  
//console.log("El área del cuadrado es: " + squareArea + "cm^2");
console.groupEnd();

// Triangle
console.group("Triangle");
//const triangleSide1 = 6;
//const triangleSide2 = 6;
//const triangleBase = 4;

//console.log
//(
//    "Los lados del triángulo miden: " 
//    + triangleSide1 + "cm, "
//    + triangleSide2 + "cm, "
//    + triangleBase + "cm"
//);

//const triangleHeight = 5.5;
//console.log("La altura del triángulo es: " + triangleHeight + "cm");

function getTrianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
} 
//console.log("El perímetro del triángulo es: " + trianglePerimeter + "cm");

function getTriangleArea(base, height) {
    return (base * height) /2;
} 

function getTriangleHeight(side1, side2, base) {
    if ((side1 == side2) && (side1 != base)) {
        return Math.sqrt(side1 ** 2 - (base ** 2/4))
    }
    
}
//console.log("El área del triángulo es: " + triangleArea + "cm^2");
console.groupEnd();

// Circle
console.group("Circle");
//const radius = 4;
//console.log("El radio del círculo es: " + radius + "cm");

function getDiameter(radius) {
    return radius * 2;
}
//console.log("El diametro del círculo es: " + diameter + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);

function getCircunference(radius) {
    const diameter = getDiameter(radius);
    return diameter * PI;
} 
//console.log("El perímetro del círculo es: " + circunference + "cm");

function getArea(radius) {
    return (radius ** 2) * PI;
}
//console.log("El área del círculo es: " + area + "cm^2");
console.groupEnd();

// HTML interaction

function userSquarePerimeter() {
    const getInput = document.getElementById("input-cuadrado");
    const getValue = getInput.value;
    const getPerimeter = getSquarePerimeter(getValue);
    alert(getPerimeter); 
}

function userSquareArea() {
    const getInput = document.getElementById("input-cuadrado");
    const getValue = getInput.value;
    const getArea = getSquareArea(getValue);
    alert(getArea);
}