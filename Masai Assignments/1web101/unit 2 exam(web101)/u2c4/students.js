// All the Code for All Students Page Goes Here

let stdArrFromLS = JSON.parse(localStorage.getItem("admission"));
document.querySelector("#filter").addEventListener("click",doFilter)

function doFilter(){
    let select = document.querySelector("#filter").value;
    let filterList = stdArrFromLS.filter(function(element){
        return element.studentCourse == select;
    })
    displayTable(filterList);
}

displayTable(stdArrFromLS)

let accstdArr=[];

function displayTable(stdArrFromLS){
    document.querySelector("tbody").innerHTML="";
    stdArrFromLS.forEach(function(element) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = element.studentName;
        td1.style.textAlign = "center"

        let td2 = document.createElement("td");
        td2.innerText = element.studentEmail;
        td2.style.textAlign = "center"

        let td3 = document.createElement("td");
        td3.innerText = element.studentCourse;
        td3.style.textAlign = "center"

        let td4 = document.createElement("td");
        td4.innerText = element.studentGender;
        td4.style.textAlign = "center"

        let td5 = document.createElement("td");
        td5.innerText = element.studentPhone;
        td5.style.textAlign = "center"

        let td6 = document.createElement("td");
        td6.innerText = "Accept"
        td6.style.textAlign = "center"
        td6.style.backgroundColor = "green"
        td6.addEventListener("click",function(){
            stdAccept(element)
        })


        let td7 = document.createElement("td");
        td7.innerText = "Reject"
        td7.style.textAlign = "center"
        td7.style.backgroundColor = "red"

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
    });
}

function stdAccept(element){
    accstdArr.push(element);
    localStorage.setItem("admission-accepted",JSON.stringify(accstdArr))
}