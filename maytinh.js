let result=document.getElementById("nhaplieu");
function Calculate(){
    console.log("???");
    let s=result.value;
    try{
        result.value=eval(s);
    }catch(ex){
        result.value="loi!!!!";
    }
}
function InputHandler(event){
    result.value+=event.target.value;
    console.log(event.target.value);
}
document.getElementById("calculate").addEventListener("click", Calculate);
let elements=document.getElementsByClassName("input")
for(const element of elements){
    element.addEventListener("click", InputHandler);
}

function deleteAll(){
    result.value=null;
}
