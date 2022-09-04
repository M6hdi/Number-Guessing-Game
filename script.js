let RandomNum = Math.floor(Math.random()*20);
document.querySelector("#buttonarea").addEventListener("click",clickguess);
function clickguess() {
    let userguess = Number(document.querySelector("#userguess").value);
    if(userguess < 1 || userguess >20){
        alert("enter a number between 1-20!");
    }
    let report = document.querySelector('#report');
    if(userguess > RandomNum){
        report.innerHTML = "Sorry! you lose! your guess was up!";
    }
    else if(userguess < RandomNum){
        report.innerHTML = "Sorry! you lose! your guess was low!";
    }
    else{
        report.innerHTML = "you won!";
        alert("Congradulation! You win!");
    }
}

