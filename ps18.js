

// Gussing number Game


var numOfWon =0;
var numOfLost=0;


for(var x=1 ; x<=5 ; x++){


    var gussnumber = parseInt(prompt("Enter a number from 1 to 5 :"));

var randomnumber =Math.floor(Math.random()*5)+1;

if(gussnumber===randomnumber){
    console.log("You have won");
    numOfWon++;

}else{
    console.log("You have lost.Random number was " + randomnumber)
    numOfLost++;
}

}

document.write("Total number of won ="+numOfWon + "<br>");
document.write("Total number of lost ="+numOfLost);