// try{
    
// alert("Hi everyone");
// alert("I`m Anamul")
// alert(X)



// }catch(error){
 
//     console.log(error)

// }finally{

//     alert("Bye everyone")
// }

document.querySelector("#submitBtn").addEventListener("click", function(){
    var num =document.querySelector("#input").value;
  

    try{
        if(num<5){
            throw ("Number is too small")
        }else if(num>10){
            throw ("Number is big")
        }else{
            console.log(num)
        }

    

    }catch(error){
        console.log(error)

    }

});