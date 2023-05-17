//Callback

//1.Login logout
// 2.Searching movies
// 3.Payment
// 4.Zomato order 
// 5.downloading

//Instagram
//Promise :- Show the post --> Fulfilled,Rejected
//Time :- Pending

//STEP - 1
// let url = "https://www.upsplash.net/cat1";

// function download(url){
//     console.log(`downloading ${url}`)
// }

// function process(url){
//     console.log(`processing ${url}`)
// }

// download(url);
// process(url);

//STEP - 2
//at first it should be download then it should process but here it is opposite so it is not perfect

// let url = "https://www.upsplash.net/cat1";

// function download(url){
//     setInterval(function(){
//         console.log(`downloading ${url}`)
//     },2000)

// }

// function process(url){
//     console.log(`processing ${url}`)
// }

// download(url);
// process(url);

//sometimes one function is dependent on another function

//STEP - 3

// let url = "https://www.upsplash.net/cat1";

// function download(url,callback){

//     setTimeout(function(){
//         console.log(`downloading ${url}`)
//         callback(url); 
//     },2000)
//     // process(url);  //not working here
// }

// function process(url){
//     console.log(`processing ${url}`)
// }

// download(url,process);

//STEP - 4

// let url1 = "https://www.upsplash.net/babubhaiya";
// let url2 = "https://www.upsplash.net/raju";
// let url3 = "https://www.upsplash.net/shyam";

// function download(url,callback){

//     setTimeout(function(){
//         console.log(`downloading ${url}`)
//         callback(url); 
//     },1000)
//     // process(url);  //not working here
// }



// download(url1,function process(url){
//     console.log(`processing ${url}`)
//     download(url2,function process(url){
//         console.log(`processing ${url}`)
//         download(url3,function process(url){
//             console.log(`processing ${url}`)
            
//         });
//     });
// });

//callback
//What is the hell is this?
//Callback hell :- Interview question 1st.

//3 - url1/p - url2/p - url3/p

// This is main modern thing
//every time a constructor function return object

//let p = new Promise();//constructor function

// let p = new Promise(function(resolve,reject){
// //you can call only one resolve or reject
    
//     reject("reject");//this error thought somthing wrong don't worry about it.
// });

// console.log(p)

// let p2 = new Promise(function(res,rej){
//     res("resolve");
// });
// console.log(p2)

// WE session
// Payment system
// Buffering image ------> Success image

function bankServer(){
    //Logic
    return true; //false;
}

let payment_promise = new Promise(function(resolve,reject){
    let pin = bankServer();

    // it will resolve or reject it take time
    setTimeout(function(){
        if(pin){
            resolve ("Payment successful");
        }else{
            reject ("Try again later.");
        }
    },2000)
    
});

//Handleing the promise
//.then .catch
//async await

// //use only when resolve

let image = document.querySelector("#pay_img")

// payment_promise.then(function(res){
//     console.log(res);
//     image.src = "https://cdn.dribbble.com/users/1283437/screenshots/4486866/checkbox-dribbble-looped-landing.gif";
// })

// //use only when reject
// payment_promise.catch(function(rej){
//     console.log(rej);
//     image.src = "https://cdn.dribbble.com/users/34292/screenshots/5371308/expiredfailedpaymentvdrib.gif";
// })

//handleing function in another way async & await

async function payment(){

    try{
        let res = await payment_promise;
        console.log(res);
        image.src = "https://cdn.dribbble.com/users/1283437/screenshots/4486866/checkbox-dribbble-looped-landing.gif";
    }catch(err){
        console.log(err);
        image.src = "https://cdn.dribbble.com/users/34292/screenshots/5371308/expiredfailedpaymentvdrib.gif";
    }
    

}

payment();
// console.log(payment_promise); 