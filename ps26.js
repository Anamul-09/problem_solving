
const form =document.querySelector("form");

const name =document.querySelector(".login-form #name");
const email =document.querySelector(".login-form #email");
const password =document.querySelector(".login-form #password");


form.addEventListener("submit", function(sub){
    sub.preventDefault();

   const userInfo ={
    name     :name.value,
    email    :email.value,
    password :password.value,
   }

   console.log(userInfo);

   name.value="";
   email.value="";
   password.value="";

   
})
