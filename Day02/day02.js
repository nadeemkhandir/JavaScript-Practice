const PI = 3.14159;
let circumference;
let radius;

document.getElementById("submit").onclick = function(){

radius = document.getElementById("radius").value;
circumference = 2*PI*radius;
document.getElementById("result").textContent = circumference + "cm";


}

