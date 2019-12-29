// var time=0;

// var timer=setInterval(function(){
//     time+=2;
//     console.log(time + ' seconds have passed');
//     if(time>5){
//         clearInterval(timer);
//     }
// },2000);
//---------------------------------------------
function sayHi()
{
    console.log('hi');
}
sayHi();

function callFunction(fun){
    fun();
}
var sayBye=function(){
    console.log('bye');
}
sayBye();
callFunction(sayBye); 


