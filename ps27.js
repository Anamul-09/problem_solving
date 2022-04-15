                          // confirm start here

// function deleteSomthing(){
//     var conformBox =confirm("Do you want to delete this message");
//     if(conformBox){
//         console.log("true")
//     }else{
//         console.log("Not deleted")
//     }
// }

// deleteSomthing();

// function deleteSomething(){
//     var value =confirm("Dou want to delete this message");
    
//     if(value){
//         console.log("true");
//     }else{
//         console.log("Not deleted")
//     }
// }
// deleteSomething();


                            // prompt start here

 
//   function nameFunction(){

//     var p=document.createElement("p");
//     let text;

//       var name =prompt("Enter your name");
//        if(name==null || name==""){
//            text="no name found";
//        }else{
//            text=name;
//        }

//        var textNode=document.createTextNode(text);
//        p.appendChild(textNode);
//        document.body.appendChild(p);
//   } 

//   nameFunction();

function nameBox(){

    var p=document.createElement("p");
    let text;

    var name =prompt("Enter your name");
   if(name==null || name==""){
       text="No name found";
       
   }else{
   
       text=name;
   }

var textNode=document.createTextNode(text);
 p.appendChild(textNode);
 document.body.appendChild(p)

}

nameBox();
