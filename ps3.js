// var side1 = 5;
// var side2 = 7;
// var side3 = 9;
// var s = (side1+side2+side3)/2;
// var area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
// console.log(area)




// function area(side1,side2,side3){
//     var s = (side1+side2+side3)/2;
// var arev = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
// return arev
// }

// console.log(area(10,20,22));

function area (side1,side2,side3){
    var s =(side1+side2+side3)/2;
    var arev = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
    return arev;
}
var sqrt =area(5,8,9);
console.log(sqrt);