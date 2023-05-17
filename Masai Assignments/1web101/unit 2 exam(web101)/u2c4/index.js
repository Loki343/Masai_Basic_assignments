// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",mystdFunc);
let stdArr =JSON.parse(localStorage.getItem("admission")) || [];
function mystdFunc(){
    event.preventDefault()
    
    let stdObj={
        studentName:document.querySelector("#name").value,
        studentEmail:document.querySelector("#email").value,
        studentPhone:document.querySelector("#phone").value,
        studentGender:document.querySelector("#gender").value,
        studentCourse:document.querySelector("#course").value,
    }
    stdArr.push(stdObj)
    
    localStorage.setItem("admission",JSON.stringify(stdArr));
}