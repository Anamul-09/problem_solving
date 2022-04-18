
//  var numbers=[10,20,35,45,55,65];

//  for(var x=0; x<numbers.length; x++){
//      console.log(numbers[x])
//  }


                                // for Each



//  var numbers=[10,20,35,20,14,22,55];
//  numbers.forEach(function(x){
//  console.log(x)
//  })

                             // add value another array using for Each 


// var numbers=[10,20,30,50,15,25];
// var squireNumbers=[];
// numbers.forEach(function(x){
//     squireNumbers.push(x*x);
// });
// console.log(squireNumbers)



// var numbers =[10,20,30,40,50];
// var squireNumbers =[5,6];

// numbers.forEach(function(x){
//     squireNumbers.push(x*x);
// })

// console.log(squireNumbers)


                              // using map


// var numbers =[10,20,30,40,50];
// var squireNumbers=numbers.map(function(x){
//     return x*x;
// });

// console.log(squireNumbers)

                            // using filter


var numbers =[10,20,30,5,55,9,15];
var newNumbers =numbers.filter(function(x){
    return x>20;
});

console.log(newNumbers)