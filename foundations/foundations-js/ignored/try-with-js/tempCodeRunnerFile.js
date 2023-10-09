let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split("").filter(function(ele){
    return (ele >= 'a' && ele <= 'y') || (ele >= 'A' && ele <= 'Y') || ele === "_";
}).reduce(function(acc, current){
    return `${acc}${current}`;
}).slice(true).replaceAll("_", " ");

console.log(solution);