var n = 7;
var result;

var remainder = n % 2;
if( 0 == n){
    result ="This Number is Neutral";
}else if(0 == remainder){
    result ="this number is even";
}else{
    result ="This is Number is add";
}

console.log(result)