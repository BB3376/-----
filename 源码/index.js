// console.log("Hello Node")
// console.info("Hello Node")
// console.error("Hello Node")

// setTimeout( function(){
//     console.log("Node")
// },5000)
// var i=0;

// setInterval( function(){
//     i+=1;
//     console.log(i);
// },5000)
// var time =0;
// var timer = setInterval(function(){
// time +=2;
// console.log("timer="+time);
// if(time>10)
// {
//     clearInterval(timer);
// }
// },1000)
// console.log(__dirname);
// console.log(__filename);
function sayhi(){
    console.log("hi");
    
}
var saybye = function(baisunyu){
    console.log(baisunyu+":bye");
    
}
 function callFunction(callback,baisunyu){
    callback(baisunyu)
}
// saybye();
// sayhi();
callFunction(saybye,"iwen")