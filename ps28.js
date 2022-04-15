                        //  setTimeout

// var myButton =document.querySelector(".myBtn");
// var message =document.querySelector(".message");

// myButton.addEventListener("click" ,function(){

//     message.textContent ="User registration successfully"
//     setTimeout(() => {
//         message.textContent="";
//     }, 3000);
// })



// var myButton=document.querySelector(".myBtn");
// var message =document.querySelector(".message");

// myButton.addEventListener("click",function(){
//     message.textContent="Registration successfully";

//     setTimeout(() => {
//         message.textContent="";
        
//     }, 2000);

// })


                                                            // setInterval

// var myBtn =document.querySelector(".myBtn");
// var message=document.querySelector(".message");

// myBtn.addEventListener("click", function(){
//     let count=1;
//     message.textContent=count;


//     setInterval(() => {
//         count++;
//         message.textContent=count;
        
//     }, 1000);
// })


var myBtn =document.querySelector(".myBtn");
var message= document.querySelector(".message");

myBtn.addEventListener("click", function(){
    let count=1;
    message.textContent=count;

    setInterval(() => {
        count++;
        message.textContent=count;
    }, 2000);
})
