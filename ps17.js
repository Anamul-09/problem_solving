 function highestRunScorer(playerInfo){
     

    var highestScorer =playerInfo[0][0];
    var highestscore =playerInfo[0][1];

    for(var x=1 ; x<playerInfo.length ; x++){
        if(highestscore <playerInfo[x][1]){
            highestscore=playerInfo[x][1];
            highestScorer=playerInfo[x][0]

        }
    }
    return highestScorer;

 }

 var playerInfo =[
     ["Ashraful",25],
     ["Anam",26],
     ["Rohim",128],
     ["Korim",30],
     ["Jobbar",35]
 ]

 var name =highestRunScorer(playerInfo);
 console.log(name)




// function highestRunScorer(playerInfo){

//     var highestscrorer =playerInfo[0][0];
//     var heighestscore = playerInfo[0][1]

//     for(var x=1 ;x<playerInfo.length ; x++){
//         if(heighestscore <playerInfo[x][1]){
//             heighestscore =playerInfo[x][1];
//             highestscrorer=playerInfo[x][0];
//         }
//     }
//     return highestscrorer;
// }
// var playerInfo=[
//     ["Anamul",25],
//     ["Korim",22],
//     ["Jobbar",86],
//     ["Rohim",35],
//     ["Jabed",28],
//     ["Salam",33]
// ]


// var name =highestRunScorer(playerInfo);

// console.log(name)