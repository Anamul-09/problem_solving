
// var image =["picture/anam.jpg","picture/sea.jpg","picture/sunset.jpg"];

// var imageTag =document.querySelector("img");

// var count=0

// function next(){

//     count++;

//     if(count>=image.length){
//         count=0;
//         imageTag.src=image[count];

//     }else{

//         imageTag.src=image[count];
//     }
    



// }

// function prev(){
//     count--;

//  if(count<0){
//         count=image.length-1;
//         imageTag.src=image[count];

//     }else{

//         imageTag.src=image[count];
//     }

// }

var photos =["picture/anam.jpg","picture/sea.jpg","picture/sunset.jpg"];
var imgTag =document.querySelector("img");

var count =0;
function next(){
    count++;

    if(count>=photos.length){
        count=0;
        imgTag.src=photos[count];

    }else{
        imgTag.src=photos[count];

    }
   


}

function prev(){

    count--;

    if(count<0){
        count=photos.length-1;
        imgTag.src=photos[count];

    }else{
        imgTag.src=photos[count];

    }

}