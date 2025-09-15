function register()
{
    waitforTwoSeconds()
    console.log("register end");
}
function sendEmail()
{
    waitforTwoSeconds()
    console.log("email send");
}
function login()
{
    waitforTwoSeconds()
    console.log("login end");
}
function getData()
{
    waitforTwoSeconds()
    console.log("get data end");
}
function dispalyData()
{
    waitforTwoSeconds()
    console.log("data dispalyed");
}
function waitforTwoSeconds()
{
    waitforTwoSeconds()
    const ms=new Date().getTime()+2000;
    while(new Date().getTime()<ms);
}
register();
sendEmail();
login();
getData();
dispalyData();
// function register()
// {
//     setTimeout(()=>{
//     console.log("register end")},2000);
// }
// function sendEmail()
// {
//     setTimeout(()=>{
//     console.log("email end")},2000);
// }
// }
// function login()
// {
//     setTimeout(()=>{
//     console.log("login done")},2000);
// }
// }
// function getData()
// {
//     setTimeout(()=>{
//     console.log("data given")},2000);
// }
// }
// function dispalyData()
// {
//     setTimeout(()=>{
//     console.log("data displayed")},2000);
// }
// }
// function waitforTwoSeconds()
// {
//     waitforTwoSeconds()
//     const ms=new Date().getTime()+2000;
//     while(new Date().getTime()<ms);
// }
// register();
// sendEmail();
// login();
// getData();
// dispalyData();