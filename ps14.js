function message(){
    console.log("hello world");
}
message();


(function message(){
    console.log("hello");
})();


function addition(num1,num2){
    sum=num1+num2;
    console.log(sum)
}

addition(5,8);


var expression=function addition(num1,num2){
    sum = num1+num2;
    console.log(sum);
}

expression(15,20)