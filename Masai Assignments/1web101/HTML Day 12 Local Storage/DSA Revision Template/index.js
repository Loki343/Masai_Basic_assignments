document.querySelector("form").addEventListener("submit",myDsa);
let queArr=JSON.parse(localStorage.getItem("queData"))||[];

window.addEventListener("load",function(){
    displayTable(queArr);
})


function myDsa(event) {
    event.preventDefault();


    let queObj={
        queTitle:document.querySelector("#title").value,
        queLink:document.querySelector("#link").value,
        queDifficulty:document.querySelector("#difficulty").value,
    };

    queArr.push(queObj);
    displayTable(queArr);

    localStorage.setItem("queData",JSON.stringify(queArr));
    
}

function displayTable(queArr) {
    document.querySelector("tbody").innerHTML = "";//deta will refreash again and again
    queArr.forEach(function(elem){

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = elem.queTitle;

        let td2 = document.createElement("td");
        td2.innerText = elem.queLink;

        let td3 = document.createElement("td");
        td3.innerText = elem.queDifficulty;

        let td4 = document.createElement("td");
        if(td3.innerText == "Easy"){
            td4.innerText = "No"
        }else{
            td4.innerText = "Yes"
        }
        let td8 = document.createElement("td");
        td8.innerText="Delete";
        td8.addEventListener("click",rowDelete);
        td8.style.backgroundColor="red";
        td8.style.color="white";
        td8.style.cursor = "pointer";

        tr.append(td1,td2,td3,td4,td8);
        document.querySelector("tbody").append(tr);
    });
}

function rowDelete() {
    event.target.parentNode.remove();
    event.target.parentNode.innerText = "";
}