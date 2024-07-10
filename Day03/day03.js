

const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const counterLabel = document.getElementById('counterLabel');

let count = 0;

decrease.onclick = function(){
    count--;
    counterLabel.textContent = count;
}

increase.onclick = function(){
    count++;
    counterLabel.textContent = count;
}

reset.onclick = function(){
    count=0;
    counterLabel.textContent = count;
}
