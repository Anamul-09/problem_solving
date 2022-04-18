
var students =[
    {
        id :101,
        name:"Anamui Islam",
        cgpa:3.25
    },

    {
        id :102,
        name:"Rofiqul Islam",
        cgpa:2.25
    },

    {
        id :103,
        name:"Anisul Islam",
        cgpa:2.50
    },

    {
        id :104,
        name:"Sofiqul Islam",
        cgpa:3.35
    }
]

//  function studentsName(){
//      return students.filter(function(x){
//          return x.cgpa > 3

//      }).map(function(y){
//          return y.name

//      });
//  }
//  console.log(studentsName())


//  var studentsName=students.filter(function(x){
//          return x.cgpa >3
//      }).map(function(y){
//          return y.name
//      });
//  console.log(studentsName)




//  const studentsName= ()=>{
//      return students.filter((x)=> x.cgpa > 3).map((y)=> y.name)
     
//  };
//  console.log(studentsName())

var studentsName=()=> students.filter((x)=> x.cgpa>2.25).map((y)=>y.name)

console.log(studentsName())