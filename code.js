result=document.querySelector(".result")

function updateResult(value){
result.value+= `${value}`
}
function DE(){
    result.value=result.value.toString().slice(0,-1);
}
function AC(){
    result.value='';
}
function calc(){
    result.value=eval(result.value);
}