



 for(var i=0 ; i<=3 ; i++){
    document.querySelectorAll(".mybtn")[i].addEventListener("click",function(){
        var text=this.innerHTML;
      
           console.log(text);

           audioPlay(text);
           playAnimation(text); 

       
           });
       }      
       
       function audioPlay(text){
           switch (text) {
               case text:
                   var audio=new Audio("music/1.mp3");
                   audio.play();
                 
                   break;
     
               case text:
                   var audio2=new Audio("music/2.mp3");
                   audio2.play();
                 
                   break;
     
               case text:
               var audio3=new Audio("music/3.mp3");
                   audio3.play();
                 
                  break;
           }
       }


function playAnimation(text){
    var myVar =document.querySelector(".mybtn");
    myVar.classList.add("anim")

 }