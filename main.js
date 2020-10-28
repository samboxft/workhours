function addToList(){
    const date = new Date()
    let d = date.toUTCString();
    let inputV = document.getElementById("myInput").value;
    let input = `${inputV} ` + ` ${d}`;
    // let input = $("#myInput").val() + `${d}` ;
    const li = document.createElement("li");  
    li.innerHTML=input;  
    const ul =document.getElementById("Ulist");
    ul.appendChild(li);



const List=localStorage.getItem("list");
    if (List!=null){
    let JString=JSON.parse(List);
    JString.push(input);
    window.localStorage.setItem("list", JSON.stringify(JString));
    }
    else {
    let input =document.getElementById("myInput").value;
    let  toStore=[];
    toStore.push(input);
    window.localStorage.setItem("list", JSON.stringify(toStore));
} }


function init() {
    const List=localStorage.getItem("list");
    let JString=JSON.parse(List);
    for(let item of JString){
    const   li= createElement("li");
    li.innerHTML=getElementById("myInput").value
    }
}





