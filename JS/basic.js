// function f1(user=guest )
// {
//     console.log('Hello ${user}');
// }
// f1();
// f1(abhinav);

// function sum(a,b)
// {
//     console.log("before return ");
//     return a+b;
//     // console.log("after return");
// }

// const sum=(a,b)=>a+b;

// //IIFE Function
// (function()
// {
//     console.log("inside iife ");
// })();

// //Callback Function
// function f1(user,login)
// {
//     console.log('Hello ${user}');
//     login();

// }
// function login()
// {
//     console.log("login fuction");
// }
// function waitforTwoSeconds()
// {
//     const ms=new Date().getTime()+2000;
//     while(new Date().getTime()<ms);
// }
// function register()
// {
//     waitforTwoSeconds();
//     console.log("register end");
// }
// register();
function register(cb)
{
    setTimeout(()=>{
        console.log("register end");
        cb();
    },2000)
}
//Callback hell
// register()=>{
//     sendEmail(()=>)
// }