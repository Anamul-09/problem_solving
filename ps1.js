// var today = new Date();
// var houre = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// console.log(houre + ":" + minute + ":" + second)
 
// var today = new Date(); 
//    var day = today.getDay(); 
//    var daylist = ["sunday","monday","tuesday","wednessday","thursday","friday","saturday"] 
//    // var Date = today.getDate(); 
//    var month = today.getMonth(); 
//    var monthlist = ["january","february","March","april","May","june","jullay","August","September","october","November","December"]; 
//    var year = today.getFullYear(); 
//    var houre = today.getHours();
 
//   var minute = today.getMinutes(); 
//   var second = today.getSeconds(); 

//   var time = (houre>=12)? " PM ":" AM";
//  houre = (houre>=12)?houre-12:houre;
// //   console.log(houre + time);
//   if (houre===0 && time===`PM`){
//       if (minute===0 && second===0){
//           houre=12;
//           time=`Noon`
//       }
//       else{
//           houre=12;
//           time=`PM`;
//       }
//   }

//   if (houre===0 && time===`Am`){
//       if(minute===0 && second===0){
//           houre=12;
//           time=`midnight`
//       }
//       else{
//           houre=12;
//           time=`AM`;
//       }
//   }

// //   console.log("current time : "+houre+ ":" +minute + ":" + second + time )

//   console.log("today is " + daylist[day] + "-" + monthlist[month] + "-" + year +":"+ "current time : "+houre + ":" +minute + ":" + second + time)

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tusday","Wednessday","Thursday","Friday","Saturday"]
console.log("today is : " + daylist[day]);
var month = today.getMonth();
var monthlist =["January","February","March","April","May","June","Jully","August","September","October","November","December"]
var year = today.getFullYear();
var houre =today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var time = (houre>=12)? "PM ":" Am";
houre=(houre>=12)?houre-12:houre;
// console.log(houre+time)
 if(houre===0 && time===`Pm` ){
     if(minute===0 && second===0){
         houre=12;
         time=`noon`
     }

     else{
         houre=12;
         time=`PM`;
     }
 }

 if(houre===0 && time===`AM`){
     if (minute==0 && second===0){
         houre=12;
         time=`Midnight`;
     }
     else{
         houre=12;
         time=`Am`;
     }
 }
//  console.log(daylist[day] + "/" + monthlist[month]+ "/"+ year+ " current time : " + houre +":" + minute +":"+ time)

 console.log(monthlist[month] + "-" + year +":"+ "current time : "+houre + ":" +minute + ":" + second + time)