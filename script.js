const uppCase="ABCDEFGHIJKLMNOPQRSTUVWXZY"
const lowcase="abcdefghijklmnopqrstuvwxyz"
const numbers="1234567890"
const characters="./=\_#$%^&*()!@~`|-"
const pwlength=document.getElementById("pw-length");
const allChars=uppCase+lowcase+numbers+characters;
const passwordbox=document.getElementById("pw-box");

function createPassword(){
    let pw="";
    pw+=uppCase[Math.floor(Math.random()*uppCase.length)];
    pw+=lowcase[Math.floor(Math.random()*lowcase.length)];
    pw+=numbers[Math.floor(Math.random()*numbers.length)];
    pw+=characters[Math.floor(Math.random()*characters.length)];
    while(pwlength.value>pw.length){
        pw+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordbox.value=pw;



}