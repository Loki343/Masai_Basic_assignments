function toAppend(){
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let products = document.querySelector("#products_data");
    products.innerHTML = null;

    data.forEach (function(element,index){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = element.image;

        let p = document.createElement("p");
        p.innerHTML = element.brand;

        let p1 = document.createElement("p");
        p1.innerHTML = element.name;

        let p2 = document.createElement("p");
        p2.innerHTML = element.price;

        let btn = document.createElement("button");
        btn.innerText= "Remove";
        btn.style.cursor="pointer";

        btn.addEventListener("click",function(){
            this.remove(index);
        });

        div.append(img,p,p1,p2,btn)
        products.append(div);
    });
}
toAppend();

function remove(index){
    let data = JSON.parse(localStorage.getItem("data")) || [];
    localStorage.setItem("data",JSON.stringify(products));
    toAppend();
}

