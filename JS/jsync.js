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
    console.log("dispaly data end");
}
function waitforTwoSeconds()
{
    // waitforTwoSeconds()
    const ms=new Date().getTime()+2000;
    while(new Date().getTime()<ms);
}
register();
sendEmail();
login();
getData();
dispalyData();