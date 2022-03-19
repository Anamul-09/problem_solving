// const numbers = [1,2,3,4,5,6,7,8,9,2,5,7,8,];

// const duplicate = numbers.filter(function(value,index,array){
//     return array.indexOf(value) !== index
// });


// console.log(duplicate);

const number =[1,2,3,4,5,6,,7,8,9,4,7,1,9];

const duplicate =number.filter(function(value, index,array){
    return array.indexOf(value) !==index
})

console.log(duplicate);