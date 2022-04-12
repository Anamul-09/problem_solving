
// var len = document.querySelectorAll(".mybtn").length

// for(var i=0 ; i<len; i++){

//     var btn1=document.querySelectorAll(".mybtn")[i].addEventListener("click", function(){

//         var text =this.innerHTML
//         document.querySelector("h1").innerHTML=text + " is clicked"
    
//     });
    
// }


// var len =document.querySelectorAll(".mybtn").length;

// for(var i=0 ; i<len ; i++){
//     var button =document.querySelectorAll(".mybtn")[i].addEventListener("click", function(){

//         var text =this.innerHTML;
//         document.querySelector("h1").innerHTML=text + "in clicked";
    
//     })
// }

for(var i=0 ; i<3 ; i++){
    var button =document.querySelectorAll(".mybtn")[i].addEventListener("click", function(){
        var text =this.innerHTML;
        document.querySelector("h1").innerHTML=text + "is clicked";
    });
}