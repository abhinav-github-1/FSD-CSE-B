function register(cb)
{
    setTimeout(()=>{
    console.log("register end")},2000);
    cb();
}
function sendEmail(cb)
{
    setTimeout(()=>{
    console.log("email end")},2000);
    cb();
}

function login(cb)
{
    setTimeout(()=>{
    console.log("login done")},2000);
    cb();
}

function getData(cb)
{
    setTimeout(()=>{
    console.log("data given")},2000);
    cb();
}

function displayData()
{
    setTimeout(()=>{
    console.log("data displayed")},2000);
    cb();
}
// register();
// sendEmail();
// login();
// getData();
// displayData();
//Callback Hell
register(function(){
    sendEmail(function(){
        login(function(){
            getData(function(){
                displayData();
            })   
    })
    })
});
console.log("call other application");