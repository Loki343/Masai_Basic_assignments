//store the products array in localstorage as "data"
function product(b,n,p,i){
    this.brand = b;
    this.name = n;
    this.price= p;
    this.image=i;
}



document.querySelector("#product_form").addEventListener("submit",storingData);
function storingData(event){
    event.preventDefault();
    let form = document.querySelector("#product_form");
    let brand = form.product_brand.value;
    let name = form.product_name.value;
    let price = form.product_price.value;
    let image = form.product_image.value;

    let p1= new product(brand,name,price,image);

    let data = JSON.parse(localStorage.getItem("data")) || [];

    data.push(p1);

    localStorage.setItem("data",JSON.stringify(data));
}