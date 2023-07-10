let inputslider =document.getElementById('inputslider');
let slidervalue =document.getElementById('slidervalue');
let textbox=document.getElementById('textbox');
let lowercase=document.getElementById('lowercase');
let uppercase=document.getElementById('uppercase');
let numbers=document.getElementById('numbers');
let symbols=document.getElementById('symbols');
let Btn=document.getElementById('Btn');
let copyicon=document.getElementById('copyicon');

//showing inputslider value
slidervalue.textContent=inputslider.value;
inputslider.addEventListener('input',()=>{

    slidervalue.textContent=inputslider.value;

});

Btn.addEventListener('click',()=>{
    textbox.value = generatepassword();
})
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allnumber="0123456789";
let allsymbol="~!@#$%^&*";


//function to generate password
function generatepassword(){
    let genPassword="";
    let allChars="";

    allChars += lowercase.checked ?  lowerChars : "";
    allChars += uppercase.checked ?  upperChars : "";
    allChars += numbers.checked ? allnumber : "";
    allChars += symbols.checked ?  allsymbol : "";


    if(allChars == "" || allChars.length == 0 ){
        return genPassword;
    }

for (let i=1;i<=inputslider.value;i++){

 genPassword +=allChars.charAt(Math.floor(Math.random() * allChars.length));
   
}
return  genPassword;
}


copyicon.addEventListener('click',()=>{
    if(textbox.value != "" || textbox.value.length>=1){
    navigator.clipboard.writeText(textbox.value);
    copyicon.innerText="check";
    copyicon.title ="Password Copied";

    setTimeout(()=>{
        copyicon.innerText="content_copy";
        copyicon.title="";
       

    },2000)

    setTimeout(()=>{
    
        textbox.value="";

    },5000)

    }
});