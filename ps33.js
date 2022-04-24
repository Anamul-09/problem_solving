                                        // Array distructring


// const numbers=[2,4,6,8,9];
// const [,a,,,b]=numbers;
// console.log(a,b)

                                        // Nasted Array distructring

// const numbers=[5,6,9,7,[100,200,500,800],3,4];
// const [,,,,[,a,,b]]=numbers;
// console.log(a,b)


                                                // array method (find)

// const numbers=[5,25,35,65,41,27,];
// const firstEvenNumber=numbers.find(x=> x%2===0)

// console.log(firstEvenNumber)

                                                // array method (findIndex)

//  const numbers=[5,25,36,65,41,27,];
//  const firstEvenNumber=numbers.find(x=> x%2===0)
// const firstEvenNumberIndex=numbers.findIndex(x=> x%2===0)

//  console.log(firstEvenNumber);
// console.log(firstEvenNumberIndex)


                                // object er sate find or findIndex er babohar


// const students=[{
//     id:101,
//     name:'Anamul',
//     cgpa:2.20,

// },

// {
//     id:102,
//     name:'Jamal',
//     cgpa:2.25,

// },

// {
//     id:103,
//     name:'Kamal',
//     cgpa:2.50,

// },

// {
//     id:104,
//     name:'Rohim',
//     cgpa:2.25,

// }


// ];


// const StudentsName=students.findIndex(x => x.cgpa>=2.50);

// console.log(StudentsName)



const students=[
    {
        id:101,
        name:'Anamul',
        cgpa:3.25,
    },

    {
        id:102,
        name:'Anisul',
        cgpa:3.50,
    },

    {
        id:103,
        name:'Rohim',
        cgpa:3.20,
    },

    {
        id:104,
        name:'Korim',
        cgpa:3.88,
    },

    {
        id:104,
        name:'Janmal',
        cgpa:3.88,
    },
  
] 


const studentInfo= students.find(x => x.cgpa>3.50)
//    const[name1,name2,...name3]=students;
   console.log(studentInfo)

