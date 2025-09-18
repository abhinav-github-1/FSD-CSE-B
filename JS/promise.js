function register()
{
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
    console.log("register end")},2000);
    resolve();
    
    })
    
}
function sendEmail()
{
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
    console.log("email end")},3000);
    resolve();
    })
    
}
function login()
{
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
    console.log("login done")},5000);
    reject("login failed");
    // reject("login failed");
    // resolve();
    
    })
    
}
function getData()
{
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
    console.log("data send ")},3000);
    resolve();
    })
    
}
function dispalyData()
{
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
    console.log("data displayed ")},3000);
    resolve();
    })
    
}
//using Promise
register()
.then(sendEmail).
then(login).
then(getData).
then(dispalyData)
.catch((err)=>{
    console.log("error:",err)
});

//using async and await

async function f1()
{
    try{
    await register();
    await sendEmail();
    await login();
    await getData();
    await dispalyData();
    }
    catch(err)
    {
        console.error("error:",err);
    }
}
console.log("call other application");