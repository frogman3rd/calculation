const numGen3 = Math.floor(Math.random()*90 + 10);
const ansInput = document.getElementById("inputAns");
document.getElementById("num3").innerHTML = "( " + numGen3 + " )²";
const form = document.getElementById("form");
var answer = numGen3*numGen3;
form.addEventListener('submit',(e) => {
    if(answer !== ansInput.valueAsNumber){
        e.preventDefault();
    }
    
});
