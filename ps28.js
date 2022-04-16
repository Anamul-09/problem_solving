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


// var myBtn =document.querySelector(".myBtn");
// var message= document.querySelector(".message");

// myBtn.addEventListener("click", function(){
//     let count=1;
//     message.textContent=count;

//     setInterval(() => {
//         count++;
//         message.textContent=count;
//     }, 2000);
// })


                                     // set clock

//   var myBtn =document.querySelector(".myBtn");
//  var message =document.querySelector(".message");
//   myBtn.addEventListener("click",setClock);
//   function setClock(){
//            let date=new Date();    
//             let hours =date.getHours();     
//             let minutes =date.getMinutes();     
//             let seconds =date.getSeconds();

    //   hours=formatTime(hours);
    //   minutes=formatTime(minutes);
    //  seconds=formatTime(seconds);

    //  let time =hours +":"+ minutes + ":" + seconds;

    //  message.textContent=time;

    //  setInterval(setClock,1000)

//  };

//  function formatTime(value){

//      if(value<10){
//         value= "0" + value
//      }

//      return value
//  }



//  var myBtn =document.querySelector(".myBtn");
//  var message =document.querySelector(".message");

//  myBtn.addEventListener("click", setClock);

//  function setClock(){
//      let date=new Date();
//      let hours=date.getHours();
//      let minutes=date.getMinutes();
//      let seconds=date.getSeconds();

//      hours=formatTime(hours);
//      minutes=formatTime(minutes);
//      seconds=formatTime(seconds);

//      let time=hours +":" + minutes + ":" + seconds;
//         message.textContent=time;

//         setInterval(setClock,1000)
//  }


//  function formatTime(value){
//      if(value<10){
//          value="0"+ value
//      }
 
//      return value;
//  }


var clock=document.querySelector(".myClock");

function time(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    
   

    if(hours=="12"){
        var hr=12;
    }else if(hours=="24"){
        var hr=0;
    }else{
        var hr=hours%12;
    }

    var ampm=hours<12?"AM":"PM";
    var timed=hours + ":" + minutes + ":" + seconds + ampm;
    clock.innerText=timed;

    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    
    if(seconds<10){
        seconds="0"+seconds;

    }
}

    setInterval(time, 1000);
