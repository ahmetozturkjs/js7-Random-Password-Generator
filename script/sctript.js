let input=document.querySelector("input")
let generateBtn=document.querySelector("button")
let copyBtn=document.querySelector("i");
let containerwarning=document.querySelector(".containerwarning")

generateBtn.addEventListener("click",()=>{
   generatePassword()
})
copyBtn.addEventListener("click",()=>{
    copyPassword()
})
function generatePassword(){
    let chars ="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password=""
for(i=0;i<passwordLength;i++){
   
    let randomNumber=Math.random()*chars.length
    password+=chars.substring(randomNumber,randomNumber+1)
    
}
input.value=password;
   
}

function copyPassword(){
    input.select();
    input.setSelectionRange(0,999);
    navigator.clipboard.writeText(input.value)
    containerwarning.classList.remove("active")
    containerwarning.innerText=`${input.value}  password copied!`
    setTimeout(()=>{
        containerwarning.classList.add("active") 
    },2000)
    
    
}