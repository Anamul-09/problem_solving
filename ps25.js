
// const input =document.querySelectorAll("input[name=programme]");

// Array.from(input).map((programms) => {
//     programms.addEventListener("change",changeHandelar)

//     });

//     function changeHandelar(e){
//         if (e.target.checked){
//             console.log(e.target.value)
//         }
       
//     }

const input =document.querySelectorAll("input[name=programme]");
Array.from(input).map((programms) =>{
    programms.addEventListener("change", function(e){

        if(e.target.checked){
            console.log(e.target.value)
        }
    })

});


