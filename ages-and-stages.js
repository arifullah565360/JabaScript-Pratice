var yourAge = 1;
var result;


if(yourAge <= 1){
  result = "baby";
}else if(yourAge <= 3){
    result = "toddler";
}else if(yourAge <= 12){
    result = "kid";
}else if(yourAge <= 18){
    result = "teenager";
}else if(yourAge >= 18){
    result = "adult";
} else (
    result = "......."
)

console.log("you are a", result);
