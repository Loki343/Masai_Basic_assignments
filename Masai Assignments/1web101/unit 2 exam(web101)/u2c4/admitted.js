// All the Code for the Admitted page goes here

let accstdFromLS = JSON.parse(localStorage.getItem("admission-accepted"))

displayTable(accstdFromLS)

function displayTable(accstdFromLS){
    accstdFromLS.forEach(function (elem) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td")
        td1.innerText = elem.studentName
        td1.style.textAlign = "center"

        let td2 = document.createElement("td")
        td2.innerText = elem.studentEmail
        td2.style.textAlign = "center"

        let td3 = document.createElement("td")
        td3.innerText = elem.studentCourse
        td3.style.textAlign = "center"

        let td4 = document.createElement("td")
        td4.innerText = elem.studentGender
        td4.style.textAlign = "center"

        let td5 = document.createElement("td")
        td5.innerText = elem.studentPhone
        td5.style.textAlign = "center"

        tr.append(td1,td2,td3,td4,td5)

        document.querySelector("tbody").append(tr)
    });

}