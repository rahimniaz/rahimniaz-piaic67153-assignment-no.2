var x = Number(prompt("marks1"));
var y = Number(prompt("marks2"));
var z = Number(prompt("marks3"));
var a = Number(prompt("total marks"));
var b = x+y+z;
var c = (b/a)*100; 


if(c >= 80 && c <=100)
{
   alert(`A-One grade
    
    Excellent`)
}
else if(c >= 70 && c <80 ) 
{
    alert(`A-grade
    
    Good`)
}
else if(c >=60 && c<70)
{
    alert(`B-grade 
    
    you need to improve`)
}
else if (c<60 )
{
   alert(`fail
    
    sorry `)
}