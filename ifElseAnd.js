var movieRating = "r";
var age = 19;

// if("pg"==movieRating && age>=13){
//     console.log("You can watch this movie")
// } else if("r" == movieRating && age>=18){
//     console.log("You can Watch this Movie")
// }else if ("g" == movieRating){
// console.log("You Can Watch This movie")
// }else{
//     console.log("You Not Watch Movie")
// }

if ( ("pg"==movieRating && age>=13) || ("r" == movieRating && age>=18) || ("g" == movieRating) ){
    console.log("You Can Watch This movie")
}else{
    console.log("You Not Watch Movie")
}