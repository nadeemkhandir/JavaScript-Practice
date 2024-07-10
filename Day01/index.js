//  document.getElementById("p1").textContent ="Nadeem";
//  document.getElementById("p2").textContent ="31";
let username ;

document.getElementById("mybtn").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Hello ` + username;

}