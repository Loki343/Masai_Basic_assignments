// fill in javascript code here
let head = document.querySelector("h1").innerText;
head.toUpperCase();

document.querySelector("form").addEventListener("submit",dataFunction);
function dataFunction() {
    event.preventDefault()
    let name = document.querySelector("#name").value;
    let id = document.querySelector("#employeeID").value;
    let department = document.querySelector("#department").value;
    let exp = document.querySelector("#exp").value;
    let address = document.querySelector("#email").value;
    let mbl = document.querySelector("#mbl").value;
    

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.append(name);

    let td2 = document.createElement("td");
    td2.append(id);

    let td3 = document.createElement("td");
    td3.append(department);

    let td4 = document.createElement("td");
    td4.append(exp);

    let td5 = document.createElement("td");
    td5.append(address);

    let td6 = document.createElement("td");
    td6.innerText=mbl;

    let td7 = document.createElement("td");
    if (exp>5) {
        td7.innerText="Senior";
    }else if (exp>=2 && exp<=5) {
        td7.innerText="Junior";
    }else if(exp==1 ||exp<1){
        td7.innerText="Fresher";
    }
    
    let td8 = document.createElement("td");
    td8.innerText="Delete";
    td8.addEventListener("click",rowDelete);
    td8.style.backgroundColor="red";
    td8.style.color="white";
    td8.style.cursor = "pointer";

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    
    document.querySelector("tbody").append(tr);
}

function rowDelete() {
    event.target.parentNode.remove();
    event.target.parentNode.innerText = "";
}