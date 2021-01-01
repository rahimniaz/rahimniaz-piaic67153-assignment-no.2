var x = Number(prompt("any integer"));
var z = Number(prompt("one more integer"));
if(x>=0 && z>=0 && x>z){
    console.log("the larger value is"+ x)
}
else if (x>=0 && z>=0 && z>x){
    console.log("the larger value is " + z);
} 
else if (x==z) {
    console.log("both values are equal and their value is " + x )
}
else if(x<0 && z<0 && x>z) {
    console.log("the larger value is "+x)
}else if (x<0 && z<0 && x<z) {
    console.log("the larger value is "+z)
} else if (x<0 && z>=0){
    console.log("the larger value is "+z)
   
} else if(x>=0 && z<0){
    console.log("the larger value is "+x)
}
 